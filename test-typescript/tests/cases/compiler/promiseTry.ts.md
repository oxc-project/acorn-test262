__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1197,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 48,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 47,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 18,
              "end": 47,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 24,
                  "end": 45,
                  "argument": {
                    "type": "Literal",
                    "start": 31,
                    "end": 44,
                    "raw": "\"Sync result\"",
                    "value": "Sync result"
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 106,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 105,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 75,
              "end": 105,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 81,
                  "end": 103,
                  "argument": {
                    "type": "Literal",
                    "start": 88,
                    "end": 102,
                    "raw": "\"Async result\"",
                    "value": "Async result"
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 62,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 119,
            "end": 151,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 131,
                "end": 150,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 137,
                  "end": 150,
                  "raw": "\"Sync result\"",
                  "value": "Sync result"
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 119,
              "end": 130,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 119,
                "end": 126,
                "decorators": [],
                "name": "Promise",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "decorators": [],
                "name": "try",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 163,
            "end": 202,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 175,
                "end": 201,
                "async": true,
                "body": {
                  "type": "Literal",
                  "start": 187,
                  "end": 201,
                  "raw": "\"Async result\"",
                  "value": "Async result"
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 163,
              "end": 174,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 163,
                "end": 170,
                "decorators": [],
                "name": "Promise",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 174,
                "decorators": [],
                "name": "try",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 277,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 276,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 237,
            "end": 268,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 254,
              "end": 268,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 238,
                "end": 249,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 241,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 270,
            "end": 275,
            "raw": "\"foo\"",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 225,
          "end": 236,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 232,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 233,
            "end": 236,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 322,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 321,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 290,
            "end": 313,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 299,
              "end": 313,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 291,
                "end": 294,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 315,
            "end": 320,
            "raw": "\"foo\"",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 278,
          "end": 289,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 278,
            "end": 285,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 289,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 362,
      "end": 399,
      "expression": {
        "type": "CallExpression",
        "start": 362,
        "end": 398,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 374,
            "end": 397,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 383,
              "end": 397,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 375,
                "end": 378,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 362,
          "end": 373,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 362,
            "end": 369,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 370,
            "end": 373,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 400,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 400,
        "end": 467,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 412,
            "end": 455,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 441,
              "end": 455,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 413,
                "end": 436,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 416,
                  "end": 436,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 418,
                    "end": 436,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 418,
                        "end": 424
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 427,
                        "end": 436
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 457,
            "end": 466,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 400,
          "end": 411,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 400,
            "end": 407,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 408,
            "end": 411,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 533,
      "expression": {
        "type": "CallExpression",
        "start": 469,
        "end": 532,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 481,
            "end": 524,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 510,
              "end": 524,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 482,
                "end": 505,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 485,
                  "end": 505,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 487,
                    "end": 505,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 487,
                        "end": 493
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 496,
                        "end": 505
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 526,
            "end": 531,
            "raw": "\"foo\"",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 469,
          "end": 480,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 469,
            "end": 476,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 477,
            "end": 480,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 582,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 581,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 546,
            "end": 569,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 555,
              "end": 569,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 547,
                "end": 550,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 571,
            "end": 580,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 534,
          "end": 545,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 534,
            "end": 541,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 542,
            "end": 545,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 664,
      "expression": {
        "type": "CallExpression",
        "start": 623,
        "end": 663,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 635,
            "end": 655,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 641,
              "end": 655,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          },
          {
            "type": "Literal",
            "start": 657,
            "end": 662,
            "raw": "\"foo\"",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 623,
          "end": 634,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 623,
            "end": 630,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 631,
            "end": 634,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 758,
      "expression": {
        "type": "CallExpression",
        "start": 689,
        "end": 757,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 701,
            "end": 745,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 731,
              "end": 745,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 702,
                "end": 713,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 705,
                  "end": 713,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 707,
                    "end": 713
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 715,
                "end": 726,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 718,
                  "end": 726,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 720,
                    "end": 726
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 747,
            "end": 752,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 754,
            "end": 756,
            "raw": "42",
            "value": 42
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 689,
          "end": 700,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 689,
            "end": 696,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 697,
            "end": 700,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 799,
      "end": 875,
      "expression": {
        "type": "CallExpression",
        "start": 799,
        "end": 874,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 811,
            "end": 855,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 841,
              "end": 855,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 812,
                "end": 823,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 815,
                  "end": 823,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 817,
                    "end": 823
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 825,
                "end": 836,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 828,
                  "end": 836,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 830,
                    "end": 836
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 857,
            "end": 862,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 864,
            "end": 866,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 868,
            "end": 873,
            "raw": "\"baz\"",
            "value": "baz"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 799,
          "end": 810,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 799,
            "end": 806,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 807,
            "end": 810,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 915,
      "end": 980,
      "expression": {
        "type": "CallExpression",
        "start": 915,
        "end": 979,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 927,
            "end": 971,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 957,
              "end": 971,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 928,
                "end": 939,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 931,
                  "end": 939,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 933,
                    "end": 939
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 941,
                "end": 952,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 944,
                  "end": 952,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 946,
                    "end": 952
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 973,
            "end": 978,
            "raw": "\"foo\"",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 915,
          "end": 926,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 915,
            "end": 922,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 923,
            "end": 926,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 981,
      "end": 1047,
      "expression": {
        "type": "CallExpression",
        "start": 981,
        "end": 1046,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 993,
            "end": 1038,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 1024,
              "end": 1038,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 994,
                "end": 1005,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 997,
                  "end": 1005,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 999,
                    "end": 1005
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1007,
                "end": 1019,
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1011,
                  "end": 1019,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1013,
                    "end": 1019
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 1040,
            "end": 1045,
            "raw": "\"foo\"",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 981,
          "end": 992,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 981,
            "end": 988,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 989,
            "end": 992,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1048,
      "end": 1125,
      "expression": {
        "type": "CallExpression",
        "start": 1048,
        "end": 1124,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1060,
            "end": 1105,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 1091,
              "end": 1105,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1061,
                "end": 1072,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1064,
                  "end": 1072,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1066,
                    "end": 1072
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1074,
                "end": 1086,
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1078,
                  "end": 1086,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1080,
                    "end": 1086
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 1107,
            "end": 1112,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "Identifier",
            "start": 1114,
            "end": 1123,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1048,
          "end": 1059,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1048,
            "end": 1055,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1056,
            "end": 1059,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1126,
      "end": 1196,
      "expression": {
        "type": "CallExpression",
        "start": 1126,
        "end": 1195,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1138,
            "end": 1183,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 1169,
              "end": 1183,
              "raw": "\"Async result\"",
              "value": "Async result"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1139,
                "end": 1150,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1142,
                  "end": 1150,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1144,
                    "end": 1150
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1152,
                "end": 1164,
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1156,
                  "end": 1164,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1158,
                    "end": 1164
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 1185,
            "end": 1190,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 1192,
            "end": 1194,
            "raw": "42",
            "value": 42
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1126,
          "end": 1137,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1126,
            "end": 1133,
            "decorators": [],
            "name": "Promise",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1134,
            "end": 1137,
            "decorators": [],
            "name": "try",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
