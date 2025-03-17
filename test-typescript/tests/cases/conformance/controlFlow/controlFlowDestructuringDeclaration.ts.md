__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1189,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
        "start": 14,
        "end": 99,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 47,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 46,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 42,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 27,
                      "end": 42,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 27,
                          "end": 33
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 36,
                          "end": 42
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 45,
                  "end": 46,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 54,
            "expression": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 59,
            "end": 90,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 63,
                "end": 89,
                "id": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 84,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 66,
                      "end": 84,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 66,
                          "end": 72
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 75,
                          "end": 84
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 87,
                  "end": 89,
                  "value": "",
                  "raw": "\"\""
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 97,
            "expression": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 112,
        "name": "f2",
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
        "start": 115,
        "end": 273,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 154,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 153,
                "id": {
                  "type": "ArrayPattern",
                  "start": 125,
                  "end": 147,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 130,
                      "end": 147,
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "start": 131,
                          "end": 146,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 131,
                              "end": 137
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 140,
                              "end": 146
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 150,
                  "end": 153,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 151,
                      "end": 152,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 159,
            "end": 161,
            "expression": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 166,
            "end": 203,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 170,
                "end": 202,
                "id": {
                  "type": "ArrayPattern",
                  "start": 170,
                  "end": 195,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 175,
                      "end": 195,
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "start": 176,
                          "end": 194,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 176,
                              "end": 182
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 185,
                              "end": 194
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 198,
                  "end": 202,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 199,
                      "end": 201,
                      "value": "",
                      "raw": "\"\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 208,
            "end": 210,
            "expression": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 215,
            "end": 264,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 219,
                "end": 263,
                "id": {
                  "type": "ArrayPattern",
                  "start": 219,
                  "end": 249,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 220,
                      "end": 226,
                      "left": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 224,
                        "end": 226,
                        "value": "",
                        "raw": "\"\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 249,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 229,
                      "end": 249,
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "start": 230,
                          "end": 248,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 230,
                              "end": 236
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 239,
                              "end": 248
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 252,
                  "end": 263,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 253,
                      "end": 262,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 269,
            "end": 271,
            "expression": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "name": "f3",
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
        "start": 289,
        "end": 453,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 295,
            "end": 330,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 329,
                "id": {
                  "type": "ArrayPattern",
                  "start": 299,
                  "end": 323,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 304,
                      "end": 323,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 305,
                        "end": 320,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 305,
                            "end": 311
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 314,
                            "end": 320
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 326,
                  "end": 329,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 327,
                      "end": 328,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 335,
            "end": 337,
            "expression": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 342,
            "end": 381,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 346,
                "end": 380,
                "id": {
                  "type": "ArrayPattern",
                  "start": 346,
                  "end": 373,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 347,
                      "end": 348,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 349,
                    "end": 373,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 351,
                      "end": 373,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 352,
                        "end": 370,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 352,
                            "end": 358
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 361,
                            "end": 370
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 376,
                  "end": 380,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 377,
                      "end": 379,
                      "value": "",
                      "raw": "\"\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 386,
            "end": 388,
            "expression": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 393,
            "end": 444,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 397,
                "end": 443,
                "id": {
                  "type": "ArrayPattern",
                  "start": 397,
                  "end": 429,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 398,
                      "end": 404,
                      "left": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 399,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 402,
                        "end": 404,
                        "value": "",
                        "raw": "\"\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 405,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 407,
                      "end": 429,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 408,
                        "end": 426,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 408,
                            "end": 414
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 417,
                            "end": 426
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 432,
                  "end": 443,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 433,
                      "end": 442,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 449,
            "end": 451,
            "expression": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 455,
      "end": 663,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 466,
        "name": "f4",
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
        "start": 469,
        "end": 663,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 475,
            "end": 520,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 479,
                "end": 519,
                "id": {
                  "type": "ObjectPattern",
                  "start": 479,
                  "end": 508,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 481,
                      "end": 482,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 482,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 482,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 484,
                    "end": 508,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 486,
                      "end": 508,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 488,
                          "end": 506,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 488,
                            "end": 489,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 489,
                            "end": 506,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 491,
                              "end": 506,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 491,
                                  "end": 497
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 500,
                                  "end": 506
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 511,
                  "end": 519,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 513,
                      "end": 517,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 513,
                        "end": 514,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 516,
                        "end": 517,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 525,
            "end": 527,
            "expression": {
              "type": "Identifier",
              "start": 525,
              "end": 526,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 532,
            "end": 581,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 536,
                "end": 580,
                "id": {
                  "type": "ObjectPattern",
                  "start": 536,
                  "end": 568,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 538,
                      "end": 539,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 539,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 539,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 541,
                    "end": 568,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 543,
                      "end": 568,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 545,
                          "end": 566,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 545,
                            "end": 546,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 546,
                            "end": 566,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 548,
                              "end": 566,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 548,
                                  "end": 554
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 557,
                                  "end": 566
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 571,
                  "end": 580,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 573,
                      "end": 578,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 573,
                        "end": 574,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 576,
                        "end": 578,
                        "value": "",
                        "raw": "\"\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 586,
            "end": 588,
            "expression": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 593,
            "end": 654,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 597,
                "end": 653,
                "id": {
                  "type": "ObjectPattern",
                  "start": 597,
                  "end": 634,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 599,
                      "end": 605,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 599,
                        "end": 605,
                        "left": {
                          "type": "Identifier",
                          "start": 599,
                          "end": 600,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 603,
                          "end": 605,
                          "value": "",
                          "raw": "\"\""
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 607,
                    "end": 634,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 609,
                      "end": 634,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 611,
                          "end": 632,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 611,
                            "end": 612,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 612,
                            "end": 632,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 614,
                              "end": 632,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 614,
                                  "end": 620
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 623,
                                  "end": 632
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 637,
                  "end": 653,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 639,
                      "end": 651,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 640,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 651,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 659,
            "end": 661,
            "expression": {
              "type": "Identifier",
              "start": 659,
              "end": 660,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 665,
      "end": 876,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 676,
        "name": "f5",
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
        "start": 679,
        "end": 876,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 685,
            "end": 731,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 689,
                "end": 730,
                "id": {
                  "type": "ObjectPattern",
                  "start": 689,
                  "end": 719,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 691,
                      "end": 692,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 692,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 692,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 694,
                    "end": 719,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 696,
                      "end": 719,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 698,
                          "end": 717,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 698,
                            "end": 699,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 700,
                            "end": 717,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 702,
                              "end": 717,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 702,
                                  "end": 708
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 711,
                                  "end": 717
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 722,
                  "end": 730,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 724,
                      "end": 728,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 724,
                        "end": 725,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 727,
                        "end": 728,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 738,
            "expression": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 743,
            "end": 793,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 747,
                "end": 792,
                "id": {
                  "type": "ObjectPattern",
                  "start": 747,
                  "end": 780,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 749,
                      "end": 750,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 750,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 750,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 752,
                    "end": 780,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 754,
                      "end": 780,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 756,
                          "end": 778,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 756,
                            "end": 757,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 758,
                            "end": 778,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 760,
                              "end": 778,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 760,
                                  "end": 766
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 769,
                                  "end": 778
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 783,
                  "end": 792,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 785,
                      "end": 790,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 785,
                        "end": 786,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 788,
                        "end": 790,
                        "value": "",
                        "raw": "\"\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 798,
            "end": 800,
            "expression": {
              "type": "Identifier",
              "start": 798,
              "end": 799,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 805,
            "end": 867,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 809,
                "end": 866,
                "id": {
                  "type": "ObjectPattern",
                  "start": 809,
                  "end": 847,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 811,
                      "end": 817,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 811,
                        "end": 812,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 811,
                        "end": 817,
                        "left": {
                          "type": "Identifier",
                          "start": 811,
                          "end": 812,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 815,
                          "end": 817,
                          "value": "",
                          "raw": "\"\""
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 819,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 821,
                      "end": 847,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 823,
                          "end": 845,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 823,
                            "end": 824,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 825,
                            "end": 845,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 827,
                              "end": 845,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 827,
                                  "end": 833
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 836,
                                  "end": 845
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 850,
                  "end": 866,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 852,
                      "end": 864,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 852,
                        "end": 853,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 855,
                        "end": 864,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 872,
            "end": 874,
            "expression": {
              "type": "Identifier",
              "start": 872,
              "end": 873,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 878,
      "end": 1062,
      "id": {
        "type": "Identifier",
        "start": 887,
        "end": 889,
        "name": "f6",
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
        "start": 892,
        "end": 1062,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 898,
            "end": 938,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 902,
                "end": 937,
                "id": {
                  "type": "ObjectPattern",
                  "start": 902,
                  "end": 932,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 904,
                      "end": 905,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 904,
                        "end": 905,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 904,
                        "end": 905,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 907,
                    "end": 932,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 909,
                      "end": 932,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 911,
                          "end": 930,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 911,
                            "end": 912,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 913,
                            "end": 930,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 915,
                              "end": 930,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 915,
                                  "end": 921
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 924,
                                  "end": 930
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 935,
                  "end": 937,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 943,
            "end": 945,
            "expression": {
              "type": "Identifier",
              "start": 943,
              "end": 944,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 950,
            "end": 993,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 954,
                "end": 992,
                "id": {
                  "type": "ObjectPattern",
                  "start": 954,
                  "end": 987,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 956,
                      "end": 957,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 956,
                        "end": 957,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 956,
                        "end": 957,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 959,
                    "end": 987,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 961,
                      "end": 987,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 963,
                          "end": 985,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 963,
                            "end": 964,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 965,
                            "end": 985,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 967,
                              "end": 985,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 967,
                                  "end": 973
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 976,
                                  "end": 985
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 990,
                  "end": 992,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 998,
            "end": 1000,
            "expression": {
              "type": "Identifier",
              "start": 998,
              "end": 999,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1005,
            "end": 1053,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1009,
                "end": 1052,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1009,
                  "end": 1047,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1011,
                      "end": 1017,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1012,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 1011,
                        "end": 1017,
                        "left": {
                          "type": "Identifier",
                          "start": 1011,
                          "end": 1012,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1015,
                          "end": 1017,
                          "value": "",
                          "raw": "\"\""
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1019,
                    "end": 1047,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1021,
                      "end": 1047,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1023,
                          "end": 1045,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1023,
                            "end": 1024,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1025,
                            "end": 1045,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1027,
                              "end": 1045,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1027,
                                  "end": 1033
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 1036,
                                  "end": 1045
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1050,
                  "end": 1052,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1058,
            "end": 1060,
            "expression": {
              "type": "Identifier",
              "start": 1058,
              "end": 1059,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1064,
      "end": 1188,
      "id": {
        "type": "Identifier",
        "start": 1073,
        "end": 1075,
        "name": "f7",
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
        "start": 1078,
        "end": 1188,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1084,
            "end": 1126,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1088,
                "end": 1125,
                "id": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1114,
                  "name": "o",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1089,
                    "end": 1114,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1091,
                      "end": 1114,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 1093,
                          "end": 1112,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 1094,
                              "end": 1103,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1095,
                                "end": 1103,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1097,
                                  "end": 1103
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1104,
                            "end": 1112,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1106,
                              "end": 1112
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1117,
                  "end": 1125,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1119,
                      "end": 1123,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1119,
                        "end": 1120,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1122,
                        "end": 1123,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1131,
            "end": 1179,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1135,
                "end": 1178,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1135,
                  "end": 1174,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1137,
                      "end": 1138,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1137,
                        "end": 1138,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1137,
                        "end": 1138,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1140,
                    "end": 1174,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1142,
                      "end": 1174,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 1144,
                          "end": 1172,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 1145,
                              "end": 1154,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1146,
                                "end": 1154,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1148,
                                  "end": 1154
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1155,
                            "end": 1172,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1157,
                              "end": 1172,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1157,
                                  "end": 1163
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1166,
                                  "end": 1172
                                }
                              ]
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1178,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1184,
            "end": 1186,
            "expression": {
              "type": "Identifier",
              "start": 1184,
              "end": 1185,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
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
