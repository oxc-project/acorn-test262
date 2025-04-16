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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "left": {
                    "type": "Literal",
                    "start": 38,
                    "end": 40,
                    "value": 10,
                    "raw": "10"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 43,
                    "end": 45,
                    "value": 10,
                    "raw": "10"
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
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 47,
                "end": 52,
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
