__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 28,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 27,
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
            "type": "BinaryExpression",
            "start": 9,
            "end": 27,
            "operator": "/",
            "left": {
              "type": "TemplateLiteral",
              "start": 9,
              "end": 23,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 16,
                  "end": 17,
                  "raw": "1",
                  "value": 1
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
                  "start": 18,
                  "end": 23,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "1",
              "value": 1
            }
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
