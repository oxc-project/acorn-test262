__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 15,
    "end": 17,
    "range": [
      15,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "String",
    "value": "\"Sync result\"",
    "start": 31,
    "end": 44,
    "range": [
      31,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 51,
    "end": 58,
    "range": [
      51,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 59,
    "end": 62,
    "range": [
      59,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 63,
    "end": 68,
    "range": [
      63,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 88,
    "end": 102,
    "range": [
      88,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 119,
    "end": 126,
    "range": [
      119,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 127,
    "end": 130,
    "range": [
      127,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 134,
    "end": 136,
    "range": [
      134,
      136
    ]
  },
  {
    "type": "String",
    "value": "\"Sync result\"",
    "start": 137,
    "end": 150,
    "range": [
      137,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 163,
    "end": 170,
    "range": [
      163,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 171,
    "end": 174,
    "range": [
      171,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 187,
    "end": 201,
    "range": [
      187,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 225,
    "end": 232,
    "range": [
      225,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 233,
    "end": 236,
    "range": [
      233,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 238,
    "end": 241,
    "range": [
      238,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 243,
    "end": 249,
    "range": [
      243,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 251,
    "end": 253,
    "range": [
      251,
      253
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 254,
    "end": 268,
    "range": [
      254,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 270,
    "end": 275,
    "range": [
      270,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 278,
    "end": 285,
    "range": [
      278,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 286,
    "end": 289,
    "range": [
      286,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 291,
    "end": 294,
    "range": [
      291,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 296,
    "end": 298,
    "range": [
      296,
      298
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 299,
    "end": 313,
    "range": [
      299,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 315,
    "end": 320,
    "range": [
      315,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 362,
    "end": 369,
    "range": [
      362,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 370,
    "end": 373,
    "range": [
      370,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 375,
    "end": 378,
    "range": [
      375,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 380,
    "end": 382,
    "range": [
      380,
      382
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 383,
    "end": 397,
    "range": [
      383,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 400,
    "end": 407,
    "range": [
      400,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 413,
    "end": 416,
    "range": [
      413,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 418,
    "end": 424,
    "range": [
      418,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 427,
    "end": 436,
    "range": [
      427,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 438,
    "end": 440,
    "range": [
      438,
      440
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 441,
    "end": 455,
    "range": [
      441,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 457,
    "end": 466,
    "range": [
      457,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 469,
    "end": 476,
    "range": [
      469,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 477,
    "end": 480,
    "range": [
      477,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 482,
    "end": 485,
    "range": [
      482,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 487,
    "end": 493,
    "range": [
      487,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 496,
    "end": 505,
    "range": [
      496,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 507,
    "end": 509,
    "range": [
      507,
      509
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 510,
    "end": 524,
    "range": [
      510,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 534,
    "end": 541,
    "range": [
      534,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 542,
    "end": 545,
    "range": [
      542,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 547,
    "end": 550,
    "range": [
      547,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 552,
    "end": 554,
    "range": [
      552,
      554
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 555,
    "end": 569,
    "range": [
      555,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 571,
    "end": 580,
    "range": [
      571,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 623,
    "end": 630,
    "range": [
      623,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 638,
    "end": 640,
    "range": [
      638,
      640
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 641,
    "end": 655,
    "range": [
      641,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 657,
    "end": 662,
    "range": [
      657,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 689,
    "end": 696,
    "range": [
      689,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 697,
    "end": 700,
    "range": [
      697,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 707,
    "end": 713,
    "range": [
      707,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 715,
    "end": 718,
    "range": [
      715,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 720,
    "end": 726,
    "range": [
      720,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 728,
    "end": 730,
    "range": [
      728,
      730
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 731,
    "end": 745,
    "range": [
      731,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 747,
    "end": 752,
    "range": [
      747,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 754,
    "end": 756,
    "range": [
      754,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 799,
    "end": 806,
    "range": [
      799,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 807,
    "end": 810,
    "range": [
      807,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 812,
    "end": 815,
    "range": [
      812,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 817,
    "end": 823,
    "range": [
      817,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 825,
    "end": 828,
    "range": [
      825,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 830,
    "end": 836,
    "range": [
      830,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 838,
    "end": 840,
    "range": [
      838,
      840
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 841,
    "end": 855,
    "range": [
      841,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 857,
    "end": 862,
    "range": [
      857,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 864,
    "end": 866,
    "range": [
      864,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 868,
    "end": 873,
    "range": [
      868,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 915,
    "end": 922,
    "range": [
      915,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 923,
    "end": 926,
    "range": [
      923,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 928,
    "end": 931,
    "range": [
      928,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 933,
    "end": 939,
    "range": [
      933,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 941,
    "end": 944,
    "range": [
      941,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 946,
    "end": 952,
    "range": [
      946,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 954,
    "end": 956,
    "range": [
      954,
      956
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 957,
    "end": 971,
    "range": [
      957,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 973,
    "end": 978,
    "range": [
      973,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 981,
    "end": 988,
    "range": [
      981,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 989,
    "end": 992,
    "range": [
      989,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 994,
    "end": 997,
    "range": [
      994,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 999,
    "end": 1005,
    "range": [
      999,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1007,
    "end": 1010,
    "range": [
      1007,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1013,
    "end": 1019,
    "range": [
      1013,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1021,
    "end": 1023,
    "range": [
      1021,
      1023
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 1024,
    "end": 1038,
    "range": [
      1024,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1040,
    "end": 1045,
    "range": [
      1040,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1048,
    "end": 1055,
    "range": [
      1048,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 1056,
    "end": 1059,
    "range": [
      1056,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1061,
    "end": 1064,
    "range": [
      1061,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1066,
    "end": 1072,
    "range": [
      1066,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1074,
    "end": 1077,
    "range": [
      1074,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1080,
    "end": 1086,
    "range": [
      1080,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1088,
    "end": 1090,
    "range": [
      1088,
      1090
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 1091,
    "end": 1105,
    "range": [
      1091,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1107,
    "end": 1112,
    "range": [
      1107,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1114,
    "end": 1123,
    "range": [
      1114,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1126,
    "end": 1133,
    "range": [
      1126,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 1134,
    "end": 1137,
    "range": [
      1134,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1139,
    "end": 1142,
    "range": [
      1139,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1144,
    "end": 1150,
    "range": [
      1144,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1152,
    "end": 1155,
    "range": [
      1152,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1158,
    "end": 1164,
    "range": [
      1158,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1166,
    "end": 1168,
    "range": [
      1166,
      1168
    ]
  },
  {
    "type": "String",
    "value": "\"Async result\"",
    "start": 1169,
    "end": 1183,
    "range": [
      1169,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1185,
    "end": 1190,
    "range": [
      1185,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1192,
    "end": 1194,
    "range": [
      1192,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  }
]
```
