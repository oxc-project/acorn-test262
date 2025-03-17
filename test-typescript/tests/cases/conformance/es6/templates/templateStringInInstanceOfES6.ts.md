__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 57,
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
            "end": 57,
            "operator": "instanceof",
            "left": {
              "type": "TemplateLiteral",
              "start": 25,
              "end": 39,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "raw": "0",
                  "value": 0
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 25,
                  "end": 31,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 39,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "right": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null
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
