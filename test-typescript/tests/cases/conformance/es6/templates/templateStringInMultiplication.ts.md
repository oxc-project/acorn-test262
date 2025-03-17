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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 9,
            "end": 27,
            "left": {
              "type": "Literal",
              "start": 9,
              "end": 10,
              "value": 1,
              "raw": "1"
            },
            "operator": "*",
            "right": {
              "type": "TemplateLiteral",
              "start": 13,
              "end": 27,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 20,
                  "end": 21,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 13,
                  "end": 19,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 22,
                  "end": 27,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
