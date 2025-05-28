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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 56,
          "decorators": [],
          "name": "func",
          "optional": false,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 31,
                      "end": 37
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 39,
                  "end": 48,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 42,
                      "end": 48
                    }
                  }
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 66,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 59,
          "end": 66
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 68,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 124,
          "decorators": [],
          "name": "func",
          "optional": false,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "decorators": [],
                  "name": "y",
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 125,
        "end": 133,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 127,
          "end": 133
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 278,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 143,
            "decorators": [],
            "name": "out",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 146,
            "end": 277,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 150,
                "end": 276,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 179,
                          "end": 190,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
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
                                "decorators": [],
                                "name": "x",
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
                        "start": 191,
                        "end": 197,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 193,
                          "end": 197
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    {
                      "type": "TSDeclareFunction",
                      "start": 203,
                      "end": 235,
                      "id": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 215,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 216,
                          "end": 227,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
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
                                "decorators": [],
                                "name": "y",
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
                        "start": 228,
                        "end": 234,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 230,
                          "end": 234
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    {
                      "type": "FunctionDeclaration",
                      "start": 240,
                      "end": 258,
                      "id": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 252,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 255,
                        "end": 258,
                        "body": []
                      },
                      "expression": false
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 263,
                      "end": 274,
                      "argument": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 273,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
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
      "type": "TSDeclareFunction",
      "start": 280,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 301,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 302,
          "end": 337,
          "decorators": [],
          "name": "func",
          "optional": false,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 310,
                    "end": 318,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 312,
                      "end": 318
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 329,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 321,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 323,
                      "end": 329
                    }
                  }
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 338,
        "end": 347,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 340,
          "end": 347
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 349,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 370,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 371,
          "end": 406,
          "decorators": [],
          "name": "func",
          "optional": false,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 379,
                    "end": 387,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 381,
                      "end": 387
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 389,
                  "end": 398,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 390,
                    "end": 398,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 392,
                      "end": 398
                    }
                  }
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 407,
        "end": 415,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 409,
          "end": 415
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 545,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 544,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 426,
            "decorators": [],
            "name": "out2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 429,
            "end": 544,
            "callee": {
              "type": "Identifier",
              "start": 429,
              "end": 433,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 434,
                "end": 543,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 435,
                    "end": 436,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 444,
                  "end": 543,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 450,
                      "end": 525,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 454,
                          "end": 524,
                          "id": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 524,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
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
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
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
                                              "decorators": [],
                                              "name": "x",
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
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
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
                                              "decorators": [],
                                              "name": "y",
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
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
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
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
