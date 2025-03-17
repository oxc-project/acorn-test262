__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 60,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 47,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 47,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 26,
              "end": 47,
              "params": [
                {
                  "type": "Identifier",
                  "start": 27,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 59,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 50,
          "end": 59,
          "exprName": {
            "type": "Identifier",
            "start": 57,
            "end": 59,
            "decorators": [],
            "name": "cb",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 70,
            "end": 93,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 75,
                "end": 92,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 90,
                  "end": 92,
                  "raw": "''",
                  "value": ""
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 85,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 85,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 79,
                        "end": 85
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
