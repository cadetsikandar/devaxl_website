"""
Read the workflow result (JSON with fileContent), unescape any HTML entities
the extractor agents introduced (e.g. &amp; -> &), and write web/src/lib/work.ts.
"""
import json
import html
import os

OUTPUT = r"C:\Users\Admin\AppData\Local\Temp\claude\C--Users-Admin-Downloads-DevAXL-Design-System\452f397c-3bd8-4955-b0c8-adf0f109c61e\tasks\wfdb2dqdz.output"
DEST = r"C:\Users\Admin\Downloads\DevAXL Design System\web\src\lib\work.ts"

raw = open(OUTPUT, encoding="utf-8").read()
wrapper = json.loads(raw)
obj = wrapper.get("result", wrapper)
content = obj["fileContent"]

print("missing:", obj.get("missing"))
print("count:", obj.get("count"))
print("entities before -> &amp;:", content.count("&amp;"),
      "&#39;:", content.count("&#39;"), "&quot;:", content.count("&quot;"))

content = html.unescape(content)

print("entities after  -> &amp;:", content.count("&amp;"),
      "&#39;:", content.count("&#39;"))

# sanity: banned phrases
for bad in ("IT solutions provider", "growing businesses", "IT ecosystem", "business process"):
    n = content.lower().count(bad.lower())
    if n:
        print("WARNING banned phrase present:", bad, n)

open(DEST, "w", encoding="utf-8", newline="\n").write(content)
print("WROTE", DEST, len(content), "chars")
