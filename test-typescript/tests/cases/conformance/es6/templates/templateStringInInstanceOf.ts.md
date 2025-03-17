__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 41,
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
            "end": 41,
            "operator": "instanceof",
            "left": {
              "type": "TemplateLiteral",
              "start": 9,
              "end": 23,
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
              "type": "Identifier",
              "start": 35,
              "end": 41,
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
