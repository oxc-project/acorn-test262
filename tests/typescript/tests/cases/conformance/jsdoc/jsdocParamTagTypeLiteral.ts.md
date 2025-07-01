__ESTREE_TEST__:PASS:
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
