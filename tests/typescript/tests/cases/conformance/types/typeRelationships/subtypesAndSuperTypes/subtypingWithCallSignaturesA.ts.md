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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
              "typeParameters": null,
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
              }
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 94,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 93,
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
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 75,
                "end": 92,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                "body": {
                  "type": "Literal",
                  "start": 90,
                  "end": 92,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
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
