__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 2432,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 61,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 46,
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 49,
            "end": 60,
            "callee": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 56,
                "end": 59,
                "value": 123,
                "raw": "123"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 88,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 87,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 62,
          "end": 71,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 74,
          "end": 87,
          "callee": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 81,
              "end": 86,
              "value": "456",
              "raw": "\"456\""
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 105,
      "expression": {
        "type": "NewExpression",
        "start": 89,
        "end": 104,
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 99,
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 100,
            "end": 103,
            "value": 123,
            "raw": "123"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 160,
      "expression": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 159,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 122,
          "end": 131,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 134,
          "end": 159,
          "callee": {
            "type": "MemberExpression",
            "start": 134,
            "end": 147,
            "object": {
              "type": "Identifier",
              "start": 134,
              "end": 140,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 141,
              "end": 147,
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 148,
              "end": 149,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 151,
              "end": 158,
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 200,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 199,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 161,
          "end": 170,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 173,
          "end": 199,
          "callee": {
            "type": "MemberExpression",
            "start": 173,
            "end": 187,
            "object": {
              "type": "Identifier",
              "start": 173,
              "end": 179,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 180,
              "end": 187,
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 191,
              "end": 198,
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 233,
      "expression": {
        "type": "AssignmentExpression",
        "start": 201,
        "end": 232,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 201,
          "end": 210,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 213,
          "end": 232,
          "callee": {
            "type": "MemberExpression",
            "start": 213,
            "end": 230,
            "object": {
              "type": "Identifier",
              "start": 213,
              "end": 222,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 223,
              "end": 230,
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 279,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 255,
            "decorators": [],
            "name": "stringVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 255,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 249,
                "end": 255
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 258,
            "end": 278,
            "callee": {
              "type": "MemberExpression",
              "start": 258,
              "end": 276,
              "object": {
                "type": "Identifier",
                "start": 258,
                "end": 267,
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 268,
                "end": 276,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 314,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 313,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 280,
          "end": 289,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 292,
          "end": 313,
          "callee": {
            "type": "MemberExpression",
            "start": 292,
            "end": 310,
            "object": {
              "type": "Identifier",
              "start": 292,
              "end": 301,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 302,
              "end": 310,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 311,
              "end": 312,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 315,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 315,
          "end": 324,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 327,
          "end": 353,
          "callee": {
            "type": "MemberExpression",
            "start": 327,
            "end": 351,
            "object": {
              "type": "Identifier",
              "start": 327,
              "end": 336,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 337,
              "end": 351,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 401,
      "expression": {
        "type": "AssignmentExpression",
        "start": 355,
        "end": 400,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 355,
          "end": 364,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 367,
          "end": 400,
          "callee": {
            "type": "MemberExpression",
            "start": 367,
            "end": 391,
            "object": {
              "type": "Identifier",
              "start": 367,
              "end": 376,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 377,
              "end": 391,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 392,
              "end": 399,
              "value": "de-DE",
              "raw": "'de-DE'"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 471,
      "expression": {
        "type": "AssignmentExpression",
        "start": 402,
        "end": 470,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 402,
          "end": 411,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 414,
          "end": 470,
          "callee": {
            "type": "MemberExpression",
            "start": 414,
            "end": 438,
            "object": {
              "type": "Identifier",
              "start": 414,
              "end": 423,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 424,
              "end": 438,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 439,
              "end": 446,
              "value": "de-DE",
              "raw": "'de-DE'"
            },
            {
              "type": "ObjectExpression",
              "start": 448,
              "end": 469,
              "properties": [
                {
                  "type": "Property",
                  "start": 450,
                  "end": 467,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 455,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 457,
                    "end": 467,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 557,
      "expression": {
        "type": "AssignmentExpression",
        "start": 472,
        "end": 557,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 472,
          "end": 481,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 484,
          "end": 557,
          "callee": {
            "type": "MemberExpression",
            "start": 484,
            "end": 508,
            "object": {
              "type": "Identifier",
              "start": 484,
              "end": 493,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 494,
              "end": 508,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 509,
              "end": 516,
              "value": "de-DE",
              "raw": "'de-DE'"
            },
            {
              "type": "ObjectExpression",
              "start": 518,
              "end": 556,
              "properties": [
                {
                  "type": "Property",
                  "start": 520,
                  "end": 537,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 525,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 527,
                    "end": 537,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 539,
                  "end": 554,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 547,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 549,
                    "end": 554,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 634,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 633,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 611,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 611,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 598,
                "end": 611,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 611,
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 614,
            "end": 633,
            "callee": {
              "type": "Identifier",
              "start": 618,
              "end": 631,
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 635,
      "end": 671,
      "expression": {
        "type": "AssignmentExpression",
        "start": 635,
        "end": 670,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 635,
          "end": 646,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 649,
          "end": 670,
          "callee": {
            "type": "Identifier",
            "start": 653,
            "end": 666,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 667,
              "end": 669,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 672,
      "end": 718,
      "expression": {
        "type": "AssignmentExpression",
        "start": 672,
        "end": 717,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 672,
          "end": 683,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 686,
          "end": 717,
          "callee": {
            "type": "Identifier",
            "start": 690,
            "end": 703,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 704,
              "end": 716,
              "elements": [
                {
                  "type": "Literal",
                  "start": 705,
                  "end": 707,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                },
                {
                  "type": "Literal",
                  "start": 709,
                  "end": 711,
                  "value": null,
                  "raw": "2n",
                  "bigint": "2"
                },
                {
                  "type": "Literal",
                  "start": 713,
                  "end": 715,
                  "value": null,
                  "raw": "3n",
                  "bigint": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 719,
      "end": 762,
      "expression": {
        "type": "AssignmentExpression",
        "start": 719,
        "end": 761,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 719,
          "end": 730,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 733,
          "end": 761,
          "callee": {
            "type": "Identifier",
            "start": 737,
            "end": 750,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 751,
              "end": 760,
              "elements": [
                {
                  "type": "Literal",
                  "start": 752,
                  "end": 753,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 755,
                  "end": 756,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 758,
                  "end": 759,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 779,
      "end": 832,
      "expression": {
        "type": "AssignmentExpression",
        "start": 779,
        "end": 831,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 779,
          "end": 790,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 793,
          "end": 831,
          "callee": {
            "type": "Identifier",
            "start": 797,
            "end": 810,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 811,
              "end": 830,
              "callee": {
                "type": "Identifier",
                "start": 815,
                "end": 826,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 827,
                  "end": 829,
                  "value": 80,
                  "raw": "80"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 833,
      "end": 889,
      "expression": {
        "type": "AssignmentExpression",
        "start": 833,
        "end": 888,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 833,
          "end": 844,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 847,
          "end": 888,
          "callee": {
            "type": "Identifier",
            "start": 851,
            "end": 864,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 865,
              "end": 884,
              "callee": {
                "type": "Identifier",
                "start": 869,
                "end": 880,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 881,
                  "end": 883,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 886,
              "end": 887,
              "value": 8,
              "raw": "8"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 890,
      "end": 949,
      "expression": {
        "type": "AssignmentExpression",
        "start": 890,
        "end": 948,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 890,
          "end": 901,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 904,
          "end": 948,
          "callee": {
            "type": "Identifier",
            "start": 908,
            "end": 921,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 922,
              "end": 941,
              "callee": {
                "type": "Identifier",
                "start": 926,
                "end": 937,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 938,
                  "end": 940,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 943,
              "end": 944,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 946,
              "end": 947,
              "value": 3,
              "raw": "3"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 950,
      "end": 987,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 954,
          "end": 986,
          "id": {
            "type": "Identifier",
            "start": 954,
            "end": 965,
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 957,
              "end": 965,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 959,
                "end": 965
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 968,
            "end": 986,
            "object": {
              "type": "Identifier",
              "start": 968,
              "end": 979,
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 980,
              "end": 986,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 988,
      "end": 1012,
      "expression": {
        "type": "AssignmentExpression",
        "start": 988,
        "end": 1011,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 988,
          "end": 1006,
          "object": {
            "type": "Identifier",
            "start": 988,
            "end": 999,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1000,
            "end": 1006,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1009,
          "end": 1011,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1029,
      "end": 1080,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1033,
          "end": 1079,
          "id": {
            "type": "Identifier",
            "start": 1033,
            "end": 1065,
            "decorators": [],
            "name": "arrayBufferLike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1048,
              "end": 1065,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1050,
                "end": 1065,
                "typeName": {
                  "type": "Identifier",
                  "start": 1050,
                  "end": 1065,
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1068,
            "end": 1079,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1105,
      "end": 1161,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1109,
          "end": 1160,
          "id": {
            "type": "Identifier",
            "start": 1109,
            "end": 1137,
            "decorators": [],
            "name": "bigUintArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1121,
              "end": 1137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1123,
                "end": 1137,
                "typeName": {
                  "type": "Identifier",
                  "start": 1123,
                  "end": 1137,
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 1140,
            "end": 1160,
            "callee": {
              "type": "Identifier",
              "start": 1144,
              "end": 1158,
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1162,
      "end": 1200,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1162,
        "end": 1199,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1162,
          "end": 1174,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1177,
          "end": 1199,
          "callee": {
            "type": "Identifier",
            "start": 1181,
            "end": 1195,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 1196,
              "end": 1198,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1201,
      "end": 1249,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1201,
        "end": 1248,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1201,
          "end": 1213,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1216,
          "end": 1248,
          "callee": {
            "type": "Identifier",
            "start": 1220,
            "end": 1234,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1235,
              "end": 1247,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1236,
                  "end": 1238,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                },
                {
                  "type": "Literal",
                  "start": 1240,
                  "end": 1242,
                  "value": null,
                  "raw": "2n",
                  "bigint": "2"
                },
                {
                  "type": "Literal",
                  "start": 1244,
                  "end": 1246,
                  "value": null,
                  "raw": "3n",
                  "bigint": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1250,
      "end": 1295,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1250,
        "end": 1294,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1250,
          "end": 1262,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1265,
          "end": 1294,
          "callee": {
            "type": "Identifier",
            "start": 1269,
            "end": 1283,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1284,
              "end": 1293,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1285,
                  "end": 1286,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 1288,
                  "end": 1289,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1291,
                  "end": 1292,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1312,
      "end": 1367,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1312,
        "end": 1366,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1312,
          "end": 1324,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1327,
          "end": 1366,
          "callee": {
            "type": "Identifier",
            "start": 1331,
            "end": 1345,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1346,
              "end": 1365,
              "callee": {
                "type": "Identifier",
                "start": 1350,
                "end": 1361,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1362,
                  "end": 1364,
                  "value": 80,
                  "raw": "80"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1368,
      "end": 1426,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1368,
        "end": 1425,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1368,
          "end": 1380,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1383,
          "end": 1425,
          "callee": {
            "type": "Identifier",
            "start": 1387,
            "end": 1401,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1402,
              "end": 1421,
              "callee": {
                "type": "Identifier",
                "start": 1406,
                "end": 1417,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1418,
                  "end": 1420,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 1423,
              "end": 1424,
              "value": 8,
              "raw": "8"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1427,
      "end": 1488,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1427,
        "end": 1487,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1427,
          "end": 1439,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1442,
          "end": 1487,
          "callee": {
            "type": "Identifier",
            "start": 1446,
            "end": 1460,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1461,
              "end": 1480,
              "callee": {
                "type": "Identifier",
                "start": 1465,
                "end": 1476,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1477,
                  "end": 1479,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 1482,
              "end": 1483,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 1485,
              "end": 1486,
              "value": 3,
              "raw": "3"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1489,
      "end": 1514,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1489,
        "end": 1513,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1489,
          "end": 1492,
          "decorators": [],
          "name": "len",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 1495,
          "end": 1513,
          "object": {
            "type": "Identifier",
            "start": 1495,
            "end": 1506,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1507,
            "end": 1513,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1515,
      "end": 1539,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1515,
        "end": 1538,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1515,
          "end": 1533,
          "object": {
            "type": "Identifier",
            "start": 1515,
            "end": 1526,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1527,
            "end": 1533,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1536,
          "end": 1538,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1556,
      "end": 1586,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1556,
        "end": 1585,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1556,
          "end": 1571,
          "decorators": [],
          "name": "arrayBufferLike",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1574,
          "end": 1585,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1619,
      "end": 1670,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1625,
          "end": 1669,
          "id": {
            "type": "Identifier",
            "start": 1625,
            "end": 1633,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1636,
            "end": 1669,
            "callee": {
              "type": "Identifier",
              "start": 1640,
              "end": 1648,
              "decorators": [],
              "name": "DataView",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 1649,
                "end": 1668,
                "callee": {
                  "type": "Identifier",
                  "start": 1653,
                  "end": 1664,
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1665,
                    "end": 1667,
                    "value": 80,
                    "raw": "80"
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1671,
      "end": 1700,
      "expression": {
        "type": "CallExpression",
        "start": 1671,
        "end": 1699,
        "callee": {
          "type": "MemberExpression",
          "start": 1671,
          "end": 1691,
          "object": {
            "type": "Identifier",
            "start": 1671,
            "end": 1679,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1680,
            "end": 1691,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1692,
            "end": 1693,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "UnaryExpression",
            "start": 1695,
            "end": 1698,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 1696,
              "end": 1698,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "prefix": true
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1701,
      "end": 1736,
      "expression": {
        "type": "CallExpression",
        "start": 1701,
        "end": 1735,
        "callee": {
          "type": "MemberExpression",
          "start": 1701,
          "end": 1721,
          "object": {
            "type": "Identifier",
            "start": 1701,
            "end": 1709,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1710,
            "end": 1721,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1722,
            "end": 1723,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "UnaryExpression",
            "start": 1725,
            "end": 1728,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 1726,
              "end": 1728,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 1730,
            "end": 1734,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1737,
      "end": 1765,
      "expression": {
        "type": "CallExpression",
        "start": 1737,
        "end": 1764,
        "callee": {
          "type": "MemberExpression",
          "start": 1737,
          "end": 1757,
          "object": {
            "type": "Identifier",
            "start": 1737,
            "end": 1745,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1746,
            "end": 1757,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1758,
            "end": 1759,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "UnaryExpression",
            "start": 1761,
            "end": 1763,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 1762,
              "end": 1763,
              "value": 1,
              "raw": "1"
            },
            "prefix": true
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1782,
      "end": 1813,
      "expression": {
        "type": "CallExpression",
        "start": 1782,
        "end": 1812,
        "callee": {
          "type": "MemberExpression",
          "start": 1782,
          "end": 1803,
          "object": {
            "type": "Identifier",
            "start": 1782,
            "end": 1790,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1791,
            "end": 1803,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1804,
            "end": 1805,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1807,
            "end": 1811,
            "value": null,
            "raw": "123n",
            "bigint": "123"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1814,
      "end": 1851,
      "expression": {
        "type": "CallExpression",
        "start": 1814,
        "end": 1850,
        "callee": {
          "type": "MemberExpression",
          "start": 1814,
          "end": 1835,
          "object": {
            "type": "Identifier",
            "start": 1814,
            "end": 1822,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1823,
            "end": 1835,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1836,
            "end": 1837,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1839,
            "end": 1843,
            "value": null,
            "raw": "123n",
            "bigint": "123"
          },
          {
            "type": "Literal",
            "start": 1845,
            "end": 1849,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1852,
      "end": 1882,
      "expression": {
        "type": "CallExpression",
        "start": 1852,
        "end": 1881,
        "callee": {
          "type": "MemberExpression",
          "start": 1852,
          "end": 1873,
          "object": {
            "type": "Identifier",
            "start": 1852,
            "end": 1860,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1861,
            "end": 1873,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1874,
            "end": 1875,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1877,
            "end": 1880,
            "value": 123,
            "raw": "123"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1899,
      "end": 1935,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1899,
        "end": 1934,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1899,
          "end": 1908,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1911,
          "end": 1934,
          "callee": {
            "type": "MemberExpression",
            "start": 1911,
            "end": 1931,
            "object": {
              "type": "Identifier",
              "start": 1911,
              "end": 1919,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1920,
              "end": 1931,
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 1932,
              "end": 1933,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1936,
      "end": 1978,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1936,
        "end": 1977,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1936,
          "end": 1945,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1948,
          "end": 1977,
          "callee": {
            "type": "MemberExpression",
            "start": 1948,
            "end": 1968,
            "object": {
              "type": "Identifier",
              "start": 1948,
              "end": 1956,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1957,
              "end": 1968,
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 1969,
              "end": 1970,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 1972,
              "end": 1976,
              "value": true,
              "raw": "true"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1979,
      "end": 2016,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1979,
        "end": 2015,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1979,
          "end": 1988,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1991,
          "end": 2015,
          "callee": {
            "type": "MemberExpression",
            "start": 1991,
            "end": 2012,
            "object": {
              "type": "Identifier",
              "start": 1991,
              "end": 1999,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2000,
              "end": 2012,
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2013,
              "end": 2014,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2017,
      "end": 2060,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2017,
        "end": 2059,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2017,
          "end": 2026,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2029,
          "end": 2059,
          "callee": {
            "type": "MemberExpression",
            "start": 2029,
            "end": 2050,
            "object": {
              "type": "Identifier",
              "start": 2029,
              "end": 2037,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2038,
              "end": 2050,
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2051,
              "end": 2052,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 2054,
              "end": 2058,
              "value": true,
              "raw": "true"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2097,
      "end": 2111,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2103,
          "end": 2110,
          "id": {
            "type": "Identifier",
            "start": 2103,
            "end": 2104,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 2107,
            "end": 2110,
            "value": null,
            "raw": "12n",
            "bigint": "12"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2144,
      "end": 2159,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2150,
          "end": 2158,
          "id": {
            "type": "Identifier",
            "start": 2150,
            "end": 2151,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 2154,
            "end": 2158,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 2155,
              "end": 2158,
              "value": null,
              "raw": "12n",
              "bigint": "12"
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2193,
      "end": 2212,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2199,
          "end": 2211,
          "id": {
            "type": "Identifier",
            "start": 2199,
            "end": 2205,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2200,
              "end": 2205,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2202,
                "end": 2205,
                "literal": {
                  "type": "Literal",
                  "start": 2202,
                  "end": 2205,
                  "value": null,
                  "raw": "12n",
                  "bigint": "12"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 2208,
            "end": 2211,
            "value": null,
            "raw": "12n",
            "bigint": "12"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2237,
      "end": 2249,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2241,
          "end": 2248,
          "id": {
            "type": "Identifier",
            "start": 2241,
            "end": 2242,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 2245,
            "end": 2248,
            "value": null,
            "raw": "12n",
            "bigint": "12"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2343,
      "end": 2385,
      "expression": {
        "type": "CallExpression",
        "start": 2343,
        "end": 2384,
        "callee": {
          "type": "MemberExpression",
          "start": 2343,
          "end": 2377,
          "object": {
            "type": "NewExpression",
            "start": 2343,
            "end": 2370,
            "callee": {
              "type": "MemberExpression",
              "start": 2347,
              "end": 2364,
              "object": {
                "type": "Identifier",
                "start": 2347,
                "end": 2351,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2352,
                "end": 2364,
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2365,
                "end": 2369,
                "value": "fr",
                "raw": "\"fr\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 2371,
            "end": 2377,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2378,
            "end": 2383,
            "value": null,
            "raw": "3000n",
            "bigint": "3000"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2386,
      "end": 2432,
      "expression": {
        "type": "CallExpression",
        "start": 2386,
        "end": 2431,
        "callee": {
          "type": "MemberExpression",
          "start": 2386,
          "end": 2420,
          "object": {
            "type": "NewExpression",
            "start": 2386,
            "end": 2413,
            "callee": {
              "type": "MemberExpression",
              "start": 2390,
              "end": 2407,
              "object": {
                "type": "Identifier",
                "start": 2390,
                "end": 2394,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2395,
                "end": 2407,
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2408,
                "end": 2412,
                "value": "fr",
                "raw": "\"fr\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 2414,
            "end": 2420,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2421,
            "end": 2430,
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
