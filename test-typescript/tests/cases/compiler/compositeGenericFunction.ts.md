__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 155,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 42,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 40,
            "argument": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 23,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 23,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 23,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "EmptyStatement",
      "start": 42,
      "end": 43
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 102,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 88,
            "end": 100,
            "argument": {
              "type": "Literal",
              "start": 95,
              "end": 99,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 59,
          "end": 81,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 81,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 65,
              "end": 81,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 75,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 69,
                      "end": 75
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 81,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
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
        "start": 82,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 84,
          "end": 85,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 58,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "R",
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
      "start": 104,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 117,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 117,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 111,
                "end": 117
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 120,
            "end": 132,
            "arguments": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 121,
              "end": 129,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 122,
                  "end": 128
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 147,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 154,
            "arguments": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "h",
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
