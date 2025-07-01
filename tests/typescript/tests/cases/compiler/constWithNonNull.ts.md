__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "type": "TSUnionType",
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
                ],
                "start": 34,
                "end": 52
              },
              "start": 32,
              "end": 52
            },
            "start": 31,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 52
        }
      ],
      "declare": true,
      "start": 17,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 55
          },
          "start": 54,
          "end": 56
        },
        "start": 54,
        "end": 58
      },
      "directive": null,
      "start": 54,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 59
}
```
