"""
Used in GitHub workflow "minify"

Replace:

<link rel="stylesheet" href="style.css"> => <style> + style.css contents + </style>
<script src="script.js"></script> => <script> + script.js contents + </script>
"""

with open("index.html") as f:
    index_content = f.read()
with open("index.html", "w") as index:
    with open("style.css", "r") as style:
        with open("script.js", "r") as script:
            index.write(index_content.replace('<link rel="stylesheet" href="style.css">', "<style>" + style.read() + "</style>").replace('<script src="script.js"></script>', "<script>" + script.read() + "</script>"))
