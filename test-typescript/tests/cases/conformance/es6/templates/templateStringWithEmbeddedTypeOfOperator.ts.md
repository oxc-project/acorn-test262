__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 34,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 33,
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
            "start": 9,
            "end": 33,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 16,
                "end": 27,
                "argument": {
                  "type": "Literal",
                  "start": 23,
                  "end": 27,
                  "raw": "\"hi\"",
                  "value": "hi"
                },
                "operator": "typeof",
                "prefix": true
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 28,
                "end": 33,
                "tail": true,
                "value": {
                  "cooked": "def",
                  "raw": "def"
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
