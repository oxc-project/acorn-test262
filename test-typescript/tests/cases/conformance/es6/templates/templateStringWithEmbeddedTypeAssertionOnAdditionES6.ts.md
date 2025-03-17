__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 52,
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
            "end": 52,
            "expressions": [
              {
                "type": "TSTypeAssertion",
                "start": 32,
                "end": 46,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 38,
                  "end": 45,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 38,
                    "end": 40,
                    "raw": "10",
                    "value": 10
                  },
                  "right": {
                    "type": "Literal",
                    "start": 43,
                    "end": 45,
                    "raw": "10",
                    "value": 10
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 33,
                  "end": 36
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
                "start": 47,
                "end": 52,
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
