import re
import json

def parse_js_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove comments (carefully)
    content = re.sub(r'^\s*//.*', '', content, flags=re.MULTILINE)
    content = re.sub(r'export default', '', content)
    
    # Normalize whitespace
    content = re.sub(r'\s+', ' ', content)
    
    # Find the main array
    start_idx = content.find('[')
    end_idx = content.rfind(']')
    
    if start_idx == -1 or end_idx == -1:
        print("Could not find array boundaries")
        return []

    array_content = content[start_idx+1:end_idx]
    
    questions = []
    
    brace_count = 0
    current_obj = ''
    
    for char in array_content:
        current_obj += char
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
        
        if brace_count == 0:
            stripped = current_obj.strip()
            if stripped == '':
                continue
            if stripped == ',':
                current_obj = ''
                continue
                
            if stripped.startswith('{') and stripped.endswith('}'):
                process_object(stripped, questions)
                current_obj = ''
            elif stripped.startswith('{') and stripped.endswith('},'):
                process_object(stripped[:-1], questions)
                current_obj = ''
    
    return questions

def process_object(obj_str, questions):
    q_obj = {}
    
    # Extract Question Text
    # We need to be careful not to match text inside responses
    # Strategy: Extract responses block first, remove it, then find question text
    
    responses_match = re.search(r'responses:\s*\[(.*?)\]', obj_str, re.DOTALL)
    if responses_match:
        responses_content = responses_match.group(1)
        # Remove responses from obj_str to avoid confusion
        obj_without_responses = obj_str.replace(responses_match.group(0), '')
        
        # Extract Question Text
        text_match = re.search(r'text:\s*"(.*?)"', obj_without_responses)
        if text_match:
            q_obj['question'] = text_match.group(1)
        
        # Extract Image
        img_match = re.search(r'img:\s*"(.*?)"', obj_without_responses)
        if img_match:
            q_obj['image'] = img_match.group(1)
            
        # Parse Responses
        options = []
        correct_idx = -1
        
        # Split responses by `},` or `}`
        parts = responses_content.split('}')
        opt_idx = 0
        for part in parts:
            if '{' in part:
                r_text_match = re.search(r'text:\s*"(.*?)"', part)
                if r_text_match:
                    options.append(r_text_match.group(1))
                    if 'correct: true' in part:
                        correct_idx = opt_idx
                    opt_idx += 1
        
        q_obj['options'] = options
        q_obj['correct'] = correct_idx
        
        questions.append(q_obj)

if __name__ == '__main__':
    questions = parse_js_file('temp_source.js')
    with open('questions.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    print(f"Successfully converted {len(questions)} questions to questions.json")
