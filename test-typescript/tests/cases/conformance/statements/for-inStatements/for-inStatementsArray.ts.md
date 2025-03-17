__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 555,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 13,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 7,
                  "end": 11,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 11,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 31,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 31,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 22,
                "end": 31,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 22,
                  "end": 29
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForInStatement",
      "start": 34,
      "end": 174,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 57,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 70,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 63,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 66,
                  "end": 70,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 76,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 80,
                "end": 91,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 82,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 85,
                  "end": 91,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 112,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 111,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 103,
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 106,
                  "end": 111,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "UnaryExpression",
                    "start": 108,
                    "end": 110,
                    "argument": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "prefix": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 117,
            "end": 131,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 121,
                "end": 130,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 123,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 126,
                  "end": 130,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 136,
            "end": 152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 151,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 142,
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 145,
                  "end": 151,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 157,
            "end": 172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 161,
                "end": 171,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 166,
                  "end": 171,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "UnaryExpression",
                    "start": 168,
                    "end": 170,
                    "argument": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "prefix": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 44,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 44,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForInStatement",
      "start": 176,
      "end": 343,
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 343,
        "body": [
          {
            "type": "ForInStatement",
            "start": 199,
            "end": 341,
            "body": {
              "type": "BlockStatement",
              "start": 216,
              "end": 341,
              "body": [
                {
                  "type": "ForInStatement",
                  "start": 226,
                  "end": 335,
                  "body": {
                    "type": "BlockStatement",
                    "start": 243,
                    "end": 335,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 257,
                        "end": 271,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 261,
                            "end": 270,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 261,
                              "end": 263,
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 266,
                              "end": 270,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 266,
                                "end": 267,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 269,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 284,
                        "end": 298,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 288,
                            "end": 297,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 288,
                              "end": 290,
                              "decorators": [],
                              "name": "a2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 293,
                              "end": 297,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 293,
                                "end": 294,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 295,
                                "end": 296,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 311,
                        "end": 325,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 315,
                            "end": 324,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 315,
                              "end": 317,
                              "decorators": [],
                              "name": "a3",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 320,
                              "end": 324,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 320,
                                "end": 321,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 322,
                                "end": 323,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      }
                    ]
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 231,
                    "end": 236,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 235,
                        "end": 236,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 236,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 204,
              "end": 209,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 208,
                  "end": 209,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 181,
        "end": 186,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 185,
            "end": 186,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 358,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 358,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 358,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 352,
                "end": 358
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 373,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 373,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForInStatement",
      "start": 375,
      "end": 462,
      "body": {
        "type": "BlockStatement",
        "start": 388,
        "end": 462,
        "body": [
          {
            "type": "ForInStatement",
            "start": 394,
            "end": 460,
            "body": {
              "type": "BlockStatement",
              "start": 407,
              "end": 460,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 417,
                  "end": 431,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 421,
                      "end": 430,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 423,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 426,
                        "end": 430,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 427,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 429,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 440,
                  "end": 454,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 444,
                      "end": 453,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 446,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 449,
                        "end": 453,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 450,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 451,
                          "end": 452,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "Identifier",
        "start": 380,
        "end": 381,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 385,
        "end": 386,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 477,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 477,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 477,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 471,
                "end": 477
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 479,
      "end": 518,
      "body": {
        "type": "BlockStatement",
        "start": 496,
        "end": 518,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 502,
            "end": 516,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 506,
                "end": 515,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 508,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 511,
                  "end": 515,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 512,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 514,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 484,
        "end": 489,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 488,
            "end": 489,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 493,
        "end": 494,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForInStatement",
      "start": 519,
      "end": 554,
      "body": {
        "type": "BlockStatement",
        "start": 532,
        "end": 554,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 538,
            "end": 552,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 542,
                "end": 551,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 544,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 547,
                  "end": 551,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "Identifier",
        "start": 524,
        "end": 525,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 529,
        "end": 530,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
