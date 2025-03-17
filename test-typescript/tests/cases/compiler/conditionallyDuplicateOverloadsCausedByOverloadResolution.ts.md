__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 545,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
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
          "start": 21,
          "end": 56,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 56,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 27,
              "end": 56,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 37,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 31,
                      "end": 37
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 39,
                  "end": 48,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 42,
                      "end": 48
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 53,
                  "end": 56
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 66,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 59,
          "end": 66
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 68,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
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
          "start": 89,
          "end": 124,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 124,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 95,
              "end": 124,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 96,
                  "end": 105,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 118,
                "end": 124,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 121,
                  "end": 124
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 125,
        "end": 133,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 127,
          "end": 133
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 143,
            "name": "out",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 146,
            "end": 277,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 150,
                "end": 276,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 160,
                  "end": 276,
                  "body": [
                    {
                      "type": "TSDeclareFunction",
                      "start": 166,
                      "end": 198,
                      "id": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 178,
                        "name": "bar",
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
                          "start": 179,
                          "end": 190,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 180,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 182,
                              "end": 190,
                              "exprName": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 190,
                                "name": "x",
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
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 191,
                        "end": 197,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 193,
                          "end": 197
                        }
                      }
                    },
                    {
                      "type": "TSDeclareFunction",
                      "start": 203,
                      "end": 235,
                      "id": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 215,
                        "name": "bar",
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
                          "start": 216,
                          "end": 227,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 217,
                            "end": 227,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 219,
                              "end": 227,
                              "exprName": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 227,
                                "name": "y",
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
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 228,
                        "end": 234,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 230,
                          "end": 234
                        }
                      }
                    },
                    {
                      "type": "FunctionDeclaration",
                      "start": 240,
                      "end": 258,
                      "id": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 252,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 255,
                        "end": 258,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 263,
                      "end": 274,
                      "argument": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 273,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
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
      "type": "TSDeclareFunction",
      "start": 280,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 301,
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
          "start": 302,
          "end": 337,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 337,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 308,
              "end": 337,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 309,
                  "end": 318,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 310,
                    "end": 318,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 312,
                      "end": 318
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 329,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 321,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 323,
                      "end": 329
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 331,
                "end": 337,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 334,
                  "end": 337
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 338,
        "end": 347,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 340,
          "end": 347
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 349,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 370,
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
          "start": 371,
          "end": 406,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 375,
            "end": 406,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 377,
              "end": 406,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 378,
                  "end": 387,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 379,
                    "end": 387,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 381,
                      "end": 387
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 389,
                  "end": 398,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 390,
                    "end": 398,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 392,
                      "end": 398
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 400,
                "end": 406,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 403,
                  "end": 406
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 407,
        "end": 415,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 409,
          "end": 415
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 544,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 426,
            "name": "out2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 429,
            "end": 544,
            "callee": {
              "type": "Identifier",
              "start": 429,
              "end": 433,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 434,
                "end": 543,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 435,
                    "end": 436,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 444,
                  "end": 543,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 450,
                      "end": 525,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 454,
                          "end": 524,
                          "id": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 524,
                            "name": "bar",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 457,
                              "end": 524,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 459,
                                "end": 524,
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 469,
                                    "end": 489,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 470,
                                        "end": 481,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 471,
                                          "end": 481,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "start": 473,
                                            "end": 481,
                                            "exprName": {
                                              "type": "Identifier",
                                              "start": 480,
                                              "end": 481,
                                              "name": "x",
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
                                      "start": 482,
                                      "end": 488,
                                      "typeAnnotation": {
                                        "type": "TSVoidKeyword",
                                        "start": 484,
                                        "end": 488
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 498,
                                    "end": 518,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 499,
                                        "end": 510,
                                        "name": "b",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 500,
                                          "end": 510,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "start": 502,
                                            "end": 510,
                                            "exprName": {
                                              "type": "Identifier",
                                              "start": 509,
                                              "end": 510,
                                              "name": "y",
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
                                      "start": 511,
                                      "end": 517,
                                      "typeAnnotation": {
                                        "type": "TSVoidKeyword",
                                        "start": 513,
                                        "end": 517
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 530,
                      "end": 541,
                      "argument": {
                        "type": "Identifier",
                        "start": 537,
                        "end": 540,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
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
