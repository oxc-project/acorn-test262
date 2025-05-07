__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 41,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 26,
            "end": 39,
            "argument": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
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
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 22,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
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
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "start": 41,
      "end": 42
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 101,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 87,
            "end": 99,
            "argument": {
              "type": "Literal",
              "start": 94,
              "end": 98,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 80,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 80,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 64,
              "end": 80,
              "params": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 68,
                      "end": 74
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
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
        "start": 81,
        "end": 84,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 84,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 54,
        "end": 57,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 55,
            "end": 56,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
      "start": 103,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 116,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 116,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 110,
                "end": 116
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 119,
            "end": 131,
            "arguments": [
              {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 120,
              "end": 128,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 121,
                  "end": 127
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
      "start": 133,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 146,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 146,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 149,
            "end": 153,
            "arguments": [
              {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
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
