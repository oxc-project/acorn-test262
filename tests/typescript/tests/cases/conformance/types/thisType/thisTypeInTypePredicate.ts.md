__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeParameters": null,
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
                  "parameterName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 140,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 81,
            "decorators": [],
            "name": "numbers",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 140,
            "callee": {
              "type": "Identifier",
              "start": 84,
              "end": 90,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 99,
                "end": 139,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                    "parameterName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": false,
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
                },
                "body": {
                  "type": "BinaryExpression",
                  "start": 119,
                  "end": 139,
                  "left": {
                    "type": "Literal",
                    "start": 119,
                    "end": 127,
                    "value": "number",
                    "raw": "'number'"
                  },
                  "operator": "==",
                  "right": {
                    "type": "UnaryExpression",
                    "start": 131,
                    "end": 139,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  }
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
