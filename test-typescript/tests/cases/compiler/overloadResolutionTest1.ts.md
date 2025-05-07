__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 780,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 39,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 30,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 30,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 17,
              "end": 30,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 28,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 18,
                    "end": 27,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 32,
          "end": 38
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 80,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 71,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 71,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 57,
              "end": 71,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 69,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 58,
                    "end": 68,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 59,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 60,
                        "end": 67
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 79,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 73,
          "end": 79
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 81,
      "end": 127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 127,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 115,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "bar",
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
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 108,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 108,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 98,
              "end": 108,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 98,
                "end": 106,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 99,
                    "end": 105,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 101,
                        "end": 104
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 113,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 110,
          "end": 113
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 127,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 136,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 139,
            "end": 154,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 143,
                "end": 153,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 144,
                    "end": 152,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 145,
                        "end": 151,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 145,
                          "end": 146,
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
                          "start": 147,
                          "end": 151,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 172,
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 175,
            "end": 187,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 179,
                "end": 186,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 180,
                    "end": 185,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 181,
                        "end": 184,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 182,
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
                          "start": 183,
                          "end": 184,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "decorators": [],
            "name": "x111",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 209,
            "end": 223,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 213,
                "end": 222,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 214,
                    "end": 221,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 215,
                        "end": 220,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 216,
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
                          "start": 217,
                          "end": 220,
                          "raw": "\"s\"",
                          "value": "s",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 292,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 274,
            "decorators": [],
            "name": "x1111",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 277,
            "end": 292,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 281,
                "end": 291,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 282,
                    "end": 290,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 283,
                        "end": 289,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
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
                          "start": 285,
                          "end": 289,
                          "raw": "null",
                          "value": null,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 277,
              "end": 280,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 396,
      "end": 434,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 409,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 410,
          "end": 425,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 425,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 414,
              "end": 425,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 415,
                  "end": 424,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 416,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 426,
        "end": 433,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 427,
          "end": 433
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 435,
      "end": 474,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 448,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 449,
          "end": 465,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 452,
            "end": 465,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 453,
              "end": 465,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 454,
                  "end": 464,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 455,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 456,
                      "end": 463
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 466,
        "end": 473,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 467,
          "end": 473
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 475,
      "end": 520,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 506,
        "end": 520,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 508,
            "end": 518,
            "argument": {
              "type": "Identifier",
              "start": 515,
              "end": 518,
              "decorators": [],
              "name": "bar",
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
        "start": 484,
        "end": 488,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 489,
          "end": 501,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 492,
            "end": 501,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 493,
              "end": 501,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 494,
                  "end": 500,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 495,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 495,
                    "end": 499,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 496,
                      "end": 499
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 502,
        "end": 506,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 503,
          "end": 506
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 520,
      "end": 521
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 527,
          "end": 543,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 527,
            "end": 529,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 532,
            "end": 543,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 537,
                "end": 542,
                "properties": [
                  {
                    "type": "Property",
                    "start": 538,
                    "end": 541,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 539,
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
                      "start": 540,
                      "end": 541,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 532,
              "end": 536,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 554,
      "end": 578,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 577,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 560,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 563,
            "end": 577,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 568,
                "end": 576,
                "properties": [
                  {
                    "type": "Property",
                    "start": 569,
                    "end": 575,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 569,
                      "end": 570,
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
                      "start": 571,
                      "end": 575,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 563,
              "end": 567,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 588,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 610,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 597,
            "end": 610,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 602,
                "end": 609,
                "properties": [
                  {
                    "type": "Property",
                    "start": 603,
                    "end": 608,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 604,
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
                      "start": 605,
                      "end": 608,
                      "raw": "\"s\"",
                      "value": "s",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 601,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 623,
      "end": 661,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 636,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 637,
          "end": 652,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 652,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 641,
              "end": 652,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 642,
                  "end": 651,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 643,
                    "end": 650,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 644,
                      "end": 650
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 653,
        "end": 660,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 654,
          "end": 660
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 662,
      "end": 700,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 675,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 676,
          "end": 691,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 679,
            "end": 691,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 680,
              "end": 691,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 681,
                  "end": 690,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 682,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 682,
                    "end": 689,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 683,
                      "end": 689
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 692,
        "end": 699,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 693,
          "end": 699
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 701,
      "end": 746,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 732,
        "end": 746,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 734,
            "end": 744,
            "argument": {
              "type": "Identifier",
              "start": 741,
              "end": 744,
              "decorators": [],
              "name": "bar",
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
        "start": 710,
        "end": 714,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 715,
          "end": 727,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 718,
            "end": 727,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 719,
              "end": 727,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 720,
                  "end": 726,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 721,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 721,
                    "end": 725,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 722,
                      "end": 725
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 728,
        "end": 732,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 729,
          "end": 732
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 746,
      "end": 747
    },
    {
      "type": "VariableDeclaration",
      "start": 748,
      "end": 771,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 752,
          "end": 770,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 753,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 756,
            "end": 770,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 761,
                "end": 769,
                "properties": [
                  {
                    "type": "Property",
                    "start": 762,
                    "end": 768,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 762,
                      "end": 763,
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
                      "start": 764,
                      "end": 768,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 756,
              "end": 760,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
