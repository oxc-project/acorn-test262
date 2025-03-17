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
                  "left": {
                    "type": "Literal",
                    "start": 22,
                    "end": 24,
                    "value": 10,
                    "raw": "10"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 27,
                    "end": 29,
                    "value": 10,
                    "raw": "10"
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
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 31,
                "end": 36,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": true
              }
            ]
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
