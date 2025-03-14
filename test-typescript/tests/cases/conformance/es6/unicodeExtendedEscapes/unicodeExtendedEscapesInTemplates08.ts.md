__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 132,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 140,
            "end": 150,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 140,
                "end": 150,
                "tail": true,
                "value": {
                  "cooked": "￿",
                  "raw": "\\u{FFFF}"
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
  "sourceType": "script",
  "hashbang": null
}
```
