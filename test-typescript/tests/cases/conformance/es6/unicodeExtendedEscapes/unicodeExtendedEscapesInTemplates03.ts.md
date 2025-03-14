unicodeExtendedEscapesInTemplates03.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 40,
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
            "end": 40,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 30,
                "end": 40,
                "tail": true,
                "value": {
                  "cooked": "\u0000",
                  "raw": "\\u{0000}"
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
