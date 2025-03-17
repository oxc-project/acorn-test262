__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 26,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 42,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 42,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 50,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 58,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
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
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 61,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 85,
        "name": "tryCatch0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 104,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 101,
                      "end": 104
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 112,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 145,
              "end": 173,
              "param": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 177,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "name": "tryCatch1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 220,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 215,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 217,
                      "end": 220
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 222,
                "end": 228,
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 228,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 223,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 225,
                      "end": 228
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 267,
              "end": 295,
              "param": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 299,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 323,
        "name": "tryCatch2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 342,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 339,
                      "end": 342
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 344,
                "end": 350,
                "id": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 350,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 347,
                      "end": 350
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 383,
              "end": 417,
              "param": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 445,
        "name": "tryCatch3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 483,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 478,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 480,
                      "end": 483
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 485,
                "end": 491,
                "id": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 491,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 491,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 488,
                      "end": 491
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 530,
              "end": 571,
              "param": {
                "type": "Identifier",
                "start": 537,
                "end": 538,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 564,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 447,
        "end": 466,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 449,
          "end": 466,
          "typeName": {
            "type": "Identifier",
            "start": 449,
            "end": 456,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 574,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 589,
        "end": 600,
        "name": "tryFinally0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 619,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 614,
                    "end": 619,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 616,
                      "end": 619
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 621,
                "end": 627,
                "id": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 627,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 627,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 624,
                      "end": 627
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": null,
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 690,
      "end": 810,
      "id": {
        "type": "Identifier",
        "start": 705,
        "end": 716,
        "name": "tryFinally1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 735,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 730,
                    "end": 735,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 732,
                      "end": 735
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 737,
                "end": 743,
                "id": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 743,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 738,
                    "end": 743,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 740,
                      "end": 743
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": null,
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 812,
      "end": 932,
      "id": {
        "type": "Identifier",
        "start": 827,
        "end": 838,
        "name": "tryFinally2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 857,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 852,
                    "end": 857,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 854,
                      "end": 857
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 859,
                "end": 865,
                "id": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 865,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 860,
                    "end": 865,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 862,
                      "end": 865
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": null,
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 934,
      "end": 1094,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 965,
        "name": "tryCatchFinally0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 978,
                  "end": 984,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 979,
                    "end": 984,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 981,
                      "end": 984
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 986,
                "end": 992,
                "id": {
                  "type": "Identifier",
                  "start": 986,
                  "end": 992,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 987,
                    "end": 992,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 989,
                      "end": 992
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 994,
                "end": 1000,
                "id": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 1000,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 995,
                    "end": 1000,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 997,
                      "end": 1000
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1033,
              "end": 1061,
              "param": {
                "type": "Identifier",
                "start": 1040,
                "end": 1041,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1096,
      "end": 1262,
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1127,
        "name": "tryCatchFinally1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1146,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1141,
                    "end": 1146,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1143,
                      "end": 1146
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1148,
                "end": 1154,
                "id": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1154,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1149,
                    "end": 1154,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1151,
                      "end": 1154
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1156,
                "end": 1162,
                "id": {
                  "type": "Identifier",
                  "start": 1156,
                  "end": 1162,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1157,
                    "end": 1162,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1159,
                      "end": 1162
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1201,
              "end": 1229,
              "param": {
                "type": "Identifier",
                "start": 1208,
                "end": 1209,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1264,
      "end": 1430,
      "id": {
        "type": "Identifier",
        "start": 1279,
        "end": 1295,
        "name": "tryCatchFinally2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1314,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1309,
                    "end": 1314,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1311,
                      "end": 1314
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1316,
                "end": 1322,
                "id": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1322,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1317,
                    "end": 1322,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1319,
                      "end": 1322
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1324,
                "end": 1330,
                "id": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1330,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1325,
                    "end": 1330,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1327,
                      "end": 1330
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1363,
              "end": 1397,
              "param": {
                "type": "Identifier",
                "start": 1370,
                "end": 1371,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1432,
      "end": 1598,
      "id": {
        "type": "Identifier",
        "start": 1447,
        "end": 1463,
        "name": "tryCatchFinally3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1482,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1477,
                    "end": 1482,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1479,
                      "end": 1482
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1484,
                "end": 1490,
                "id": {
                  "type": "Identifier",
                  "start": 1484,
                  "end": 1490,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1485,
                    "end": 1490,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1487,
                      "end": 1490
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1492,
                "end": 1498,
                "id": {
                  "type": "Identifier",
                  "start": 1492,
                  "end": 1498,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1493,
                    "end": 1498,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1495,
                      "end": 1498
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1531,
              "end": 1559,
              "param": {
                "type": "Identifier",
                "start": 1538,
                "end": 1539,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
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
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
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
