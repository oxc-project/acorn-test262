__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 67,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "filter",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 60,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 60,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 30,
              "end": 60,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 41,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 37,
                      "end": 41
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 46,
                      "end": 49
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 54,
                  "end": 60,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 59,
                      "end": 60,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 60,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 66,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 63,
          "end": 66,
          "elementType": {
            "type": "TSTypeReference",
            "start": 63,
            "end": 64,
            "typeName": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "S",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 81,
            "decorators": [],
            "name": "numbers",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 140,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 99,
                "end": 139,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 119,
                  "end": 139,
                  "operator": "==",
                  "left": {
                    "type": "Literal",
                    "start": 119,
                    "end": 127,
                    "raw": "'number'",
                    "value": "number"
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 131,
                    "end": 139,
                    "argument": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "operator": "typeof",
                    "prefix": true
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 115,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 104,
                    "end": 115,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 109,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 109,
                        "end": 115
                      }
                    }
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 84,
              "end": 90,
              "decorators": [],
              "name": "filter",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 90,
              "end": 98,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 91,
                  "end": 97
                }
              ]
            }
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
