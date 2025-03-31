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
        "name": "foo",
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
          "start": 19,
          "end": 22,
          "name": "x",
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
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "name": "y",
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 29,
          "end": 43,
          "name": "f",
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
                  "name": "v",
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
                    "name": "U",
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
        "start": 45,
        "end": 343,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 51,
            "end": 73,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 55,
                "end": 72,
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 57,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 60,
                  "end": 72,
                  "callee": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "optional": false,
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
            "start": 78,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 84,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 87,
                  "end": 91,
                  "callee": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "value": 1,
                      "raw": "1"
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
          },
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 119,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 118,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 103,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 106,
                  "end": 118,
                  "callee": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "optional": false,
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
            "start": 124,
            "end": 141,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 128,
                "end": 140,
                "id": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 130,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 133,
                  "end": 140,
                  "callee": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 135,
                      "end": 139,
                      "value": null,
                      "raw": "null"
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
          },
          {
            "type": "VariableDeclaration",
            "start": 147,
            "end": 162,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 151,
                "end": 161,
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 154,
                  "name": "r11",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 157,
                  "end": 161,
                  "callee": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "name": "x",
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
          },
          {
            "type": "VariableDeclaration",
            "start": 167,
            "end": 190,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 171,
                "end": 189,
                "id": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 174,
                  "name": "r21",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 177,
                  "end": 189,
                  "callee": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
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
            "start": 195,
            "end": 218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 202,
                  "name": "r31",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 205,
                  "end": 217,
                  "callee": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "optional": false,
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
            "start": 223,
            "end": 241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 240,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 230,
                  "name": "r41",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 233,
                  "end": 240,
                  "callee": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 235,
                      "end": 239,
                      "value": null,
                      "raw": "null"
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
          },
          {
            "type": "VariableDeclaration",
            "start": 247,
            "end": 262,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 261,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 254,
                  "name": "r12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 257,
                  "end": 261,
                  "callee": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "name": "y",
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
          },
          {
            "type": "VariableDeclaration",
            "start": 267,
            "end": 290,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 271,
                "end": 289,
                "id": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 274,
                  "name": "r22",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 289,
                  "callee": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
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
            "start": 295,
            "end": 318,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 317,
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 302,
                  "name": "r32",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 305,
                  "end": 317,
                  "callee": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 306,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "optional": false,
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
            "start": 323,
            "end": 341,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 327,
                "end": 340,
                "id": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 330,
                  "name": "r42",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 333,
                  "end": 340,
                  "callee": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 335,
                      "end": 339,
                      "value": null,
                      "raw": "null"
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
        ]
      },
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
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "U",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
