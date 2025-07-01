__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 8,
                "end": 14
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true,
                "start": 30,
                "end": 35
              }
            ],
            "expressions": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 16,
                  "end": 19
                },
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 21,
                    "end": 23
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 26,
                    "end": 28
                  },
                  "start": 21,
                  "end": 28
                },
                "start": 15,
                "end": 29
              }
            ],
            "start": 8,
            "end": 35
          },
          "definite": false,
          "start": 4,
          "end": 35
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
