__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 45,
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
            "type": "TemplateLiteral",
            "start": 25,
            "end": 45,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 32,
                "end": 39,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 34,
                  "raw": "10",
                  "value": 10
                },
                "right": {
                  "type": "Literal",
                  "start": 37,
                  "end": 39,
                  "raw": "10",
                  "value": 10
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
                "start": 40,
                "end": 45,
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
