__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 107
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 107
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 91,
                "end": 107
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 121
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 121
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 109,
                "end": 121
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 140
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 140
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 123,
                "end": 140
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trailingZeroDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 161
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trailingZeroDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 161
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 142,
                "end": 161
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 174
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 174
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 163,
                "end": 174
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 176
          },
          "init": {
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
                    "start": 184,
                    "end": 188
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 201
                  },
                  "optional": false,
                  "computed": false,
                  "start": 184,
                  "end": 201
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-GB",
                    "raw": "'en-GB'",
                    "start": 202,
                    "end": 209
                  }
                ],
                "start": 180,
                "end": 210
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 226
              },
              "optional": false,
              "computed": false,
              "start": 180,
              "end": 226
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 180,
            "end": 228
          },
          "definite": false,
          "start": 89,
          "end": 228
        }
      ],
      "declare": false,
      "start": 83,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 256
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 269
          },
          "optional": false,
          "computed": false,
          "start": 252,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 270,
            "end": 277
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 279,
            "end": 281
          }
        ],
        "start": 248,
        "end": 282
      },
      "directive": null,
      "start": 248,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 305
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 318
          },
          "optional": false,
          "computed": false,
          "start": 301,
          "end": 318
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 319,
            "end": 326
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
                  "name": "roundingPriority",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 346
                },
                "value": {
                  "type": "Literal",
                  "value": "lessPrecision",
                  "raw": "'lessPrecision'",
                  "start": 348,
                  "end": 363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 330,
                "end": 363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 382
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 384,
                  "end": 387
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 365,
                "end": 387
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "roundingMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 401
                },
                "value": {
                  "type": "Literal",
                  "value": "trunc",
                  "raw": "'trunc'",
                  "start": 403,
                  "end": 410
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 389,
                "end": 410
              }
            ],
            "start": 328,
            "end": 412
          }
        ],
        "start": 297,
        "end": 413
      },
      "directive": null,
      "start": 297,
      "end": 414
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 461
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 461
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 450,
                "end": 461
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 463
          },
          "init": {
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
                    "start": 470,
                    "end": 474
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 487
                  },
                  "optional": false,
                  "computed": false,
                  "start": 470,
                  "end": 487
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-GB",
                    "raw": "'en-GB'",
                    "start": 488,
                    "end": 495
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
                          "name": "signDisplay",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 499,
                          "end": 510
                        },
                        "value": {
                          "type": "Literal",
                          "value": "negative",
                          "raw": "'negative'",
                          "start": 512,
                          "end": 522
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 499,
                        "end": 522
                      }
                    ],
                    "start": 497,
                    "end": 524
                  }
                ],
                "start": 466,
                "end": 525
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 541
              },
              "optional": false,
              "computed": false,
              "start": 466,
              "end": 541
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 466,
            "end": 543
          },
          "definite": false,
          "start": 448,
          "end": 543
        }
      ],
      "declare": false,
      "start": 442,
      "end": 544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 580
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 593
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 593
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 594,
            "end": 601
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
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 616
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 618,
                  "end": 622
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 605,
                "end": 622
              }
            ],
            "start": 603,
            "end": 624
          }
        ],
        "start": 572,
        "end": 625
      },
      "directive": null,
      "start": 572,
      "end": 626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 635
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 648
          },
          "optional": false,
          "computed": false,
          "start": 631,
          "end": 648
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 649,
            "end": 656
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
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 671
                },
                "value": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 673,
                  "end": 679
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 660,
                "end": 679
              }
            ],
            "start": 658,
            "end": 681
          }
        ],
        "start": 627,
        "end": 682
      },
      "directive": null,
      "start": 627,
      "end": 683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 692
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 705
          },
          "optional": false,
          "computed": false,
          "start": 688,
          "end": 705
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 706,
            "end": 713
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
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 717,
                  "end": 728
                },
                "value": {
                  "type": "Literal",
                  "value": "always",
                  "raw": "'always'",
                  "start": 730,
                  "end": 738
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 717,
                "end": 738
              }
            ],
            "start": 715,
            "end": 740
          }
        ],
        "start": 684,
        "end": 741
      },
      "directive": null,
      "start": 684,
      "end": 742
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
                "start": 763,
                "end": 767
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 780
              },
              "optional": false,
              "computed": false,
              "start": 763,
              "end": 780
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 781,
                "end": 788
              }
            ],
            "start": 759,
            "end": 789
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 790,
            "end": 801
          },
          "optional": false,
          "computed": false,
          "start": 759,
          "end": 801
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 802,
            "end": 804
          },
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 806,
            "end": 809
          }
        ],
        "optional": false,
        "start": 759,
        "end": 810
      },
      "directive": null,
      "start": 759,
      "end": 811
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
                "start": 816,
                "end": 820
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 833
              },
              "optional": false,
              "computed": false,
              "start": 816,
              "end": 833
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 834,
                "end": 841
              }
            ],
            "start": 812,
            "end": 842
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 854
          },
          "optional": false,
          "computed": false,
          "start": 812,
          "end": 854
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "10n",
            "bigint": "10",
            "start": 855,
            "end": 858
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "1000n",
            "bigint": "1000",
            "start": 860,
            "end": 865
          }
        ],
        "optional": false,
        "start": 812,
        "end": 866
      },
      "directive": null,
      "start": 812,
      "end": 867
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
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
                  "start": 872,
                  "end": 876
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberFormat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 889
                },
                "optional": false,
                "computed": false,
                "start": 872,
                "end": 889
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "en-GB",
                  "raw": "'en-GB'",
                  "start": 890,
                  "end": 897
                }
              ],
              "start": 868,
              "end": 898
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "formatRangeToParts",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 917
            },
            "optional": false,
            "computed": false,
            "start": 868,
            "end": 917
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 918,
              "end": 920
            },
            {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 922,
              "end": 926
            }
          ],
          "optional": false,
          "start": 868,
          "end": 927
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 928,
          "end": 929
        },
        "optional": false,
        "computed": true,
        "start": 868,
        "end": 930
      },
      "directive": null,
      "start": 868,
      "end": 931
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
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
                  "start": 936,
                  "end": 940
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberFormat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 953
                },
                "optional": false,
                "computed": false,
                "start": 936,
                "end": 953
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "en-GB",
                  "raw": "'en-GB'",
                  "start": 954,
                  "end": 961
                }
              ],
              "start": 932,
              "end": 962
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "formatRangeToParts",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 981
            },
            "optional": false,
            "computed": false,
            "start": 932,
            "end": 981
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": null,
              "raw": "10n",
              "bigint": "10",
              "start": 982,
              "end": 985
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "1000n",
              "bigint": "1000",
              "start": 987,
              "end": 992
            }
          ],
          "optional": false,
          "start": 932,
          "end": 993
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 994,
          "end": 995
        },
        "optional": false,
        "computed": true,
        "start": 932,
        "end": 996
      },
      "directive": null,
      "start": 932,
      "end": 997
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
                "start": 1043,
                "end": 1047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1060
              },
              "optional": false,
              "computed": false,
              "start": 1043,
              "end": 1060
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1061,
                "end": 1068
              }
            ],
            "start": 1039,
            "end": 1069
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1070,
            "end": 1076
          },
          "optional": false,
          "computed": false,
          "start": 1039,
          "end": 1076
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-12.3E-4",
            "raw": "'-12.3E-4'",
            "start": 1077,
            "end": 1087
          }
        ],
        "optional": false,
        "start": 1039,
        "end": 1088
      },
      "directive": null,
      "start": 1039,
      "end": 1089
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
                "start": 1094,
                "end": 1098
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1111
              },
              "optional": false,
              "computed": false,
              "start": 1094,
              "end": 1111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1112,
                "end": 1119
              }
            ],
            "start": 1090,
            "end": 1120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1132
          },
          "optional": false,
          "computed": false,
          "start": 1090,
          "end": 1132
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "123.4",
            "raw": "'123.4'",
            "start": 1133,
            "end": 1140
          },
          {
            "type": "Literal",
            "value": "567.8",
            "raw": "'567.8'",
            "start": 1142,
            "end": 1149
          }
        ],
        "optional": false,
        "start": 1090,
        "end": 1150
      },
      "directive": null,
      "start": 1090,
      "end": 1151
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
                "start": 1156,
                "end": 1160
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1161,
                "end": 1173
              },
              "optional": false,
              "computed": false,
              "start": 1156,
              "end": 1173
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1174,
                "end": 1181
              }
            ],
            "start": 1152,
            "end": 1182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRangeToParts",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1201
          },
          "optional": false,
          "computed": false,
          "start": 1152,
          "end": 1201
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "123E-4",
            "raw": "'123E-4'",
            "start": 1202,
            "end": 1210
          },
          {
            "type": "Literal",
            "value": "567E8",
            "raw": "'567E8'",
            "start": 1212,
            "end": 1219
          }
        ],
        "optional": false,
        "start": 1152,
        "end": 1220
      },
      "directive": null,
      "start": 1152,
      "end": 1221
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
                "start": 1226,
                "end": 1230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1243
              },
              "optional": false,
              "computed": false,
              "start": 1226,
              "end": 1243
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1244,
                "end": 1251
              }
            ],
            "start": 1222,
            "end": 1252
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1253,
            "end": 1259
          },
          "optional": false,
          "computed": false,
          "start": 1222,
          "end": 1259
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Infinity",
            "raw": "'Infinity'",
            "start": 1260,
            "end": 1270
          }
        ],
        "optional": false,
        "start": 1222,
        "end": 1271
      },
      "directive": null,
      "start": 1222,
      "end": 1272
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
                "start": 1277,
                "end": 1281
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1294
              },
              "optional": false,
              "computed": false,
              "start": 1277,
              "end": 1294
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1295,
                "end": 1302
              }
            ],
            "start": 1273,
            "end": 1303
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1304,
            "end": 1310
          },
          "optional": false,
          "computed": false,
          "start": 1273,
          "end": 1310
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-Infinity",
            "raw": "'-Infinity'",
            "start": 1311,
            "end": 1322
          }
        ],
        "optional": false,
        "start": 1273,
        "end": 1323
      },
      "directive": null,
      "start": 1273,
      "end": 1324
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
                "start": 1329,
                "end": 1333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1334,
                "end": 1346
              },
              "optional": false,
              "computed": false,
              "start": 1329,
              "end": 1346
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-GB",
                "raw": "'en-GB'",
                "start": 1347,
                "end": 1354
              }
            ],
            "start": 1325,
            "end": 1355
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1362
          },
          "optional": false,
          "computed": false,
          "start": 1325,
          "end": 1362
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "+Infinity",
            "raw": "'+Infinity'",
            "start": 1363,
            "end": 1374
          }
        ],
        "optional": false,
        "start": 1325,
        "end": 1375
      },
      "directive": null,
      "start": 1325,
      "end": 1376
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 1376
}
```
