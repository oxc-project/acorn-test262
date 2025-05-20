__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 59,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 52,
            "decorators": [],
            "name": "x",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 59,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 54,
        "end": 58,
        "argument": {
          "type": "TSNonNullExpression",
          "start": 54,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
