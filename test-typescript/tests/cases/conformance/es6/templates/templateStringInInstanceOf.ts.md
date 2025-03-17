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
            "end": 41,
            "left": {
              "type": "TemplateLiteral",
              "start": 9,
              "end": 23,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 16,
                  "end": 17,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9,
                  "end": 15,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 18,
                  "end": 23,
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
              "start": 35,
              "end": 41,
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
