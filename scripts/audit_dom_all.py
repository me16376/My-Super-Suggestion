import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

files = [
    'sub_assistant_maintenance_engineer_super_suggestion.html',
    'junior_instructor_computer_super_suggestion.html',
    'petrobangla_sub_assistant_engineer_super_suggestion.html',
    'dss_karigori_proshikhok_computer_super_suggestion.html',
    'dss_data_entry_operator_super_suggestion.html'
]

for fname in files:
    with open(fname, 'r', encoding='utf-8') as f:
        html = f.read()

    # extract all ids in HTML tags
    tag_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html))
    
    # extract getElementById calls
    js_ids = set(re.findall(r'getElementById\s*\(\s*["\']([^"\']+)["\']\s*\)', html))
    
    missing_ids = [jid for jid in sorted(js_ids) if jid not in tag_ids]
    
    # extract onclick handler calls
    onclick_matches = re.findall(r'onclick=["\']([a-zA-Z0-9_]+)\s*\(', html)
    # extract function definitions in scripts
    func_defs = set(re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', html))
    func_vars = set(re.findall(r'(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=\s*(?:function|\([^)]*\)\s*=>)', html))
    all_funcs = func_defs.union(func_vars)

    # Built-in or window functions
    builtins = {'window', 'alert', 'confirm', 'prompt', 'print', 'reset'}
    
    missing_funcs = [fn for fn in set(onclick_matches) if fn not in all_funcs and fn not in builtins]

    print(f"=== {fname} ===")
    print(f"  Tag IDs: {len(tag_ids)} | getElementById: {len(js_ids)} | Functions: {len(all_funcs)}")
    if missing_ids:
        print(f"  🚨 MISSING IDs: {missing_ids}")
    else:
        print("  ✅ All getElementById IDs match!")
    if missing_funcs:
        print(f"  🚨 MISSING onclick functions: {missing_funcs}")
    else:
        print("  ✅ All onclick functions exist!")
