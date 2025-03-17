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
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 47,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "value": "Sync result",
                    "raw": "\"Sync result\""
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 106,
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 62,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 105,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
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
                    "value": "Async result",
                    "raw": "\"Async result\""
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 119,
            "end": 151,
            "callee": {
              "type": "MemberExpression",
              "start": 119,
              "end": 130,
              "object": {
                "type": "Identifier",
                "start": 119,
                "end": 126,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "name": "try",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 131,
                "end": 150,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 137,
                  "end": 150,
                  "value": "Sync result",
                  "raw": "\"Sync result\""
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 163,
            "end": 202,
            "callee": {
              "type": "MemberExpression",
              "start": 163,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 163,
                "end": 170,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 174,
                "name": "try",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 175,
                "end": 201,
                "id": null,
                "expression": true,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 187,
                  "end": 201,
                  "value": "Async result",
                  "raw": "\"Async result\""
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 277,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 276,
        "callee": {
          "type": "MemberExpression",
          "start": 225,
          "end": 236,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 232,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 233,
            "end": 236,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 237,
            "end": 268,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 238,
                "end": 249,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 241,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 254,
              "end": 268,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 270,
            "end": 275,
            "value": "foo",
            "raw": "\"foo\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 322,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 321,
        "callee": {
          "type": "MemberExpression",
          "start": 278,
          "end": 289,
          "object": {
            "type": "Identifier",
            "start": 278,
            "end": 285,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 289,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 290,
            "end": 313,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 291,
                "end": 294,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 299,
              "end": 313,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 315,
            "end": 320,
            "value": "foo",
            "raw": "\"foo\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 362,
      "end": 399,
      "expression": {
        "type": "CallExpression",
        "start": 362,
        "end": 398,
        "callee": {
          "type": "MemberExpression",
          "start": 362,
          "end": 373,
          "object": {
            "type": "Identifier",
            "start": 362,
            "end": 369,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 370,
            "end": 373,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 374,
            "end": 397,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 375,
                "end": 378,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 383,
              "end": 397,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 400,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 400,
        "end": 467,
        "callee": {
          "type": "MemberExpression",
          "start": 400,
          "end": 411,
          "object": {
            "type": "Identifier",
            "start": 400,
            "end": 407,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 408,
            "end": 411,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 412,
            "end": 455,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 413,
                "end": 436,
                "name": "foo",
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 441,
              "end": 455,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Identifier",
            "start": 457,
            "end": 466,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 533,
      "expression": {
        "type": "CallExpression",
        "start": 469,
        "end": 532,
        "callee": {
          "type": "MemberExpression",
          "start": 469,
          "end": 480,
          "object": {
            "type": "Identifier",
            "start": 469,
            "end": 476,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 477,
            "end": 480,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 481,
            "end": 524,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 482,
                "end": 505,
                "name": "foo",
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 510,
              "end": 524,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 526,
            "end": 531,
            "value": "foo",
            "raw": "\"foo\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 582,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 581,
        "callee": {
          "type": "MemberExpression",
          "start": 534,
          "end": 545,
          "object": {
            "type": "Identifier",
            "start": 534,
            "end": 541,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 542,
            "end": 545,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 546,
            "end": 569,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 547,
                "end": 550,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 555,
              "end": 569,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Identifier",
            "start": 571,
            "end": 580,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 664,
      "expression": {
        "type": "CallExpression",
        "start": 623,
        "end": 663,
        "callee": {
          "type": "MemberExpression",
          "start": 623,
          "end": 634,
          "object": {
            "type": "Identifier",
            "start": 623,
            "end": 630,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 631,
            "end": 634,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 635,
            "end": 655,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 641,
              "end": 655,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 657,
            "end": 662,
            "value": "foo",
            "raw": "\"foo\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 758,
      "expression": {
        "type": "CallExpression",
        "start": 689,
        "end": 757,
        "callee": {
          "type": "MemberExpression",
          "start": 689,
          "end": 700,
          "object": {
            "type": "Identifier",
            "start": 689,
            "end": 696,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 697,
            "end": 700,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 701,
            "end": 745,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 702,
                "end": 713,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 705,
                  "end": 713,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 707,
                    "end": 713
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 715,
                "end": 726,
                "name": "bar",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 718,
                  "end": 726,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 720,
                    "end": 726
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 731,
              "end": 745,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 747,
            "end": 752,
            "value": "foo",
            "raw": "\"foo\""
          },
          {
            "type": "Literal",
            "start": 754,
            "end": 756,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 799,
      "end": 875,
      "expression": {
        "type": "CallExpression",
        "start": 799,
        "end": 874,
        "callee": {
          "type": "MemberExpression",
          "start": 799,
          "end": 810,
          "object": {
            "type": "Identifier",
            "start": 799,
            "end": 806,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 807,
            "end": 810,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 811,
            "end": 855,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 812,
                "end": 823,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 815,
                  "end": 823,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 817,
                    "end": 823
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 825,
                "end": 836,
                "name": "bar",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 828,
                  "end": 836,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 830,
                    "end": 836
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 841,
              "end": 855,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 857,
            "end": 862,
            "value": "foo",
            "raw": "\"foo\""
          },
          {
            "type": "Literal",
            "start": 864,
            "end": 866,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 868,
            "end": 873,
            "value": "baz",
            "raw": "\"baz\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 915,
      "end": 980,
      "expression": {
        "type": "CallExpression",
        "start": 915,
        "end": 979,
        "callee": {
          "type": "MemberExpression",
          "start": 915,
          "end": 926,
          "object": {
            "type": "Identifier",
            "start": 915,
            "end": 922,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 923,
            "end": 926,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 927,
            "end": 971,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 928,
                "end": 939,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 931,
                  "end": 939,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 933,
                    "end": 939
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 941,
                "end": 952,
                "name": "bar",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 944,
                  "end": 952,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 946,
                    "end": 952
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 957,
              "end": 971,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 973,
            "end": 978,
            "value": "foo",
            "raw": "\"foo\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 981,
      "end": 1047,
      "expression": {
        "type": "CallExpression",
        "start": 981,
        "end": 1046,
        "callee": {
          "type": "MemberExpression",
          "start": 981,
          "end": 992,
          "object": {
            "type": "Identifier",
            "start": 981,
            "end": 988,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 989,
            "end": 992,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 993,
            "end": 1038,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 994,
                "end": 1005,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 997,
                  "end": 1005,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 999,
                    "end": 1005
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1007,
                "end": 1019,
                "name": "bar",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1011,
                  "end": 1019,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1013,
                    "end": 1019
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "Literal",
              "start": 1024,
              "end": 1038,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 1040,
            "end": 1045,
            "value": "foo",
            "raw": "\"foo\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1048,
      "end": 1125,
      "expression": {
        "type": "CallExpression",
        "start": 1048,
        "end": 1124,
        "callee": {
          "type": "MemberExpression",
          "start": 1048,
          "end": 1059,
          "object": {
            "type": "Identifier",
            "start": 1048,
            "end": 1055,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1056,
            "end": 1059,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1060,
            "end": 1105,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1061,
                "end": 1072,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1064,
                  "end": 1072,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1066,
                    "end": 1072
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1074,
                "end": 1086,
                "name": "bar",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1078,
                  "end": 1086,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1080,
                    "end": 1086
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "Literal",
              "start": 1091,
              "end": 1105,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 1107,
            "end": 1112,
            "value": "foo",
            "raw": "\"foo\""
          },
          {
            "type": "Identifier",
            "start": 1114,
            "end": 1123,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1126,
      "end": 1196,
      "expression": {
        "type": "CallExpression",
        "start": 1126,
        "end": 1195,
        "callee": {
          "type": "MemberExpression",
          "start": 1126,
          "end": 1137,
          "object": {
            "type": "Identifier",
            "start": 1126,
            "end": 1133,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1134,
            "end": 1137,
            "name": "try",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1138,
            "end": 1183,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1139,
                "end": 1150,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1142,
                  "end": 1150,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1144,
                    "end": 1150
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1152,
                "end": 1164,
                "name": "bar",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1156,
                  "end": 1164,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1158,
                    "end": 1164
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "Literal",
              "start": 1169,
              "end": 1183,
              "value": "Async result",
              "raw": "\"Async result\""
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 1185,
            "end": 1190,
            "value": "foo",
            "raw": "\"foo\""
          },
          {
            "type": "Literal",
            "start": 1192,
            "end": 1194,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
