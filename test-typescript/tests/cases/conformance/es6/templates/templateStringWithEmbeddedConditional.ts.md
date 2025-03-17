__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 40,
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
            "type": "TemplateLiteral",
            "start": 9,
            "end": 40,
            "expressions": [
              {
                "type": "ConditionalExpression",
                "start": 16,
                "end": 34,
                "alternate": {
                  "type": "Literal",
                  "start": 31,
                  "end": 34,
                  "raw": "\" \"",
                  "value": " "
                },
                "consequent": {
                  "type": "Literal",
                  "start": 23,
                  "end": 28,
                  "raw": "false",
                  "value": false
                },
                "test": {
                  "type": "Literal",
                  "start": 16,
                  "end": 20,
                  "raw": "true",
                  "value": true
                }
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
                "start": 35,
                "end": 40,
                "tail": true,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              }
            ]
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
