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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "a",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 11,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 31,
            "name": "b",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 34,
      "end": 174,
      "left": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 44,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 63,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 66,
                  "end": 70,
                  "object": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 82,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 85,
                  "end": 91,
                  "object": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 103,
                  "name": "a3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 106,
                  "end": 111,
                  "object": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "UnaryExpression",
                    "start": 108,
                    "end": 110,
                    "operator": "+",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 123,
                  "name": "b1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 126,
                  "end": 130,
                  "object": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 142,
                  "name": "b2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 145,
                  "end": 151,
                  "object": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "name": "b3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 166,
                  "end": 171,
                  "object": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "UnaryExpression",
                    "start": 168,
                    "end": 170,
                    "operator": "+",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 176,
      "end": 343,
      "left": {
        "type": "VariableDeclaration",
        "start": 181,
        "end": 186,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 185,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 343,
        "body": [
          {
            "type": "ForInStatement",
            "start": 199,
            "end": 341,
            "left": {
              "type": "VariableDeclaration",
              "start": 204,
              "end": 209,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 208,
                  "end": 209,
                  "id": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 216,
              "end": 341,
              "body": [
                {
                  "type": "ForInStatement",
                  "start": 226,
                  "end": 335,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 231,
                    "end": 236,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 235,
                        "end": 236,
                        "id": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 236,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "id": {
                              "type": "Identifier",
                              "start": 261,
                              "end": 263,
                              "name": "a1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 266,
                              "end": 270,
                              "object": {
                                "type": "Identifier",
                                "start": 266,
                                "end": 267,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 269,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
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
                            "id": {
                              "type": "Identifier",
                              "start": 288,
                              "end": 290,
                              "name": "a2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 293,
                              "end": 297,
                              "object": {
                                "type": "Identifier",
                                "start": 293,
                                "end": 294,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 295,
                                "end": 296,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
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
                            "id": {
                              "type": "Identifier",
                              "start": 315,
                              "end": 317,
                              "name": "a3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 320,
                              "end": 324,
                              "object": {
                                "type": "Identifier",
                                "start": 320,
                                "end": 321,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 322,
                                "end": 323,
                                "name": "z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 358,
            "name": "i",
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
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 373,
            "name": "j",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 373,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 375,
      "end": 462,
      "left": {
        "type": "Identifier",
        "start": 380,
        "end": 381,
        "name": "i",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 385,
        "end": 386,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 388,
        "end": 462,
        "body": [
          {
            "type": "ForInStatement",
            "start": 394,
            "end": 460,
            "left": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 423,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 426,
                        "end": 430,
                        "object": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 427,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 429,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 446,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 449,
                        "end": 453,
                        "object": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 450,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 451,
                          "end": 452,
                          "name": "j",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            }
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 477,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 477,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 471,
                "end": 477
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
      "type": "ForInStatement",
      "start": 479,
      "end": 518,
      "left": {
        "type": "VariableDeclaration",
        "start": 484,
        "end": 489,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 488,
            "end": 489,
            "id": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "name": "s",
              "typeAnnotation": null,
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
      "right": {
        "type": "Identifier",
        "start": 493,
        "end": 494,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 508,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 511,
                  "end": 515,
                  "object": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 512,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 514,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 519,
      "end": 554,
      "left": {
        "type": "Identifier",
        "start": 524,
        "end": 525,
        "name": "s",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 529,
        "end": 530,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 544,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 547,
                  "end": 551,
                  "object": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
