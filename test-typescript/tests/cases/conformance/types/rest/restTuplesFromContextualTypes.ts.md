restTuplesFromContextualTypes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2539,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 43,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 18,
                "end": 43,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 27,
                    "end": 34
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 75,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 69,
            "end": 74,
            "argument": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 47,
          "end": 67,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 65,
            "end": 67,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 104,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 103,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 97,
            "end": 102,
            "argument": {
              "type": "Identifier",
              "start": 100,
              "end": 102,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 78,
          "end": 95,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 93,
            "end": 95,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "RestElement",
              "start": 88,
              "end": 92,
              "argument": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 134,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 128,
            "end": 133,
            "argument": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 106,
          "end": 126,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 124,
            "end": 126,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 119,
              "end": 123,
              "argument": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 169,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 168,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 162,
            "end": 167,
            "argument": {
              "type": "Identifier",
              "start": 165,
              "end": 167,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 137,
          "end": 160,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 158,
            "end": 160,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 153,
              "end": 157,
              "argument": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 206,
      "expression": {
        "type": "CallExpression",
        "start": 170,
        "end": 205,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 199,
            "end": 204,
            "argument": {
              "type": "Identifier",
              "start": 202,
              "end": 204,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 171,
          "end": 197,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 195,
            "end": 197,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 190,
              "end": 194,
              "argument": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 208,
      "end": 268,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 227,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 228,
          "end": 260,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 230,
            "end": 260,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 232,
              "end": 260,
              "params": [
                {
                  "type": "RestElement",
                  "start": 233,
                  "end": 251,
                  "argument": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 240,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 242,
                      "end": 251,
                      "exprName": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 251,
                        "decorators": [],
                        "name": "t1",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 253,
                "end": 260,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 256,
                  "end": 260
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 261,
        "end": 267,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 263,
          "end": 267
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 289,
      "expression": {
        "type": "CallExpression",
        "start": 270,
        "end": 289,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 273,
            "end": 288,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 286,
              "end": 288,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 270,
          "end": 272,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 306,
      "expression": {
        "type": "CallExpression",
        "start": 290,
        "end": 306,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 293,
            "end": 305,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 303,
              "end": 305,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 294,
                "end": 298,
                "argument": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 290,
          "end": 292,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 326,
      "expression": {
        "type": "CallExpression",
        "start": 307,
        "end": 326,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 310,
            "end": 325,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 323,
              "end": 325,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 314,
                "end": 318,
                "argument": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 307,
          "end": 309,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 327,
      "end": 349,
      "expression": {
        "type": "CallExpression",
        "start": 327,
        "end": 349,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 330,
            "end": 348,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 346,
              "end": 348,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 337,
                "end": 341,
                "argument": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 341,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 327,
          "end": 329,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 350,
      "end": 375,
      "expression": {
        "type": "CallExpression",
        "start": 350,
        "end": 375,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 353,
            "end": 374,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 372,
              "end": 374,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 354,
                "end": 355,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 363,
                "end": 367,
                "argument": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 350,
          "end": 352,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 425,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 395,
                "end": 425,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 396,
                    "end": 402
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 404,
                    "end": 411
                  },
                  {
                    "type": "TSRestType",
                    "start": 413,
                    "end": 424,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 416,
                      "end": 424,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 416,
                        "end": 422
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 458,
      "expression": {
        "type": "CallExpression",
        "start": 428,
        "end": 457,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 451,
            "end": 456,
            "argument": {
              "type": "Identifier",
              "start": 454,
              "end": 456,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 429,
          "end": 449,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 447,
            "end": 449,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 459,
      "end": 486,
      "expression": {
        "type": "CallExpression",
        "start": 459,
        "end": 485,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 479,
            "end": 484,
            "argument": {
              "type": "Identifier",
              "start": 482,
              "end": 484,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 460,
          "end": 477,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 475,
            "end": 477,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "RestElement",
              "start": 470,
              "end": 474,
              "argument": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 517,
      "expression": {
        "type": "CallExpression",
        "start": 487,
        "end": 516,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 510,
            "end": 515,
            "argument": {
              "type": "Identifier",
              "start": 513,
              "end": 515,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 488,
          "end": 508,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 506,
            "end": 508,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 501,
              "end": 505,
              "argument": {
                "type": "Identifier",
                "start": 504,
                "end": 505,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 518,
      "end": 551,
      "expression": {
        "type": "CallExpression",
        "start": 518,
        "end": 550,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 544,
            "end": 549,
            "argument": {
              "type": "Identifier",
              "start": 547,
              "end": 549,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 519,
          "end": 542,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 540,
            "end": 542,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 529,
              "end": 530,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 532,
              "end": 533,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 535,
              "end": 539,
              "argument": {
                "type": "Identifier",
                "start": 538,
                "end": 539,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 552,
      "end": 588,
      "expression": {
        "type": "CallExpression",
        "start": 552,
        "end": 587,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 581,
            "end": 586,
            "argument": {
              "type": "Identifier",
              "start": 584,
              "end": 586,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 553,
          "end": 579,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 577,
            "end": 579,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 563,
              "end": 564,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 566,
              "end": 567,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 569,
              "end": 570,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 572,
              "end": 576,
              "argument": {
                "type": "Identifier",
                "start": 575,
                "end": 576,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 590,
      "end": 650,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 609,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 610,
          "end": 642,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 612,
            "end": 642,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 614,
              "end": 642,
              "params": [
                {
                  "type": "RestElement",
                  "start": 615,
                  "end": 633,
                  "argument": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 622,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 633,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 624,
                      "end": 633,
                      "exprName": {
                        "type": "Identifier",
                        "start": 631,
                        "end": 633,
                        "decorators": [],
                        "name": "t2",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 635,
                "end": 642,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 638,
                  "end": 642
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 643,
        "end": 649,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 645,
          "end": 649
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 671,
      "expression": {
        "type": "CallExpression",
        "start": 652,
        "end": 671,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 655,
            "end": 670,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 668,
              "end": 670,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 659,
                "end": 660,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 662,
                "end": 663,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 652,
          "end": 654,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 672,
      "end": 688,
      "expression": {
        "type": "CallExpression",
        "start": 672,
        "end": 688,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 675,
            "end": 687,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 685,
              "end": 687,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 676,
                "end": 680,
                "argument": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 680,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 672,
          "end": 674,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 708,
      "expression": {
        "type": "CallExpression",
        "start": 689,
        "end": 708,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 692,
            "end": 707,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 705,
              "end": 707,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 693,
                "end": 694,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 696,
                "end": 700,
                "argument": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 700,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 689,
          "end": 691,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 731,
      "expression": {
        "type": "CallExpression",
        "start": 709,
        "end": 731,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 712,
            "end": 730,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 728,
              "end": 730,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 716,
                "end": 717,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 719,
                "end": 723,
                "argument": {
                  "type": "Identifier",
                  "start": 722,
                  "end": 723,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 709,
          "end": 711,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 732,
      "end": 757,
      "expression": {
        "type": "CallExpression",
        "start": 732,
        "end": 757,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 735,
            "end": 756,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 754,
              "end": 756,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 739,
                "end": 740,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 742,
                "end": 743,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 745,
                "end": 749,
                "argument": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 749,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 732,
          "end": 734,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 799,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 799,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 775,
              "end": 799,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 777,
                "end": 799,
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 778,
                    "end": 785
                  },
                  {
                    "type": "TSRestType",
                    "start": 787,
                    "end": 798,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 790,
                      "end": 798,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 790,
                        "end": 796
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 802,
      "end": 835,
      "expression": {
        "type": "CallExpression",
        "start": 802,
        "end": 834,
        "arguments": [
          {
            "type": "Literal",
            "start": 825,
            "end": 826,
            "raw": "1",
            "value": 1
          },
          {
            "type": "SpreadElement",
            "start": 828,
            "end": 833,
            "argument": {
              "type": "Identifier",
              "start": 831,
              "end": 833,
              "decorators": [],
              "name": "t3",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 803,
          "end": 823,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 821,
            "end": 823,
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
              "end": 814,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 816,
              "end": 817,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 819,
              "end": 820,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 836,
      "end": 866,
      "expression": {
        "type": "CallExpression",
        "start": 836,
        "end": 865,
        "arguments": [
          {
            "type": "Literal",
            "start": 856,
            "end": 857,
            "raw": "1",
            "value": 1
          },
          {
            "type": "SpreadElement",
            "start": 859,
            "end": 864,
            "argument": {
              "type": "Identifier",
              "start": 862,
              "end": 864,
              "decorators": [],
              "name": "t3",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 837,
          "end": 854,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 852,
            "end": 854,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "RestElement",
              "start": 847,
              "end": 851,
              "argument": {
                "type": "Identifier",
                "start": 850,
                "end": 851,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 867,
      "end": 900,
      "expression": {
        "type": "CallExpression",
        "start": 867,
        "end": 899,
        "arguments": [
          {
            "type": "Literal",
            "start": 890,
            "end": 891,
            "raw": "1",
            "value": 1
          },
          {
            "type": "SpreadElement",
            "start": 893,
            "end": 898,
            "argument": {
              "type": "Identifier",
              "start": 896,
              "end": 898,
              "decorators": [],
              "name": "t3",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 868,
          "end": 888,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 886,
            "end": 888,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 878,
              "end": 879,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 881,
              "end": 885,
              "argument": {
                "type": "Identifier",
                "start": 884,
                "end": 885,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 937,
      "expression": {
        "type": "CallExpression",
        "start": 901,
        "end": 936,
        "arguments": [
          {
            "type": "Literal",
            "start": 927,
            "end": 928,
            "raw": "1",
            "value": 1
          },
          {
            "type": "SpreadElement",
            "start": 930,
            "end": 935,
            "argument": {
              "type": "Identifier",
              "start": 933,
              "end": 935,
              "decorators": [],
              "name": "t3",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 902,
          "end": 925,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 923,
            "end": 925,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 912,
              "end": 913,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 915,
              "end": 916,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 918,
              "end": 922,
              "argument": {
                "type": "Identifier",
                "start": 921,
                "end": 922,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 938,
      "end": 977,
      "expression": {
        "type": "CallExpression",
        "start": 938,
        "end": 976,
        "arguments": [
          {
            "type": "Literal",
            "start": 967,
            "end": 968,
            "raw": "1",
            "value": 1
          },
          {
            "type": "SpreadElement",
            "start": 970,
            "end": 975,
            "argument": {
              "type": "Identifier",
              "start": 973,
              "end": 975,
              "decorators": [],
              "name": "t3",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 939,
          "end": 965,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 963,
            "end": 965,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 949,
              "end": 950,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 952,
              "end": 953,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 955,
              "end": 956,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 958,
              "end": 962,
              "argument": {
                "type": "Identifier",
                "start": 961,
                "end": 962,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 979,
      "end": 1050,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 996,
        "end": 998,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 999,
          "end": 1042,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1001,
            "end": 1042,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1003,
              "end": 1042,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1013,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1005,
                    "end": 1013,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1007,
                      "end": 1013
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1015,
                  "end": 1033,
                  "argument": {
                    "type": "Identifier",
                    "start": 1018,
                    "end": 1022,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1022,
                    "end": 1033,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1024,
                      "end": 1033,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1033,
                        "decorators": [],
                        "name": "t3",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1035,
                "end": 1042,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1038,
                  "end": 1042
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1043,
        "end": 1049,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1045,
          "end": 1049
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1052,
      "end": 1071,
      "expression": {
        "type": "CallExpression",
        "start": 1052,
        "end": 1071,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1055,
            "end": 1070,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1068,
              "end": 1070,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1056,
                "end": 1057,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1059,
                "end": 1060,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1062,
                "end": 1063,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1052,
          "end": 1054,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1072,
      "end": 1088,
      "expression": {
        "type": "CallExpression",
        "start": 1072,
        "end": 1088,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1075,
            "end": 1087,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1085,
              "end": 1087,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 1076,
                "end": 1080,
                "argument": {
                  "type": "Identifier",
                  "start": 1079,
                  "end": 1080,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1072,
          "end": 1074,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1089,
      "end": 1108,
      "expression": {
        "type": "CallExpression",
        "start": 1089,
        "end": 1108,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1092,
            "end": 1107,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1105,
              "end": 1107,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1093,
                "end": 1094,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 1096,
                "end": 1100,
                "argument": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1100,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1089,
          "end": 1091,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1109,
      "end": 1131,
      "expression": {
        "type": "CallExpression",
        "start": 1109,
        "end": 1131,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1112,
            "end": 1130,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1128,
              "end": 1130,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1113,
                "end": 1114,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1116,
                "end": 1117,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 1119,
                "end": 1123,
                "argument": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1123,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1109,
          "end": 1111,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1132,
      "end": 1157,
      "expression": {
        "type": "CallExpression",
        "start": 1132,
        "end": 1157,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1135,
            "end": 1156,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1154,
              "end": 1156,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1136,
                "end": 1137,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1139,
                "end": 1140,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1142,
                "end": 1143,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 1145,
                "end": 1149,
                "argument": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1149,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1132,
          "end": 1134,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1159,
      "end": 1429,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1194,
        "end": 1429,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1200,
            "end": 1225,
            "expression": {
              "type": "CallExpression",
              "start": 1200,
              "end": 1224,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 1219,
                  "end": 1223,
                  "argument": {
                    "type": "Identifier",
                    "start": 1222,
                    "end": 1223,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "FunctionExpression",
                "start": 1201,
                "end": 1217,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1215,
                  "end": 1217,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 1210,
                    "end": 1214,
                    "argument": {
                      "type": "Identifier",
                      "start": 1213,
                      "end": 1214,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1230,
            "end": 1261,
            "expression": {
              "type": "CallExpression",
              "start": 1230,
              "end": 1260,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1252,
                  "end": 1253,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "SpreadElement",
                  "start": 1255,
                  "end": 1259,
                  "argument": {
                    "type": "Identifier",
                    "start": 1258,
                    "end": 1259,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "FunctionExpression",
                "start": 1231,
                "end": 1250,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1248,
                  "end": 1250,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1240,
                    "end": 1241,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 1243,
                    "end": 1247,
                    "argument": {
                      "type": "Identifier",
                      "start": 1246,
                      "end": 1247,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1266,
            "end": 1300,
            "expression": {
              "type": "CallExpression",
              "start": 1266,
              "end": 1299,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1288,
                  "end": 1289,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 1291,
                  "end": 1292,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "SpreadElement",
                  "start": 1294,
                  "end": 1298,
                  "argument": {
                    "type": "Identifier",
                    "start": 1297,
                    "end": 1298,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "FunctionExpression",
                "start": 1267,
                "end": 1286,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1284,
                  "end": 1286,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1277,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 1279,
                    "end": 1283,
                    "argument": {
                      "type": "Identifier",
                      "start": 1282,
                      "end": 1283,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "optional": false
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 1305,
            "end": 1355,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1353,
              "end": 1355,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 1314,
              "end": 1315,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1316,
                "end": 1351,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1318,
                  "end": 1351,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1320,
                    "end": 1351,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1321,
                        "end": 1330,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1322,
                          "end": 1330,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1324,
                            "end": 1330
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 1332,
                        "end": 1342,
                        "argument": {
                          "type": "Identifier",
                          "start": 1335,
                          "end": 1339,
                          "decorators": [],
                          "name": "args",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1339,
                          "end": 1342,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1341,
                            "end": 1342,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1341,
                              "end": 1342,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1344,
                      "end": 1351,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1347,
                        "end": 1351
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 1360,
            "end": 1376,
            "expression": {
              "type": "CallExpression",
              "start": 1360,
              "end": 1375,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1362,
                  "end": 1374,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1372,
                    "end": 1374,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1363,
                      "end": 1367,
                      "argument": {
                        "type": "Identifier",
                        "start": 1366,
                        "end": 1367,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1360,
                "end": 1361,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1381,
            "end": 1400,
            "expression": {
              "type": "CallExpression",
              "start": 1381,
              "end": 1399,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1383,
                  "end": 1398,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1396,
                    "end": 1398,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1384,
                      "end": 1385,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 1387,
                      "end": 1391,
                      "argument": {
                        "type": "Identifier",
                        "start": 1390,
                        "end": 1391,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1381,
                "end": 1382,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1405,
            "end": 1427,
            "expression": {
              "type": "CallExpression",
              "start": 1405,
              "end": 1426,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1407,
                  "end": 1425,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1423,
                    "end": 1425,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1408,
                      "end": 1409,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1411,
                      "end": 1412,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 1414,
                      "end": 1418,
                      "argument": {
                        "type": "Identifier",
                        "start": 1417,
                        "end": 1418,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1405,
                "end": 1406,
                "decorators": [],
                "name": "f",
                "optional": false
              },
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
        "start": 1168,
        "end": 1170,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1188,
          "end": 1192,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1189,
            "end": 1192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1191,
              "end": 1192,
              "typeName": {
                "type": "Identifier",
                "start": 1191,
                "end": 1192,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1170,
        "end": 1187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1171,
            "end": 1186,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1181,
              "end": 1186,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1181,
                "end": 1184
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1171,
              "end": 1172,
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
      "type": "TSDeclareFunction",
      "start": 1431,
      "end": 1512,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1448,
        "end": 1450,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1471,
          "end": 1491,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1472,
            "end": 1491,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1474,
              "end": 1491,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1475,
                  "end": 1485,
                  "argument": {
                    "type": "Identifier",
                    "start": 1478,
                    "end": 1482,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1482,
                    "end": 1485,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1484,
                      "end": 1485,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1484,
                        "end": 1485,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1487,
                "end": 1491,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1490,
                  "end": 1491,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1490,
                    "end": 1491,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1492,
        "end": 1511,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1494,
          "end": 1511,
          "params": [
            {
              "type": "RestElement",
              "start": 1495,
              "end": 1505,
              "argument": {
                "type": "Identifier",
                "start": 1498,
                "end": 1502,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1502,
                "end": 1505,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1504,
                  "end": 1505,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1504,
                    "end": 1505,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1507,
            "end": 1511,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1510,
              "end": 1511,
              "typeName": {
                "type": "Identifier",
                "start": 1510,
                "end": 1511,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1450,
        "end": 1470,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1451,
            "end": 1466,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1461,
              "end": 1466,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1461,
                "end": 1464
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1451,
              "end": 1452,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1468,
            "end": 1469,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1468,
              "end": 1469,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1514,
      "end": 1541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1518,
          "end": 1540,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1518,
            "end": 1520,
            "decorators": [],
            "name": "g0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1523,
            "end": 1540,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1526,
                "end": 1539,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1532,
                  "end": 1539,
                  "raw": "\"hello\"",
                  "value": "hello"
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1523,
              "end": 1525,
              "decorators": [],
              "name": "f5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1542,
      "end": 1568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1546,
          "end": 1567,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1546,
            "end": 1548,
            "decorators": [],
            "name": "g1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1551,
            "end": 1567,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1554,
                "end": 1566,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1564,
                  "end": 1566,
                  "raw": "42",
                  "value": 42
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1555,
                    "end": 1556,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1558,
                    "end": 1559,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1551,
              "end": 1553,
              "decorators": [],
              "name": "f5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1569,
      "end": 1603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1573,
          "end": 1602,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1573,
            "end": 1575,
            "decorators": [],
            "name": "g2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1578,
            "end": 1602,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1581,
                "end": 1601,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1599,
                  "end": 1601,
                  "raw": "42",
                  "value": 42
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1582,
                    "end": 1591,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1583,
                      "end": 1591,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1585,
                        "end": 1591
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1593,
                    "end": 1594,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1578,
              "end": 1580,
              "decorators": [],
              "name": "f5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1604,
      "end": 1649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1608,
          "end": 1648,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1608,
            "end": 1610,
            "decorators": [],
            "name": "g3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1613,
            "end": 1648,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1616,
                "end": 1647,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 1642,
                  "end": 1647,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1642,
                    "end": 1643,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1646,
                    "end": 1647,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1617,
                    "end": 1626,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1618,
                      "end": 1626,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1620,
                        "end": 1626
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1628,
                    "end": 1637,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1629,
                      "end": 1637,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1631,
                        "end": 1637
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1613,
              "end": 1615,
              "decorators": [],
              "name": "f5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1650,
      "end": 1681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1654,
          "end": 1680,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1654,
            "end": 1656,
            "decorators": [],
            "name": "g4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1659,
            "end": 1680,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1662,
                "end": 1679,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1675,
                  "end": 1679,
                  "raw": "true",
                  "value": true
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 1663,
                    "end": 1670,
                    "argument": {
                      "type": "Identifier",
                      "start": 1666,
                      "end": 1670,
                      "decorators": [],
                      "name": "args",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1659,
              "end": 1661,
              "decorators": [],
              "name": "f5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1683,
      "end": 1785,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1700,
        "end": 1704,
        "decorators": [],
        "name": "pipe",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1728,
          "end": 1748,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1729,
            "end": 1748,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1731,
              "end": 1748,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1732,
                  "end": 1742,
                  "argument": {
                    "type": "Identifier",
                    "start": 1735,
                    "end": 1739,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1739,
                    "end": 1742,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1741,
                      "end": 1742,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1741,
                        "end": 1742,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1744,
                "end": 1748,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1747,
                  "end": 1748,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1747,
                    "end": 1748,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1750,
          "end": 1764,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1751,
            "end": 1764,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1753,
              "end": 1764,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1754,
                  "end": 1758,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1755,
                    "end": 1758,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1757,
                      "end": 1758,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1757,
                        "end": 1758,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1760,
                "end": 1764,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1763,
                  "end": 1764,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1763,
                    "end": 1764,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1765,
        "end": 1784,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1767,
          "end": 1784,
          "params": [
            {
              "type": "RestElement",
              "start": 1768,
              "end": 1778,
              "argument": {
                "type": "Identifier",
                "start": 1771,
                "end": 1775,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1775,
                "end": 1778,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1777,
                  "end": 1778,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1777,
                    "end": 1778,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1780,
            "end": 1784,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1783,
              "end": 1784,
              "typeName": {
                "type": "Identifier",
                "start": 1783,
                "end": 1784,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1704,
        "end": 1727,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1705,
            "end": 1720,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1715,
              "end": 1720,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1715,
                "end": 1718
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1705,
              "end": 1706,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1722,
            "end": 1723,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1722,
              "end": 1723,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1725,
            "end": 1726,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1725,
              "end": 1726,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1787,
      "end": 1822,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1791,
          "end": 1821,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1791,
            "end": 1793,
            "decorators": [],
            "name": "g5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1796,
            "end": 1821,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1801,
                "end": 1811,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1807,
                  "end": 1811,
                  "raw": "true",
                  "value": true
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1813,
                "end": 1820,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1818,
                  "end": 1820,
                  "raw": "42",
                  "value": 42
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1813,
                    "end": 1814,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1796,
              "end": 1800,
              "decorators": [],
              "name": "pipe",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1823,
      "end": 1866,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1827,
          "end": 1865,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1827,
            "end": 1829,
            "decorators": [],
            "name": "g6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1832,
            "end": 1865,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1837,
                "end": 1849,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1842,
                  "end": 1849,
                  "raw": "\"hello\"",
                  "value": "hello"
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1837,
                    "end": 1838,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1851,
                "end": 1864,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 1856,
                  "end": 1864,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1856,
                    "end": 1857,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1858,
                    "end": 1864,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1851,
                    "end": 1852,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1832,
              "end": 1836,
              "decorators": [],
              "name": "pipe",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1867,
      "end": 1908,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1871,
          "end": 1907,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1871,
            "end": 1873,
            "decorators": [],
            "name": "g7",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1876,
            "end": 1907,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1881,
                "end": 1893,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1891,
                  "end": 1893,
                  "raw": "42",
                  "value": 42
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1882,
                    "end": 1883,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1885,
                    "end": 1886,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1895,
                "end": 1906,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 1900,
                  "end": 1906,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 1900,
                    "end": 1902,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1905,
                    "end": 1906,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1895,
                    "end": 1896,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1876,
              "end": 1880,
              "decorators": [],
              "name": "pipe",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1909,
      "end": 1966,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1913,
          "end": 1965,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1913,
            "end": 1915,
            "decorators": [],
            "name": "g8",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1918,
            "end": 1965,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1923,
                "end": 1951,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 1949,
                  "end": 1951,
                  "raw": "42",
                  "value": 42
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1924,
                    "end": 1933,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1925,
                      "end": 1933,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1927,
                        "end": 1933
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1935,
                    "end": 1944,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1936,
                      "end": 1944,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1938,
                        "end": 1944
                      }
                    }
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1953,
                "end": 1964,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 1958,
                  "end": 1964,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 1958,
                    "end": 1960,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1963,
                    "end": 1964,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1953,
                    "end": 1954,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1918,
              "end": 1922,
              "decorators": [],
              "name": "pipe",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1990,
      "end": 2026,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2002,
          "end": 2025,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2002,
            "end": 2025,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2007,
              "end": 2025,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2009,
                "end": 2025,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2010,
                    "end": 2016
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2018,
                    "end": 2024
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 2027,
      "end": 2060,
      "expression": {
        "type": "CallExpression",
        "start": 2028,
        "end": 2058,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 2049,
            "end": 2057,
            "argument": {
              "type": "Identifier",
              "start": 2052,
              "end": 2057,
              "decorators": [],
              "name": "tuple",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 2028,
          "end": 2048,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 2046,
            "end": 2048,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": {
            "type": "Identifier",
            "start": 2037,
            "end": 2040,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "params": [
            {
              "type": "Identifier",
              "start": 2041,
              "end": 2042,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 2044,
              "end": 2045,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2084,
      "end": 2148,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2101,
        "end": 2105,
        "decorators": [],
        "name": "take",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2106,
          "end": 2140,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2108,
            "end": 2140,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2110,
              "end": 2140,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2111,
                  "end": 2120,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2112,
                    "end": 2120,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2114,
                      "end": 2120
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2122,
                  "end": 2131,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2123,
                    "end": 2131,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2125,
                      "end": 2131
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2133,
                "end": 2140,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2136,
                  "end": 2140
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2141,
        "end": 2147,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2143,
          "end": 2147
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2150,
      "end": 2183,
      "expression": {
        "type": "CallExpression",
        "start": 2151,
        "end": 2181,
        "arguments": [
          {
            "type": "Literal",
            "start": 2175,
            "end": 2176,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 2178,
            "end": 2180,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 2151,
          "end": 2174,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 2172,
            "end": 2174,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": {
            "type": "Identifier",
            "start": 2160,
            "end": 2163,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "params": [
            {
              "type": "RestElement",
              "start": 2164,
              "end": 2171,
              "argument": {
                "type": "Identifier",
                "start": 2167,
                "end": 2171,
                "decorators": [],
                "name": "rest",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2184,
      "end": 2210,
      "expression": {
        "type": "CallExpression",
        "start": 2184,
        "end": 2209,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 2189,
            "end": 2208,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2206,
              "end": 2208,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 2198,
                "end": 2205,
                "argument": {
                  "type": "Identifier",
                  "start": 2201,
                  "end": 2205,
                  "decorators": [],
                  "name": "rest",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2184,
          "end": 2188,
          "decorators": [],
          "name": "take",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2234,
      "end": 2286,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2239,
        "end": 2248,
        "decorators": [],
        "name": "ArgsUnion",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2251,
        "end": 2285,
        "types": [
          {
            "type": "TSTupleType",
            "start": 2251,
            "end": 2267,
            "elementTypes": [
              {
                "type": "TSNumberKeyword",
                "start": 2252,
                "end": 2258
              },
              {
                "type": "TSStringKeyword",
                "start": 2260,
                "end": 2266
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 2270,
            "end": 2285,
            "elementTypes": [
              {
                "type": "TSNumberKeyword",
                "start": 2271,
                "end": 2277
              },
              {
                "type": "TSTypeReference",
                "start": 2279,
                "end": 2284,
                "typeName": {
                  "type": "Identifier",
                  "start": 2279,
                  "end": 2284,
                  "decorators": [],
                  "name": "Error",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2287,
      "end": 2342,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2292,
        "end": 2306,
        "decorators": [],
        "name": "TupleUnionFunc",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 2309,
        "end": 2341,
        "params": [
          {
            "type": "RestElement",
            "start": 2310,
            "end": 2330,
            "argument": {
              "type": "Identifier",
              "start": 2313,
              "end": 2319,
              "decorators": [],
              "name": "params",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2319,
              "end": 2330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2321,
                "end": 2330,
                "typeName": {
                  "type": "Identifier",
                  "start": 2321,
                  "end": 2330,
                  "decorators": [],
                  "name": "ArgsUnion",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2332,
          "end": 2341,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 2335,
            "end": 2341
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2344,
      "end": 2426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2350,
          "end": 2425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2350,
            "end": 2386,
            "decorators": [],
            "name": "funcUnionTupleNoRest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2370,
              "end": 2386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2372,
                "end": 2386,
                "typeName": {
                  "type": "Identifier",
                  "start": 2372,
                  "end": 2386,
                  "decorators": [],
                  "name": "TupleUnionFunc",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2389,
            "end": 2425,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2408,
              "end": 2425,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2412,
                  "end": 2423,
                  "argument": {
                    "type": "Identifier",
                    "start": 2419,
                    "end": 2422,
                    "decorators": [],
                    "name": "num",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2390,
                "end": 2393,
                "decorators": [],
                "name": "num",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2395,
                "end": 2403,
                "decorators": [],
                "name": "strOrErr",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2428,
      "end": 2538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2434,
          "end": 2537,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2434,
            "end": 2468,
            "decorators": [],
            "name": "funcUnionTupleRest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2452,
              "end": 2468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2454,
                "end": 2468,
                "typeName": {
                  "type": "Identifier",
                  "start": 2454,
                  "end": 2468,
                  "decorators": [],
                  "name": "TupleUnionFunc",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2471,
            "end": 2537,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2486,
              "end": 2537,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2490,
                  "end": 2521,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2496,
                      "end": 2520,
                      "definite": false,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 2496,
                        "end": 2511,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 2497,
                            "end": 2500,
                            "decorators": [],
                            "name": "num",
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 2502,
                            "end": 2510,
                            "decorators": [],
                            "name": "strOrErr",
                            "optional": false
                          }
                        ],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2514,
                        "end": 2520,
                        "decorators": [],
                        "name": "params",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 2524,
                  "end": 2535,
                  "argument": {
                    "type": "Identifier",
                    "start": 2531,
                    "end": 2534,
                    "decorators": [],
                    "name": "num",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 2472,
                "end": 2481,
                "argument": {
                  "type": "Identifier",
                  "start": 2475,
                  "end": 2481,
                  "decorators": [],
                  "name": "params",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
