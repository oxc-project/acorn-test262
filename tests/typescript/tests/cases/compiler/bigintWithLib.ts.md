__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "start": 29,
            "end": 46
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 55
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 56,
                "end": 59
              }
            ],
            "optional": false,
            "start": 49,
            "end": 60
          },
          "definite": false,
          "start": 29,
          "end": 60
        }
      ],
      "declare": false,
      "start": 25,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 71
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "456",
              "raw": "\"456\"",
              "start": 81,
              "end": 86
            }
          ],
          "optional": false,
          "start": 74,
          "end": 87
        },
        "start": 62,
        "end": 87
      },
      "directive": null,
      "start": 62,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 99
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 100,
            "end": 103
          }
        ],
        "start": 89,
        "end": 104
      },
      "directive": null,
      "start": 89,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 131
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 140
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 147
            },
            "optional": false,
            "computed": false,
            "start": 134,
            "end": 147
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 148,
              "end": 149
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 151,
              "end": 158
            }
          ],
          "optional": false,
          "start": 134,
          "end": 159
        },
        "start": 122,
        "end": 159
      },
      "directive": null,
      "start": 122,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 170
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 179
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 187
            },
            "optional": false,
            "computed": false,
            "start": 173,
            "end": 187
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 188,
              "end": 189
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 191,
              "end": 198
            }
          ],
          "optional": false,
          "start": 173,
          "end": 199
        },
        "start": 161,
        "end": 199
      },
      "directive": null,
      "start": 161,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 210
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 222
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 230
            },
            "optional": false,
            "computed": false,
            "start": 213,
            "end": 230
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 213,
          "end": 232
        },
        "start": 201,
        "end": 232
      },
      "directive": null,
      "start": 201,
      "end": 233
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 249,
                "end": 255
              },
              "start": 247,
              "end": 255
            },
            "start": 238,
            "end": 255
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 267
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 276
              },
              "optional": false,
              "computed": false,
              "start": 258,
              "end": 276
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 258,
            "end": 278
          },
          "definite": false,
          "start": 238,
          "end": 278
        }
      ],
      "declare": false,
      "start": 234,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 289
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 301
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 310
            },
            "optional": false,
            "computed": false,
            "start": 292,
            "end": 310
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 311,
              "end": 312
            }
          ],
          "optional": false,
          "start": 292,
          "end": 313
        },
        "start": 280,
        "end": 313
      },
      "directive": null,
      "start": 280,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 324
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 336
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 351
            },
            "optional": false,
            "computed": false,
            "start": 327,
            "end": 351
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 327,
          "end": 353
        },
        "start": 315,
        "end": 353
      },
      "directive": null,
      "start": 315,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 364
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 376
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 391
            },
            "optional": false,
            "computed": false,
            "start": 367,
            "end": 391
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 392,
              "end": 399
            }
          ],
          "optional": false,
          "start": 367,
          "end": 400
        },
        "start": 355,
        "end": 400
      },
      "directive": null,
      "start": 355,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 411
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 423
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 438
            },
            "optional": false,
            "computed": false,
            "start": 414,
            "end": 438
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 439,
              "end": 446
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 455
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 457,
                    "end": 467
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 450,
                  "end": 467
                }
              ],
              "start": 448,
              "end": 469
            }
          ],
          "optional": false,
          "start": 414,
          "end": 470
        },
        "start": 402,
        "end": 470
      },
      "directive": null,
      "start": 402,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 481
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 493
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 508
            },
            "optional": false,
            "computed": false,
            "start": 484,
            "end": 508
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 509,
              "end": 516
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 525
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 527,
                    "end": 537
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 520,
                  "end": 537
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 547
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 549,
                    "end": 554
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 539,
                  "end": 554
                }
              ],
              "start": 518,
              "end": 556
            }
          ],
          "optional": false,
          "start": 484,
          "end": 557
        },
        "start": 472,
        "end": 557
      },
      "directive": null,
      "start": 472,
      "end": 557
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 611
                },
                "typeArguments": null,
                "start": 598,
                "end": 611
              },
              "start": 596,
              "end": 611
            },
            "start": 585,
            "end": 611
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 631
            },
            "typeArguments": null,
            "arguments": [],
            "start": 614,
            "end": 633
          },
          "definite": false,
          "start": 585,
          "end": 633
        }
      ],
      "declare": false,
      "start": 581,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 646
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 666
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 667,
              "end": 669
            }
          ],
          "start": 649,
          "end": 670
        },
        "start": 635,
        "end": 670
      },
      "directive": null,
      "start": 635,
      "end": 671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 672,
          "end": 683
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 703
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 705,
                  "end": 707
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 709,
                  "end": 711
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 713,
                  "end": 715
                }
              ],
              "start": 704,
              "end": 716
            }
          ],
          "start": 686,
          "end": 717
        },
        "start": 672,
        "end": 717
      },
      "directive": null,
      "start": 672,
      "end": 718
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 719,
          "end": 730
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 750
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 752,
                  "end": 753
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 755,
                  "end": 756
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 758,
                  "end": 759
                }
              ],
              "start": 751,
              "end": 760
            }
          ],
          "start": 733,
          "end": 761
        },
        "start": 719,
        "end": 761
      },
      "directive": null,
      "start": 719,
      "end": 762
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 790
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 797,
            "end": 810
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 826
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 827,
                  "end": 829
                }
              ],
              "start": 811,
              "end": 830
            }
          ],
          "start": 793,
          "end": 831
        },
        "start": 779,
        "end": 831
      },
      "directive": null,
      "start": 779,
      "end": 832
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 833,
          "end": 844
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 864
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 880
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 881,
                  "end": 883
                }
              ],
              "start": 865,
              "end": 884
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 886,
              "end": 887
            }
          ],
          "start": 847,
          "end": 888
        },
        "start": 833,
        "end": 888
      },
      "directive": null,
      "start": 833,
      "end": 889
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 901
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 921
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 937
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 938,
                  "end": 940
                }
              ],
              "start": 922,
              "end": 941
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 943,
              "end": 944
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 946,
              "end": 947
            }
          ],
          "start": 904,
          "end": 948
        },
        "start": 890,
        "end": 948
      },
      "directive": null,
      "start": 890,
      "end": 949
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 959,
                "end": 965
              },
              "start": 957,
              "end": 965
            },
            "start": 954,
            "end": 965
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 979
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 986
            },
            "optional": false,
            "computed": false,
            "start": 968,
            "end": 986
          },
          "definite": false,
          "start": 954,
          "end": 986
        }
      ],
      "declare": false,
      "start": 950,
      "end": 987
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 999
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1000,
            "end": 1006
          },
          "optional": false,
          "computed": false,
          "start": 988,
          "end": 1006
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1009,
          "end": 1011
        },
        "start": 988,
        "end": 1011
      },
      "directive": null,
      "start": 988,
      "end": 1012
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayBufferLike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1050,
                  "end": 1065
                },
                "typeArguments": null,
                "start": 1050,
                "end": 1065
              },
              "start": 1048,
              "end": 1065
            },
            "start": 1033,
            "end": 1065
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1068,
            "end": 1079
          },
          "definite": false,
          "start": 1033,
          "end": 1079
        }
      ],
      "declare": false,
      "start": 1029,
      "end": 1080
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigUintArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1123,
                  "end": 1137
                },
                "typeArguments": null,
                "start": 1123,
                "end": 1137
              },
              "start": 1121,
              "end": 1137
            },
            "start": 1109,
            "end": 1137
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1158
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1140,
            "end": 1160
          },
          "definite": false,
          "start": 1109,
          "end": 1160
        }
      ],
      "declare": false,
      "start": 1105,
      "end": 1161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1162,
          "end": 1174
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1195
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1196,
              "end": 1198
            }
          ],
          "start": 1177,
          "end": 1199
        },
        "start": 1162,
        "end": 1199
      },
      "directive": null,
      "start": 1162,
      "end": 1200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1201,
          "end": 1213
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1220,
            "end": 1234
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 1236,
                  "end": 1238
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 1240,
                  "end": 1242
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 1244,
                  "end": 1246
                }
              ],
              "start": 1235,
              "end": 1247
            }
          ],
          "start": 1216,
          "end": 1248
        },
        "start": 1201,
        "end": 1248
      },
      "directive": null,
      "start": 1201,
      "end": 1249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1250,
          "end": 1262
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1269,
            "end": 1283
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1285,
                  "end": 1286
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1288,
                  "end": 1289
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1291,
                  "end": 1292
                }
              ],
              "start": 1284,
              "end": 1293
            }
          ],
          "start": 1265,
          "end": 1294
        },
        "start": 1250,
        "end": 1294
      },
      "directive": null,
      "start": 1250,
      "end": 1295
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1324
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1331,
            "end": 1345
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1350,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1362,
                  "end": 1364
                }
              ],
              "start": 1346,
              "end": 1365
            }
          ],
          "start": 1327,
          "end": 1366
        },
        "start": 1312,
        "end": 1366
      },
      "directive": null,
      "start": 1312,
      "end": 1367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1368,
          "end": 1380
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1387,
            "end": 1401
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1417
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1418,
                  "end": 1420
                }
              ],
              "start": 1402,
              "end": 1421
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1423,
              "end": 1424
            }
          ],
          "start": 1383,
          "end": 1425
        },
        "start": 1368,
        "end": 1425
      },
      "directive": null,
      "start": 1368,
      "end": 1426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1427,
          "end": 1439
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1446,
            "end": 1460
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1465,
                "end": 1476
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1477,
                  "end": 1479
                }
              ],
              "start": 1461,
              "end": 1480
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1482,
              "end": 1483
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1485,
              "end": 1486
            }
          ],
          "start": 1442,
          "end": 1487
        },
        "start": 1427,
        "end": 1487
      },
      "directive": null,
      "start": 1427,
      "end": 1488
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "len",
          "optional": false,
          "typeAnnotation": null,
          "start": 1489,
          "end": 1492
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1495,
            "end": 1506
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1507,
            "end": 1513
          },
          "optional": false,
          "computed": false,
          "start": 1495,
          "end": 1513
        },
        "start": 1489,
        "end": 1513
      },
      "directive": null,
      "start": 1489,
      "end": 1514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1515,
            "end": 1526
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1527,
            "end": 1533
          },
          "optional": false,
          "computed": false,
          "start": 1515,
          "end": 1533
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1536,
          "end": 1538
        },
        "start": 1515,
        "end": 1538
      },
      "directive": null,
      "start": 1515,
      "end": 1539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arrayBufferLike",
          "optional": false,
          "typeAnnotation": null,
          "start": 1556,
          "end": 1571
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1574,
          "end": 1585
        },
        "start": 1556,
        "end": 1585
      },
      "directive": null,
      "start": 1556,
      "end": 1586
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1625,
            "end": 1633
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1640,
              "end": 1648
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1653,
                  "end": 1664
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 80,
                    "raw": "80",
                    "start": 1665,
                    "end": 1667
                  }
                ],
                "start": 1649,
                "end": 1668
              }
            ],
            "start": 1636,
            "end": 1669
          },
          "definite": false,
          "start": 1625,
          "end": 1669
        }
      ],
      "declare": false,
      "start": 1619,
      "end": 1670
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1671,
            "end": 1679
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1680,
            "end": 1691
          },
          "optional": false,
          "computed": false,
          "start": 1671,
          "end": 1691
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1692,
            "end": 1693
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 1696,
              "end": 1698
            },
            "prefix": true,
            "start": 1695,
            "end": 1698
          }
        ],
        "optional": false,
        "start": 1671,
        "end": 1699
      },
      "directive": null,
      "start": 1671,
      "end": 1700
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1701,
            "end": 1709
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1710,
            "end": 1721
          },
          "optional": false,
          "computed": false,
          "start": 1701,
          "end": 1721
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1722,
            "end": 1723
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 1726,
              "end": 1728
            },
            "prefix": true,
            "start": 1725,
            "end": 1728
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1730,
            "end": 1734
          }
        ],
        "optional": false,
        "start": 1701,
        "end": 1735
      },
      "directive": null,
      "start": 1701,
      "end": 1736
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1737,
            "end": 1745
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1746,
            "end": 1757
          },
          "optional": false,
          "computed": false,
          "start": 1737,
          "end": 1757
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1758,
            "end": 1759
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1762,
              "end": 1763
            },
            "prefix": true,
            "start": 1761,
            "end": 1763
          }
        ],
        "optional": false,
        "start": 1737,
        "end": 1764
      },
      "directive": null,
      "start": 1737,
      "end": 1765
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1782,
            "end": 1790
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1791,
            "end": 1803
          },
          "optional": false,
          "computed": false,
          "start": 1782,
          "end": 1803
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1804,
            "end": 1805
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 1807,
            "end": 1811
          }
        ],
        "optional": false,
        "start": 1782,
        "end": 1812
      },
      "directive": null,
      "start": 1782,
      "end": 1813
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1814,
            "end": 1822
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1823,
            "end": 1835
          },
          "optional": false,
          "computed": false,
          "start": 1814,
          "end": 1835
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1836,
            "end": 1837
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 1839,
            "end": 1843
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1845,
            "end": 1849
          }
        ],
        "optional": false,
        "start": 1814,
        "end": 1850
      },
      "directive": null,
      "start": 1814,
      "end": 1851
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1852,
            "end": 1860
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1861,
            "end": 1873
          },
          "optional": false,
          "computed": false,
          "start": 1852,
          "end": 1873
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1874,
            "end": 1875
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 1877,
            "end": 1880
          }
        ],
        "optional": false,
        "start": 1852,
        "end": 1881
      },
      "directive": null,
      "start": 1852,
      "end": 1882
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 1899,
          "end": 1908
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1911,
              "end": 1919
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 1920,
              "end": 1931
            },
            "optional": false,
            "computed": false,
            "start": 1911,
            "end": 1931
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1932,
              "end": 1933
            }
          ],
          "optional": false,
          "start": 1911,
          "end": 1934
        },
        "start": 1899,
        "end": 1934
      },
      "directive": null,
      "start": 1899,
      "end": 1935
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 1936,
          "end": 1945
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1948,
              "end": 1956
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 1957,
              "end": 1968
            },
            "optional": false,
            "computed": false,
            "start": 1948,
            "end": 1968
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1969,
              "end": 1970
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1972,
              "end": 1976
            }
          ],
          "optional": false,
          "start": 1948,
          "end": 1977
        },
        "start": 1936,
        "end": 1977
      },
      "directive": null,
      "start": 1936,
      "end": 1978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 1979,
          "end": 1988
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1991,
              "end": 1999
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2000,
              "end": 2012
            },
            "optional": false,
            "computed": false,
            "start": 1991,
            "end": 2012
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2013,
              "end": 2014
            }
          ],
          "optional": false,
          "start": 1991,
          "end": 2015
        },
        "start": 1979,
        "end": 2015
      },
      "directive": null,
      "start": 1979,
      "end": 2016
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2017,
          "end": 2026
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2029,
              "end": 2037
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2038,
              "end": 2050
            },
            "optional": false,
            "computed": false,
            "start": 2029,
            "end": 2050
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2051,
              "end": 2052
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2054,
              "end": 2058
            }
          ],
          "optional": false,
          "start": 2029,
          "end": 2059
        },
        "start": 2017,
        "end": 2059
      },
      "directive": null,
      "start": 2017,
      "end": 2060
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
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 2103,
            "end": 2104
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "12n",
            "bigint": "12",
            "start": 2107,
            "end": 2110
          },
          "definite": false,
          "start": 2103,
          "end": 2110
        }
      ],
      "declare": false,
      "start": 2097,
      "end": 2111
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2150,
            "end": 2151
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "12n",
              "bigint": "12",
              "start": 2155,
              "end": 2158
            },
            "prefix": true,
            "start": 2154,
            "end": 2158
          },
          "definite": false,
          "start": 2150,
          "end": 2158
        }
      ],
      "declare": false,
      "start": 2144,
      "end": 2159
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": null,
                  "raw": "12n",
                  "bigint": "12",
                  "start": 2202,
                  "end": 2205
                },
                "start": 2202,
                "end": 2205
              },
              "start": 2200,
              "end": 2205
            },
            "start": 2199,
            "end": 2205
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "12n",
            "bigint": "12",
            "start": 2208,
            "end": 2211
          },
          "definite": false,
          "start": 2199,
          "end": 2211
        }
      ],
      "declare": false,
      "start": 2193,
      "end": 2212
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 2241,
            "end": 2242
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "12n",
            "bigint": "12",
            "start": 2245,
            "end": 2248
          },
          "definite": false,
          "start": 2241,
          "end": 2248
        }
      ],
      "declare": false,
      "start": 2237,
      "end": 2249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2347,
                "end": 2351
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2352,
                "end": 2364
              },
              "optional": false,
              "computed": false,
              "start": 2347,
              "end": 2364
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2365,
                "end": 2369
              }
            ],
            "start": 2343,
            "end": 2370
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2371,
            "end": 2377
          },
          "optional": false,
          "computed": false,
          "start": 2343,
          "end": 2377
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "3000n",
            "bigint": "3000",
            "start": 2378,
            "end": 2383
          }
        ],
        "optional": false,
        "start": 2343,
        "end": 2384
      },
      "directive": null,
      "start": 2343,
      "end": 2385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2390,
                "end": 2394
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2395,
                "end": 2407
              },
              "optional": false,
              "computed": false,
              "start": 2390,
              "end": 2407
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2408,
                "end": 2412
              }
            ],
            "start": 2386,
            "end": 2413
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2414,
            "end": 2420
          },
          "optional": false,
          "computed": false,
          "start": 2386,
          "end": 2420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 2421,
            "end": 2430
          }
        ],
        "optional": false,
        "start": 2386,
        "end": 2431
      },
      "directive": null,
      "start": 2386,
      "end": 2432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 2432
}
```
