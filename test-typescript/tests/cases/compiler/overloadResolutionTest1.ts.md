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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 30,
          "name": "bar",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 32,
          "end": 38
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 71,
          "name": "bar",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 59,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 60,
                        "end": 67
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 79,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 73,
          "end": 79
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 81,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 108,
          "name": "bar",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 101,
                        "end": 104
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 113,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 110,
          "end": 113
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 136,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 139,
            "end": 154,
            "callee": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 145,
                          "end": 146,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 147,
                          "end": 151,
                          "value": true,
                          "raw": "true"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 172,
            "name": "x11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 175,
            "end": 187,
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 182,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 183,
                          "end": 184,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "name": "x111",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 209,
            "end": 223,
            "callee": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 216,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 217,
                          "end": 220,
                          "value": "s",
                          "raw": "\"s\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 274,
            "name": "x1111",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 277,
            "end": 292,
            "callee": {
              "type": "Identifier",
              "start": 277,
              "end": 280,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 285,
                          "end": 289,
                          "value": null,
                          "raw": "null"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 396,
      "end": 434,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 409,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 410,
          "end": 425,
          "name": "bar",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 416,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 426,
        "end": 433,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 427,
          "end": 433
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 435,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 448,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 449,
          "end": 465,
          "name": "bar",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 455,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 456,
                      "end": 463
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 466,
        "end": 473,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 467,
          "end": 473
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 475,
      "end": 520,
      "id": {
        "type": "Identifier",
        "start": 484,
        "end": 488,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 489,
          "end": 501,
          "name": "bar",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 495,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 495,
                    "end": 499,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 496,
                      "end": 499
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 502,
        "end": 506,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 503,
          "end": 506
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 527,
            "end": 529,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 532,
            "end": 543,
            "callee": {
              "type": "Identifier",
              "start": 532,
              "end": 536,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 539,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 540,
                      "end": 541,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 560,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 563,
            "end": 577,
            "callee": {
              "type": "Identifier",
              "start": 563,
              "end": 567,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 569,
                      "end": 570,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 571,
                      "end": 575,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 597,
            "end": 610,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 601,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 604,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 605,
                      "end": 608,
                      "value": "s",
                      "raw": "\"s\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 623,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 636,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 637,
          "end": 652,
          "name": "bar",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 643,
                    "end": 650,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 644,
                      "end": 650
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 653,
        "end": 660,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 654,
          "end": 660
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 662,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 675,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 676,
          "end": 691,
          "name": "bar",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 682,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 682,
                    "end": 689,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 683,
                      "end": 689
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 692,
        "end": 699,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 693,
          "end": 699
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 701,
      "end": 746,
      "id": {
        "type": "Identifier",
        "start": 710,
        "end": 714,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 715,
          "end": 727,
          "name": "bar",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 721,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 721,
                    "end": 725,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 722,
                      "end": 725
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 728,
        "end": 732,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 729,
          "end": 732
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 753,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 756,
            "end": 770,
            "callee": {
              "type": "Identifier",
              "start": 756,
              "end": 760,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 762,
                      "end": 763,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 764,
                      "end": 768,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
