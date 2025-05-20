__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
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
            "type": "TemplateLiteral",
            "start": 8,
            "end": 39,
            "expressions": [
              {
                "type": "ConditionalExpression",
                "start": 15,
                "end": 33,
                "alternate": {
                  "type": "Literal",
                  "start": 30,
                  "end": 33,
                  "raw": "\" \"",
                  "value": " "
                },
                "consequent": {
                  "type": "Literal",
                  "start": 22,
                  "end": 27,
                  "raw": "false",
                  "value": false
                },
                "test": {
                  "type": "Literal",
                  "start": 15,
                  "end": 19,
                  "raw": "true",
                  "value": true
                }
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
                "start": 34,
                "end": 39,
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
