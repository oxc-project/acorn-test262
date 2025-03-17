__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 1377,
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
          "id": {
            "type": "ObjectPattern",
            "start": 89,
            "end": 176,
            "properties": [
              {
                "type": "Property",
                "start": 91,
                "end": 107,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 107,
                  "name": "roundingPriority",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 107,
                  "name": "roundingPriority",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 109,
                "end": 121,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 121,
                  "name": "roundingMode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 121,
                  "name": "roundingMode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 123,
                "end": 140,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 140,
                  "name": "roundingIncrement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 140,
                  "name": "roundingIncrement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 142,
                "end": 161,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 161,
                  "name": "trailingZeroDisplay",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 161,
                  "name": "trailingZeroDisplay",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 163,
                "end": 174,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 174,
                  "name": "useGrouping",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 174,
                  "name": "useGrouping",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 180,
            "end": 228,
            "callee": {
              "type": "MemberExpression",
              "start": 180,
              "end": 226,
              "object": {
                "type": "NewExpression",
                "start": 180,
                "end": 210,
                "callee": {
                  "type": "MemberExpression",
                  "start": 184,
                  "end": 201,
                  "object": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 188,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 201,
                    "name": "NumberFormat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 202,
                    "end": 209,
                    "value": "en-GB",
                    "raw": "'en-GB'"
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 226,
                "name": "resolvedOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
      "start": 248,
      "end": 283,
      "expression": {
        "type": "NewExpression",
        "start": 248,
        "end": 282,
        "callee": {
          "type": "MemberExpression",
          "start": 252,
          "end": 269,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 256,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 257,
            "end": 269,
            "name": "NumberFormat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 270,
            "end": 277,
            "value": "en-GB",
            "raw": "'en-GB'"
          },
          {
            "type": "ObjectExpression",
            "start": 279,
            "end": 281,
            "properties": []
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 414,
      "expression": {
        "type": "NewExpression",
        "start": 297,
        "end": 413,
        "callee": {
          "type": "MemberExpression",
          "start": 301,
          "end": 318,
          "object": {
            "type": "Identifier",
            "start": 301,
            "end": 305,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 306,
            "end": 318,
            "name": "NumberFormat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 319,
            "end": 326,
            "value": "en-GB",
            "raw": "'en-GB'"
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 346,
                  "name": "roundingPriority",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 348,
                  "end": 363,
                  "value": "lessPrecision",
                  "raw": "'lessPrecision'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 365,
                "end": 387,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 382,
                  "name": "roundingIncrement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 384,
                  "end": 387,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 389,
                "end": 410,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 401,
                  "name": "roundingMode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 403,
                  "end": 410,
                  "value": "trunc",
                  "raw": "'trunc'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 448,
            "end": 463,
            "properties": [
              {
                "type": "Property",
                "start": 450,
                "end": 461,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 461,
                  "name": "signDisplay",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 461,
                  "name": "signDisplay",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 466,
            "end": 543,
            "callee": {
              "type": "MemberExpression",
              "start": 466,
              "end": 541,
              "object": {
                "type": "NewExpression",
                "start": 466,
                "end": 525,
                "callee": {
                  "type": "MemberExpression",
                  "start": 470,
                  "end": 487,
                  "object": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 474,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 487,
                    "name": "NumberFormat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 488,
                    "end": 495,
                    "value": "en-GB",
                    "raw": "'en-GB'"
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 499,
                          "end": 510,
                          "name": "signDisplay",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 512,
                          "end": 522,
                          "value": "negative",
                          "raw": "'negative'"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 526,
                "end": 541,
                "name": "resolvedOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
      "start": 572,
      "end": 626,
      "expression": {
        "type": "NewExpression",
        "start": 572,
        "end": 625,
        "callee": {
          "type": "MemberExpression",
          "start": 576,
          "end": 593,
          "object": {
            "type": "Identifier",
            "start": 576,
            "end": 580,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 581,
            "end": 593,
            "name": "NumberFormat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 594,
            "end": 601,
            "value": "en-GB",
            "raw": "'en-GB'"
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 616,
                  "name": "useGrouping",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 618,
                  "end": 622,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 627,
      "end": 683,
      "expression": {
        "type": "NewExpression",
        "start": 627,
        "end": 682,
        "callee": {
          "type": "MemberExpression",
          "start": 631,
          "end": 648,
          "object": {
            "type": "Identifier",
            "start": 631,
            "end": 635,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 636,
            "end": 648,
            "name": "NumberFormat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 649,
            "end": 656,
            "value": "en-GB",
            "raw": "'en-GB'"
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 671,
                  "name": "useGrouping",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 673,
                  "end": 679,
                  "value": "true",
                  "raw": "'true'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 742,
      "expression": {
        "type": "NewExpression",
        "start": 684,
        "end": 741,
        "callee": {
          "type": "MemberExpression",
          "start": 688,
          "end": 705,
          "object": {
            "type": "Identifier",
            "start": 688,
            "end": 692,
            "name": "Intl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 693,
            "end": 705,
            "name": "NumberFormat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 706,
            "end": 713,
            "value": "en-GB",
            "raw": "'en-GB'"
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 728,
                  "name": "useGrouping",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 730,
                  "end": 738,
                  "value": "always",
                  "raw": "'always'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 759,
      "end": 811,
      "expression": {
        "type": "CallExpression",
        "start": 759,
        "end": 810,
        "callee": {
          "type": "MemberExpression",
          "start": 759,
          "end": 801,
          "object": {
            "type": "NewExpression",
            "start": 759,
            "end": 789,
            "callee": {
              "type": "MemberExpression",
              "start": 763,
              "end": 780,
              "object": {
                "type": "Identifier",
                "start": 763,
                "end": 767,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 768,
                "end": 780,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 781,
                "end": 788,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 790,
            "end": 801,
            "name": "formatRange",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 802,
            "end": 804,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 806,
            "end": 809,
            "value": 100,
            "raw": "100"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 812,
      "end": 867,
      "expression": {
        "type": "CallExpression",
        "start": 812,
        "end": 866,
        "callee": {
          "type": "MemberExpression",
          "start": 812,
          "end": 854,
          "object": {
            "type": "NewExpression",
            "start": 812,
            "end": 842,
            "callee": {
              "type": "MemberExpression",
              "start": 816,
              "end": 833,
              "object": {
                "type": "Identifier",
                "start": 816,
                "end": 820,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 821,
                "end": 833,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 834,
                "end": 841,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 843,
            "end": 854,
            "name": "formatRange",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 855,
            "end": 858,
            "value": null,
            "raw": "10n",
            "bigint": "10"
          },
          {
            "type": "Literal",
            "start": 860,
            "end": 865,
            "value": null,
            "raw": "1000n",
            "bigint": "1000"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 868,
      "end": 931,
      "expression": {
        "type": "MemberExpression",
        "start": 868,
        "end": 930,
        "object": {
          "type": "CallExpression",
          "start": 868,
          "end": 927,
          "callee": {
            "type": "MemberExpression",
            "start": 868,
            "end": 917,
            "object": {
              "type": "NewExpression",
              "start": 868,
              "end": 898,
              "callee": {
                "type": "MemberExpression",
                "start": 872,
                "end": 889,
                "object": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 876,
                  "name": "Intl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 889,
                  "name": "NumberFormat",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 890,
                  "end": 897,
                  "value": "en-GB",
                  "raw": "'en-GB'"
                }
              ],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 899,
              "end": 917,
              "name": "formatRangeToParts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 918,
              "end": 920,
              "value": 10,
              "raw": "10"
            },
            {
              "type": "Literal",
              "start": 922,
              "end": 926,
              "value": 1000,
              "raw": "1000"
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Literal",
          "start": 928,
          "end": 929,
          "value": 0,
          "raw": "0"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 932,
      "end": 997,
      "expression": {
        "type": "MemberExpression",
        "start": 932,
        "end": 996,
        "object": {
          "type": "CallExpression",
          "start": 932,
          "end": 993,
          "callee": {
            "type": "MemberExpression",
            "start": 932,
            "end": 981,
            "object": {
              "type": "NewExpression",
              "start": 932,
              "end": 962,
              "callee": {
                "type": "MemberExpression",
                "start": 936,
                "end": 953,
                "object": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 940,
                  "name": "Intl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 953,
                  "name": "NumberFormat",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 954,
                  "end": 961,
                  "value": "en-GB",
                  "raw": "'en-GB'"
                }
              ],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 963,
              "end": 981,
              "name": "formatRangeToParts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 982,
              "end": 985,
              "value": null,
              "raw": "10n",
              "bigint": "10"
            },
            {
              "type": "Literal",
              "start": 987,
              "end": 992,
              "value": null,
              "raw": "1000n",
              "bigint": "1000"
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Literal",
          "start": 994,
          "end": 995,
          "value": 0,
          "raw": "0"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1039,
      "end": 1089,
      "expression": {
        "type": "CallExpression",
        "start": 1039,
        "end": 1088,
        "callee": {
          "type": "MemberExpression",
          "start": 1039,
          "end": 1076,
          "object": {
            "type": "NewExpression",
            "start": 1039,
            "end": 1069,
            "callee": {
              "type": "MemberExpression",
              "start": 1043,
              "end": 1060,
              "object": {
                "type": "Identifier",
                "start": 1043,
                "end": 1047,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1048,
                "end": 1060,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1061,
                "end": 1068,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1070,
            "end": 1076,
            "name": "format",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1077,
            "end": 1087,
            "value": "-12.3E-4",
            "raw": "'-12.3E-4'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1090,
      "end": 1151,
      "expression": {
        "type": "CallExpression",
        "start": 1090,
        "end": 1150,
        "callee": {
          "type": "MemberExpression",
          "start": 1090,
          "end": 1132,
          "object": {
            "type": "NewExpression",
            "start": 1090,
            "end": 1120,
            "callee": {
              "type": "MemberExpression",
              "start": 1094,
              "end": 1111,
              "object": {
                "type": "Identifier",
                "start": 1094,
                "end": 1098,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1099,
                "end": 1111,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1112,
                "end": 1119,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1121,
            "end": 1132,
            "name": "formatRange",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1133,
            "end": 1140,
            "value": "123.4",
            "raw": "'123.4'"
          },
          {
            "type": "Literal",
            "start": 1142,
            "end": 1149,
            "value": "567.8",
            "raw": "'567.8'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1152,
      "end": 1221,
      "expression": {
        "type": "CallExpression",
        "start": 1152,
        "end": 1220,
        "callee": {
          "type": "MemberExpression",
          "start": 1152,
          "end": 1201,
          "object": {
            "type": "NewExpression",
            "start": 1152,
            "end": 1182,
            "callee": {
              "type": "MemberExpression",
              "start": 1156,
              "end": 1173,
              "object": {
                "type": "Identifier",
                "start": 1156,
                "end": 1160,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1161,
                "end": 1173,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1174,
                "end": 1181,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1183,
            "end": 1201,
            "name": "formatRangeToParts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1202,
            "end": 1210,
            "value": "123E-4",
            "raw": "'123E-4'"
          },
          {
            "type": "Literal",
            "start": 1212,
            "end": 1219,
            "value": "567E8",
            "raw": "'567E8'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1222,
      "end": 1272,
      "expression": {
        "type": "CallExpression",
        "start": 1222,
        "end": 1271,
        "callee": {
          "type": "MemberExpression",
          "start": 1222,
          "end": 1259,
          "object": {
            "type": "NewExpression",
            "start": 1222,
            "end": 1252,
            "callee": {
              "type": "MemberExpression",
              "start": 1226,
              "end": 1243,
              "object": {
                "type": "Identifier",
                "start": 1226,
                "end": 1230,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1231,
                "end": 1243,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1244,
                "end": 1251,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1253,
            "end": 1259,
            "name": "format",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1260,
            "end": 1270,
            "value": "Infinity",
            "raw": "'Infinity'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1273,
      "end": 1324,
      "expression": {
        "type": "CallExpression",
        "start": 1273,
        "end": 1323,
        "callee": {
          "type": "MemberExpression",
          "start": 1273,
          "end": 1310,
          "object": {
            "type": "NewExpression",
            "start": 1273,
            "end": 1303,
            "callee": {
              "type": "MemberExpression",
              "start": 1277,
              "end": 1294,
              "object": {
                "type": "Identifier",
                "start": 1277,
                "end": 1281,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1282,
                "end": 1294,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1295,
                "end": 1302,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1304,
            "end": 1310,
            "name": "format",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1311,
            "end": 1322,
            "value": "-Infinity",
            "raw": "'-Infinity'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1325,
      "end": 1376,
      "expression": {
        "type": "CallExpression",
        "start": 1325,
        "end": 1375,
        "callee": {
          "type": "MemberExpression",
          "start": 1325,
          "end": 1362,
          "object": {
            "type": "NewExpression",
            "start": 1325,
            "end": 1355,
            "callee": {
              "type": "MemberExpression",
              "start": 1329,
              "end": 1346,
              "object": {
                "type": "Identifier",
                "start": 1329,
                "end": 1333,
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1334,
                "end": 1346,
                "name": "NumberFormat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1347,
                "end": 1354,
                "value": "en-GB",
                "raw": "'en-GB'"
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1356,
            "end": 1362,
            "name": "format",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1363,
            "end": 1374,
            "value": "+Infinity",
            "raw": "'+Infinity'"
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
