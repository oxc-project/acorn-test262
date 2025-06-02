__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
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
            "end": 40,
            "left": {
              "type": "TemplateLiteral",
              "start": 8,
              "end": 22,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8,
                  "end": 14,
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 17,
                  "end": 22,
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "value": 0,
                  "raw": "0"
                }
              ]
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 34,
              "end": 40,
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
