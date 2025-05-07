__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
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
            "end": 35,
            "expressions": [
              {
                "type": "TSTypeAssertion",
                "start": 15,
                "end": 29,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 21,
                  "end": 28,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 21,
                    "end": 23,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 26,
                    "end": 28,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 16,
                  "end": 19
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
                "start": 30,
                "end": 35,
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
