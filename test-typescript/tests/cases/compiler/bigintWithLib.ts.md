__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 2433,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 60,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 56,
                "end": 59,
                "raw": "123",
                "value": 123
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 88,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 81,
              "end": 86,
              "raw": "\"456\"",
              "value": "456"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 89,
        "end": 104,
        "arguments": [
          {
            "type": "Literal",
            "start": 100,
            "end": 103,
            "raw": "123",
            "value": 123
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 99,
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 160,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 148,
              "end": 149,
              "raw": "8",
              "value": 8
            },
            {
              "type": "Literal",
              "start": 151,
              "end": 158,
              "bigint": "65535",
              "raw": "0xFFFFn",
              "value": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 134,
            "end": 147,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 134,
              "end": 140,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 141,
              "end": 147,
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 200,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "raw": "8",
              "value": 8
            },
            {
              "type": "Literal",
              "start": 191,
              "end": 198,
              "bigint": "65535",
              "raw": "0xFFFFn",
              "value": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 173,
            "end": 187,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 173,
              "end": 179,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 180,
              "end": 187,
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 233,
      "directive": null,
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
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 213,
            "end": 230,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 213,
              "end": 222,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 223,
              "end": 230,
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 278,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 258,
              "end": 276,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 258,
                "end": 267,
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 268,
                "end": 276,
                "decorators": [],
                "name": "toString",
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
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 314,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 311,
              "end": 312,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 292,
            "end": 310,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 292,
              "end": 301,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 302,
              "end": 310,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 354,
      "directive": null,
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
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 327,
            "end": 351,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 327,
              "end": 336,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 337,
              "end": 351,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 401,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 392,
              "end": 399,
              "raw": "'de-DE'",
              "value": "de-DE"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 367,
            "end": 391,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 367,
              "end": 376,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 377,
              "end": 391,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 471,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 439,
              "end": 446,
              "raw": "'de-DE'",
              "value": "de-DE"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 455,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 457,
                    "end": 467,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 414,
            "end": 438,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 414,
              "end": 423,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 424,
              "end": 438,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 557,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 509,
              "end": 516,
              "raw": "'de-DE'",
              "value": "de-DE"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 525,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 527,
                    "end": 537,
                    "raw": "'currency'",
                    "value": "currency"
                  }
                },
                {
                  "type": "Property",
                  "start": 539,
                  "end": 554,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 547,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 549,
                    "end": 554,
                    "raw": "'EUR'",
                    "value": "EUR"
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 484,
            "end": 508,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 484,
              "end": 493,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 494,
              "end": 508,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 634,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 633,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 611,
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 614,
            "end": 633,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 618,
              "end": 631,
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 635,
      "end": 671,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 667,
              "end": 669,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 653,
            "end": 666,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 672,
      "end": 718,
      "directive": null,
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
                  "bigint": "1",
                  "raw": "1n",
                  "value": null
                },
                {
                  "type": "Literal",
                  "start": 709,
                  "end": 711,
                  "bigint": "2",
                  "raw": "2n",
                  "value": null
                },
                {
                  "type": "Literal",
                  "start": 713,
                  "end": 715,
                  "bigint": "3",
                  "raw": "3n",
                  "value": null
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 690,
            "end": 703,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 719,
      "end": 762,
      "directive": null,
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
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 755,
                  "end": 756,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 758,
                  "end": 759,
                  "raw": "3",
                  "value": 3
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 737,
            "end": 750,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 779,
      "end": 832,
      "directive": null,
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
          "arguments": [
            {
              "type": "NewExpression",
              "start": 811,
              "end": 830,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 827,
                  "end": 829,
                  "raw": "80",
                  "value": 80
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 815,
                "end": 826,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 797,
            "end": 810,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 833,
      "end": 889,
      "directive": null,
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
          "arguments": [
            {
              "type": "NewExpression",
              "start": 865,
              "end": 884,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 881,
                  "end": 883,
                  "raw": "80",
                  "value": 80
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 869,
                "end": 880,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "Literal",
              "start": 886,
              "end": 887,
              "raw": "8",
              "value": 8
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 851,
            "end": 864,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 890,
      "end": 949,
      "directive": null,
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
          "arguments": [
            {
              "type": "NewExpression",
              "start": 922,
              "end": 941,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 938,
                  "end": 940,
                  "raw": "80",
                  "value": 80
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 926,
                "end": 937,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "Literal",
              "start": 943,
              "end": 944,
              "raw": "8",
              "value": 8
            },
            {
              "type": "Literal",
              "start": 946,
              "end": 947,
              "raw": "3",
              "value": 3
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 908,
            "end": 921,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 950,
      "end": 987,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 954,
          "end": 986,
          "definite": false,
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
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 968,
              "end": 979,
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 980,
              "end": 986,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 988,
      "end": 1012,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 988,
        "end": 1011,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 988,
          "end": 1006,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 988,
            "end": 999,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1000,
            "end": 1006,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1009,
          "end": 1011,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1029,
      "end": 1080,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1033,
          "end": 1079,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1050,
                  "end": 1065,
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "typeAnnotation": null
                }
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1105,
      "end": 1161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1109,
          "end": 1160,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1123,
                  "end": 1137,
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 1140,
            "end": 1160,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1144,
              "end": 1158,
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1162,
      "end": 1200,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 1196,
              "end": 1198,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1181,
            "end": 1195,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1201,
      "end": 1249,
      "directive": null,
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
                  "bigint": "1",
                  "raw": "1n",
                  "value": null
                },
                {
                  "type": "Literal",
                  "start": 1240,
                  "end": 1242,
                  "bigint": "2",
                  "raw": "2n",
                  "value": null
                },
                {
                  "type": "Literal",
                  "start": 1244,
                  "end": 1246,
                  "bigint": "3",
                  "raw": "3n",
                  "value": null
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1220,
            "end": 1234,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1250,
      "end": 1295,
      "directive": null,
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
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 1288,
                  "end": 1289,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 1291,
                  "end": 1292,
                  "raw": "3",
                  "value": 3
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1269,
            "end": 1283,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1312,
      "end": 1367,
      "directive": null,
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
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1346,
              "end": 1365,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1362,
                  "end": 1364,
                  "raw": "80",
                  "value": 80
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1350,
                "end": 1361,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1331,
            "end": 1345,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1368,
      "end": 1426,
      "directive": null,
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
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1402,
              "end": 1421,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1418,
                  "end": 1420,
                  "raw": "80",
                  "value": 80
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1406,
                "end": 1417,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "Literal",
              "start": 1423,
              "end": 1424,
              "raw": "8",
              "value": 8
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1387,
            "end": 1401,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1427,
      "end": 1488,
      "directive": null,
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
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1461,
              "end": 1480,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1477,
                  "end": 1479,
                  "raw": "80",
                  "value": 80
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1465,
                "end": 1476,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "Literal",
              "start": 1482,
              "end": 1483,
              "raw": "8",
              "value": 8
            },
            {
              "type": "Literal",
              "start": 1485,
              "end": 1486,
              "raw": "3",
              "value": 3
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1446,
            "end": 1460,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1489,
      "end": 1514,
      "directive": null,
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1495,
            "end": 1506,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1507,
            "end": 1513,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1515,
      "end": 1539,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1515,
        "end": 1538,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1515,
          "end": 1533,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1515,
            "end": 1526,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1527,
            "end": 1533,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1536,
          "end": 1538,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1556,
      "end": 1586,
      "directive": null,
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1619,
      "end": 1670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1625,
          "end": 1669,
          "definite": false,
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
            "arguments": [
              {
                "type": "NewExpression",
                "start": 1649,
                "end": 1668,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1665,
                    "end": 1667,
                    "raw": "80",
                    "value": 80
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1653,
                  "end": 1664,
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1640,
              "end": 1648,
              "decorators": [],
              "name": "DataView",
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
      "type": "ExpressionStatement",
      "start": 1671,
      "end": 1700,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1671,
        "end": 1699,
        "arguments": [
          {
            "type": "Literal",
            "start": 1692,
            "end": 1693,
            "raw": "1",
            "value": 1
          },
          {
            "type": "UnaryExpression",
            "start": 1695,
            "end": 1698,
            "argument": {
              "type": "Literal",
              "start": 1696,
              "end": 1698,
              "bigint": "1",
              "raw": "1n",
              "value": null
            },
            "operator": "-",
            "prefix": true
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1671,
          "end": 1691,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1671,
            "end": 1679,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1680,
            "end": 1691,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1701,
      "end": 1736,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1701,
        "end": 1735,
        "arguments": [
          {
            "type": "Literal",
            "start": 1722,
            "end": 1723,
            "raw": "1",
            "value": 1
          },
          {
            "type": "UnaryExpression",
            "start": 1725,
            "end": 1728,
            "argument": {
              "type": "Literal",
              "start": 1726,
              "end": 1728,
              "bigint": "1",
              "raw": "1n",
              "value": null
            },
            "operator": "-",
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 1730,
            "end": 1734,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1701,
          "end": 1721,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1701,
            "end": 1709,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1710,
            "end": 1721,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1737,
      "end": 1765,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1737,
        "end": 1764,
        "arguments": [
          {
            "type": "Literal",
            "start": 1758,
            "end": 1759,
            "raw": "1",
            "value": 1
          },
          {
            "type": "UnaryExpression",
            "start": 1761,
            "end": 1763,
            "argument": {
              "type": "Literal",
              "start": 1762,
              "end": 1763,
              "raw": "1",
              "value": 1
            },
            "operator": "-",
            "prefix": true
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1737,
          "end": 1757,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1737,
            "end": 1745,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1746,
            "end": 1757,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1782,
      "end": 1813,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1782,
        "end": 1812,
        "arguments": [
          {
            "type": "Literal",
            "start": 1804,
            "end": 1805,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1807,
            "end": 1811,
            "bigint": "123",
            "raw": "123n",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1782,
          "end": 1803,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1782,
            "end": 1790,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1791,
            "end": 1803,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1814,
      "end": 1851,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1814,
        "end": 1850,
        "arguments": [
          {
            "type": "Literal",
            "start": 1836,
            "end": 1837,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1839,
            "end": 1843,
            "bigint": "123",
            "raw": "123n",
            "value": null
          },
          {
            "type": "Literal",
            "start": 1845,
            "end": 1849,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1814,
          "end": 1835,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1814,
            "end": 1822,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1823,
            "end": 1835,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1852,
      "end": 1882,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1852,
        "end": 1881,
        "arguments": [
          {
            "type": "Literal",
            "start": 1874,
            "end": 1875,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1877,
            "end": 1880,
            "raw": "123",
            "value": 123
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1852,
          "end": 1873,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1852,
            "end": 1860,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1861,
            "end": 1873,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1899,
      "end": 1935,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 1932,
              "end": 1933,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1911,
            "end": 1931,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1911,
              "end": 1919,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1920,
              "end": 1931,
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1936,
      "end": 1978,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 1969,
              "end": 1970,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 1972,
              "end": 1976,
              "raw": "true",
              "value": true
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1948,
            "end": 1968,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1948,
              "end": 1956,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1957,
              "end": 1968,
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1979,
      "end": 2016,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 2013,
              "end": 2014,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1991,
            "end": 2012,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1991,
              "end": 1999,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2000,
              "end": 2012,
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2017,
      "end": 2060,
      "directive": null,
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
          "arguments": [
            {
              "type": "Literal",
              "start": 2051,
              "end": 2052,
              "raw": "2",
              "value": 2
            },
            {
              "type": "Literal",
              "start": 2054,
              "end": 2058,
              "raw": "true",
              "value": true
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 2029,
            "end": 2050,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2029,
              "end": 2037,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2038,
              "end": 2050,
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2097,
      "end": 2111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2103,
          "end": 2110,
          "definite": false,
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
            "bigint": "12",
            "raw": "12n",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2144,
      "end": 2159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2150,
          "end": 2158,
          "definite": false,
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
            "argument": {
              "type": "Literal",
              "start": 2155,
              "end": 2158,
              "bigint": "12",
              "raw": "12n",
              "value": null
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2193,
      "end": 2212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2199,
          "end": 2211,
          "definite": false,
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
                  "bigint": "12",
                  "raw": "12n",
                  "value": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 2208,
            "end": 2211,
            "bigint": "12",
            "raw": "12n",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2237,
      "end": 2249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2241,
          "end": 2248,
          "definite": false,
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
            "bigint": "12",
            "raw": "12n",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2343,
      "end": 2385,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2343,
        "end": 2384,
        "arguments": [
          {
            "type": "Literal",
            "start": 2378,
            "end": 2383,
            "bigint": "3000",
            "raw": "3000n",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2343,
          "end": 2377,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 2343,
            "end": 2370,
            "arguments": [
              {
                "type": "Literal",
                "start": 2365,
                "end": 2369,
                "raw": "\"fr\"",
                "value": "fr"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2347,
              "end": 2364,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2347,
                "end": 2351,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2352,
                "end": 2364,
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2371,
            "end": 2377,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2386,
      "end": 2432,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2386,
        "end": 2431,
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
        "callee": {
          "type": "MemberExpression",
          "start": 2386,
          "end": 2420,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 2386,
            "end": 2413,
            "arguments": [
              {
                "type": "Literal",
                "start": 2408,
                "end": 2412,
                "raw": "\"fr\"",
                "value": "fr"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2390,
              "end": 2407,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2390,
                "end": 2394,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2395,
                "end": 2407,
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2414,
            "end": 2420,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
