__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 433,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 81,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 81,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 53,
            "end": 79,
            "argument": {
              "type": "CallExpression",
              "start": 60,
              "end": 78,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 60,
                "end": 75,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 67,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 75,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
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
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 15,
              "end": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 48,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 24,
          "end": 48,
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            },
            {
              "type": "TSTypeReference",
              "start": 33,
              "end": 48,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 40,
                "end": 48,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 41,
                    "end": 47
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 40,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 136,
        "end": 168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 140,
            "end": 166,
            "argument": {
              "type": "CallExpression",
              "start": 147,
              "end": 165,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 162,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 154,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 162,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 94,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 104,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 104,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 98,
              "end": 104
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 105,
        "end": 135,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 107,
          "end": 135,
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            {
              "type": "TSTypeReference",
              "start": 116,
              "end": 135,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 127,
                "end": 135,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 128,
                    "end": 134
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 127,
                "decorators": [],
                "name": "PromiseLike",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 273,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 273,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 245,
            "end": 271,
            "argument": {
              "type": "CallExpression",
              "start": 252,
              "end": 270,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 252,
                "end": 267,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 259,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 267,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 181,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 182,
          "end": 191,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 191,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 185,
              "end": 191
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 192,
        "end": 240,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 194,
          "end": 240,
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 194,
              "end": 200
            },
            {
              "type": "TSTypeReference",
              "start": 203,
              "end": 218,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 210,
                "end": 218,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 211,
                    "end": 217
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 210,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 221,
              "end": 240,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 232,
                "end": 240,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 233,
                    "end": 239
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 221,
                "end": 232,
                "decorators": [],
                "name": "PromiseLike",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 300,
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 300,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 292,
                  "end": 300,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 293,
                      "end": 299
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 292,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 326,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 319,
                "end": 325,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 322,
                    "end": 324,
                    "raw": "42",
                    "value": 42
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 318,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 310,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 318,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 353,
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 353,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 338,
                "end": 353,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 345,
                  "end": 353,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 346,
                      "end": 352
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 345,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 379,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 372,
                "end": 378,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 375,
                    "end": 377,
                    "raw": "42",
                    "value": 42
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 374,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 371,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 363,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 371,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 381,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 406,
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 391,
                "end": 406,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 398,
                  "end": 406,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 399,
                      "end": 405
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 398,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 409,
            "end": 432,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 425,
                "end": 431,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 428,
                    "end": 430,
                    "raw": "42",
                    "value": 42
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 427,
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 409,
              "end": 424,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 409,
                "end": 416,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 417,
                "end": 424,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              }
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
