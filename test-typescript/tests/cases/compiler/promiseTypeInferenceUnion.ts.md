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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
          "start": 12,
          "end": 21,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 15,
              "end": 21
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 60,
                "end": 75,
                "object": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 67,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 75,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 40,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 94,
        "name": "f2",
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
          "start": 95,
          "end": 104,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 104,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 98,
              "end": 104
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 162,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 154,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 162,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 127,
                "name": "PromiseLike",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 181,
        "name": "f3",
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
          "start": 182,
          "end": 191,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 191,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 185,
              "end": 191
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 252,
                "end": 267,
                "object": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 259,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 267,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 210,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            },
            {
              "type": "TSTypeReference",
              "start": 221,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 221,
                "end": 232,
                "name": "PromiseLike",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 300,
            "name": "g1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 300,
                "typeName": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 292,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 326,
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 318,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 310,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 318,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 319,
                "end": 325,
                "callee": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "name": "f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 322,
                    "end": 324,
                    "value": 42,
                    "raw": "42"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 353,
            "name": "g2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 353,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 338,
                "end": 353,
                "typeName": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 345,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 379,
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 371,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 363,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 371,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 372,
                "end": 378,
                "callee": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 374,
                  "name": "f2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 375,
                    "end": 377,
                    "value": 42,
                    "raw": "42"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 406,
            "name": "g3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 391,
                "end": 406,
                "typeName": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 398,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 409,
            "end": 432,
            "callee": {
              "type": "MemberExpression",
              "start": 409,
              "end": 424,
              "object": {
                "type": "Identifier",
                "start": 409,
                "end": 416,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 417,
                "end": 424,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 425,
                "end": 431,
                "callee": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 427,
                  "name": "f3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 428,
                    "end": 430,
                    "value": 42,
                    "raw": "42"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
