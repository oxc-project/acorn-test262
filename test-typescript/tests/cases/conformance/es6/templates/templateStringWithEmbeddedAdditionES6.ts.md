__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
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
            "end": 28,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 15,
                "end": 22,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 15,
                  "end": 17,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Literal",
                  "start": 20,
                  "end": 22,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
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
                "start": 23,
                "end": 28,
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
