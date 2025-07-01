__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "Sync result",
                    "raw": "\"Sync result\"",
                    "start": 31,
                    "end": 44
                  },
                  "start": 24,
                  "end": 45
                }
              ],
              "start": 18,
              "end": 47
            },
            "id": null,
            "generator": false,
            "start": 12,
            "end": 47
          }
        ],
        "optional": false,
        "start": 0,
        "end": 48
      },
      "directive": null,
      "start": 0,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 58
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 62
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 62
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "Async result",
                    "raw": "\"Async result\"",
                    "start": 88,
                    "end": 102
                  },
                  "start": 81,
                  "end": 103
                }
              ],
              "start": 75,
              "end": 105
            },
            "id": null,
            "generator": false,
            "start": 63,
            "end": 105
          }
        ],
        "optional": false,
        "start": 51,
        "end": 106
      },
      "directive": null,
      "start": 51,
      "end": 107
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 126
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "optional": false,
              "computed": false,
              "start": 119,
              "end": 130
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "Sync result",
                  "raw": "\"Sync result\"",
                  "start": 137,
                  "end": 150
                },
                "id": null,
                "generator": false,
                "start": 131,
                "end": 150
              }
            ],
            "optional": false,
            "start": 119,
            "end": 151
          },
          "definite": false,
          "start": 115,
          "end": 151
        }
      ],
      "declare": false,
      "start": 109,
      "end": 152
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 174
              },
              "optional": false,
              "computed": false,
              "start": 163,
              "end": 174
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "Async result",
                  "raw": "\"Async result\"",
                  "start": 187,
                  "end": 201
                },
                "id": null,
                "generator": false,
                "start": 175,
                "end": 201
              }
            ],
            "optional": false,
            "start": 163,
            "end": 202
          },
          "definite": false,
          "start": 159,
          "end": 202
        }
      ],
      "declare": false,
      "start": 153,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 232
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 236
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 236
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  },
                  "start": 241,
                  "end": 249
                },
                "start": 238,
                "end": 249
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 254,
              "end": 268
            },
            "id": null,
            "generator": false,
            "start": 237,
            "end": 268
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 270,
            "end": 275
          }
        ],
        "optional": false,
        "start": 225,
        "end": 276
      },
      "directive": null,
      "start": 225,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 289
          },
          "optional": false,
          "computed": false,
          "start": 278,
          "end": 289
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 294
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 299,
              "end": 313
            },
            "id": null,
            "generator": false,
            "start": 290,
            "end": 313
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 315,
            "end": 320
          }
        ],
        "optional": false,
        "start": 278,
        "end": 321
      },
      "directive": null,
      "start": 278,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 362,
            "end": 369
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 373
          },
          "optional": false,
          "computed": false,
          "start": 362,
          "end": 373
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 378
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 383,
              "end": 397
            },
            "id": null,
            "generator": false,
            "start": 374,
            "end": 397
          }
        ],
        "optional": false,
        "start": 362,
        "end": 398
      },
      "directive": null,
      "start": 362,
      "end": 399
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 407
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 411
          },
          "optional": false,
          "computed": false,
          "start": 400,
          "end": 411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 418,
                    "end": 436
                  },
                  "start": 416,
                  "end": 436
                },
                "start": 413,
                "end": 436
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 441,
              "end": 455
            },
            "id": null,
            "generator": false,
            "start": 412,
            "end": 455
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 466
          }
        ],
        "optional": false,
        "start": 400,
        "end": 467
      },
      "directive": null,
      "start": 400,
      "end": 468
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 476
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 480
          },
          "optional": false,
          "computed": false,
          "start": 469,
          "end": 480
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 487,
                    "end": 505
                  },
                  "start": 485,
                  "end": 505
                },
                "start": 482,
                "end": 505
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 510,
              "end": 524
            },
            "id": null,
            "generator": false,
            "start": 481,
            "end": 524
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 526,
            "end": 531
          }
        ],
        "optional": false,
        "start": 469,
        "end": 532
      },
      "directive": null,
      "start": 469,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 541
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "optional": false,
          "computed": false,
          "start": 534,
          "end": 545
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 550
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 555,
              "end": 569
            },
            "id": null,
            "generator": false,
            "start": 546,
            "end": 569
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 580
          }
        ],
        "optional": false,
        "start": 534,
        "end": 581
      },
      "directive": null,
      "start": 534,
      "end": 582
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 630
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 634
          },
          "optional": false,
          "computed": false,
          "start": 623,
          "end": 634
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 641,
              "end": 655
            },
            "id": null,
            "generator": false,
            "start": 635,
            "end": 655
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 657,
            "end": 662
          }
        ],
        "optional": false,
        "start": 623,
        "end": 663
      },
      "directive": null,
      "start": 623,
      "end": 664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 696
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 700
          },
          "optional": false,
          "computed": false,
          "start": 689,
          "end": 700
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 707,
                    "end": 713
                  },
                  "start": 705,
                  "end": 713
                },
                "start": 702,
                "end": 713
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 720,
                    "end": 726
                  },
                  "start": 718,
                  "end": 726
                },
                "start": 715,
                "end": 726
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 731,
              "end": 745
            },
            "id": null,
            "generator": false,
            "start": 701,
            "end": 745
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 747,
            "end": 752
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 754,
            "end": 756
          }
        ],
        "optional": false,
        "start": 689,
        "end": 757
      },
      "directive": null,
      "start": 689,
      "end": 758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 806
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 810
          },
          "optional": false,
          "computed": false,
          "start": 799,
          "end": 810
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 817,
                    "end": 823
                  },
                  "start": 815,
                  "end": 823
                },
                "start": 812,
                "end": 823
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 830,
                    "end": 836
                  },
                  "start": 828,
                  "end": 836
                },
                "start": 825,
                "end": 836
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 841,
              "end": 855
            },
            "id": null,
            "generator": false,
            "start": 811,
            "end": 855
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 857,
            "end": 862
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 864,
            "end": 866
          },
          {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 868,
            "end": 873
          }
        ],
        "optional": false,
        "start": 799,
        "end": 874
      },
      "directive": null,
      "start": 799,
      "end": 875
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 915,
            "end": 922
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 926
          },
          "optional": false,
          "computed": false,
          "start": 915,
          "end": 926
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 933,
                    "end": 939
                  },
                  "start": 931,
                  "end": 939
                },
                "start": 928,
                "end": 939
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 946,
                    "end": 952
                  },
                  "start": 944,
                  "end": 952
                },
                "start": 941,
                "end": 952
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 957,
              "end": 971
            },
            "id": null,
            "generator": false,
            "start": 927,
            "end": 971
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 973,
            "end": 978
          }
        ],
        "optional": false,
        "start": 915,
        "end": 979
      },
      "directive": null,
      "start": 915,
      "end": 980
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 981,
            "end": 988
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 989,
            "end": 992
          },
          "optional": false,
          "computed": false,
          "start": 981,
          "end": 992
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 999,
                    "end": 1005
                  },
                  "start": 997,
                  "end": 1005
                },
                "start": 994,
                "end": 1005
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1013,
                    "end": 1019
                  },
                  "start": 1011,
                  "end": 1019
                },
                "start": 1007,
                "end": 1019
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 1024,
              "end": 1038
            },
            "id": null,
            "generator": false,
            "start": 993,
            "end": 1038
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1040,
            "end": 1045
          }
        ],
        "optional": false,
        "start": 981,
        "end": 1046
      },
      "directive": null,
      "start": 981,
      "end": 1047
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1048,
            "end": 1055
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1059
          },
          "optional": false,
          "computed": false,
          "start": 1048,
          "end": 1059
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1066,
                    "end": 1072
                  },
                  "start": 1064,
                  "end": 1072
                },
                "start": 1061,
                "end": 1072
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1080,
                    "end": 1086
                  },
                  "start": 1078,
                  "end": 1086
                },
                "start": 1074,
                "end": 1086
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 1091,
              "end": 1105
            },
            "id": null,
            "generator": false,
            "start": 1060,
            "end": 1105
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1107,
            "end": 1112
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1123
          }
        ],
        "optional": false,
        "start": 1048,
        "end": 1124
      },
      "directive": null,
      "start": 1048,
      "end": 1125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1126,
            "end": 1133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 1134,
            "end": 1137
          },
          "optional": false,
          "computed": false,
          "start": 1126,
          "end": 1137
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1144,
                    "end": 1150
                  },
                  "start": 1142,
                  "end": 1150
                },
                "start": 1139,
                "end": 1150
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1158,
                    "end": 1164
                  },
                  "start": 1156,
                  "end": 1164
                },
                "start": 1152,
                "end": 1164
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "Async result",
              "raw": "\"Async result\"",
              "start": 1169,
              "end": 1183
            },
            "id": null,
            "generator": false,
            "start": 1138,
            "end": 1183
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1185,
            "end": 1190
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1192,
            "end": 1194
          }
        ],
        "optional": false,
        "start": 1126,
        "end": 1195
      },
      "directive": null,
      "start": 1126,
      "end": 1196
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1196
}
```
