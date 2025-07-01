__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3,
              "end": 4
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 6,
              "end": 8
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3,
            "end": 8
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 14,
                "end": 18
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              },
              "start": 14,
              "end": 25
            },
            "start": 10,
            "end": 26
          }
        ],
        "start": 1,
        "end": 28
      },
      "directive": null,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "start": 35,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 41
        }
      ],
      "declare": false,
      "start": 31,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
