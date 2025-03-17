__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1404,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 146,
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
          "end": 28,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 15,
              "end": 28,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 17,
                  "end": 26,
                  "key": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 18,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 26,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 22,
                      "end": 26
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 30,
          "end": 56,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 33,
              "end": 56,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 35,
                  "end": 54,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 37,
                      "end": 47,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 39,
                        "end": 47,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 41,
                          "end": 47
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 50,
                      "end": 54
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 146,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 64,
            "end": 87,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 68,
                "end": 86,
                "id": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 72,
                  "end": 86,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 72,
                    "end": 78,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 73,
                      "end": 78,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 74,
                        "end": 78,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 126,
            "expression": {
              "type": "CallExpression",
              "start": 120,
              "end": 125,
              "callee": {
                "type": "MemberExpression",
                "start": 120,
                "end": 123,
                "object": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "f",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 131,
            "end": 144,
            "expression": {
              "type": "CallExpression",
              "start": 131,
              "end": 143,
              "callee": {
                "type": "MemberExpression",
                "start": 131,
                "end": 134,
                "object": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 135,
                  "end": 142,
                  "value": "hello",
                  "raw": "'hello'"
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
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 159,
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
          "start": 160,
          "end": 197,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 197,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 163,
              "end": 197,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 165,
                  "end": 195,
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 167,
                      "end": 188,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 168,
                        "end": 188,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 170,
                          "end": 188,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 170,
                              "end": 176
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 179,
                              "end": 188
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 191,
                      "end": 195
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 199,
          "end": 225,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 200,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 202,
              "end": 225,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 204,
                  "end": 223,
                  "key": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 206,
                      "end": 216,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 208,
                        "end": 216,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 210,
                          "end": 216
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 223,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 219,
                      "end": 223
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 315,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 233,
            "end": 256,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 237,
                "end": 255,
                "id": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 241,
                  "end": 255,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 241,
                    "end": 247,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 242,
                      "end": 247,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 243,
                        "end": 247,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 289,
            "end": 295,
            "expression": {
              "type": "CallExpression",
              "start": 289,
              "end": 294,
              "callee": {
                "type": "MemberExpression",
                "start": 289,
                "end": 292,
                "object": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 292,
                  "name": "f",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 313,
            "expression": {
              "type": "CallExpression",
              "start": 300,
              "end": 312,
              "callee": {
                "type": "MemberExpression",
                "start": 300,
                "end": 303,
                "object": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 304,
                  "end": 311,
                  "value": "hello",
                  "raw": "'hello'"
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
      "start": 317,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 328,
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
          "start": 329,
          "end": 342,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 330,
            "end": 342,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 332,
              "end": 342,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 335,
                "end": 342,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 338,
                  "end": 342
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 344,
          "end": 367,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 367,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 347,
              "end": 367,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 348,
                  "end": 358,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 350,
                    "end": 358,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 352,
                      "end": 358
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 360,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 363,
                  "end": 367
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
        "start": 369,
        "end": 450,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 375,
            "end": 398,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 379,
                "end": 397,
                "id": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 383,
                  "end": 397,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 383,
                    "end": 389,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 384,
                      "end": 389,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 385,
                        "end": 389,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 397,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 428,
            "end": 432,
            "expression": {
              "type": "CallExpression",
              "start": 428,
              "end": 431,
              "callee": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 437,
            "end": 448,
            "expression": {
              "type": "CallExpression",
              "start": 437,
              "end": 447,
              "callee": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 439,
                  "end": 446,
                  "value": "hello",
                  "raw": "'hello'"
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
      "start": 452,
      "end": 606,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 463,
        "name": "f4",
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
          "start": 464,
          "end": 498,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 465,
            "end": 498,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 467,
              "end": 498,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 468,
                  "end": 489,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 489,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 471,
                      "end": 489,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 471,
                          "end": 477
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 480,
                          "end": 489
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 491,
                "end": 498,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 494,
                  "end": 498
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 500,
          "end": 523,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 501,
            "end": 523,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 503,
              "end": 523,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 504,
                  "end": 514,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 506,
                    "end": 514,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 508,
                      "end": 514
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 516,
                "end": 523,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 519,
                  "end": 523
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
        "start": 525,
        "end": 606,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 531,
            "end": 554,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 535,
                "end": 553,
                "id": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 539,
                  "end": 553,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 539,
                    "end": 545,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 540,
                      "end": 545,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 541,
                        "end": 545,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 549,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 584,
            "end": 588,
            "expression": {
              "type": "CallExpression",
              "start": 584,
              "end": 587,
              "callee": {
                "type": "Identifier",
                "start": 584,
                "end": 585,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 593,
            "end": 604,
            "expression": {
              "type": "CallExpression",
              "start": 593,
              "end": 603,
              "callee": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 595,
                  "end": 602,
                  "value": "hello",
                  "raw": "'hello'"
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
      "start": 608,
      "end": 764,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 619,
        "name": "f5",
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
          "start": 620,
          "end": 654,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 621,
            "end": 654,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 623,
              "end": 654,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 624,
                  "end": 645,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 625,
                    "end": 645,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 627,
                      "end": 645,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 627,
                          "end": 633
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 636,
                          "end": 645
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 647,
                "end": 654,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 650,
                  "end": 654
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 656,
          "end": 680,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 657,
            "end": 680,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 659,
              "end": 680,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 660,
                  "end": 671,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 662,
                    "end": 671,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 664,
                      "end": 671,
                      "literal": {
                        "type": "Literal",
                        "start": 664,
                        "end": 671,
                        "value": "hello",
                        "raw": "'hello'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 673,
                "end": 680,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 676,
                  "end": 680
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
        "start": 682,
        "end": 764,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 688,
            "end": 711,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 692,
                "end": 710,
                "id": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 693,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 696,
                  "end": 710,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 696,
                    "end": 702,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 697,
                      "end": 702,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 698,
                        "end": 702,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 706,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 709,
                    "end": 710,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 742,
            "end": 746,
            "expression": {
              "type": "CallExpression",
              "start": 742,
              "end": 745,
              "callee": {
                "type": "Identifier",
                "start": 742,
                "end": 743,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 751,
            "end": 762,
            "expression": {
              "type": "CallExpression",
              "start": 751,
              "end": 761,
              "callee": {
                "type": "Identifier",
                "start": 751,
                "end": 752,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 753,
                  "end": 760,
                  "value": "hello",
                  "raw": "'hello'"
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
      "start": 766,
      "end": 943,
      "id": {
        "type": "Identifier",
        "start": 775,
        "end": 777,
        "name": "f6",
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
          "start": 778,
          "end": 813,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 779,
            "end": 813,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 781,
              "end": 813,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 782,
                  "end": 804,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 783,
                    "end": 804,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 785,
                      "end": 804,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 785,
                          "end": 792,
                          "literal": {
                            "type": "Literal",
                            "start": 785,
                            "end": 792,
                            "value": "hello",
                            "raw": "'hello'"
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 795,
                          "end": 804
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 806,
                "end": 813,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 809,
                  "end": 813
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 815,
          "end": 838,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 816,
            "end": 838,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 818,
              "end": 838,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 819,
                  "end": 829,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 821,
                    "end": 829,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 823,
                      "end": 829
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 831,
                "end": 838,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 834,
                  "end": 838
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
        "start": 840,
        "end": 943,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 846,
            "end": 869,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 850,
                "end": 868,
                "id": {
                  "type": "Identifier",
                  "start": 850,
                  "end": 851,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 854,
                  "end": 868,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 854,
                    "end": 860,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 855,
                      "end": 860,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 856,
                        "end": 860,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 864,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 867,
                    "end": 868,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 911,
            "end": 915,
            "expression": {
              "type": "CallExpression",
              "start": 911,
              "end": 914,
              "callee": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 930,
            "end": 941,
            "expression": {
              "type": "CallExpression",
              "start": 930,
              "end": 940,
              "callee": {
                "type": "Identifier",
                "start": 930,
                "end": 931,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 932,
                  "end": 939,
                  "value": "hello",
                  "raw": "'hello'"
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
      "type": "TSTypeAliasDeclaration",
      "start": 945,
      "end": 972,
      "id": {
        "type": "Identifier",
        "start": 950,
        "end": 951,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 954,
        "end": 972,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 960,
            "end": 970,
            "key": {
              "type": "Identifier",
              "start": 960,
              "end": 961,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 963,
              "end": 969,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 965,
                "end": 969
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 974,
      "end": 1026,
      "id": {
        "type": "Identifier",
        "start": 979,
        "end": 980,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 983,
        "end": 1026,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 989,
            "end": 1009,
            "key": {
              "type": "Identifier",
              "start": 989,
              "end": 990,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 991,
                "end": 1001,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 993,
                  "end": 1001,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 995,
                    "end": 1001
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1008,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1004,
                "end": 1008
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1014,
            "end": 1024,
            "key": {
              "type": "Identifier",
              "start": 1014,
              "end": 1015,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1017,
              "end": 1023,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1019,
                "end": 1023
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1028,
      "end": 1123,
      "id": {
        "type": "Identifier",
        "start": 1037,
        "end": 1040,
        "name": "f11",
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
          "start": 1041,
          "end": 1045,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1042,
            "end": 1045,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1044,
              "end": 1045,
              "typeName": {
                "type": "Identifier",
                "start": 1044,
                "end": 1045,
                "name": "A",
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
          "start": 1047,
          "end": 1051,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1048,
            "end": 1051,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1050,
              "end": 1051,
              "typeName": {
                "type": "Identifier",
                "start": 1050,
                "end": 1051,
                "name": "B",
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
        "start": 1053,
        "end": 1123,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1059,
            "end": 1082,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1063,
                "end": 1081,
                "id": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1064,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1067,
                  "end": 1081,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 1067,
                    "end": 1073,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 1068,
                      "end": 1073,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 1069,
                        "end": 1073,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1080,
                    "end": 1081,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1097,
            "end": 1103,
            "expression": {
              "type": "CallExpression",
              "start": 1097,
              "end": 1102,
              "callee": {
                "type": "MemberExpression",
                "start": 1097,
                "end": 1100,
                "object": {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1098,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1100,
                  "name": "f",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1108,
            "end": 1121,
            "expression": {
              "type": "CallExpression",
              "start": 1108,
              "end": 1120,
              "callee": {
                "type": "MemberExpression",
                "start": 1108,
                "end": 1111,
                "object": {
                  "type": "Identifier",
                  "start": 1108,
                  "end": 1109,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1111,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1112,
                  "end": 1119,
                  "value": "hello",
                  "raw": "'hello'"
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
      "type": "TSInterfaceDeclaration",
      "start": 1147,
      "end": 1193,
      "id": {
        "type": "Identifier",
        "start": 1157,
        "end": 1166,
        "name": "ReturnVal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1167,
        "end": 1193,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1173,
            "end": 1191,
            "key": {
              "type": "Identifier",
              "start": 1173,
              "end": 1182,
              "name": "something",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1184,
              "end": 1190,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1186,
                "end": 1190
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1195,
      "end": 1235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1201,
          "end": 1235,
          "id": {
            "type": "Identifier",
            "start": 1201,
            "end": 1213,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1202,
              "end": 1213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1204,
                "end": 1213,
                "typeName": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1213,
                  "name": "ReturnVal",
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
          "init": {
            "type": "ObjectExpression",
            "start": 1216,
            "end": 1235,
            "properties": [
              {
                "type": "Property",
                "start": 1218,
                "end": 1233,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1218,
                  "end": 1227,
                  "name": "something",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1227,
                  "end": 1233,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1230,
                    "end": 1233,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1237,
      "end": 1266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1251,
          "end": 1265,
          "id": {
            "type": "Identifier",
            "start": 1251,
            "end": 1265,
            "name": "val",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1254,
              "end": 1265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1256,
                "end": 1265,
                "typeName": {
                  "type": "Identifier",
                  "start": 1256,
                  "end": 1265,
                  "name": "ReturnVal",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 1267,
      "end": 1403,
      "id": {
        "type": "Identifier",
        "start": 1276,
        "end": 1279,
        "name": "run",
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
          "start": 1280,
          "end": 1321,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1287,
            "end": 1321,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1289,
              "end": 1321,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 1291,
                  "end": 1319,
                  "key": {
                    "type": "Identifier",
                    "start": 1291,
                    "end": 1300,
                    "name": "something",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1302,
                      "end": 1312,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1304,
                        "end": 1312,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1306,
                          "end": 1312
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1313,
                    "end": 1319,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1315,
                      "end": 1319
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1323,
        "end": 1403,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1329,
            "end": 1382,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1335,
                "end": 1381,
                "id": {
                  "type": "Identifier",
                  "start": 1335,
                  "end": 1344,
                  "name": "something",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1347,
                  "end": 1381,
                  "left": {
                    "type": "MemberExpression",
                    "start": 1347,
                    "end": 1364,
                    "object": {
                      "type": "Identifier",
                      "start": 1347,
                      "end": 1354,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1355,
                      "end": 1364,
                      "name": "something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "??",
                  "right": {
                    "type": "MemberExpression",
                    "start": 1368,
                    "end": 1381,
                    "object": {
                      "type": "Identifier",
                      "start": 1368,
                      "end": 1371,
                      "name": "val",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1372,
                      "end": 1381,
                      "name": "something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1387,
            "end": 1401,
            "expression": {
              "type": "CallExpression",
              "start": 1387,
              "end": 1400,
              "callee": {
                "type": "Identifier",
                "start": 1387,
                "end": 1396,
                "name": "something",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1397,
                  "end": 1399,
                  "value": "",
                  "raw": "''"
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
