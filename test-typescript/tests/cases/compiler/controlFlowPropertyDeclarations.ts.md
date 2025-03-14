controlFlowPropertyDeclarations.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 3844,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 45,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 45,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 73,
            "decorators": [],
            "name": "HTMLDOMPropertyConfig",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 76,
            "end": 118,
            "arguments": [
              {
                "type": "Literal",
                "start": 84,
                "end": 117,
                "raw": "'react/lib/HTMLDOMPropertyConfig'",
                "value": "react/lib/HTMLDOMPropertyConfig"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 76,
              "end": 83,
              "decorators": [],
              "name": "require",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 269,
      "end": 507,
      "body": {
        "type": "BlockStatement",
        "start": 324,
        "end": 507,
        "body": [
          {
            "type": "IfStatement",
            "start": 328,
            "end": 411,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 392,
              "end": 411,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 398,
                  "end": 407,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 332,
              "end": 390,
              "argument": {
                "type": "CallExpression",
                "start": 333,
                "end": 390,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 381,
                    "end": 389,
                    "decorators": [],
                    "name": "propname",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 333,
                  "end": 380,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 333,
                    "end": 365,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 354,
                      "decorators": [],
                      "name": "HTMLDOMPropertyConfig",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 365,
                      "decorators": [],
                      "name": "Properties",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 380,
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false
                  }
                },
                "optional": false
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 415,
            "end": 505,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 419,
                "end": 504,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 426,
                  "decorators": [],
                  "name": "mapFrom",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 429,
                  "end": 504,
                  "operator": "||",
                  "left": {
                    "type": "MemberExpression",
                    "start": 429,
                    "end": 478,
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "start": 429,
                      "end": 468,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 450,
                        "decorators": [],
                        "name": "HTMLDOMPropertyConfig",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 468,
                        "decorators": [],
                        "name": "DOMAttributeNames",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 477,
                      "decorators": [],
                      "name": "propname",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 482,
                    "end": 504,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 482,
                      "end": 502,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 490,
                        "decorators": [],
                        "name": "propname",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 502,
                        "decorators": [],
                        "name": "toLowerCase",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 274,
        "end": 286,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 278,
            "end": 286,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 278,
              "end": 286,
              "decorators": [],
              "name": "propname",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "MemberExpression",
        "start": 290,
        "end": 322,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 290,
          "end": 311,
          "decorators": [],
          "name": "HTMLDOMPropertyConfig",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 312,
          "end": 322,
          "decorators": [],
          "name": "Properties",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 895,
      "end": 1187,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 932,
        "end": 1187,
        "body": [
          {
            "type": "IfStatement",
            "start": 936,
            "end": 977,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 953,
              "end": 977,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 959,
                  "end": 973,
                  "argument": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 972,
                    "decorators": [],
                    "name": "string",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 940,
              "end": 951,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 940,
                "end": 945,
                "decorators": [],
                "name": "times",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 950,
                "end": 951,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 980,
            "end": 1017,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 995,
              "end": 1017,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 997,
                  "end": 1015,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1003,
                    "end": 1014,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1012,
                      "decorators": [],
                      "name": "Error",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 984,
              "end": 993,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 984,
                "end": 989,
                "decorators": [],
                "name": "times",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 992,
                "end": 993,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1020,
            "end": 1038,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1024,
                "end": 1037,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1032,
                  "decorators": [],
                  "name": "repeated",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1035,
                  "end": 1037,
                  "raw": "''",
                  "value": ""
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "WhileStatement",
            "start": 1041,
            "end": 1166,
            "body": {
              "type": "BlockStatement",
              "start": 1055,
              "end": 1166,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1061,
                  "end": 1109,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1076,
                    "end": 1109,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1084,
                        "end": 1103,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1084,
                          "end": 1102,
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "start": 1084,
                            "end": 1092,
                            "decorators": [],
                            "name": "repeated",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1096,
                            "end": 1102,
                            "decorators": [],
                            "name": "string",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1065,
                    "end": 1074,
                    "operator": "&",
                    "left": {
                      "type": "Identifier",
                      "start": 1065,
                      "end": 1070,
                      "decorators": [],
                      "name": "times",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1073,
                      "end": 1074,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 1114,
                  "end": 1162,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1131,
                    "end": 1162,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1139,
                        "end": 1156,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1139,
                          "end": 1155,
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "start": 1139,
                            "end": 1145,
                            "decorators": [],
                            "name": "string",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1149,
                            "end": 1155,
                            "decorators": [],
                            "name": "string",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "AssignmentExpression",
                    "start": 1118,
                    "end": 1129,
                    "operator": ">>=",
                    "left": {
                      "type": "Identifier",
                      "start": 1118,
                      "end": 1123,
                      "decorators": [],
                      "name": "times",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1128,
                      "end": 1129,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1048,
              "end": 1053,
              "decorators": [],
              "name": "times",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1169,
            "end": 1185,
            "argument": {
              "type": "Identifier",
              "start": 1176,
              "end": 1184,
              "decorators": [],
              "name": "repeated",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 904,
        "end": 916,
        "decorators": [],
        "name": "repeatString",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 917,
          "end": 923,
          "decorators": [],
          "name": "string",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 925,
          "end": 930,
          "decorators": [],
          "name": "times",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1380,
      "end": 1471,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1416,
        "end": 1471,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1420,
            "end": 1469,
            "argument": {
              "type": "BinaryExpression",
              "start": 1427,
              "end": 1468,
              "operator": "===",
              "left": {
                "type": "CallExpression",
                "start": 1427,
                "end": 1457,
                "arguments": [
                  {
                    "type": "UnaryExpression",
                    "start": 1442,
                    "end": 1456,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1443,
                      "end": 1456,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1443,
                        "end": 1449,
                        "decorators": [],
                        "name": "needle",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1450,
                        "end": 1456,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    },
                    "operator": "-",
                    "prefix": true
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1427,
                  "end": 1441,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1427,
                    "end": 1435,
                    "decorators": [],
                    "name": "haystack",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1436,
                    "end": 1441,
                    "decorators": [],
                    "name": "slice",
                    "optional": false
                  }
                },
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1462,
                "end": 1468,
                "decorators": [],
                "name": "needle",
                "optional": false
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
        "start": 1389,
        "end": 1397,
        "decorators": [],
        "name": "endsWith",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1398,
          "end": 1406,
          "decorators": [],
          "name": "haystack",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1408,
          "end": 1414,
          "decorators": [],
          "name": "needle",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1726,
      "end": 1856,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1761,
        "end": 1856,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1765,
            "end": 1854,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1772,
              "end": 1853,
              "alternate": {
                "type": "Identifier",
                "start": 1845,
                "end": 1853,
                "decorators": [],
                "name": "haystack",
                "optional": false
              },
              "consequent": {
                "type": "CallExpression",
                "start": 1805,
                "end": 1838,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1820,
                    "end": 1821,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "UnaryExpression",
                    "start": 1823,
                    "end": 1837,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1824,
                      "end": 1837,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1824,
                        "end": 1830,
                        "decorators": [],
                        "name": "needle",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1831,
                        "end": 1837,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    },
                    "operator": "-",
                    "prefix": true
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1805,
                  "end": 1819,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1805,
                    "end": 1813,
                    "decorators": [],
                    "name": "haystack",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1814,
                    "end": 1819,
                    "decorators": [],
                    "name": "slice",
                    "optional": false
                  }
                },
                "optional": false
              },
              "test": {
                "type": "CallExpression",
                "start": 1772,
                "end": 1798,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1781,
                    "end": 1789,
                    "decorators": [],
                    "name": "haystack",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1791,
                    "end": 1797,
                    "decorators": [],
                    "name": "needle",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1772,
                  "end": 1780,
                  "decorators": [],
                  "name": "endsWith",
                  "optional": false
                },
                "optional": false
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
        "start": 1735,
        "end": 1742,
        "decorators": [],
        "name": "trimEnd",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1743,
          "end": 1751,
          "decorators": [],
          "name": "haystack",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1753,
          "end": 1759,
          "decorators": [],
          "name": "needle",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1911,
      "end": 2041,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1946,
        "end": 2041,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1950,
            "end": 2039,
            "argument": {
              "type": "CallExpression",
              "start": 1957,
              "end": 2038,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1972,
                  "end": 1979,
                  "raw": "/-(.)/g",
                  "regex": {
                    "flags": "g",
                    "pattern": "-(.)"
                  },
                  "value": {}
                },
                {
                  "type": "FunctionExpression",
                  "start": 1981,
                  "end": 2037,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2002,
                    "end": 2037,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2008,
                        "end": 2033,
                        "argument": {
                          "type": "CallExpression",
                          "start": 2015,
                          "end": 2032,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2015,
                            "end": 2030,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2015,
                              "end": 2018,
                              "decorators": [],
                              "name": "chr",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2019,
                              "end": 2030,
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1990,
                      "end": 1995,
                      "decorators": [],
                      "name": "match",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1997,
                      "end": 2000,
                      "decorators": [],
                      "name": "chr",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1957,
                "end": 1971,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1957,
                  "end": 1963,
                  "decorators": [],
                  "name": "string",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1964,
                  "end": 1971,
                  "decorators": [],
                  "name": "replace",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1920,
        "end": 1937,
        "decorators": [],
        "name": "hyphenToCamelCase",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1938,
          "end": 1944,
          "decorators": [],
          "name": "string",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2122,
      "end": 2183,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2147,
        "end": 2183,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2152,
            "end": 2181,
            "argument": {
              "type": "UnaryExpression",
              "start": 2159,
              "end": 2180,
              "argument": {
                "type": "CallExpression",
                "start": 2160,
                "end": 2180,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2173,
                    "end": 2179,
                    "decorators": [],
                    "name": "string",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2160,
                  "end": 2172,
                  "computed": false,
                  "object": {
                    "type": "Literal",
                    "start": 2160,
                    "end": 2167,
                    "raw": "/[^\\s]/",
                    "regex": {
                      "flags": "",
                      "pattern": "[^\\s]"
                    },
                    "value": {}
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2168,
                    "end": 2172,
                    "decorators": [],
                    "name": "test",
                    "optional": false
                  }
                },
                "optional": false
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2131,
        "end": 2138,
        "decorators": [],
        "name": "isEmpty",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2139,
          "end": 2145,
          "decorators": [],
          "name": "string",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2359,
      "end": 2434,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2399,
        "end": 2434,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2403,
            "end": 2432,
            "argument": {
              "type": "CallExpression",
              "start": 2410,
              "end": 2431,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2425,
                  "end": 2430,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2410,
                "end": 2424,
                "computed": false,
                "object": {
                  "type": "Literal",
                  "start": 2410,
                  "end": 2419,
                  "raw": "/^\\d+px$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^\\d+px$"
                  },
                  "value": {}
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2420,
                  "end": 2424,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2368,
        "end": 2391,
        "decorators": [],
        "name": "isConvertiblePixelValue",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2392,
          "end": 2397,
          "decorators": [],
          "name": "value",
          "optional": false
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2436,
      "end": 3631,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2443,
        "end": 3631,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 2459,
          "end": 3631,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 2465,
              "end": 2488,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 2473,
                "end": 2479,
                "decorators": [],
                "name": "output",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2479,
                "end": 2487,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2481,
                  "end": 2487
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2493,
              "end": 2515,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 2501,
                "end": 2506,
                "decorators": [],
                "name": "level",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2506,
                "end": 2514,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2508,
                  "end": 2514
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2520,
              "end": 2547,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 2528,
                "end": 2537,
                "decorators": [],
                "name": "_inPreTag",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2537,
                "end": 2546,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 2539,
                  "end": 2546
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2648,
              "end": 3626,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 2648,
                "end": 2658,
                "decorators": [],
                "name": "_visitText",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 2661,
                "end": 3626,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2671,
                  "end": 3626,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 2677,
                      "end": 2750,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2681,
                          "end": 2749,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 2681,
                            "end": 2690,
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "start": 2693,
                            "end": 2749,
                            "operator": "&&",
                            "left": {
                              "type": "MemberExpression",
                              "start": 2693,
                              "end": 2708,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 2693,
                                "end": 2697,
                                "decorators": [],
                                "name": "node",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 2698,
                                "end": 2708,
                                "decorators": [],
                                "name": "parentNode",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 2712,
                              "end": 2749,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2712,
                                "end": 2747,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2712,
                                  "end": 2735,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 2712,
                                    "end": 2727,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 2712,
                                      "end": 2716,
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2717,
                                      "end": 2727,
                                      "decorators": [],
                                      "name": "parentNode",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2728,
                                    "end": 2735,
                                    "decorators": [],
                                    "name": "tagName",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2736,
                                  "end": 2747,
                                  "decorators": [],
                                  "name": "toLowerCase",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    {
                      "type": "IfStatement",
                      "start": 2755,
                      "end": 3013,
                      "alternate": null,
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2810,
                        "end": 3013,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 3000,
                            "end": 3007,
                            "argument": null
                          }
                        ]
                      },
                      "test": {
                        "type": "LogicalExpression",
                        "start": 2759,
                        "end": 2808,
                        "operator": "||",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2759,
                          "end": 2783,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 2759,
                            "end": 2768,
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2773,
                            "end": 2783,
                            "raw": "'textarea'",
                            "value": "textarea"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 2787,
                          "end": 2808,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 2787,
                            "end": 2796,
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2801,
                            "end": 2808,
                            "raw": "'style'",
                            "value": "style"
                          }
                        }
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 3019,
                      "end": 3032,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3023,
                          "end": 3032,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 3023,
                            "end": 3027,
                            "decorators": [],
                            "name": "text",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 3030,
                            "end": 3032,
                            "raw": "''",
                            "value": ""
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    {
                      "type": "IfStatement",
                      "start": 3038,
                      "end": 3597,
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 3478,
                        "end": 3597,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 3553,
                            "end": 3591,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3582,
                              "end": 3591,
                              "body": []
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 3557,
                              "end": 3580,
                              "operator": ">",
                              "left": {
                                "type": "CallExpression",
                                "start": 3557,
                                "end": 3575,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 3570,
                                    "end": 3574,
                                    "raw": "'\\n'",
                                    "value": "\n"
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3557,
                                  "end": 3569,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3557,
                                    "end": 3561,
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3562,
                                    "end": 3569,
                                    "decorators": [],
                                    "name": "indexOf",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "start": 3578,
                                "end": 3580,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3579,
                                  "end": 3580,
                                  "raw": "1",
                                  "value": 1
                                },
                                "operator": "-",
                                "prefix": true
                              }
                            }
                          }
                        ]
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 3058,
                        "end": 3472,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3294,
                            "end": 3466,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3294,
                              "end": 3465,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 3294,
                                "end": 3298,
                                "decorators": [],
                                "name": "text",
                                "optional": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 3301,
                                "end": 3465,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 3351,
                                    "end": 3373,
                                    "raw": "/( {2,}|\\n|\\t|\\{|\\})/g",
                                    "regex": {
                                      "flags": "g",
                                      "pattern": "( {2,}|\\n|\\t|\\{|\\})"
                                    },
                                    "value": {}
                                  },
                                  {
                                    "type": "FunctionExpression",
                                    "start": 3375,
                                    "end": 3464,
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 3396,
                                      "end": 3464,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 3408,
                                          "end": 3454,
                                          "argument": {
                                            "type": "BinaryExpression",
                                            "start": 3415,
                                            "end": 3453,
                                            "operator": "+",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "start": 3415,
                                              "end": 3447,
                                              "operator": "+",
                                              "left": {
                                                "type": "Literal",
                                                "start": 3415,
                                                "end": 3418,
                                                "raw": "'{'",
                                                "value": "{"
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "start": 3421,
                                                "end": 3447,
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "start": 3436,
                                                    "end": 3446,
                                                    "decorators": [],
                                                    "name": "whitespace",
                                                    "optional": false
                                                  }
                                                ],
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 3421,
                                                  "end": 3435,
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 3421,
                                                    "end": 3425,
                                                    "decorators": [],
                                                    "name": "JSON",
                                                    "optional": false
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 3426,
                                                    "end": 3435,
                                                    "decorators": [],
                                                    "name": "stringify",
                                                    "optional": false
                                                  }
                                                },
                                                "optional": false
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "start": 3450,
                                              "end": 3453,
                                              "raw": "'}'",
                                              "value": "}"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "declare": false,
                                    "expression": false,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 3384,
                                        "end": 3394,
                                        "decorators": [],
                                        "name": "whitespace",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3301,
                                  "end": 3350,
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 3301,
                                    "end": 3333,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 3323,
                                        "end": 3328,
                                        "raw": "/\\r/g",
                                        "regex": {
                                          "flags": "g",
                                          "pattern": "\\r"
                                        },
                                        "value": {}
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3330,
                                        "end": 3332,
                                        "raw": "''",
                                        "value": ""
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3301,
                                      "end": 3322,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3301,
                                        "end": 3305,
                                        "decorators": [],
                                        "name": "text",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3315,
                                        "end": 3322,
                                        "decorators": [],
                                        "name": "replace",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3343,
                                    "end": 3350,
                                    "decorators": [],
                                    "name": "replace",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "MemberExpression",
                        "start": 3042,
                        "end": 3056,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3042,
                          "end": 3046
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3047,
                          "end": 3056,
                          "decorators": [],
                          "name": "_inPreTag",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 3602,
                      "end": 3622,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 3602,
                        "end": 3621,
                        "operator": "+=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 3602,
                          "end": 3613,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3602,
                            "end": 3606
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3607,
                            "end": 3613,
                            "decorators": [],
                            "name": "output",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3617,
                          "end": 3621,
                          "decorators": [],
                          "name": "text",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2662,
                    "end": 2666,
                    "decorators": [],
                    "name": "node",
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2449,
          "end": 2458,
          "decorators": [],
          "name": "HTMLtoJSX",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 3631,
      "end": 3632
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3678,
      "end": 3844,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 3685,
        "end": 3844,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 3703,
          "end": 3844,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 3707,
              "end": 3719,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 3707,
                "end": 3713,
                "decorators": [],
                "name": "styles",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ObjectExpression",
                "start": 3716,
                "end": 3718,
                "properties": []
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 3722,
              "end": 3842,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 3722,
                "end": 3733,
                "decorators": [],
                "name": "toJSXString",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 3736,
                "end": 3842,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3742,
                  "end": 3842,
                  "body": [
                    {
                      "type": "ForInStatement",
                      "start": 3748,
                      "end": 3838,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3777,
                        "end": 3838,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 3785,
                            "end": 3832,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3823,
                              "end": 3832,
                              "body": []
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 3789,
                              "end": 3821,
                              "argument": {
                                "type": "CallExpression",
                                "start": 3790,
                                "end": 3821,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3817,
                                    "end": 3820,
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3790,
                                  "end": 3816,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 3790,
                                    "end": 3801,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3790,
                                      "end": 3794
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3795,
                                      "end": 3801,
                                      "decorators": [],
                                      "name": "styles",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3802,
                                    "end": 3816,
                                    "decorators": [],
                                    "name": "hasOwnProperty",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              },
                              "operator": "!",
                              "prefix": true
                            }
                          }
                        ]
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 3753,
                        "end": 3760,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 3757,
                            "end": 3760,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 3757,
                              "end": 3760,
                              "decorators": [],
                              "name": "key",
                              "optional": false
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 3764,
                        "end": 3775,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3764,
                          "end": 3768
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3769,
                          "end": 3775,
                          "decorators": [],
                          "name": "styles",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 3691,
          "end": 3702,
          "decorators": [],
          "name": "StyleParser",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
