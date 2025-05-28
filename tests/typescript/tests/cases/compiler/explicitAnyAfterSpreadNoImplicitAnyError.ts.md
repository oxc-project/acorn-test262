__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 30,
      "expression": {
        "type": "ObjectExpression",
        "start": 1,
        "end": 28,
        "properties": [
          {
            "type": "Property",
            "start": 3,
            "end": 8,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3,
              "end": 4,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "ArrayExpression",
              "start": 6,
              "end": 8,
              "elements": []
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "SpreadElement",
            "start": 10,
            "end": 26,
            "argument": {
              "type": "TSAsExpression",
              "start": 14,
              "end": 25,
              "expression": {
                "type": "Literal",
                "start": 14,
                "end": 18,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              }
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 42,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              }
            }
          },
          "init": null,
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
