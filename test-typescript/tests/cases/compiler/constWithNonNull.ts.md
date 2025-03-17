__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 52,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 52,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 34,
                "end": 52,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 43,
                    "end": 52
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 59,
      "expression": {
        "type": "UpdateExpression",
        "start": 54,
        "end": 58,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "TSNonNullExpression",
          "start": 54,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
