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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 25,
            "end": 57,
            "left": {
              "type": "TemplateLiteral",
              "start": 25,
              "end": 39,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 25,
                  "end": 31,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 39,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "name": "String",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
