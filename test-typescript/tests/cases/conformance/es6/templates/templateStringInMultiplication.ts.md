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
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 9,
            "end": 27,
            "operator": "*",
            "left": {
              "type": "Literal",
              "start": 9,
              "end": 10,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 13,
              "end": 27,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 20,
                  "end": 21,
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 13,
                  "end": 19,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 22,
                  "end": 27,
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
