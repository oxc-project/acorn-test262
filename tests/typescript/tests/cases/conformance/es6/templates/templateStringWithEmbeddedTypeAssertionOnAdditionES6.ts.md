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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
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
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 30,
                "end": 35,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TSTypeAssertion",
                "start": 15,
                "end": 29,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 16,
                  "end": 19
                },
                "expression": {
                  "type": "BinaryExpression",
                  "start": 21,
                  "end": 28,
                  "left": {
                    "type": "Literal",
                    "start": 21,
                    "end": 23,
                    "value": 10,
                    "raw": "10"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 26,
                    "end": 28,
                    "value": 10,
                    "raw": "10"
                  }
                }
              }
            ]
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
