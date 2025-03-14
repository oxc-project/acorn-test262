__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 25,
            "end": 56,
            "expressions": [
              {
                "type": "ConditionalExpression",
                "start": 32,
                "end": 50,
                "alternate": {
                  "type": "Literal",
                  "start": 47,
                  "end": 50,
                  "raw": "\" \"",
                  "value": " "
                },
                "consequent": {
                  "type": "Literal",
                  "start": 39,
                  "end": 44,
                  "raw": "false",
                  "value": false
                },
                "test": {
                  "type": "Literal",
                  "start": 32,
                  "end": 36,
                  "raw": "true",
                  "value": true
                }
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
                "start": 51,
                "end": 56,
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
