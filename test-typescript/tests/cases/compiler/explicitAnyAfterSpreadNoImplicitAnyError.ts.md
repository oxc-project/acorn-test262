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
      "directive": null,
      "expression": {
        "type": "ObjectExpression",
        "start": 1,
        "end": 28,
        "properties": [
          {
            "type": "Property",
            "start": 3,
            "end": 8,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3,
              "end": 4,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ArrayExpression",
              "start": 6,
              "end": 8,
              "elements": []
            }
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
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 41,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
