__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "U",
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
          "start": 19,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 26,
              "end": 27,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 29,
          "end": 43,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 43,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 32,
              "end": 43,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 37,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 36,
                      "end": 37,
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 343,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 51,
            "end": 73,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 55,
                "end": 72,
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 57,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 60,
                  "end": 72,
                  "callee": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 61,
                    "end": 69,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 62,
                        "end": 68
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 71,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 92,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 84,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 87,
                  "end": 91,
                  "callee": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 119,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 118,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 103,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 106,
                  "end": 118,
                  "callee": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 107,
                    "end": 112,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 108,
                        "end": 111
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 113,
                      "end": 117,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 124,
            "end": 141,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 128,
                "end": 140,
                "id": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 130,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 133,
                  "end": 140,
                  "callee": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 135,
                      "end": 139,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 147,
            "end": 162,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 151,
                "end": 161,
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 154,
                  "decorators": [],
                  "name": "r11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 157,
                  "end": 161,
                  "callee": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 167,
            "end": 190,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 171,
                "end": 189,
                "id": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 174,
                  "decorators": [],
                  "name": "r21",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 177,
                  "end": 189,
                  "callee": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 178,
                    "end": 186,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 179,
                        "end": 185
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 195,
            "end": 218,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 202,
                  "decorators": [],
                  "name": "r31",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 205,
                  "end": 217,
                  "callee": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 206,
                    "end": 211,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 207,
                        "end": 210
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 212,
                      "end": 216,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 223,
            "end": 241,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 240,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 230,
                  "decorators": [],
                  "name": "r41",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 233,
                  "end": 240,
                  "callee": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 235,
                      "end": 239,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 247,
            "end": 262,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 261,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 254,
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 257,
                  "end": 261,
                  "callee": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 267,
            "end": 290,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 271,
                "end": 289,
                "id": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 274,
                  "decorators": [],
                  "name": "r22",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 289,
                  "callee": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 278,
                    "end": 286,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 279,
                        "end": 285
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 295,
            "end": 318,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 317,
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 302,
                  "decorators": [],
                  "name": "r32",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 305,
                  "end": 317,
                  "callee": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 306,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 306,
                    "end": 311,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 307,
                        "end": 310
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 312,
                      "end": 316,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 323,
            "end": 341,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 327,
                "end": 340,
                "id": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 330,
                  "decorators": [],
                  "name": "r42",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 333,
                  "end": 340,
                  "callee": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 335,
                      "end": 339,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
