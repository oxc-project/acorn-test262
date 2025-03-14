arrayFromAsync.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1320,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 98,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 98,
        "body": [
          {
            "type": "ForStatement",
            "start": 48,
            "end": 94,
            "body": {
              "type": "ExpressionStatement",
              "start": 82,
              "end": 94,
              "expression": {
                "type": "YieldExpression",
                "start": 82,
                "end": 93,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 88,
                  "end": 93,
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 92,
                    "end": 93,
                    "raw": "2",
                    "value": 2
                  }
                },
                "delegate": false
              }
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 53,
              "end": 62,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 57,
                  "end": 62,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 61,
                    "end": 62,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 64,
              "end": 69,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 71,
              "end": 74,
              "argument": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 37,
        "decorators": [],
        "name": "asyncGen",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "n",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 208,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 208,
        "body": [
          {
            "type": "ForStatement",
            "start": 133,
            "end": 206,
            "body": {
              "type": "BlockStatement",
              "start": 161,
              "end": 206,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 171,
                  "end": 200,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 171,
                    "end": 199,
                    "argument": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 199,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 193,
                          "end": 198,
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "start": 193,
                            "end": 194,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 197,
                            "end": 198,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 192,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 184,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 192,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 138,
              "end": 147,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 142,
                  "end": 147,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 146,
                    "end": 147,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 149,
              "end": 154,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 156,
              "end": 159,
              "argument": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 122,
        "decorators": [],
        "name": "genPromises",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "decorators": [],
          "name": "n",
          "optional": false
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 223,
            "decorators": [],
            "name": "arrLike",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 226,
            "end": 352,
            "properties": [
              {
                "type": "Property",
                "start": 232,
                "end": 253,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 232,
                  "end": 233,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 235,
                  "end": 253,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 251,
                      "end": 252,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 235,
                    "end": 250,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 242,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 250,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 259,
                "end": 280,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 259,
                  "end": 260,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 262,
                  "end": 280,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 278,
                      "end": 279,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 262,
                    "end": 277,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 269,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 277,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 286,
                "end": 307,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 286,
                  "end": 287,
                  "raw": "2",
                  "value": 2
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 289,
                  "end": 307,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 305,
                      "end": 306,
                      "raw": "4",
                      "value": 4
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 289,
                    "end": 304,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 296,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 304,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 313,
                "end": 334,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 313,
                  "end": 314,
                  "raw": "3",
                  "value": 3
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 316,
                  "end": 334,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 332,
                      "end": 333,
                      "raw": "6",
                      "value": 6
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 316,
                    "end": 331,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 323,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 331,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 340,
                "end": 349,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 346,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 348,
                  "end": 349,
                  "raw": "4",
                  "value": 4
                }
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
      "start": 354,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 374,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 374,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 366,
                "end": 374,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 366,
                  "end": 372
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 377,
            "end": 379,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 381,
      "end": 434,
      "await": true,
      "body": {
        "type": "BlockStatement",
        "start": 416,
        "end": 434,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 432,
            "expression": {
              "type": "CallExpression",
              "start": 420,
              "end": 431,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 429,
                  "end": 430,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 420,
                "end": 428,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 423,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 428,
                  "decorators": [],
                  "name": "push",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 392,
        "end": 399,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 398,
            "end": 399,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "CallExpression",
        "start": 403,
        "end": 414,
        "arguments": [
          {
            "type": "Literal",
            "start": 412,
            "end": 413,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 403,
          "end": 411,
          "decorators": [],
          "name": "asyncGen",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 483,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 450,
            "decorators": [],
            "name": "sameArr1",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 453,
            "end": 483,
            "argument": {
              "type": "CallExpression",
              "start": 459,
              "end": 483,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 475,
                  "end": 482,
                  "decorators": [],
                  "name": "arrLike",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 459,
                "end": 474,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 464,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 474,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 485,
      "end": 606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 491,
          "end": 605,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 499,
            "decorators": [],
            "name": "sameArr2",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 502,
            "end": 605,
            "argument": {
              "type": "CallExpression",
              "start": 508,
              "end": 605,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 524,
                  "end": 604,
                  "elements": [
                    {
                      "type": "CallExpression",
                      "start": 525,
                      "end": 543,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 541,
                          "end": 542,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 525,
                        "end": 540,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 525,
                          "end": 532,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 533,
                          "end": 540,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    {
                      "type": "CallExpression",
                      "start": 545,
                      "end": 563,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 561,
                          "end": 562,
                          "raw": "2",
                          "value": 2
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 545,
                        "end": 560,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 552,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 560,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    {
                      "type": "CallExpression",
                      "start": 565,
                      "end": 583,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 581,
                          "end": 582,
                          "raw": "4",
                          "value": 4
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 565,
                        "end": 580,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 572,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 573,
                          "end": 580,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    {
                      "type": "CallExpression",
                      "start": 585,
                      "end": 603,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 601,
                          "end": 602,
                          "raw": "6",
                          "value": 6
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 585,
                        "end": 600,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 592,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 600,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 508,
                "end": 523,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 513,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 523,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 607,
      "end": 662,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 661,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 621,
            "decorators": [],
            "name": "sameArr3",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 624,
            "end": 661,
            "argument": {
              "type": "CallExpression",
              "start": 630,
              "end": 661,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 646,
                  "end": 660,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 658,
                      "end": 659,
                      "raw": "4",
                      "value": 4
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 657,
                    "decorators": [],
                    "name": "genPromises",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 630,
                "end": 645,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 635,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 645,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 715,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 714,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 677,
            "decorators": [],
            "name": "sameArr4",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 680,
            "end": 714,
            "argument": {
              "type": "CallExpression",
              "start": 686,
              "end": 714,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 702,
                  "end": 713,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 711,
                      "end": 712,
                      "raw": "4",
                      "value": 4
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 710,
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 686,
                "end": 701,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 691,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 701,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 717,
      "end": 737,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 735,
        "end": 737,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 726,
        "end": 730,
        "decorators": [],
        "name": "Data",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 732,
          "end": 733,
          "decorators": [],
          "name": "n",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 738,
      "end": 771,
      "expression": {
        "type": "AssignmentExpression",
        "start": 738,
        "end": 770,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 738,
          "end": 752,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 738,
            "end": 742,
            "decorators": [],
            "name": "Data",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 743,
            "end": 752,
            "decorators": [],
            "name": "fromAsync",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 755,
          "end": 770,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 755,
            "end": 760,
            "decorators": [],
            "name": "Array",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 761,
            "end": 770,
            "decorators": [],
            "name": "fromAsync",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 772,
      "end": 823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 778,
          "end": 822,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 778,
            "end": 786,
            "decorators": [],
            "name": "sameArr5",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 789,
            "end": 822,
            "argument": {
              "type": "CallExpression",
              "start": 795,
              "end": 822,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 810,
                  "end": 821,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 819,
                      "end": 820,
                      "raw": "4",
                      "value": 4
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 810,
                    "end": 818,
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 795,
                "end": 809,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 799,
                  "decorators": [],
                  "name": "Data",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 809,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 825,
      "end": 889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 831,
          "end": 888,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 831,
            "end": 838,
            "decorators": [],
            "name": "mapArr1",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 841,
            "end": 888,
            "argument": {
              "type": "CallExpression",
              "start": 847,
              "end": 888,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 863,
                  "end": 874,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 872,
                      "end": 873,
                      "raw": "4",
                      "value": 4
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 871,
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false
                  },
                  "optional": false
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 876,
                  "end": 887,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 881,
                    "end": 887,
                    "operator": "**",
                    "left": {
                      "type": "Identifier",
                      "start": 881,
                      "end": 882,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 886,
                      "end": 887,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 876,
                      "end": 877,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 847,
                "end": 862,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 847,
                  "end": 852,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 853,
                  "end": 862,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 890,
      "end": 969,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 896,
          "end": 968,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 896,
            "end": 903,
            "decorators": [],
            "name": "mapArr2",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 906,
            "end": 968,
            "argument": {
              "type": "CallExpression",
              "start": 912,
              "end": 968,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 928,
                  "end": 937,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 929,
                      "end": 930,
                      "raw": "0",
                      "value": 0
                    },
                    {
                      "type": "Literal",
                      "start": 931,
                      "end": 932,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 933,
                      "end": 934,
                      "raw": "4",
                      "value": 4
                    },
                    {
                      "type": "Literal",
                      "start": 935,
                      "end": 936,
                      "raw": "6",
                      "value": 6
                    }
                  ]
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 939,
                  "end": 967,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 944,
                    "end": 967,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 960,
                        "end": 966,
                        "operator": "**",
                        "left": {
                          "type": "Identifier",
                          "start": 960,
                          "end": 961,
                          "decorators": [],
                          "name": "v",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 965,
                          "end": 966,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 944,
                      "end": 959,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 951,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 952,
                        "end": 959,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 939,
                      "end": 940,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 912,
                "end": 927,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 917,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 927,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 970,
      "end": 1032,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 1031,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 983,
            "decorators": [],
            "name": "mapArr3",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 986,
            "end": 1031,
            "argument": {
              "type": "CallExpression",
              "start": 992,
              "end": 1031,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 1008,
                  "end": 1017,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1009,
                      "end": 1010,
                      "raw": "0",
                      "value": 0
                    },
                    {
                      "type": "Literal",
                      "start": 1011,
                      "end": 1012,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 1013,
                      "end": 1014,
                      "raw": "4",
                      "value": 4
                    },
                    {
                      "type": "Literal",
                      "start": 1015,
                      "end": 1016,
                      "raw": "6",
                      "value": 6
                    }
                  ]
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1019,
                  "end": 1030,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1024,
                    "end": 1030,
                    "operator": "**",
                    "left": {
                      "type": "Identifier",
                      "start": 1024,
                      "end": 1025,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1029,
                      "end": 1030,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1020,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 992,
                "end": 1007,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 992,
                  "end": 997,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1007,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1034,
      "end": 1056,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1040,
          "end": 1055,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1040,
            "end": 1043,
            "decorators": [],
            "name": "err",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1046,
            "end": 1055,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1050,
              "end": 1055,
              "decorators": [],
              "name": "Error",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1057,
      "end": 1117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1063,
          "end": 1116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1063,
            "end": 1074,
            "decorators": [],
            "name": "badIterable",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1077,
            "end": 1116,
            "properties": [
              {
                "type": "Property",
                "start": 1079,
                "end": 1114,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1080,
                  "end": 1095,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1080,
                    "end": 1086,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1087,
                    "end": 1095,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1097,
                  "end": 1114,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1100,
                    "end": 1114,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 1102,
                        "end": 1112,
                        "argument": {
                          "type": "Identifier",
                          "start": 1108,
                          "end": 1111,
                          "decorators": [],
                          "name": "err",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
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
      "start": 1173,
      "end": 1225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1179,
          "end": 1224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1179,
            "end": 1187,
            "decorators": [],
            "name": "badArray",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 1190,
            "end": 1224,
            "argument": {
              "type": "CallExpression",
              "start": 1196,
              "end": 1224,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1223,
                  "decorators": [],
                  "name": "badIterable",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1196,
                "end": 1211,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1196,
                  "end": 1201,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1202,
                  "end": 1211,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1227,
      "end": 1319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1233,
          "end": 1318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1233,
            "end": 1248,
            "decorators": [],
            "name": "withIndexResult",
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 1251,
            "end": 1318,
            "argument": {
              "type": "CallExpression",
              "start": 1257,
              "end": 1318,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 1273,
                  "end": 1283,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1274,
                      "end": 1277,
                      "raw": "\"a\"",
                      "value": "a"
                    },
                    {
                      "type": "Literal",
                      "start": 1279,
                      "end": 1282,
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  ]
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1285,
                  "end": 1317,
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 1302,
                    "end": 1316,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1304,
                        "end": 1309,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1304,
                          "end": 1309,
                          "decorators": [],
                          "name": "index",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 1304,
                          "end": 1309,
                          "decorators": [],
                          "name": "index",
                          "optional": false
                        }
                      },
                      {
                        "type": "Property",
                        "start": 1311,
                        "end": 1314,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1311,
                          "end": 1314,
                          "decorators": [],
                          "name": "str",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 1311,
                          "end": 1314,
                          "decorators": [],
                          "name": "str",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1289,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1296,
                      "decorators": [],
                      "name": "index",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1257,
                "end": 1272,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1257,
                  "end": 1262,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1272,
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false
                }
              },
              "optional": false
            }
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
