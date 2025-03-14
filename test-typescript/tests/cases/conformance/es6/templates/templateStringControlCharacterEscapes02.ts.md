__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 3,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 3,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 11,
            "end": 26,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 11,
                "end": 26,
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
