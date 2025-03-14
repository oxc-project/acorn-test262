commentsOverloads.ts
```json
{
  "type": "Program",
  "start": 26,
  "end": 3585,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 26,
      "end": 69,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 37,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 59,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 68,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 62,
          "end": 68
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 70,
      "end": 101,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 81,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 82,
          "end": 91,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 91,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 85,
              "end": 91
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 92,
        "end": 100,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 94,
          "end": 100
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 143,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 143,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 131,
            "end": 141,
            "argument": {
              "type": "Literal",
              "start": 138,
              "end": 140,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 123,
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 123,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 120,
              "end": 123
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 156,
      "expression": {
        "type": "CallExpression",
        "start": 144,
        "end": 155,
        "arguments": [
          {
            "type": "Literal",
            "start": 147,
            "end": 154,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 144,
          "end": 146,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 164,
      "expression": {
        "type": "CallExpression",
        "start": 157,
        "end": 163,
        "arguments": [
          {
            "type": "Literal",
            "start": 160,
            "end": 162,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 157,
          "end": 159,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 165,
      "end": 196,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 177,
          "end": 186,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 186,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 180,
              "end": 186
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 187,
        "end": 195,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 189,
          "end": 195
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 223,
      "end": 254,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 235,
          "end": 244,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 244,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 238,
              "end": 244
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 245,
        "end": 253,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 247,
          "end": 253
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 325,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 307,
        "end": 325,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 313,
            "end": 323,
            "argument": {
              "type": "Literal",
              "start": 320,
              "end": 322,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 295,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 296,
          "end": 305,
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 300,
            "end": 305,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 302,
              "end": 305
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 338,
      "expression": {
        "type": "CallExpression",
        "start": 326,
        "end": 337,
        "arguments": [
          {
            "type": "Literal",
            "start": 329,
            "end": 336,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 326,
          "end": 328,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 346,
      "expression": {
        "type": "CallExpression",
        "start": 339,
        "end": 345,
        "arguments": [
          {
            "type": "Literal",
            "start": 342,
            "end": 344,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 339,
          "end": 341,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 347,
      "end": 378,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 358,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 359,
          "end": 368,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 360,
            "end": 368,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 362,
              "end": 368
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 369,
        "end": 377,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 371,
          "end": 377
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 379,
      "end": 410,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 390,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 391,
          "end": 400,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 392,
            "end": 400,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 394,
              "end": 400
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 401,
        "end": 409,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 403,
          "end": 409
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 452,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 434,
        "end": 452,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 440,
            "end": 450,
            "argument": {
              "type": "Literal",
              "start": 447,
              "end": 449,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 422,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 423,
          "end": 432,
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 427,
            "end": 432,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 429,
              "end": 432
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 465,
      "expression": {
        "type": "CallExpression",
        "start": 453,
        "end": 464,
        "arguments": [
          {
            "type": "Literal",
            "start": 456,
            "end": 463,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 453,
          "end": 455,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 473,
      "expression": {
        "type": "CallExpression",
        "start": 466,
        "end": 472,
        "arguments": [
          {
            "type": "Literal",
            "start": 469,
            "end": 471,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 466,
          "end": 468,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 524,
      "end": 567,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 535,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 548,
          "end": 557,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 557,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 551,
              "end": 557
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 558,
        "end": 566,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 560,
          "end": 566
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 618,
      "end": 649,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 627,
        "end": 629,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 630,
          "end": 639,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 631,
            "end": 639,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 633,
              "end": 639
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 640,
        "end": 648,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 642,
          "end": 648
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 650,
      "end": 691,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 673,
        "end": 691,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 679,
            "end": 689,
            "argument": {
              "type": "Literal",
              "start": 686,
              "end": 688,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 661,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 662,
          "end": 671,
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 666,
            "end": 671,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 668,
              "end": 671
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 692,
      "end": 704,
      "expression": {
        "type": "CallExpression",
        "start": 692,
        "end": 703,
        "arguments": [
          {
            "type": "Literal",
            "start": 695,
            "end": 702,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 692,
          "end": 694,
          "decorators": [],
          "name": "f4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 705,
      "end": 712,
      "expression": {
        "type": "CallExpression",
        "start": 705,
        "end": 711,
        "arguments": [
          {
            "type": "Literal",
            "start": 708,
            "end": 710,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 705,
          "end": 707,
          "decorators": [],
          "name": "f4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 713,
      "end": 1353,
      "body": {
        "type": "TSInterfaceBody",
        "start": 726,
        "end": 1353,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 758,
            "end": 791,
            "params": [
              {
                "type": "Identifier",
                "start": 772,
                "end": 781,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 773,
                  "end": 781,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 775,
                    "end": 781
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 782,
              "end": 790,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 784,
                "end": 790
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 825,
            "end": 845,
            "params": [
              {
                "type": "Identifier",
                "start": 826,
                "end": 835,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 827,
                  "end": 835,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 829,
                    "end": 835
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 836,
              "end": 844,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 838,
                "end": 844
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 866,
            "end": 889,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 866,
              "end": 869,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 870,
                "end": 879,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 871,
                  "end": 879,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 873,
                    "end": 879
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 880,
              "end": 888,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 882,
                "end": 888
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 910,
            "end": 933,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 910,
              "end": 913,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 914,
                "end": 923,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 915,
                  "end": 923,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 924,
              "end": 932,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 926,
                "end": 932
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 951,
            "end": 978,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 951,
              "end": 954,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 955,
                "end": 968,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 958,
                  "end": 968,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 960,
                    "end": 968,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 960,
                      "end": 966
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 969,
              "end": 977,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 971,
                "end": 977
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1000,
            "end": 1027,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1000,
              "end": 1003,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1004,
                "end": 1017,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1007,
                  "end": 1017,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1009,
                    "end": 1017,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1009,
                      "end": 1015
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1018,
              "end": 1026,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1020,
                "end": 1026
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1033,
            "end": 1057,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1033,
              "end": 1037,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1038,
                "end": 1047,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1039,
                  "end": 1047,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1041,
                    "end": 1047
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1048,
              "end": 1056,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1050,
                "end": 1056
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1079,
            "end": 1103,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1079,
              "end": 1083,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1084,
                "end": 1093,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1085,
                  "end": 1093,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1087,
                    "end": 1093
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1094,
              "end": 1102,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1096,
                "end": 1102
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1108,
            "end": 1132,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1108,
              "end": 1112,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1113,
                "end": 1122,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1114,
                  "end": 1122,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1116,
                    "end": 1122
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1123,
              "end": 1131,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1125,
                "end": 1131
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1137,
            "end": 1161,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1137,
              "end": 1141,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1142,
                "end": 1151,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1143,
                  "end": 1151,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1145,
                    "end": 1151
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1152,
              "end": 1160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1154,
                "end": 1160
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1183,
            "end": 1207,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1183,
              "end": 1187,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1188,
                "end": 1197,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1189,
                  "end": 1197,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1191,
                    "end": 1197
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1198,
              "end": 1206,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1200,
                "end": 1206
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1212,
            "end": 1236,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1212,
              "end": 1216,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1217,
                "end": 1226,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1218,
                  "end": 1226,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1220,
                    "end": 1226
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1227,
              "end": 1235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1229,
                "end": 1235
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1261,
            "end": 1279,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1261,
              "end": 1265,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1266,
                "end": 1272,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1267,
                  "end": 1272,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1269,
                    "end": 1272
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1273,
              "end": 1278,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1275,
                "end": 1278
              }
            },
            "static": false
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1298,
            "end": 1314,
            "params": [
              {
                "type": "Identifier",
                "start": 1303,
                "end": 1312,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1304,
                  "end": 1312,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1306,
                    "end": 1312
                  }
                }
              }
            ]
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1335,
            "end": 1351,
            "params": [
              {
                "type": "Identifier",
                "start": 1340,
                "end": 1349,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1341,
                  "end": 1349,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1343,
                    "end": 1349
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 723,
        "end": 725,
        "decorators": [],
        "name": "i1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1354,
      "end": 1367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1358,
          "end": 1366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1358,
            "end": 1366,
            "decorators": [],
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1362,
              "end": 1366,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1364,
                "end": 1366,
                "typeName": {
                  "type": "Identifier",
                  "start": 1364,
                  "end": 1366,
                  "decorators": [],
                  "name": "i1",
                  "optional": false
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 1368,
      "end": 1521,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1381,
        "end": 1521,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1387,
            "end": 1403,
            "params": [
              {
                "type": "Identifier",
                "start": 1392,
                "end": 1401,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1393,
                  "end": 1401,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1395,
                    "end": 1401
                  }
                }
              }
            ]
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1424,
            "end": 1440,
            "params": [
              {
                "type": "Identifier",
                "start": 1429,
                "end": 1438,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1430,
                  "end": 1438,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1432,
                    "end": 1438
                  }
                }
              }
            ]
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1445,
            "end": 1465,
            "params": [
              {
                "type": "Identifier",
                "start": 1446,
                "end": 1455,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1447,
                  "end": 1455,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1449,
                    "end": 1455
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1456,
              "end": 1464,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1458,
                "end": 1464
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1499,
            "end": 1519,
            "params": [
              {
                "type": "Identifier",
                "start": 1500,
                "end": 1509,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1501,
                  "end": 1509,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1503,
                    "end": 1509
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1510,
              "end": 1518,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1512,
                "end": 1518
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1378,
        "end": 1380,
        "decorators": [],
        "name": "i2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1522,
      "end": 1535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1526,
          "end": 1534,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1526,
            "end": 1534,
            "decorators": [],
            "name": "i2_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1530,
              "end": 1534,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1532,
                "end": 1534,
                "typeName": {
                  "type": "Identifier",
                  "start": 1532,
                  "end": 1534,
                  "decorators": [],
                  "name": "i2",
                  "optional": false
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 1536,
      "end": 1705,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1549,
        "end": 1705,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1571,
            "end": 1587,
            "params": [
              {
                "type": "Identifier",
                "start": 1576,
                "end": 1585,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1577,
                  "end": 1585,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1579,
                    "end": 1585
                  }
                }
              }
            ]
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1608,
            "end": 1624,
            "params": [
              {
                "type": "Identifier",
                "start": 1613,
                "end": 1622,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1614,
                  "end": 1622,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1616,
                    "end": 1622
                  }
                }
              }
            ]
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1658,
            "end": 1678,
            "params": [
              {
                "type": "Identifier",
                "start": 1659,
                "end": 1668,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1660,
                  "end": 1668,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1662,
                    "end": 1668
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1669,
              "end": 1677,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1671,
                "end": 1677
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1683,
            "end": 1703,
            "params": [
              {
                "type": "Identifier",
                "start": 1684,
                "end": 1693,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1685,
                  "end": 1693,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1687,
                    "end": 1693
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1694,
              "end": 1702,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1696,
                "end": 1702
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1546,
        "end": 1548,
        "decorators": [],
        "name": "i3",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1706,
      "end": 1719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1710,
          "end": 1718,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1710,
            "end": 1718,
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1714,
              "end": 1718,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1716,
                "end": 1718,
                "typeName": {
                  "type": "Identifier",
                  "start": 1716,
                  "end": 1718,
                  "decorators": [],
                  "name": "i3",
                  "optional": false
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 1720,
      "end": 1828,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1733,
        "end": 1828,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1739,
            "end": 1755,
            "params": [
              {
                "type": "Identifier",
                "start": 1744,
                "end": 1753,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1745,
                  "end": 1753,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1747,
                    "end": 1753
                  }
                }
              }
            ]
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1760,
            "end": 1776,
            "params": [
              {
                "type": "Identifier",
                "start": 1765,
                "end": 1774,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1766,
                  "end": 1774,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1768,
                    "end": 1774
                  }
                }
              }
            ]
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1781,
            "end": 1801,
            "params": [
              {
                "type": "Identifier",
                "start": 1782,
                "end": 1791,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1783,
                  "end": 1791,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1785,
                    "end": 1791
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1792,
              "end": 1800,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1794,
                "end": 1800
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1806,
            "end": 1826,
            "params": [
              {
                "type": "Identifier",
                "start": 1807,
                "end": 1816,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1808,
                  "end": 1816,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1810,
                    "end": 1816
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1817,
              "end": 1825,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1819,
                "end": 1825
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1730,
        "end": 1732,
        "decorators": [],
        "name": "i4",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1829,
      "end": 2623,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1837,
        "end": 2623,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1843,
            "end": 1875,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1850,
              "end": 1855,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1855,
              "end": 1875,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1856,
                  "end": 1865,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1857,
                    "end": 1865,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1859,
                      "end": 1865
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1866,
                "end": 1874,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1868,
                  "end": 1874
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1880,
            "end": 1912,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1887,
              "end": 1892,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1892,
              "end": 1912,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1893,
                  "end": 1902,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1894,
                    "end": 1902,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1896,
                      "end": 1902
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1903,
                "end": 1911,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1905,
                  "end": 1911
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1917,
            "end": 1967,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1924,
              "end": 1929,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1929,
              "end": 1967,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1941,
                "end": 1967,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1951,
                    "end": 1961,
                    "argument": {
                      "type": "Literal",
                      "start": 1958,
                      "end": 1960,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1930,
                  "end": 1939,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1934,
                    "end": 1939,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1936,
                      "end": 1939
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1990,
            "end": 2022,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1997,
              "end": 2002,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2002,
              "end": 2022,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2003,
                  "end": 2012,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2004,
                    "end": 2012,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2006,
                      "end": 2012
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2013,
                "end": 2021,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2015,
                  "end": 2021
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2027,
            "end": 2059,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2034,
              "end": 2039,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2039,
              "end": 2059,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2040,
                  "end": 2049,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2041,
                    "end": 2049,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2043,
                      "end": 2049
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2050,
                "end": 2058,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2052,
                  "end": 2058
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2064,
            "end": 2114,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2071,
              "end": 2076,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2076,
              "end": 2114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2088,
                "end": 2114,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2098,
                    "end": 2108,
                    "argument": {
                      "type": "Literal",
                      "start": 2105,
                      "end": 2107,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2077,
                  "end": 2086,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2081,
                    "end": 2086,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2083,
                      "end": 2086
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2119,
            "end": 2151,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2126,
              "end": 2131,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2131,
              "end": 2151,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2132,
                  "end": 2141,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2133,
                    "end": 2141,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2135,
                      "end": 2141
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2142,
                "end": 2150,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2144,
                  "end": 2150
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2174,
            "end": 2206,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2181,
              "end": 2186,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2186,
              "end": 2206,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2187,
                  "end": 2196,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2188,
                    "end": 2196,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2190,
                      "end": 2196
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2197,
                "end": 2205,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2199,
                  "end": 2205
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2211,
            "end": 2261,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2218,
              "end": 2223,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2223,
              "end": 2261,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2235,
                "end": 2261,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2245,
                    "end": 2255,
                    "argument": {
                      "type": "Literal",
                      "start": 2252,
                      "end": 2254,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2224,
                  "end": 2233,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2228,
                    "end": 2233,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2230,
                      "end": 2233
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2284,
            "end": 2316,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2291,
              "end": 2296,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2296,
              "end": 2316,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2297,
                  "end": 2306,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2298,
                    "end": 2306,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2300,
                      "end": 2306
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2307,
                "end": 2315,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2309,
                  "end": 2315
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2339,
            "end": 2371,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2346,
              "end": 2351,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2351,
              "end": 2371,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2352,
                  "end": 2361,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2353,
                    "end": 2361,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2355,
                      "end": 2361
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2362,
                "end": 2370,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2364,
                  "end": 2370
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2376,
            "end": 2426,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2383,
              "end": 2388,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2388,
              "end": 2426,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2400,
                "end": 2426,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2410,
                    "end": 2420,
                    "argument": {
                      "type": "Literal",
                      "start": 2417,
                      "end": 2419,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2389,
                  "end": 2398,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2393,
                    "end": 2398,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2395,
                      "end": 2398
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2449,
            "end": 2481,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2456,
              "end": 2461,
              "decorators": [],
              "name": "prop5",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2461,
              "end": 2481,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2462,
                  "end": 2471,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2463,
                    "end": 2471,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2465,
                      "end": 2471
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2472,
                "end": 2480,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2474,
                  "end": 2480
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2504,
            "end": 2536,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2511,
              "end": 2516,
              "decorators": [],
              "name": "prop5",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2516,
              "end": 2536,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2517,
                  "end": 2526,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2518,
                    "end": 2526,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2520,
                      "end": 2526
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2527,
                "end": 2535,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2529,
                  "end": 2535
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2571,
            "end": 2621,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2578,
              "end": 2583,
              "decorators": [],
              "name": "prop5",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2583,
              "end": 2621,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2595,
                "end": 2621,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2605,
                    "end": 2615,
                    "argument": {
                      "type": "Literal",
                      "start": 2612,
                      "end": 2614,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2584,
                  "end": 2593,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2588,
                    "end": 2593,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2590,
                      "end": 2593
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1835,
        "end": 1836,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2624,
      "end": 2727,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2633,
        "end": 2727,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2639,
            "end": 2662,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2639,
              "end": 2650,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2650,
              "end": 2662,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2651,
                  "end": 2660,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2652,
                    "end": 2660,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2654,
                      "end": 2660
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2667,
            "end": 2690,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2667,
              "end": 2678,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2678,
              "end": 2690,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2679,
                  "end": 2688,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2680,
                    "end": 2688,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2682,
                      "end": 2688
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2695,
            "end": 2725,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2695,
              "end": 2706,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2706,
              "end": 2725,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2718,
                "end": 2725,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2707,
                  "end": 2716,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2711,
                    "end": 2716,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2713,
                      "end": 2716
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2630,
        "end": 2632,
        "decorators": [],
        "name": "c1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2728,
      "end": 2858,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2737,
        "end": 2858,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2758,
            "end": 2781,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2758,
              "end": 2769,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2769,
              "end": 2781,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2770,
                  "end": 2779,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2771,
                    "end": 2779,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2773,
                      "end": 2779
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2798,
            "end": 2821,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2798,
              "end": 2809,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2809,
              "end": 2821,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2810,
                  "end": 2819,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2811,
                    "end": 2819,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2813,
                      "end": 2819
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2826,
            "end": 2856,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2826,
              "end": 2837,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2837,
              "end": 2856,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2849,
                "end": 2856,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2838,
                  "end": 2847,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2842,
                    "end": 2847,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2844,
                      "end": 2847
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2734,
        "end": 2736,
        "decorators": [],
        "name": "c2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2859,
      "end": 2977,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2868,
        "end": 2977,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2874,
            "end": 2897,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2874,
              "end": 2885,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2885,
              "end": 2897,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2886,
                  "end": 2895,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2887,
                    "end": 2895,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2889,
                      "end": 2895
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2917,
            "end": 2940,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2917,
              "end": 2928,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2928,
              "end": 2940,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2929,
                  "end": 2938,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2930,
                    "end": 2938,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2932,
                      "end": 2938
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2945,
            "end": 2975,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2945,
              "end": 2956,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2956,
              "end": 2975,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2968,
                "end": 2975,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2957,
                  "end": 2966,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2961,
                    "end": 2966,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2963,
                      "end": 2966
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2865,
        "end": 2867,
        "decorators": [],
        "name": "c3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2978,
      "end": 3127,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2987,
        "end": 3127,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3008,
            "end": 3031,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3008,
              "end": 3019,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3019,
              "end": 3031,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3020,
                  "end": 3029,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3021,
                    "end": 3029,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3023,
                      "end": 3029
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3051,
            "end": 3074,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3051,
              "end": 3062,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3062,
              "end": 3074,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3063,
                  "end": 3072,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3064,
                    "end": 3072,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3066,
                      "end": 3072
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3095,
            "end": 3125,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3095,
              "end": 3106,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3106,
              "end": 3125,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3118,
                "end": 3125,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3107,
                  "end": 3116,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3111,
                    "end": 3116,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3113,
                      "end": 3116
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2984,
        "end": 2986,
        "decorators": [],
        "name": "c4",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3128,
      "end": 3289,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3137,
        "end": 3289,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3158,
            "end": 3181,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3158,
              "end": 3169,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3169,
              "end": 3181,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3170,
                  "end": 3179,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3171,
                    "end": 3179,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3173,
                      "end": 3179
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3201,
            "end": 3224,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3201,
              "end": 3212,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3212,
              "end": 3224,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3213,
                  "end": 3222,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3214,
                    "end": 3222,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3216,
                      "end": 3222
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3257,
            "end": 3287,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3257,
              "end": 3268,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3268,
              "end": 3287,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3280,
                "end": 3287,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3269,
                  "end": 3278,
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3273,
                    "end": 3278,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3275,
                      "end": 3278
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3134,
        "end": 3136,
        "decorators": [],
        "name": "c5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3290,
      "end": 3308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3294,
          "end": 3307,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3294,
            "end": 3297,
            "decorators": [],
            "name": "c_i",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3300,
            "end": 3307,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 3304,
              "end": 3305,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3310,
      "end": 3334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3314,
          "end": 3333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3314,
            "end": 3320,
            "decorators": [],
            "name": "c1_i_1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3323,
            "end": 3333,
            "arguments": [
              {
                "type": "Literal",
                "start": 3330,
                "end": 3332,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3327,
              "end": 3329,
              "decorators": [],
              "name": "c1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3335,
      "end": 3364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3339,
          "end": 3363,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3339,
            "end": 3345,
            "decorators": [],
            "name": "c1_i_2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3348,
            "end": 3363,
            "arguments": [
              {
                "type": "Literal",
                "start": 3355,
                "end": 3362,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3352,
              "end": 3354,
              "decorators": [],
              "name": "c1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3365,
      "end": 3389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3369,
          "end": 3388,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3369,
            "end": 3375,
            "decorators": [],
            "name": "c2_i_1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3378,
            "end": 3388,
            "arguments": [
              {
                "type": "Literal",
                "start": 3385,
                "end": 3387,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3382,
              "end": 3384,
              "decorators": [],
              "name": "c2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3390,
      "end": 3419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3394,
          "end": 3418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3394,
            "end": 3400,
            "decorators": [],
            "name": "c2_i_2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3403,
            "end": 3418,
            "arguments": [
              {
                "type": "Literal",
                "start": 3410,
                "end": 3417,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3407,
              "end": 3409,
              "decorators": [],
              "name": "c2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3420,
      "end": 3444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3424,
          "end": 3443,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3424,
            "end": 3430,
            "decorators": [],
            "name": "c3_i_1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3433,
            "end": 3443,
            "arguments": [
              {
                "type": "Literal",
                "start": 3440,
                "end": 3442,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3437,
              "end": 3439,
              "decorators": [],
              "name": "c3",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3445,
      "end": 3474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3449,
          "end": 3473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3449,
            "end": 3455,
            "decorators": [],
            "name": "c3_i_2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3458,
            "end": 3473,
            "arguments": [
              {
                "type": "Literal",
                "start": 3465,
                "end": 3472,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3462,
              "end": 3464,
              "decorators": [],
              "name": "c3",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3475,
      "end": 3499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3479,
          "end": 3498,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3479,
            "end": 3485,
            "decorators": [],
            "name": "c4_i_1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3488,
            "end": 3498,
            "arguments": [
              {
                "type": "Literal",
                "start": 3495,
                "end": 3497,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3492,
              "end": 3494,
              "decorators": [],
              "name": "c4",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3500,
      "end": 3529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3504,
          "end": 3528,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3504,
            "end": 3510,
            "decorators": [],
            "name": "c4_i_2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3513,
            "end": 3528,
            "arguments": [
              {
                "type": "Literal",
                "start": 3520,
                "end": 3527,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3517,
              "end": 3519,
              "decorators": [],
              "name": "c4",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3530,
      "end": 3554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3534,
          "end": 3553,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3534,
            "end": 3540,
            "decorators": [],
            "name": "c5_i_1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3543,
            "end": 3553,
            "arguments": [
              {
                "type": "Literal",
                "start": 3550,
                "end": 3552,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3547,
              "end": 3549,
              "decorators": [],
              "name": "c5",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3555,
      "end": 3584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3559,
          "end": 3583,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3559,
            "end": 3565,
            "decorators": [],
            "name": "c5_i_2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 3568,
            "end": 3583,
            "arguments": [
              {
                "type": "Literal",
                "start": 3575,
                "end": 3582,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3572,
              "end": 3574,
              "decorators": [],
              "name": "c5",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
