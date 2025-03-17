__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 36,
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
            "end": 36,
            "expressions": [
              {
                "type": "TSTypeAssertion",
                "start": 16,
                "end": 30,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 22,
                  "end": 29,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 22,
                    "end": 24,
                    "raw": "10",
                    "value": 10
                  },
                  "right": {
                    "type": "Literal",
                    "start": 27,
                    "end": 29,
                    "raw": "10",
                    "value": 10
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 17,
                  "end": 20
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
                "start": 31,
                "end": 36,
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
