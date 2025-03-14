__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 10,
            "end": 22,
            "expressions": [
              {
                "type": "Literal",
                "start": 16,
                "end": 17,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 10,
                "end": 16,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 17,
                "end": 22,
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
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
