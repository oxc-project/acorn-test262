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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 23,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 23,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 23,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 59,
          "end": 81,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 81,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 65,
              "end": 81,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 75,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 69,
                      "end": 75
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 58,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 82,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 84,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 117,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 117,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 111,
                "end": 117
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 120,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 147,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 154,
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
