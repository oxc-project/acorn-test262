es5-asyncFunctionTryStatements.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1598,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 26,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 42,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 42,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 50,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 58,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 61,
      "end": 175,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 175,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 94,
            "end": 113,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 98,
                "end": 104,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 104,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 101,
                      "end": 104
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 112,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
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
            "type": "TryStatement",
            "start": 118,
            "end": 173,
            "block": {
              "type": "BlockStatement",
              "start": 122,
              "end": 140,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 132,
                  "end": 134,
                  "expression": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 145,
              "end": 173,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 173,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 167,
                    "expression": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 85,
        "decorators": [],
        "name": "tryCatch0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 177,
      "end": 297,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 297,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 210,
            "end": 229,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 214,
                "end": 220,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 215,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 217,
                      "end": 220
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 222,
                "end": 228,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 228,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 223,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 225,
                      "end": 228
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
            "type": "TryStatement",
            "start": 234,
            "end": 295,
            "block": {
              "type": "BlockStatement",
              "start": 238,
              "end": 262,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 248,
                  "end": 256,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 248,
                    "end": 255,
                    "argument": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 267,
              "end": 295,
              "body": {
                "type": "BlockStatement",
                "start": 277,
                "end": 295,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 287,
                    "end": 289,
                    "expression": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "decorators": [],
        "name": "tryCatch1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 299,
      "end": 419,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 326,
        "end": 419,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 332,
            "end": 351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 336,
                "end": 342,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 342,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 339,
                      "end": 342
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 344,
                "end": 350,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 350,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 347,
                      "end": 350
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
            "type": "TryStatement",
            "start": 356,
            "end": 417,
            "block": {
              "type": "BlockStatement",
              "start": 360,
              "end": 378,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 370,
                  "end": 372,
                  "expression": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 371,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 383,
              "end": 417,
              "body": {
                "type": "BlockStatement",
                "start": 393,
                "end": 417,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 403,
                    "end": 411,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 403,
                      "end": 410,
                      "argument": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 410,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 323,
        "decorators": [],
        "name": "tryCatch2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 573,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 467,
        "end": 573,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 473,
            "end": 492,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 477,
                "end": 483,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 483,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 478,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 480,
                      "end": 483
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 485,
                "end": 491,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 491,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 491,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 488,
                      "end": 491
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
            "type": "TryStatement",
            "start": 497,
            "end": 571,
            "block": {
              "type": "BlockStatement",
              "start": 501,
              "end": 525,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 511,
                  "end": 519,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 511,
                    "end": 518,
                    "argument": {
                      "type": "Identifier",
                      "start": 517,
                      "end": 518,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 530,
              "end": 571,
              "body": {
                "type": "BlockStatement",
                "start": 540,
                "end": 571,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 550,
                    "end": 565,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 557,
                      "end": 564,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 564,
                        "decorators": [],
                        "name": "e",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 537,
                "end": 538,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 445,
        "decorators": [],
        "name": "tryCatch3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 447,
        "end": 466,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 449,
          "end": 466,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 456,
            "end": 466,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 457,
                "end": 465,
                "typeName": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 465,
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 449,
            "end": 456,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 574,
      "end": 688,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 603,
        "end": 688,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 609,
            "end": 628,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 613,
                "end": 619,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 619,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 614,
                    "end": 619,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 616,
                      "end": 619
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 621,
                "end": 627,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 627,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 627,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 624,
                      "end": 627
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
            "type": "TryStatement",
            "start": 633,
            "end": 686,
            "block": {
              "type": "BlockStatement",
              "start": 637,
              "end": 655,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 647,
                  "end": 649,
                  "expression": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 648,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 668,
              "end": 686,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 678,
                  "end": 680,
                  "expression": {
                    "type": "Identifier",
                    "start": 678,
                    "end": 679,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "handler": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 589,
        "end": 600,
        "decorators": [],
        "name": "tryFinally0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 690,
      "end": 810,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 719,
        "end": 810,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 725,
            "end": 744,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 729,
                "end": 735,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 735,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 730,
                    "end": 735,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 732,
                      "end": 735
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 737,
                "end": 743,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 743,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 738,
                    "end": 743,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 740,
                      "end": 743
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
            "type": "TryStatement",
            "start": 749,
            "end": 808,
            "block": {
              "type": "BlockStatement",
              "start": 753,
              "end": 777,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 763,
                  "end": 771,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 763,
                    "end": 770,
                    "argument": {
                      "type": "Identifier",
                      "start": 769,
                      "end": 770,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 790,
              "end": 808,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 800,
                  "end": 802,
                  "expression": {
                    "type": "Identifier",
                    "start": 800,
                    "end": 801,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "handler": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 705,
        "end": 716,
        "decorators": [],
        "name": "tryFinally1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 812,
      "end": 932,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 841,
        "end": 932,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 847,
            "end": 866,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 851,
                "end": 857,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 857,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 852,
                    "end": 857,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 854,
                      "end": 857
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 859,
                "end": 865,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 865,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 860,
                    "end": 865,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 862,
                      "end": 865
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
            "type": "TryStatement",
            "start": 871,
            "end": 930,
            "block": {
              "type": "BlockStatement",
              "start": 875,
              "end": 893,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 885,
                  "end": 887,
                  "expression": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 886,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 906,
              "end": 930,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 916,
                  "end": 924,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 916,
                    "end": 923,
                    "argument": {
                      "type": "Identifier",
                      "start": 922,
                      "end": 923,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "handler": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 827,
        "end": 838,
        "decorators": [],
        "name": "tryFinally2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 934,
      "end": 1094,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 968,
        "end": 1094,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 974,
            "end": 1001,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 978,
                "end": 984,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 978,
                  "end": 984,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 979,
                    "end": 984,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 981,
                      "end": 984
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 986,
                "end": 992,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 986,
                  "end": 992,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 987,
                    "end": 992,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 989,
                      "end": 992
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 994,
                "end": 1000,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 1000,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 995,
                    "end": 1000,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 997,
                      "end": 1000
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
            "type": "TryStatement",
            "start": 1006,
            "end": 1092,
            "block": {
              "type": "BlockStatement",
              "start": 1010,
              "end": 1028,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1020,
                  "end": 1022,
                  "expression": {
                    "type": "Identifier",
                    "start": 1020,
                    "end": 1021,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 1074,
              "end": 1092,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1084,
                  "end": 1086,
                  "expression": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1085,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1033,
              "end": 1061,
              "body": {
                "type": "BlockStatement",
                "start": 1043,
                "end": 1061,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1053,
                    "end": 1055,
                    "expression": {
                      "type": "Identifier",
                      "start": 1053,
                      "end": 1054,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 1040,
                "end": 1041,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 965,
        "decorators": [],
        "name": "tryCatchFinally0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1096,
      "end": 1262,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1130,
        "end": 1262,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1136,
            "end": 1163,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1140,
                "end": 1146,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1146,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1141,
                    "end": 1146,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1143,
                      "end": 1146
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1148,
                "end": 1154,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1154,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1149,
                    "end": 1154,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1151,
                      "end": 1154
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1156,
                "end": 1162,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1156,
                  "end": 1162,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1157,
                    "end": 1162,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1159,
                      "end": 1162
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
            "type": "TryStatement",
            "start": 1168,
            "end": 1260,
            "block": {
              "type": "BlockStatement",
              "start": 1172,
              "end": 1196,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1182,
                  "end": 1190,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1182,
                    "end": 1189,
                    "argument": {
                      "type": "Identifier",
                      "start": 1188,
                      "end": 1189,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 1242,
              "end": 1260,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1252,
                  "end": 1254,
                  "expression": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1253,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1201,
              "end": 1229,
              "body": {
                "type": "BlockStatement",
                "start": 1211,
                "end": 1229,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1221,
                    "end": 1223,
                    "expression": {
                      "type": "Identifier",
                      "start": 1221,
                      "end": 1222,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 1208,
                "end": 1209,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1127,
        "decorators": [],
        "name": "tryCatchFinally1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1264,
      "end": 1430,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1298,
        "end": 1430,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1304,
            "end": 1331,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1308,
                "end": 1314,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1314,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1309,
                    "end": 1314,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1311,
                      "end": 1314
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1316,
                "end": 1322,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1322,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1317,
                    "end": 1322,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1319,
                      "end": 1322
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1324,
                "end": 1330,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1330,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1325,
                    "end": 1330,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1327,
                      "end": 1330
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
            "type": "TryStatement",
            "start": 1336,
            "end": 1428,
            "block": {
              "type": "BlockStatement",
              "start": 1340,
              "end": 1358,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1350,
                  "end": 1352,
                  "expression": {
                    "type": "Identifier",
                    "start": 1350,
                    "end": 1351,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 1410,
              "end": 1428,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1420,
                  "end": 1422,
                  "expression": {
                    "type": "Identifier",
                    "start": 1420,
                    "end": 1421,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1363,
              "end": 1397,
              "body": {
                "type": "BlockStatement",
                "start": 1373,
                "end": 1397,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1383,
                    "end": 1391,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 1383,
                      "end": 1390,
                      "argument": {
                        "type": "Identifier",
                        "start": 1389,
                        "end": 1390,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 1370,
                "end": 1371,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1279,
        "end": 1295,
        "decorators": [],
        "name": "tryCatchFinally2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1432,
      "end": 1598,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1466,
        "end": 1598,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1472,
            "end": 1499,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1476,
                "end": 1482,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1482,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1477,
                    "end": 1482,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1479,
                      "end": 1482
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1484,
                "end": 1490,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1484,
                  "end": 1490,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1485,
                    "end": 1490,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1487,
                      "end": 1490
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1492,
                "end": 1498,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1492,
                  "end": 1498,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1493,
                    "end": 1498,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1495,
                      "end": 1498
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
            "type": "TryStatement",
            "start": 1504,
            "end": 1596,
            "block": {
              "type": "BlockStatement",
              "start": 1508,
              "end": 1526,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1518,
                  "end": 1520,
                  "expression": {
                    "type": "Identifier",
                    "start": 1518,
                    "end": 1519,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 1572,
              "end": 1596,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1582,
                  "end": 1590,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1582,
                    "end": 1589,
                    "argument": {
                      "type": "Identifier",
                      "start": 1588,
                      "end": 1589,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1531,
              "end": 1559,
              "body": {
                "type": "BlockStatement",
                "start": 1541,
                "end": 1559,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1551,
                    "end": 1553,
                    "expression": {
                      "type": "Identifier",
                      "start": 1551,
                      "end": 1552,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 1538,
                "end": 1539,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1447,
        "end": 1463,
        "decorators": [],
        "name": "tryCatchFinally3",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
