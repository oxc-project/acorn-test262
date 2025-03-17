__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 25,
            "end": 43,
            "operator": "%",
            "left": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 29,
              "end": 43,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 29,
                  "end": 35,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 38,
                  "end": 43,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
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
