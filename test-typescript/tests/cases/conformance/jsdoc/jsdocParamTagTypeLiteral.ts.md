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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 156,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 173,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 162,
              "end": 172,
              "decorators": [],
              "name": "notSpecial",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "decorators": [],
        "name": "normal",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 214,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 203,
        "end": 213,
        "arguments": [
          {
            "type": "Literal",
            "start": 210,
            "end": 212,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 203,
          "end": 209,
          "decorators": [],
          "name": "normal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 392,
      "end": 429,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 413,
        "end": 429,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 419,
            "end": 427,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 419,
              "end": 426,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 419,
                "end": 424,
                "decorators": [],
                "name": "opts1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 405,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 448,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 431,
        "end": 447,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 440,
                  "end": 445,
                  "raw": "'abc'",
                  "value": "abc"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 431,
          "end": 435,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 558,
      "end": 642,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 616,
        "end": 642,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 622,
            "end": 640,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 622,
              "end": 639,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 622,
                "end": 630,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 627,
                  "decorators": [],
                  "name": "opts2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 628,
                  "end": 629,
                  "raw": "0",
                  "value": 0
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 631,
                "end": 639,
                "decorators": [],
                "name": "anotherX",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 571,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 672,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 671,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 651,
                      "end": 659,
                      "decorators": [],
                      "name": "anotherX",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 661,
                      "end": 668,
                      "raw": "\"world\"",
                      "value": "world"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 644,
          "end": 648,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 734,
      "end": 771,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 755,
        "end": 771,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 761,
            "end": 769,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 761,
              "end": 768,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 761,
                "end": 766,
                "decorators": [],
                "name": "opts3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 767,
                "end": 768,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 747,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 772,
      "end": 789,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 772,
        "end": 788,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 779,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 781,
                  "end": 786,
                  "raw": "'abc'",
                  "value": "abc"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 772,
          "end": 776,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 952,
      "end": 992,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 973,
        "end": 992,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 979,
            "end": 990,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 979,
              "end": 989,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 979,
                "end": 987,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 979,
                  "end": 984,
                  "decorators": [],
                  "name": "opts4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 985,
                  "end": 986,
                  "raw": "0",
                  "value": 0
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 988,
                "end": 989,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 961,
        "end": 965,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 994,
      "end": 1014,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 994,
        "end": 1013,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1002,
                      "end": 1003,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1005,
                      "end": 1009,
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 994,
          "end": 998,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1625,
      "end": 1701,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1646,
        "end": 1701,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1652,
            "end": 1678,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1652,
              "end": 1677,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1652,
                "end": 1672,
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "start": 1652,
                  "end": 1669,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1652,
                    "end": 1665,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1652,
                      "end": 1660,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 1652,
                        "end": 1657,
                        "decorators": [],
                        "name": "opts5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 1658,
                        "end": 1659,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1661,
                      "end": 1665,
                      "decorators": [],
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1666,
                    "end": 1669,
                    "decorators": [],
                    "name": "bad",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1670,
                  "end": 1671,
                  "raw": "0",
                  "value": 0
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1673,
                "end": 1677,
                "decorators": [],
                "name": "idea",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1683,
            "end": 1699,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 1683,
              "end": 1698,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1683,
                "end": 1691,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1688,
                  "decorators": [],
                  "name": "opts5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1689,
                  "end": 1690,
                  "raw": "0",
                  "value": 0
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1692,
                "end": 1698,
                "decorators": [],
                "name": "unnest",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1634,
        "end": 1638,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1703,
      "end": 1793,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1703,
        "end": 1792,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1711,
                      "end": 1715,
                      "decorators": [],
                      "name": "help",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1717,
                      "end": 1723,
                      "raw": "\"help\"",
                      "value": "help"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1725,
                    "end": 1777,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1729,
                      "decorators": [],
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1731,
                      "end": 1777,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1733,
                          "end": 1739,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1733,
                            "end": 1734,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1736,
                            "end": 1739,
                            "raw": "'a'",
                            "value": "a"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1741,
                          "end": 1775,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1741,
                            "end": 1744,
                            "decorators": [],
                            "name": "bad",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
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
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1749,
                                      "end": 1753,
                                      "decorators": [],
                                      "name": "idea",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 1755,
                                      "end": 1761,
                                      "raw": "'idea'",
                                      "value": "idea"
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "start": 1763,
                                    "end": 1772,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1763,
                                      "end": 1765,
                                      "decorators": [],
                                      "name": "oh",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 1767,
                                      "end": 1772,
                                      "raw": "false",
                                      "value": false
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1779,
                    "end": 1788,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1779,
                      "end": 1785,
                      "decorators": [],
                      "name": "unnest",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1787,
                      "end": 1788,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1703,
          "end": 1707,
          "decorators": [],
          "name": "foo5",
          "optional": false,
          "typeAnnotation": null
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
