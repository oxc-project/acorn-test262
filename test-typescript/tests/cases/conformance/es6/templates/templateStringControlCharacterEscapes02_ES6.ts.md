__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 26,
            "end": 41,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 26,
                "end": 41,
                "tail": true,
                "value": {
                  "cooked": "\u0019\u0019 19",
                  "raw": "\\x19\\u0019 19"
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
