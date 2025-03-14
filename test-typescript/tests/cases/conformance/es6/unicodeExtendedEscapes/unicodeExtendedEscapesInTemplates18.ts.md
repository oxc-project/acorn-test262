unicodeExtendedEscapesInTemplates18.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 30,
            "end": 44,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 30,
                "end": 44,
                "tail": true,
                "value": {
                  "cooked": "ee",
                  "raw": "\\u{65}\\u{65}"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
