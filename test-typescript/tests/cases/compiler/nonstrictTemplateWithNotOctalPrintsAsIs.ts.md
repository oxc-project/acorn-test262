nonstrictTemplateWithNotOctalPrintsAsIs.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 77,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 64,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 67,
            "end": 75,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 67,
                "end": 75,
                "tail": true,
                "value": {
                  "cooked": "\\0041",
                  "raw": "\\\\0041"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
