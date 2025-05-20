__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 1376,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 228,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 89,
            "end": 176,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 91,
                "end": 107,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 107,
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 107,
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 109,
                "end": 121,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 121,
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 121,
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 123,
                "end": 140,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 140,
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 140,
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 142,
                "end": 161,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 161,
                  "decorators": [],
                  "name": "trailingZeroDisplay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 161,
                  "decorators": [],
                  "name": "trailingZeroDisplay",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 163,
                "end": 174,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 174,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 174,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 180,
            "end": 228,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 180,
              "end": 226,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 180,
                "end": 210,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 202,
                    "end": 209,
                    "raw": "'en-GB'",
                    "value": "en-GB"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 184,
                  "end": 201,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 188,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 201,
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
                "start": 211,
                "end": 226,
                "decorators": [],
                "name": "resolvedOptions",
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 283,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 248,
        "end": 282,
        "arguments": [
          {
            "type": "Literal",
            "start": 270,
            "end": 277,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 279,
            "end": 281,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 252,
          "end": 269,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 256,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 257,
            "end": 269,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 414,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 297,
        "end": 413,
        "arguments": [
          {
            "type": "Literal",
            "start": 319,
            "end": 326,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 328,
            "end": 412,
            "properties": [
              {
                "type": "Property",
                "start": 330,
                "end": 363,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 346,
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 348,
                  "end": 363,
                  "raw": "'lessPrecision'",
                  "value": "lessPrecision"
                }
              },
              {
                "type": "Property",
                "start": 365,
                "end": 387,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 382,
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 384,
                  "end": 387,
                  "raw": "100",
                  "value": 100
                }
              },
              {
                "type": "Property",
                "start": 389,
                "end": 410,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 401,
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 403,
                  "end": 410,
                  "raw": "'trunc'",
                  "value": "trunc"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 301,
          "end": 318,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 301,
            "end": 305,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 306,
            "end": 318,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 543,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 448,
            "end": 463,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 450,
                "end": 461,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 461,
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 461,
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 466,
            "end": 543,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 466,
              "end": 541,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 466,
                "end": 525,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 488,
                    "end": 495,
                    "raw": "'en-GB'",
                    "value": "en-GB"
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 497,
                    "end": 524,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 499,
                        "end": 522,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 499,
                          "end": 510,
                          "decorators": [],
                          "name": "signDisplay",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 512,
                          "end": 522,
                          "raw": "'negative'",
                          "value": "negative"
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 470,
                  "end": 487,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 474,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 487,
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
                "start": 526,
                "end": 541,
                "decorators": [],
                "name": "resolvedOptions",
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 572,
      "end": 626,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 572,
        "end": 625,
        "arguments": [
          {
            "type": "Literal",
            "start": 594,
            "end": 601,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 603,
            "end": 624,
            "properties": [
              {
                "type": "Property",
                "start": 605,
                "end": 622,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 616,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 618,
                  "end": 622,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 576,
          "end": 593,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 576,
            "end": 580,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 581,
            "end": 593,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 627,
      "end": 683,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 627,
        "end": 682,
        "arguments": [
          {
            "type": "Literal",
            "start": 649,
            "end": 656,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 658,
            "end": 681,
            "properties": [
              {
                "type": "Property",
                "start": 660,
                "end": 679,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 671,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 673,
                  "end": 679,
                  "raw": "'true'",
                  "value": "true"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 631,
          "end": 648,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 631,
            "end": 635,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 636,
            "end": 648,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 742,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 684,
        "end": 741,
        "arguments": [
          {
            "type": "Literal",
            "start": 706,
            "end": 713,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 715,
            "end": 740,
            "properties": [
              {
                "type": "Property",
                "start": 717,
                "end": 738,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 728,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 730,
                  "end": 738,
                  "raw": "'always'",
                  "value": "always"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 688,
          "end": 705,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 688,
            "end": 692,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 693,
            "end": 705,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 759,
      "end": 811,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 759,
        "end": 810,
        "arguments": [
          {
            "type": "Literal",
            "start": 802,
            "end": 804,
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 806,
            "end": 809,
            "raw": "100",
            "value": 100
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 759,
          "end": 801,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 759,
            "end": 789,
            "arguments": [
              {
                "type": "Literal",
                "start": 781,
                "end": 788,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 763,
              "end": 780,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 763,
                "end": 767,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 768,
                "end": 780,
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
            "start": 790,
            "end": 801,
            "decorators": [],
            "name": "formatRange",
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
      "start": 812,
      "end": 867,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 812,
        "end": 866,
        "arguments": [
          {
            "type": "Literal",
            "start": 855,
            "end": 858,
            "bigint": "10",
            "raw": "10n",
            "value": null
          },
          {
            "type": "Literal",
            "start": 860,
            "end": 865,
            "bigint": "1000",
            "raw": "1000n",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 812,
          "end": 854,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 812,
            "end": 842,
            "arguments": [
              {
                "type": "Literal",
                "start": 834,
                "end": 841,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 816,
              "end": 833,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 816,
                "end": 820,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 821,
                "end": 833,
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
            "start": 843,
            "end": 854,
            "decorators": [],
            "name": "formatRange",
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
      "start": 868,
      "end": 931,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 868,
        "end": 930,
        "computed": true,
        "object": {
          "type": "CallExpression",
          "start": 868,
          "end": 927,
          "arguments": [
            {
              "type": "Literal",
              "start": 918,
              "end": 920,
              "raw": "10",
              "value": 10
            },
            {
              "type": "Literal",
              "start": 922,
              "end": 926,
              "raw": "1000",
              "value": 1000
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 868,
            "end": 917,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 868,
              "end": 898,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 890,
                  "end": 897,
                  "raw": "'en-GB'",
                  "value": "en-GB"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 872,
                "end": 889,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 876,
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 889,
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
              "start": 899,
              "end": 917,
              "decorators": [],
              "name": "formatRangeToParts",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 928,
          "end": 929,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 932,
      "end": 997,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 932,
        "end": 996,
        "computed": true,
        "object": {
          "type": "CallExpression",
          "start": 932,
          "end": 993,
          "arguments": [
            {
              "type": "Literal",
              "start": 982,
              "end": 985,
              "bigint": "10",
              "raw": "10n",
              "value": null
            },
            {
              "type": "Literal",
              "start": 987,
              "end": 992,
              "bigint": "1000",
              "raw": "1000n",
              "value": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 932,
            "end": 981,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 932,
              "end": 962,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 954,
                  "end": 961,
                  "raw": "'en-GB'",
                  "value": "en-GB"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 936,
                "end": 953,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 940,
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 953,
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
              "start": 963,
              "end": 981,
              "decorators": [],
              "name": "formatRangeToParts",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 994,
          "end": 995,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1039,
      "end": 1089,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1039,
        "end": 1088,
        "arguments": [
          {
            "type": "Literal",
            "start": 1077,
            "end": 1087,
            "raw": "'-12.3E-4'",
            "value": "-12.3E-4"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1039,
          "end": 1076,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1039,
            "end": 1069,
            "arguments": [
              {
                "type": "Literal",
                "start": 1061,
                "end": 1068,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1043,
              "end": 1060,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1043,
                "end": 1047,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1048,
                "end": 1060,
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
            "start": 1070,
            "end": 1076,
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
      "start": 1090,
      "end": 1151,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1090,
        "end": 1150,
        "arguments": [
          {
            "type": "Literal",
            "start": 1133,
            "end": 1140,
            "raw": "'123.4'",
            "value": "123.4"
          },
          {
            "type": "Literal",
            "start": 1142,
            "end": 1149,
            "raw": "'567.8'",
            "value": "567.8"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1090,
          "end": 1132,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1090,
            "end": 1120,
            "arguments": [
              {
                "type": "Literal",
                "start": 1112,
                "end": 1119,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1094,
              "end": 1111,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1094,
                "end": 1098,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1099,
                "end": 1111,
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
            "start": 1121,
            "end": 1132,
            "decorators": [],
            "name": "formatRange",
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
      "start": 1152,
      "end": 1221,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1152,
        "end": 1220,
        "arguments": [
          {
            "type": "Literal",
            "start": 1202,
            "end": 1210,
            "raw": "'123E-4'",
            "value": "123E-4"
          },
          {
            "type": "Literal",
            "start": 1212,
            "end": 1219,
            "raw": "'567E8'",
            "value": "567E8"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1152,
          "end": 1201,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1152,
            "end": 1182,
            "arguments": [
              {
                "type": "Literal",
                "start": 1174,
                "end": 1181,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1156,
              "end": 1173,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1156,
                "end": 1160,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1161,
                "end": 1173,
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
            "start": 1183,
            "end": 1201,
            "decorators": [],
            "name": "formatRangeToParts",
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
      "start": 1222,
      "end": 1272,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1222,
        "end": 1271,
        "arguments": [
          {
            "type": "Literal",
            "start": 1260,
            "end": 1270,
            "raw": "'Infinity'",
            "value": "Infinity"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1222,
          "end": 1259,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1222,
            "end": 1252,
            "arguments": [
              {
                "type": "Literal",
                "start": 1244,
                "end": 1251,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1226,
              "end": 1243,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1226,
                "end": 1230,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1231,
                "end": 1243,
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
            "start": 1253,
            "end": 1259,
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
      "start": 1273,
      "end": 1324,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1273,
        "end": 1323,
        "arguments": [
          {
            "type": "Literal",
            "start": 1311,
            "end": 1322,
            "raw": "'-Infinity'",
            "value": "-Infinity"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1273,
          "end": 1310,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1273,
            "end": 1303,
            "arguments": [
              {
                "type": "Literal",
                "start": 1295,
                "end": 1302,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1277,
              "end": 1294,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1277,
                "end": 1281,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1282,
                "end": 1294,
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
            "start": 1304,
            "end": 1310,
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
      "start": 1325,
      "end": 1376,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1325,
        "end": 1375,
        "arguments": [
          {
            "type": "Literal",
            "start": 1363,
            "end": 1374,
            "raw": "'+Infinity'",
            "value": "+Infinity"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1325,
          "end": 1362,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1325,
            "end": 1355,
            "arguments": [
              {
                "type": "Literal",
                "start": 1347,
                "end": 1354,
                "raw": "'en-GB'",
                "value": "en-GB"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1329,
              "end": 1346,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1329,
                "end": 1333,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1334,
                "end": 1346,
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
            "start": 1356,
            "end": 1362,
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
