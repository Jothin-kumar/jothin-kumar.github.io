"""
Rename style.css to style.min.css in all HTML files in the current directory. Used in minify GitHub workflow.
"""
from glob import glob
for filename in glob('*.html'):
    with open(filename, 'r') as f:
        data = f.read()
    with open(filename, 'w') as f:
        f.write(data.replace('style.css', 'style.min.css'))