__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 491,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo1",
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
          "end": 38,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 38,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 19,
              "end": 38,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 20,
                  "end": 29,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 23,
                      "end": 29
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 34,
                  "end": 38
                }
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 72,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 46,
            "end": 60,
            "expression": {
              "type": "AssignmentExpression",
              "start": 46,
              "end": 60,
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 53,
                "end": 59,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 70,
            "expression": {
              "type": "CallExpression",
              "start": 65,
              "end": 70,
              "callee": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 67,
                  "end": 69,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 87,
        "name": "foo2",
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
          "start": 89,
          "end": 112,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 112,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 93,
              "end": 112,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 94,
                  "end": 103,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 105,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 108,
                  "end": 112
                }
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 146,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 134,
            "expression": {
              "type": "AssignmentExpression",
              "start": 120,
              "end": 134,
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 127,
                "end": 133,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 144,
            "expression": {
              "type": "CallExpression",
              "start": 139,
              "end": 144,
              "callee": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 141,
                  "end": 143,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 161,
        "name": "foo3",
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
          "start": 163,
          "end": 186,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 165,
            "end": 186,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 167,
              "end": 186,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 168,
                  "end": 177,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 171,
                      "end": 177
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 179,
                "end": 186,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 182,
                  "end": 186
                }
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 220,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 194,
            "end": 208,
            "expression": {
              "type": "AssignmentExpression",
              "start": 194,
              "end": 208,
              "operator": "&&=",
              "left": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 201,
                "end": 207,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 213,
            "end": 218,
            "expression": {
              "type": "CallExpression",
              "start": 213,
              "end": 218,
              "callee": {
                "type": "Identifier",
                "start": 213,
                "end": 214,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 215,
                  "end": 217,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 235,
        "name": "bar1",
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
          "start": 237,
          "end": 260,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 239,
            "end": 260,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 241,
              "end": 260,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 242,
                  "end": 251,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 253,
                "end": 260,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 256,
                  "end": 260
                }
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 262,
        "end": 310,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 268,
            "end": 298,
            "expression": {
              "type": "AssignmentExpression",
              "start": 268,
              "end": 298,
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "SequenceExpression",
                "start": 275,
                "end": 297,
                "expressions": [
                  {
                    "type": "CallExpression",
                    "start": 275,
                    "end": 287,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 275,
                      "end": 285,
                      "object": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 276,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 285,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 290,
                    "end": 296,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 296,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 303,
            "end": 308,
            "expression": {
              "type": "CallExpression",
              "start": 303,
              "end": 308,
              "callee": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 305,
                  "end": 307,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 312,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 325,
        "name": "bar2",
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
          "start": 327,
          "end": 350,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 329,
            "end": 350,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 331,
              "end": 350,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 332,
                  "end": 341,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 341,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 335,
                      "end": 341
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 343,
                "end": 350,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 346,
                  "end": 350
                }
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 352,
        "end": 400,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 358,
            "end": 388,
            "expression": {
              "type": "AssignmentExpression",
              "start": 358,
              "end": 388,
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "SequenceExpression",
                "start": 365,
                "end": 387,
                "expressions": [
                  {
                    "type": "CallExpression",
                    "start": 365,
                    "end": 377,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 365,
                      "end": 375,
                      "object": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 366,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 375,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 380,
                    "end": 386,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 393,
            "end": 398,
            "expression": {
              "type": "CallExpression",
              "start": 393,
              "end": 398,
              "callee": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 395,
                  "end": 397,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 402,
      "end": 490,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 415,
        "name": "bar3",
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
          "start": 417,
          "end": 440,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 419,
            "end": 440,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 421,
              "end": 440,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 422,
                  "end": 431,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 423,
                    "end": 431,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 425,
                      "end": 431
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 433,
                "end": 440,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 436,
                  "end": 440
                }
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 442,
        "end": 490,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 448,
            "end": 478,
            "expression": {
              "type": "AssignmentExpression",
              "start": 448,
              "end": 478,
              "operator": "&&=",
              "left": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "SequenceExpression",
                "start": 455,
                "end": 477,
                "expressions": [
                  {
                    "type": "CallExpression",
                    "start": 455,
                    "end": 467,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 455,
                      "end": 465,
                      "object": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 456,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 465,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 470,
                    "end": 476,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 470,
                        "end": 471,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 476,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 483,
            "end": 488,
            "expression": {
              "type": "CallExpression",
              "start": 483,
              "end": 488,
              "callee": {
                "type": "Identifier",
                "start": 483,
                "end": 484,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 485,
                  "end": 487,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
