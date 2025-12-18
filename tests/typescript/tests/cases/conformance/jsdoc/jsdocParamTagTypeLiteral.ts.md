__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "normal",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 143
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "notSpecial",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 154
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "notSpecial",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 172
            },
            "directive": null,
            "start": 162,
            "end": 173
          }
        ],
        "start": 156,
        "end": 202
      },
      "expression": false,
      "start": 128,
      "end": 202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "normal",
          "optional": false,
          "typeAnnotation": null,
          "start": 203,
          "end": 209
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 210,
            "end": 212
          }
        ],
        "optional": false,
        "start": 203,
        "end": 213
      },
      "directive": null,
      "start": 203,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 405
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts1",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 411
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opts1",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 424
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 426
              },
              "optional": false,
              "computed": false,
              "start": 419,
              "end": 426
            },
            "directive": null,
            "start": 419,
            "end": 427
          }
        ],
        "start": 413,
        "end": 429
      },
      "expression": false,
      "start": 392,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 435
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 438
                },
                "value": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 440,
                  "end": 445
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 437,
                "end": 445
              }
            ],
            "start": 436,
            "end": 446
          }
        ],
        "optional": false,
        "start": 431,
        "end": 447
      },
      "directive": null,
      "start": 431,
      "end": 448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 571
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts2",
          "optional": false,
          "typeAnnotation": null,
          "start": 609,
          "end": 614
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opts2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 622,
                  "end": 627
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 628,
                  "end": 629
                },
                "optional": false,
                "computed": true,
                "start": 622,
                "end": 630
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anotherX",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 639
              },
              "optional": false,
              "computed": false,
              "start": 622,
              "end": 639
            },
            "directive": null,
            "start": 622,
            "end": 640
          }
        ],
        "start": 616,
        "end": 642
      },
      "expression": false,
      "start": 558,
      "end": 642
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 648
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anotherX",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 651,
                      "end": 659
                    },
                    "value": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 661,
                      "end": 668
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 651,
                    "end": 668
                  }
                ],
                "start": 650,
                "end": 669
              }
            ],
            "start": 649,
            "end": 670
          }
        ],
        "optional": false,
        "start": 644,
        "end": 671
      },
      "directive": null,
      "start": 644,
      "end": 672
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 747
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts3",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 753
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opts3",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 766
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 768
              },
              "optional": false,
              "computed": false,
              "start": 761,
              "end": 768
            },
            "directive": null,
            "start": 761,
            "end": 769
          }
        ],
        "start": 755,
        "end": 771
      },
      "expression": false,
      "start": 734,
      "end": 771
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 776
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 779
                },
                "value": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 781,
                  "end": 786
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 778,
                "end": 786
              }
            ],
            "start": 777,
            "end": 787
          }
        ],
        "optional": false,
        "start": 772,
        "end": 788
      },
      "directive": null,
      "start": 772,
      "end": 789
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 961,
        "end": 965
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts4",
          "optional": false,
          "typeAnnotation": null,
          "start": 966,
          "end": 971
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opts4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 979,
                  "end": 984
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 985,
                  "end": 986
                },
                "optional": false,
                "computed": true,
                "start": 979,
                "end": 987
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 989
              },
              "optional": false,
              "computed": false,
              "start": 979,
              "end": 989
            },
            "directive": null,
            "start": 979,
            "end": 990
          }
        ],
        "start": 973,
        "end": 992
      },
      "expression": false,
      "start": 952,
      "end": 992
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 994,
          "end": 998
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1002,
                      "end": 1003
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 1005,
                      "end": 1009
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1002,
                    "end": 1009
                  }
                ],
                "start": 1000,
                "end": 1011
              }
            ],
            "start": 999,
            "end": 1012
          }
        ],
        "optional": false,
        "start": 994,
        "end": 1013
      },
      "directive": null,
      "start": 994,
      "end": 1014
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1634,
        "end": 1638
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1639,
          "end": 1644
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "opts5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1652,
                        "end": 1657
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1658,
                        "end": 1659
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1652,
                      "end": 1660
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1661,
                      "end": 1665
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1652,
                    "end": 1665
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bad",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1666,
                    "end": 1669
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1652,
                  "end": 1669
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1670,
                  "end": 1671
                },
                "optional": false,
                "computed": true,
                "start": 1652,
                "end": 1672
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "idea",
                "optional": false,
                "typeAnnotation": null,
                "start": 1673,
                "end": 1677
              },
              "optional": false,
              "computed": false,
              "start": 1652,
              "end": 1677
            },
            "directive": null,
            "start": 1652,
            "end": 1678
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opts5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1683,
                  "end": 1688
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1689,
                  "end": 1690
                },
                "optional": false,
                "computed": true,
                "start": 1683,
                "end": 1691
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "unnest",
                "optional": false,
                "typeAnnotation": null,
                "start": 1692,
                "end": 1698
              },
              "optional": false,
              "computed": false,
              "start": 1683,
              "end": 1698
            },
            "directive": null,
            "start": 1683,
            "end": 1699
          }
        ],
        "start": 1646,
        "end": 1701
      },
      "expression": false,
      "start": 1625,
      "end": 1701
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1703,
          "end": 1707
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "help",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1711,
                      "end": 1715
                    },
                    "value": {
                      "type": "Literal",
                      "value": "help",
                      "raw": "\"help\"",
                      "start": 1717,
                      "end": 1723
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1711,
                    "end": 1723
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1725,
                      "end": 1729
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1733,
                            "end": 1734
                          },
                          "value": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 1736,
                            "end": 1739
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1733,
                          "end": 1739
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bad",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1741,
                            "end": 1744
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "idea",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1749,
                                      "end": 1753
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "idea",
                                      "raw": "'idea'",
                                      "start": 1755,
                                      "end": 1761
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1749,
                                    "end": 1761
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "oh",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1763,
                                      "end": 1765
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 1767,
                                      "end": 1772
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1763,
                                    "end": 1772
                                  }
                                ],
                                "start": 1747,
                                "end": 1774
                              }
                            ],
                            "start": 1746,
                            "end": 1775
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1741,
                          "end": 1775
                        }
                      ],
                      "start": 1731,
                      "end": 1777
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1725,
                    "end": 1777
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unnest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1779,
                      "end": 1785
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1787,
                      "end": 1788
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1779,
                    "end": 1788
                  }
                ],
                "start": 1709,
                "end": 1790
              }
            ],
            "start": 1708,
            "end": 1791
          }
        ],
        "optional": false,
        "start": 1703,
        "end": 1792
      },
      "directive": null,
      "start": 1703,
      "end": 1793
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 128,
  "end": 1793
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 128,
    "end": 136,
    "range": [
      128,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "normal",
    "start": 137,
    "end": 143,
    "range": [
      137,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "notSpecial",
    "start": 144,
    "end": 154,
    "range": [
      144,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "notSpecial",
    "start": 162,
    "end": 172,
    "range": [
      162,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "normal",
    "start": 203,
    "end": 209,
    "range": [
      203,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 210,
    "end": 212,
    "range": [
      210,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 392,
    "end": 400,
    "range": [
      392,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 401,
    "end": 405,
    "range": [
      401,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "opts1",
    "start": 406,
    "end": 411,
    "range": [
      406,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "opts1",
    "start": 419,
    "end": 424,
    "range": [
      419,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 431,
    "end": 435,
    "range": [
      431,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 558,
    "end": 566,
    "range": [
      558,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 567,
    "end": 571,
    "range": [
      567,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "opts2",
    "start": 609,
    "end": 614,
    "range": [
      609,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "opts2",
    "start": 622,
    "end": 627,
    "range": [
      622,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 629,
    "end": 630,
    "range": [
      629,
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
    "value": "anotherX",
    "start": 631,
    "end": 639,
    "range": [
      631,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 644,
    "end": 648,
    "range": [
      644,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "anotherX",
    "start": 651,
    "end": 659,
    "range": [
      651,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 661,
    "end": 668,
    "range": [
      661,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 734,
    "end": 742,
    "range": [
      734,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 743,
    "end": 747,
    "range": [
      743,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "opts3",
    "start": 748,
    "end": 753,
    "range": [
      748,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "opts3",
    "start": 761,
    "end": 766,
    "range": [
      761,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 772,
    "end": 776,
    "range": [
      772,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 781,
    "end": 786,
    "range": [
      781,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 952,
    "end": 960,
    "range": [
      952,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 961,
    "end": 965,
    "range": [
      961,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "opts4",
    "start": 966,
    "end": 971,
    "range": [
      966,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "opts4",
    "start": 979,
    "end": 984,
    "range": [
      979,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 994,
    "end": 998,
    "range": [
      994,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 1005,
    "end": 1009,
    "range": [
      1005,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1625,
    "end": 1633,
    "range": [
      1625,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1634,
    "end": 1638,
    "range": [
      1634,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "opts5",
    "start": 1639,
    "end": 1644,
    "range": [
      1639,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "opts5",
    "start": 1652,
    "end": 1657,
    "range": [
      1652,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Identifier",
    "value": "what",
    "start": 1661,
    "end": 1665,
    "range": [
      1661,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 1666,
    "end": 1669,
    "range": [
      1666,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Identifier",
    "value": "idea",
    "start": 1673,
    "end": 1677,
    "range": [
      1673,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "opts5",
    "start": 1683,
    "end": 1688,
    "range": [
      1683,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Identifier",
    "value": "unnest",
    "start": 1692,
    "end": 1698,
    "range": [
      1692,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1703,
    "end": 1707,
    "range": [
      1703,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "help",
    "start": 1711,
    "end": 1715,
    "range": [
      1711,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "String",
    "value": "\"help\"",
    "start": 1717,
    "end": 1723,
    "range": [
      1717,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "what",
    "start": 1725,
    "end": 1729,
    "range": [
      1725,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1736,
    "end": 1739,
    "range": [
      1736,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 1741,
    "end": 1744,
    "range": [
      1741,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "idea",
    "start": 1749,
    "end": 1753,
    "range": [
      1749,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "String",
    "value": "'idea'",
    "start": 1755,
    "end": 1761,
    "range": [
      1755,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "oh",
    "start": 1763,
    "end": 1765,
    "range": [
      1763,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1767,
    "end": 1772,
    "range": [
      1767,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "unnest",
    "start": 1779,
    "end": 1785,
    "range": [
      1779,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  }
]
```
