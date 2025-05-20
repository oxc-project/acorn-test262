__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 55,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 50,
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 50,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 50,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 37,
                      "end": 39,
                      "members": []
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 44,
                  "end": 50,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 49,
                      "end": 50,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 54,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 53,
          "end": 54,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 105,
            "end": 132,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 107,
                "end": 131,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 127,
                  "end": 131,
                  "raw": "true",
                  "value": true
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 112,
                    "end": 123,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 117,
                      "end": 123,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 117,
                        "end": 123
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
