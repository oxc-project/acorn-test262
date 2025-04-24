__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 1470,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 61,
      "end": 93,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 93,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 82,
            "end": 91,
            "argument": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 72,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 105,
            "end": 112,
            "arguments": [
              {
                "type": "Literal",
                "start": 108,
                "end": 111,
                "raw": "\"a\"",
                "value": "a"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 105,
              "end": 107,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 122,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 125,
            "end": 146,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 128,
                "end": 145,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 129,
                    "end": 132,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 134,
                    "end": 144,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 135,
                        "end": 138,
                        "raw": "\"b\"",
                        "value": "b"
                      },
                      {
                        "type": "Literal",
                        "start": 140,
                        "end": 143,
                        "raw": "\"c\"",
                        "value": "c"
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 125,
              "end": 127,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 159,
            "end": 210,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 162,
                "end": 209,
                "properties": [
                  {
                    "type": "Property",
                    "start": 164,
                    "end": 168,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 167,
                      "end": 168,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 170,
                    "end": 176,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 173,
                      "end": 176,
                      "raw": "\"c\"",
                      "value": "c"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 178,
                    "end": 207,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 181,
                      "end": 207,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 182,
                          "end": 185,
                          "raw": "\"e\"",
                          "value": "e"
                        },
                        {
                          "type": "Literal",
                          "start": 187,
                          "end": 188,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 190,
                          "end": 194,
                          "raw": "true",
                          "value": true
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 196,
                          "end": 206,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 198,
                              "end": 204,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 198,
                                "end": 199,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 201,
                                "end": 204,
                                "raw": "\"g\"",
                                "value": "g"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 159,
              "end": 161,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 277,
      "end": 309,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 292,
        "end": 309,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 298,
            "end": 307,
            "argument": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 288,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 309,
      "end": 310
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 319,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 322,
            "end": 329,
            "arguments": [
              {
                "type": "Literal",
                "start": 325,
                "end": 328,
                "raw": "'a'",
                "value": "a"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 322,
              "end": 324,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 363,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 342,
            "end": 363,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 345,
                "end": 362,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 346,
                    "end": 349,
                    "raw": "'a'",
                    "value": "a"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 351,
                    "end": 361,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 352,
                        "end": 355,
                        "raw": "'b'",
                        "value": "b"
                      },
                      {
                        "type": "Literal",
                        "start": 357,
                        "end": 360,
                        "raw": "'c'",
                        "value": "c"
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 342,
              "end": 344,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 373,
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 376,
            "end": 427,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 379,
                "end": 426,
                "properties": [
                  {
                    "type": "Property",
                    "start": 381,
                    "end": 385,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 384,
                      "end": 385,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 387,
                    "end": 393,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 387,
                      "end": 388,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 390,
                      "end": 393,
                      "raw": "\"c\"",
                      "value": "c"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 395,
                    "end": 424,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 398,
                      "end": 424,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 399,
                          "end": 402,
                          "raw": "\"e\"",
                          "value": "e"
                        },
                        {
                          "type": "Literal",
                          "start": 404,
                          "end": 405,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 407,
                          "end": 411,
                          "raw": "true",
                          "value": true
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 413,
                          "end": 423,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 415,
                              "end": 421,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 415,
                                "end": 416,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 418,
                                "end": 421,
                                "raw": "\"g\"",
                                "value": "g"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 376,
              "end": 378,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 493,
      "end": 527,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 508,
        "end": 527,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 514,
            "end": 525,
            "argument": {
              "type": "ArrayExpression",
              "start": 521,
              "end": 524,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 522,
                  "end": 523,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 502,
        "end": 504,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 505,
          "end": 506,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 528,
      "end": 551,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 550,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 536,
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 539,
            "end": 550,
            "arguments": [
              {
                "type": "Literal",
                "start": 542,
                "end": 549,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 539,
              "end": 541,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 552,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 574,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 560,
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 563,
            "end": 574,
            "arguments": [
              {
                "type": "Literal",
                "start": 566,
                "end": 573,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 563,
              "end": 565,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 643,
      "end": 678,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 658,
        "end": 678,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 664,
            "end": 676,
            "argument": {
              "type": "MemberExpression",
              "start": 671,
              "end": 675,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 671,
                "end": 672,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 673,
                "end": 674,
                "raw": "0",
                "value": 0
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
        "start": 652,
        "end": 654,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 655,
          "end": 656,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 679,
      "end": 715,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 714,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 687,
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 690,
            "end": 714,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 693,
                "end": 713,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 694,
                    "end": 702,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 695,
                        "end": 696,
                        "raw": "1",
                        "value": 1
                      },
                      {
                        "type": "Literal",
                        "start": 698,
                        "end": 701,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 704,
                    "end": 712,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 705,
                        "end": 706,
                        "raw": "2",
                        "value": 2
                      },
                      {
                        "type": "Literal",
                        "start": 708,
                        "end": 711,
                        "raw": "\"y\"",
                        "value": "y"
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 690,
              "end": 692,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 716,
      "end": 769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 768,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 725,
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 728,
            "end": 768,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 731,
                "end": 767,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 732,
                    "end": 748,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 734,
                        "end": 738,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 734,
                          "end": 735,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 737,
                          "end": 738,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "Property",
                        "start": 740,
                        "end": 746,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 740,
                          "end": 741,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 743,
                          "end": 746,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      }
                    ]
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 750,
                    "end": 766,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 752,
                        "end": 756,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 752,
                          "end": 753,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 755,
                          "end": 756,
                          "raw": "2",
                          "value": 2
                        }
                      },
                      {
                        "type": "Property",
                        "start": 758,
                        "end": 764,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 759,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 761,
                          "end": 764,
                          "raw": "\"y\"",
                          "value": "y"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 728,
              "end": 730,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 846,
      "end": 884,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 863,
        "end": 884,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 869,
            "end": 882,
            "argument": {
              "type": "MemberExpression",
              "start": 876,
              "end": 881,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 876,
                "end": 879,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 880,
                "end": 881,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
        "start": 855,
        "end": 857,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 858,
          "end": 861,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 885,
      "end": 930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 891,
          "end": 929,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 891,
            "end": 894,
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 897,
            "end": 929,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 900,
                "end": 928,
                "properties": [
                  {
                    "type": "Property",
                    "start": 902,
                    "end": 913,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 902,
                      "end": 903,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 905,
                      "end": 913,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 906,
                          "end": 907,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 909,
                          "end": 912,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 915,
                    "end": 926,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 915,
                      "end": 916,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 918,
                      "end": 926,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 919,
                          "end": 920,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 922,
                          "end": 925,
                          "raw": "\"y\"",
                          "value": "y"
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 897,
              "end": 899,
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 931,
      "end": 992,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 937,
          "end": 991,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 937,
            "end": 940,
            "decorators": [],
            "name": "t12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 943,
            "end": 991,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 946,
                "end": 990,
                "properties": [
                  {
                    "type": "Property",
                    "start": 948,
                    "end": 967,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 948,
                      "end": 949,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 951,
                      "end": 967,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 953,
                          "end": 957,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 953,
                            "end": 954,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 956,
                            "end": 957,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "Property",
                          "start": 959,
                          "end": 965,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 959,
                            "end": 960,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 962,
                            "end": 965,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 969,
                    "end": 988,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 969,
                      "end": 970,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 972,
                      "end": 988,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 974,
                          "end": 978,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 974,
                            "end": 975,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 977,
                            "end": 978,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "Property",
                          "start": 980,
                          "end": 986,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 980,
                            "end": 981,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 983,
                            "end": 986,
                            "raw": "\"y\"",
                            "value": "y"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 943,
              "end": 945,
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 1023,
      "end": 1191,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1031,
        "end": 1191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1073,
            "end": 1090,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1073,
              "end": 1084,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1084,
              "end": 1090,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1088,
                "end": 1090,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1085,
                  "end": 1086,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1157,
            "end": 1189,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1157,
              "end": 1160,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1160,
              "end": 1189,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1164,
                "end": 1189,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1174,
                    "end": 1183,
                    "argument": {
                      "type": "Identifier",
                      "start": 1181,
                      "end": 1182,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 1161,
                  "end": 1162,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1029,
        "end": 1030,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1193,
      "end": 1260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1199,
          "end": 1259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1199,
            "end": 1202,
            "decorators": [],
            "name": "t13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1205,
            "end": 1259,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1211,
                "end": 1258,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1213,
                    "end": 1217,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1213,
                      "end": 1214,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1216,
                      "end": 1217,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1219,
                    "end": 1225,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1219,
                      "end": 1220,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1222,
                      "end": 1225,
                      "raw": "\"c\"",
                      "value": "c"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1227,
                    "end": 1256,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1227,
                      "end": 1228,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 1230,
                      "end": 1256,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1231,
                          "end": 1234,
                          "raw": "\"e\"",
                          "value": "e"
                        },
                        {
                          "type": "Literal",
                          "start": 1236,
                          "end": 1237,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 1239,
                          "end": 1243,
                          "raw": "true",
                          "value": true
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 1245,
                          "end": 1255,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1247,
                              "end": 1253,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1247,
                                "end": 1248,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 1250,
                                "end": 1253,
                                "raw": "\"g\"",
                                "value": "g"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1209,
              "end": 1210,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1261,
      "end": 1300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1267,
          "end": 1299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1270,
            "decorators": [],
            "name": "t14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1273,
            "end": 1299,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1281,
                "end": 1298,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1282,
                    "end": 1285,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 1287,
                    "end": 1297,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1288,
                        "end": 1291,
                        "raw": "\"b\"",
                        "value": "b"
                      },
                      {
                        "type": "Literal",
                        "start": 1293,
                        "end": 1296,
                        "raw": "\"c\"",
                        "value": "c"
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1273,
              "end": 1280,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1273,
                "end": 1276,
                "decorators": [],
                "name": "t13",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1277,
                "end": 1280,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1387,
      "end": 1428,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1408,
        "end": 1428,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1414,
            "end": 1426,
            "argument": {
              "type": "Identifier",
              "start": 1421,
              "end": 1425,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1396,
        "end": 1398,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1399,
          "end": 1406,
          "argument": {
            "type": "Identifier",
            "start": 1402,
            "end": 1406,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1429,
      "end": 1470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1435,
          "end": 1469,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1435,
            "end": 1438,
            "decorators": [],
            "name": "t15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1441,
            "end": 1469,
            "arguments": [
              {
                "type": "Literal",
                "start": 1444,
                "end": 1445,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1447,
                "end": 1450,
                "raw": "'b'",
                "value": "b"
              },
              {
                "type": "ObjectExpression",
                "start": 1452,
                "end": 1468,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1454,
                    "end": 1458,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1454,
                      "end": 1455,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1457,
                      "end": 1458,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1460,
                    "end": 1466,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1460,
                      "end": 1461,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1463,
                      "end": 1466,
                      "raw": "'x'",
                      "value": "x"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1441,
              "end": 1443,
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
