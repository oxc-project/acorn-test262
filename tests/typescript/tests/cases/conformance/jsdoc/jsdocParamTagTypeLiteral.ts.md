__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 128,
  "end": 1793,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 128,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "decorators": [],
        "name": "normal",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 144,
          "end": 154,
          "decorators": [],
          "name": "notSpecial",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 156,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 173,
            "expression": {
              "type": "Identifier",
              "start": 162,
              "end": 172,
              "decorators": [],
              "name": "notSpecial",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 214,
      "expression": {
        "type": "CallExpression",
        "start": 203,
        "end": 213,
        "callee": {
          "type": "Identifier",
          "start": 203,
          "end": 209,
          "decorators": [],
          "name": "normal",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 210,
            "end": 212,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 392,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 405,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 406,
          "end": 411,
          "decorators": [],
          "name": "opts1",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 413,
        "end": 429,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 419,
            "end": 427,
            "expression": {
              "type": "MemberExpression",
              "start": 419,
              "end": 426,
              "object": {
                "type": "Identifier",
                "start": 419,
                "end": 424,
                "decorators": [],
                "name": "opts1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 448,
      "expression": {
        "type": "CallExpression",
        "start": 431,
        "end": 447,
        "callee": {
          "type": "Identifier",
          "start": 431,
          "end": 435,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 436,
            "end": 446,
            "properties": [
              {
                "type": "Property",
                "start": 437,
                "end": 445,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 440,
                  "end": 445,
                  "value": "abc",
                  "raw": "'abc'"
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
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 558,
      "end": 642,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 571,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 609,
          "end": 614,
          "decorators": [],
          "name": "opts2",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 616,
        "end": 642,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 622,
            "end": 640,
            "expression": {
              "type": "MemberExpression",
              "start": 622,
              "end": 639,
              "object": {
                "type": "MemberExpression",
                "start": 622,
                "end": 630,
                "object": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 627,
                  "decorators": [],
                  "name": "opts2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 628,
                  "end": 629,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 631,
                "end": 639,
                "decorators": [],
                "name": "anotherX",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 672,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 671,
        "callee": {
          "type": "Identifier",
          "start": 644,
          "end": 648,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 649,
            "end": 670,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 650,
                "end": 669,
                "properties": [
                  {
                    "type": "Property",
                    "start": 651,
                    "end": 668,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 651,
                      "end": 659,
                      "decorators": [],
                      "name": "anotherX",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 661,
                      "end": 668,
                      "value": "world",
                      "raw": "\"world\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 734,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 747,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 748,
          "end": 753,
          "decorators": [],
          "name": "opts3",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 755,
        "end": 771,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 761,
            "end": 769,
            "expression": {
              "type": "MemberExpression",
              "start": 761,
              "end": 768,
              "object": {
                "type": "Identifier",
                "start": 761,
                "end": 766,
                "decorators": [],
                "name": "opts3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 767,
                "end": 768,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 772,
      "end": 789,
      "expression": {
        "type": "CallExpression",
        "start": 772,
        "end": 788,
        "callee": {
          "type": "Identifier",
          "start": 772,
          "end": 776,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 777,
            "end": 787,
            "properties": [
              {
                "type": "Property",
                "start": 778,
                "end": 786,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 779,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 781,
                  "end": 786,
                  "value": "abc",
                  "raw": "'abc'"
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
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 952,
      "end": 992,
      "id": {
        "type": "Identifier",
        "start": 961,
        "end": 965,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 966,
          "end": 971,
          "decorators": [],
          "name": "opts4",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 973,
        "end": 992,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 979,
            "end": 990,
            "expression": {
              "type": "MemberExpression",
              "start": 979,
              "end": 989,
              "object": {
                "type": "MemberExpression",
                "start": 979,
                "end": 987,
                "object": {
                  "type": "Identifier",
                  "start": 979,
                  "end": 984,
                  "decorators": [],
                  "name": "opts4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 985,
                  "end": 986,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 988,
                "end": 989,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 994,
      "end": 1014,
      "expression": {
        "type": "CallExpression",
        "start": 994,
        "end": 1013,
        "callee": {
          "type": "Identifier",
          "start": 994,
          "end": 998,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 999,
            "end": 1012,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 1000,
                "end": 1011,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1002,
                    "end": 1009,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1002,
                      "end": 1003,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1005,
                      "end": 1009,
                      "value": "hi",
                      "raw": "'hi'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1625,
      "end": 1701,
      "id": {
        "type": "Identifier",
        "start": 1634,
        "end": 1638,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1639,
          "end": 1644,
          "decorators": [],
          "name": "opts5",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1646,
        "end": 1701,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1652,
            "end": 1678,
            "expression": {
              "type": "MemberExpression",
              "start": 1652,
              "end": 1677,
              "object": {
                "type": "MemberExpression",
                "start": 1652,
                "end": 1672,
                "object": {
                  "type": "MemberExpression",
                  "start": 1652,
                  "end": 1669,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1652,
                    "end": 1665,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1652,
                      "end": 1660,
                      "object": {
                        "type": "Identifier",
                        "start": 1652,
                        "end": 1657,
                        "decorators": [],
                        "name": "opts5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1658,
                        "end": 1659,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1661,
                      "end": 1665,
                      "decorators": [],
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1666,
                    "end": 1669,
                    "decorators": [],
                    "name": "bad",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Literal",
                  "start": 1670,
                  "end": 1671,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 1673,
                "end": 1677,
                "decorators": [],
                "name": "idea",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1683,
            "end": 1699,
            "expression": {
              "type": "MemberExpression",
              "start": 1683,
              "end": 1698,
              "object": {
                "type": "MemberExpression",
                "start": 1683,
                "end": 1691,
                "object": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1688,
                  "decorators": [],
                  "name": "opts5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 1689,
                  "end": 1690,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 1692,
                "end": 1698,
                "decorators": [],
                "name": "unnest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1703,
      "end": 1793,
      "expression": {
        "type": "CallExpression",
        "start": 1703,
        "end": 1792,
        "callee": {
          "type": "Identifier",
          "start": 1703,
          "end": 1707,
          "decorators": [],
          "name": "foo5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1708,
            "end": 1791,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 1709,
                "end": 1790,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1711,
                    "end": 1723,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1711,
                      "end": 1715,
                      "decorators": [],
                      "name": "help",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1717,
                      "end": 1723,
                      "value": "help",
                      "raw": "\"help\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1725,
                    "end": 1777,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1729,
                      "decorators": [],
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1731,
                      "end": 1777,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1733,
                          "end": 1739,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1733,
                            "end": 1734,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1736,
                            "end": 1739,
                            "value": "a",
                            "raw": "'a'"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1741,
                          "end": 1775,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1741,
                            "end": 1744,
                            "decorators": [],
                            "name": "bad",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 1746,
                            "end": 1775,
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "start": 1747,
                                "end": 1774,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 1749,
                                    "end": 1761,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1749,
                                      "end": 1753,
                                      "decorators": [],
                                      "name": "idea",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 1755,
                                      "end": 1761,
                                      "value": "idea",
                                      "raw": "'idea'"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 1763,
                                    "end": 1772,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1763,
                                      "end": 1765,
                                      "decorators": [],
                                      "name": "oh",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 1767,
                                      "end": 1772,
                                      "value": false,
                                      "raw": "false"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1779,
                    "end": 1788,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1779,
                      "end": 1785,
                      "decorators": [],
                      "name": "unnest",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1787,
                      "end": 1788,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
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
