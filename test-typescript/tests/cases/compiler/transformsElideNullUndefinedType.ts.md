transformsElideNullUndefinedType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1157,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "v0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 12,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 8,
                "end": 12
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
      "type": "VariableDeclaration",
      "start": 14,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 31,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 31,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 22,
                "end": 31
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
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 70,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 70,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 56,
            "end": 68,
            "argument": {
              "type": "Literal",
              "start": 63,
              "end": 67,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "f0",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 47,
        "end": 53,
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 49,
          "end": 53
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 117,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 117,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 98,
            "end": 115,
            "argument": {
              "type": "Identifier",
              "start": 105,
              "end": 114,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 95,
        "typeAnnotation": {
          "type": "TSUndefinedKeyword",
          "start": 86,
          "end": 95
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 128,
            "end": 162,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 146,
              "end": 162,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 148,
                  "end": 160,
                  "argument": {
                    "type": "Literal",
                    "start": 155,
                    "end": 159,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 141,
                "end": 145
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 169,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 172,
            "end": 216,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 195,
              "end": 216,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 197,
                  "end": 214,
                  "argument": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 213,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 194,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 185,
                "end": 194
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "f4",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 227,
            "end": 243,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 239,
              "end": 243,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 231,
                "end": 235
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 251,
            "decorators": [],
            "name": "f5",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 254,
            "end": 280,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 271,
              "end": 280,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 267,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 258,
                "end": 267
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 283,
      "end": 308,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 305,
        "end": 308,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 294,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 303,
          "decorators": [],
          "name": "p0",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 297,
            "end": 303,
            "typeAnnotation": {
              "type": "TSNullKeyword",
              "start": 299,
              "end": 303
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 339,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 336,
        "end": 339,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 321,
          "end": 334,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 334,
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 325,
              "end": 334
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 347,
            "decorators": [],
            "name": "f8",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 350,
            "end": 373,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 370,
              "end": 373,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 360,
                "end": 368,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 368,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 364,
                    "end": 368
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 380,
            "decorators": [],
            "name": "f9",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 383,
            "end": 411,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 408,
              "end": 411,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 393,
                "end": 406,
                "decorators": [],
                "name": "p3",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 395,
                  "end": 406,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 397,
                    "end": 406
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 440,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 420,
            "decorators": [],
            "name": "f10",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 423,
            "end": 440,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 437,
              "end": 440,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 424,
                "end": 432,
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 426,
                  "end": 432,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 428,
                    "end": 432
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 473,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 448,
            "decorators": [],
            "name": "f11",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 451,
            "end": 473,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 470,
              "end": 473,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 465,
                "decorators": [],
                "name": "p5",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 454,
                  "end": 465,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 456,
                    "end": 465
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 475,
      "end": 748,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 484,
        "end": 748,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 490,
            "end": 517,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 492,
              "decorators": [],
              "name": "m0",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 492,
              "end": 517,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 501,
                "end": 517,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 503,
                    "end": 515,
                    "argument": {
                      "type": "Literal",
                      "start": 510,
                      "end": 514,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 494,
                "end": 500,
                "typeAnnotation": {
                  "type": "TSNullKeyword",
                  "start": 496,
                  "end": 500
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 522,
            "end": 559,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 524,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 524,
              "end": 559,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 538,
                "end": 559,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 540,
                    "end": 557,
                    "argument": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 556,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 526,
                "end": 537,
                "typeAnnotation": {
                  "type": "TSUndefinedKeyword",
                  "start": 528,
                  "end": 537
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 565,
            "end": 581,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 567,
              "decorators": [],
              "name": "m3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 567,
              "end": 581,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 578,
                "end": 581,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 568,
                  "end": 576,
                  "decorators": [],
                  "name": "p6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 570,
                    "end": 576,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 572,
                      "end": 576
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 586,
            "end": 607,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 588,
              "decorators": [],
              "name": "m4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 588,
              "end": 607,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 604,
                "end": 607,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 589,
                  "end": 602,
                  "decorators": [],
                  "name": "p7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 591,
                    "end": 602,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 593,
                      "end": 602
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 613,
            "end": 644,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 617,
              "end": 619,
              "decorators": [],
              "name": "a0",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 619,
              "end": 644,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 628,
                "end": 644,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 630,
                    "end": 642,
                    "argument": {
                      "type": "Literal",
                      "start": 637,
                      "end": 641,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 621,
                "end": 627,
                "typeAnnotation": {
                  "type": "TSNullKeyword",
                  "start": 623,
                  "end": 627
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 649,
            "end": 690,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 655,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 655,
              "end": 690,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 669,
                "end": 690,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 671,
                    "end": 688,
                    "argument": {
                      "type": "Identifier",
                      "start": 678,
                      "end": 687,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 657,
                "end": 668,
                "typeAnnotation": {
                  "type": "TSUndefinedKeyword",
                  "start": 659,
                  "end": 668
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 696,
            "end": 716,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 700,
              "end": 702,
              "decorators": [],
              "name": "a2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 702,
              "end": 716,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 713,
                "end": 716,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 703,
                  "end": 711,
                  "decorators": [],
                  "name": "p8",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 705,
                    "end": 711,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 707,
                      "end": 711
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 721,
            "end": 746,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
              "decorators": [],
              "name": "a3",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 727,
              "end": 746,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 743,
                "end": 746,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 728,
                  "end": 741,
                  "decorators": [],
                  "name": "p9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 730,
                    "end": 741,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 732,
                      "end": 741
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
        "start": 481,
        "end": 483,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 750,
      "end": 789,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 759,
        "end": 789,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 761,
            "end": 787,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 761,
              "end": 772,
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
              "start": 772,
              "end": 787,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 784,
                "end": 787,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 773,
                  "end": 782,
                  "decorators": [],
                  "name": "p10",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 776,
                    "end": 782,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 778,
                      "end": 782
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
        "start": 756,
        "end": 758,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 790,
      "end": 834,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 799,
        "end": 834,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 801,
            "end": 832,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 801,
              "end": 812,
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
              "start": 812,
              "end": 832,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 829,
                "end": 832,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 813,
                  "end": 827,
                  "decorators": [],
                  "name": "p11",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 816,
                    "end": 827,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 818,
                      "end": 827
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
        "start": 796,
        "end": 798,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 836,
      "end": 887,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 845,
        "end": 887,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 851,
            "end": 854,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 853,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 859,
            "end": 885,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 859,
              "end": 870,
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
              "start": 870,
              "end": 885,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 882,
                "end": 885,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 871,
                  "end": 880,
                  "decorators": [],
                  "name": "p12",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 874,
                    "end": 880,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 876,
                      "end": 880
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
        "start": 842,
        "end": 844,
        "decorators": [],
        "name": "C4",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 889,
      "end": 945,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 898,
        "end": 945,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 904,
            "end": 907,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 904,
              "end": 906,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 912,
            "end": 943,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 912,
              "end": 923,
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
              "start": 923,
              "end": 943,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 940,
                "end": 943,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 924,
                  "end": 938,
                  "decorators": [],
                  "name": "p13",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 927,
                    "end": 938,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 929,
                      "end": 938
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
        "start": 895,
        "end": 897,
        "decorators": [],
        "name": "C5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 947,
      "end": 992,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 951,
          "end": 992,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 951,
            "end": 953,
            "decorators": [],
            "name": "C6",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 956,
            "end": 992,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 962,
              "end": 992,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 964,
                  "end": 990,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 964,
                    "end": 975,
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
                    "start": 975,
                    "end": 990,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 987,
                      "end": 990,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 976,
                        "end": 985,
                        "decorators": [],
                        "name": "p12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 979,
                          "end": 985,
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 981,
                            "end": 985
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
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 993,
      "end": 1043,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 997,
          "end": 1043,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 997,
            "end": 999,
            "decorators": [],
            "name": "C7",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 1002,
            "end": 1043,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1008,
              "end": 1043,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1010,
                  "end": 1041,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1021,
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
                    "start": 1021,
                    "end": 1041,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1038,
                      "end": 1041,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1022,
                        "end": 1036,
                        "decorators": [],
                        "name": "p13",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1025,
                          "end": 1036,
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 1027,
                            "end": 1036
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
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1045,
      "end": 1070,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1062,
        "end": 1064,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1064,
        "end": 1067,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1065,
            "end": 1066,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1065,
              "end": 1066,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1071,
      "end": 1082,
      "expression": {
        "type": "CallExpression",
        "start": 1071,
        "end": 1081,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1071,
          "end": 1073,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1073,
          "end": 1079,
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 1074,
              "end": 1078
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1083,
      "end": 1099,
      "expression": {
        "type": "CallExpression",
        "start": 1083,
        "end": 1098,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1083,
          "end": 1085,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1085,
          "end": 1096,
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 1086,
              "end": 1095
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1101,
      "end": 1122,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1120,
        "end": 1122,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1115,
        "end": 1116,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1116,
        "end": 1119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1117,
            "end": 1118,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1117,
              "end": 1118,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1123,
      "end": 1137,
      "expression": {
        "type": "NewExpression",
        "start": 1123,
        "end": 1136,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1127,
          "end": 1128,
          "decorators": [],
          "name": "D",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1128,
          "end": 1134,
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 1129,
              "end": 1133
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1138,
      "end": 1157,
      "expression": {
        "type": "NewExpression",
        "start": 1138,
        "end": 1156,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1142,
          "end": 1143,
          "decorators": [],
          "name": "D",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1143,
          "end": 1154,
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 1144,
              "end": 1153
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
