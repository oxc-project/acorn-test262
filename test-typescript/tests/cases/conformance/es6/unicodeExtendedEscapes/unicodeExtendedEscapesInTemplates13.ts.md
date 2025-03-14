__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 41,
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
            "end": 41,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 30,
                "end": 41,
                "tail": true,
                "value": {
                  "cooked": "󝷝",
                  "raw": "\\u{DDDDD}"
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
