__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 735,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "fa",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 9,
            "end": 38,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 25,
              "end": 38,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 27,
                  "end": 36,
                  "argument": {
                    "type": "Literal",
                    "start": 34,
                    "end": 35,
                    "value": 3,
                    "raw": "3"
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 58,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 39,
          "end": 41,
          "decorators": [],
          "name": "fa",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 44,
          "end": 58,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 55,
            "end": 58,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 107,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "decorators": [],
            "name": "fv",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 88,
            "end": 107,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 104,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 100,
                "end": 104
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 105,
              "end": 107,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 137,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "decorators": [],
          "name": "fv",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 113,
          "end": 137,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 124,
            "end": 137,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 126,
                "end": 135,
                "argument": {
                  "type": "Literal",
                  "start": 133,
                  "end": 134,
                  "value": 0,
                  "raw": "0"
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 154,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 170,
        "decorators": [],
        "name": "execAny",
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
          "start": 171,
          "end": 194,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 194,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 180,
              "end": 194,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 181,
                  "end": 188,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 188,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 185,
                      "end": 188
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 189,
                "end": 194,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 191,
                  "end": 194
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 218,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 198,
            "end": 216,
            "argument": {
              "type": "CallExpression",
              "start": 205,
              "end": 216,
              "callee": {
                "type": "Identifier",
                "start": 205,
                "end": 213,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 243,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 242,
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 226,
          "decorators": [],
          "name": "execAny",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 227,
            "end": 241,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 239,
              "end": 241,
              "body": []
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 260,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 277,
        "decorators": [],
        "name": "execVoid",
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
          "start": 278,
          "end": 302,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 302,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 287,
              "end": 302,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 288,
                  "end": 295,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 291,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 292,
                      "end": 295
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 296,
                "end": 302,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 298,
                  "end": 302
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 320,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 306,
            "end": 318,
            "expression": {
              "type": "CallExpression",
              "start": 306,
              "end": 317,
              "callee": {
                "type": "Identifier",
                "start": 306,
                "end": 314,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 315,
                  "end": 316,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 355,
      "expression": {
        "type": "CallExpression",
        "start": 321,
        "end": 354,
        "callee": {
          "type": "Identifier",
          "start": 321,
          "end": 329,
          "decorators": [],
          "name": "execVoid",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 330,
            "end": 353,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 342,
              "end": 353,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 343,
                  "end": 352,
                  "argument": {
                    "type": "Literal",
                    "start": 350,
                    "end": 351,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 433,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 433,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 393,
            "decorators": [],
            "name": "fra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 393,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 381,
                "end": 393,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 382,
                    "end": 387,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 384,
                        "end": 387
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 388,
                  "end": 393,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 390,
                    "end": 393
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 396,
            "end": 433,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 407,
              "end": 433,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 409,
                  "end": 431,
                  "argument": {
                    "type": "FunctionExpression",
                    "start": 416,
                    "end": 430,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 428,
                      "end": 430,
                      "body": []
                    },
                    "expression": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 521,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 471,
            "decorators": [],
            "name": "frv",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 471,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 458,
                "end": 471,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 459,
                    "end": 464,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 460,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 461,
                        "end": 464
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 465,
                  "end": 471,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 467,
                    "end": 471
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 474,
            "end": 521,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 485,
              "end": 521,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 487,
                  "end": 519,
                  "argument": {
                    "type": "FunctionExpression",
                    "start": 494,
                    "end": 519,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 506,
                      "end": 519,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 508,
                          "end": 517,
                          "argument": {
                            "type": "Literal",
                            "start": 515,
                            "end": 516,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    "expression": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 624,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 624,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 563,
            "decorators": [],
            "name": "fra3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 546,
              "end": 563,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 548,
                "end": 563,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 549,
                    "end": 554,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 550,
                      "end": 554,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 551,
                        "end": 554
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 555,
                  "end": 563,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 566,
            "end": 624,
            "callee": {
              "type": "FunctionExpression",
              "start": 567,
              "end": 621,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 578,
                "end": 621,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 580,
                    "end": 619,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 587,
                      "end": 618,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 597,
                          "end": 605,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 598,
                            "end": 605,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 599,
                              "end": 605
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 607,
                        "end": 618,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 608,
                            "end": 617,
                            "argument": {
                              "type": "Identifier",
                              "start": 615,
                              "end": 616,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 640,
      "end": 719,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 719,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 665,
            "decorators": [],
            "name": "frv3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 648,
              "end": 665,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 650,
                "end": 665,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 651,
                    "end": 656,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 652,
                      "end": 656,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 653,
                        "end": 656
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 657,
                  "end": 665,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 659,
                    "end": 665
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 668,
            "end": 719,
            "callee": {
              "type": "FunctionExpression",
              "start": 669,
              "end": 716,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 680,
                "end": 716,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 682,
                    "end": 714,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 689,
                      "end": 714,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 701,
                        "end": 714,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 703,
                            "end": 712,
                            "argument": {
                              "type": "Literal",
                              "start": 710,
                              "end": 711,
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        ]
                      },
                      "expression": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "typeArguments": null,
            "arguments": [],
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
