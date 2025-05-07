__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 8,
            "end": 26,
            "operator": "/",
            "left": {
              "type": "TemplateLiteral",
              "start": 8,
              "end": 22,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8,
                  "end": 14,
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
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
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
