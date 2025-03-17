__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 45,
            "name": "require",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 45,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 73,
            "name": "HTMLDOMPropertyConfig",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 76,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 76,
              "end": 83,
              "name": "require",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 84,
                "end": 117,
                "value": "react/lib/HTMLDOMPropertyConfig",
                "raw": "'react/lib/HTMLDOMPropertyConfig'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 269,
      "end": 507,
      "left": {
        "type": "VariableDeclaration",
        "start": 274,
        "end": 286,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 278,
            "end": 286,
            "id": {
              "type": "Identifier",
              "start": 278,
              "end": 286,
              "name": "propname",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "MemberExpression",
        "start": 290,
        "end": 322,
        "object": {
          "type": "Identifier",
          "start": 290,
          "end": 311,
          "name": "HTMLDOMPropertyConfig",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 312,
          "end": 322,
          "name": "Properties",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 324,
        "end": 507,
        "body": [
          {
            "type": "IfStatement",
            "start": 328,
            "end": 411,
            "test": {
              "type": "UnaryExpression",
              "start": 332,
              "end": 390,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "CallExpression",
                "start": 333,
                "end": 390,
                "callee": {
                  "type": "MemberExpression",
                  "start": 333,
                  "end": 380,
                  "object": {
                    "type": "MemberExpression",
                    "start": 333,
                    "end": 365,
                    "object": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 354,
                      "name": "HTMLDOMPropertyConfig",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 365,
                      "name": "Properties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 380,
                    "name": "hasOwnProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 381,
                    "end": 389,
                    "name": "propname",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
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
            "alternate": null
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
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 426,
                  "name": "mapFrom",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 429,
                  "end": 504,
                  "left": {
                    "type": "MemberExpression",
                    "start": 429,
                    "end": 478,
                    "object": {
                      "type": "MemberExpression",
                      "start": 429,
                      "end": 468,
                      "object": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 450,
                        "name": "HTMLDOMPropertyConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 468,
                        "name": "DOMAttributeNames",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 477,
                      "name": "propname",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "CallExpression",
                    "start": 482,
                    "end": 504,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 482,
                      "end": 502,
                      "object": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 490,
                        "name": "propname",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 502,
                        "name": "toLowerCase",
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
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 895,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 904,
        "end": 916,
        "name": "repeatString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 917,
          "end": 923,
          "name": "string",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 925,
          "end": 930,
          "name": "times",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 932,
        "end": 1187,
        "body": [
          {
            "type": "IfStatement",
            "start": 936,
            "end": 977,
            "test": {
              "type": "BinaryExpression",
              "start": 940,
              "end": 951,
              "left": {
                "type": "Identifier",
                "start": 940,
                "end": 945,
                "name": "times",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 950,
                "end": 951,
                "value": 1,
                "raw": "1"
              }
            },
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
                    "name": "string",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 980,
            "end": 1017,
            "test": {
              "type": "BinaryExpression",
              "start": 984,
              "end": 993,
              "left": {
                "type": "Identifier",
                "start": 984,
                "end": 989,
                "name": "times",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 992,
                "end": 993,
                "value": 0,
                "raw": "0"
              }
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1012,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": null
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
                "id": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1032,
                  "name": "repeated",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1035,
                  "end": 1037,
                  "value": "",
                  "raw": "''"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 1041,
            "end": 1166,
            "test": {
              "type": "Identifier",
              "start": 1048,
              "end": 1053,
              "name": "times",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 1055,
              "end": 1166,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1061,
                  "end": 1109,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1065,
                    "end": 1074,
                    "left": {
                      "type": "Identifier",
                      "start": 1065,
                      "end": 1070,
                      "name": "times",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "&",
                    "right": {
                      "type": "Literal",
                      "start": 1073,
                      "end": 1074,
                      "value": 1,
                      "raw": "1"
                    }
                  },
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
                            "name": "repeated",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1096,
                            "end": 1102,
                            "name": "string",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1114,
                  "end": 1162,
                  "test": {
                    "type": "AssignmentExpression",
                    "start": 1118,
                    "end": 1129,
                    "operator": ">>=",
                    "left": {
                      "type": "Identifier",
                      "start": 1118,
                      "end": 1123,
                      "name": "times",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1128,
                      "end": 1129,
                      "value": 1,
                      "raw": "1"
                    }
                  },
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
                            "name": "string",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1149,
                            "end": 1155,
                            "name": "string",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
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
              "name": "repeated",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1380,
      "end": 1471,
      "id": {
        "type": "Identifier",
        "start": 1389,
        "end": 1397,
        "name": "endsWith",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1398,
          "end": 1406,
          "name": "haystack",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1408,
          "end": 1414,
          "name": "needle",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "CallExpression",
                "start": 1427,
                "end": 1457,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1427,
                  "end": 1441,
                  "object": {
                    "type": "Identifier",
                    "start": 1427,
                    "end": 1435,
                    "name": "haystack",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1436,
                    "end": 1441,
                    "name": "slice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "UnaryExpression",
                    "start": 1442,
                    "end": 1456,
                    "operator": "-",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1443,
                      "end": 1456,
                      "object": {
                        "type": "Identifier",
                        "start": 1443,
                        "end": 1449,
                        "name": "needle",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1450,
                        "end": 1456,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1462,
                "end": 1468,
                "name": "needle",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1726,
      "end": 1856,
      "id": {
        "type": "Identifier",
        "start": 1735,
        "end": 1742,
        "name": "trimEnd",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1743,
          "end": 1751,
          "name": "haystack",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1753,
          "end": 1759,
          "name": "needle",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "CallExpression",
                "start": 1772,
                "end": 1798,
                "callee": {
                  "type": "Identifier",
                  "start": 1772,
                  "end": 1780,
                  "name": "endsWith",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1781,
                    "end": 1789,
                    "name": "haystack",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1791,
                    "end": 1797,
                    "name": "needle",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 1805,
                "end": 1838,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1805,
                  "end": 1819,
                  "object": {
                    "type": "Identifier",
                    "start": 1805,
                    "end": 1813,
                    "name": "haystack",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1814,
                    "end": 1819,
                    "name": "slice",
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
                    "start": 1820,
                    "end": 1821,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "UnaryExpression",
                    "start": 1823,
                    "end": 1837,
                    "operator": "-",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1824,
                      "end": 1837,
                      "object": {
                        "type": "Identifier",
                        "start": 1824,
                        "end": 1830,
                        "name": "needle",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1831,
                        "end": 1837,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "alternate": {
                "type": "Identifier",
                "start": 1845,
                "end": 1853,
                "name": "haystack",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1911,
      "end": 2041,
      "id": {
        "type": "Identifier",
        "start": 1920,
        "end": 1937,
        "name": "hyphenToCamelCase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1938,
          "end": 1944,
          "name": "string",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 1957,
                "end": 1971,
                "object": {
                  "type": "Identifier",
                  "start": 1957,
                  "end": 1963,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1964,
                  "end": 1971,
                  "name": "replace",
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
                  "start": 1972,
                  "end": 1979,
                  "value": null,
                  "raw": "/-(.)/g",
                  "regex": {
                    "flags": "g",
                    "pattern": "-(.)"
                  }
                },
                {
                  "type": "FunctionExpression",
                  "start": 1981,
                  "end": 2037,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1990,
                      "end": 1995,
                      "name": "match",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1997,
                      "end": 2000,
                      "name": "chr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2015,
                            "end": 2030,
                            "object": {
                              "type": "Identifier",
                              "start": 2015,
                              "end": 2018,
                              "name": "chr",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2019,
                              "end": 2030,
                              "name": "toUpperCase",
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
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2122,
      "end": 2183,
      "id": {
        "type": "Identifier",
        "start": 2131,
        "end": 2138,
        "name": "isEmpty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2139,
          "end": 2145,
          "name": "string",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "CallExpression",
                "start": 2160,
                "end": 2180,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2160,
                  "end": 2172,
                  "object": {
                    "type": "Literal",
                    "start": 2160,
                    "end": 2167,
                    "value": null,
                    "raw": "/[^\\s]/",
                    "regex": {
                      "flags": "",
                      "pattern": "[^\\s]"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2168,
                    "end": 2172,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2173,
                    "end": 2179,
                    "name": "string",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2359,
      "end": 2434,
      "id": {
        "type": "Identifier",
        "start": 2368,
        "end": 2391,
        "name": "isConvertiblePixelValue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2392,
          "end": 2397,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 2410,
                "end": 2424,
                "object": {
                  "type": "Literal",
                  "start": 2410,
                  "end": 2419,
                  "value": null,
                  "raw": "/^\\d+px$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^\\d+px$"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2420,
                  "end": 2424,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2425,
                  "end": 2430,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2436,
      "end": 3631,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2443,
        "end": 3631,
        "id": {
          "type": "Identifier",
          "start": 2449,
          "end": 2458,
          "name": "HTMLtoJSX",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2459,
          "end": 3631,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 2465,
              "end": 2488,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2473,
                "end": 2479,
                "name": "output",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 2493,
              "end": 2515,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2501,
                "end": 2506,
                "name": "level",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 2520,
              "end": 2547,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2528,
                "end": 2537,
                "name": "_inPreTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 2648,
              "end": 3626,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2648,
                "end": 2658,
                "name": "_visitText",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 2661,
                "end": 3626,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2662,
                    "end": 2666,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "id": {
                            "type": "Identifier",
                            "start": 2681,
                            "end": 2690,
                            "name": "parentTag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "start": 2693,
                            "end": 2749,
                            "left": {
                              "type": "MemberExpression",
                              "start": 2693,
                              "end": 2708,
                              "object": {
                                "type": "Identifier",
                                "start": 2693,
                                "end": 2697,
                                "name": "node",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2698,
                                "end": 2708,
                                "name": "parentNode",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "start": 2712,
                              "end": 2749,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2712,
                                "end": 2747,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2712,
                                  "end": 2735,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 2712,
                                    "end": 2727,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 2712,
                                      "end": 2716,
                                      "name": "node",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2717,
                                      "end": 2727,
                                      "name": "parentNode",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2728,
                                    "end": 2735,
                                    "name": "tagName",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2736,
                                  "end": 2747,
                                  "name": "toLowerCase",
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
                            }
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    {
                      "type": "IfStatement",
                      "start": 2755,
                      "end": 3013,
                      "test": {
                        "type": "LogicalExpression",
                        "start": 2759,
                        "end": 2808,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2759,
                          "end": 2783,
                          "left": {
                            "type": "Identifier",
                            "start": 2759,
                            "end": 2768,
                            "name": "parentTag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 2773,
                            "end": 2783,
                            "value": "textarea",
                            "raw": "'textarea'"
                          }
                        },
                        "operator": "||",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 2787,
                          "end": 2808,
                          "left": {
                            "type": "Identifier",
                            "start": 2787,
                            "end": 2796,
                            "name": "parentTag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 2801,
                            "end": 2808,
                            "value": "style",
                            "raw": "'style'"
                          }
                        }
                      },
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
                      "alternate": null
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
                          "id": {
                            "type": "Identifier",
                            "start": 3023,
                            "end": 3027,
                            "name": "text",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 3030,
                            "end": 3032,
                            "value": "",
                            "raw": "''"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    {
                      "type": "IfStatement",
                      "start": 3038,
                      "end": 3597,
                      "test": {
                        "type": "MemberExpression",
                        "start": 3042,
                        "end": 3056,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3042,
                          "end": 3046
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3047,
                          "end": 3056,
                          "name": "_inPreTag",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                                "name": "text",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 3301,
                                "end": 3465,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3301,
                                  "end": 3350,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 3301,
                                    "end": 3333,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3301,
                                      "end": 3322,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3301,
                                        "end": 3305,
                                        "name": "text",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3315,
                                        "end": 3322,
                                        "name": "replace",
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
                                        "start": 3323,
                                        "end": 3328,
                                        "value": null,
                                        "raw": "/\\r/g",
                                        "regex": {
                                          "flags": "g",
                                          "pattern": "\\r"
                                        }
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3330,
                                        "end": 3332,
                                        "value": "",
                                        "raw": "''"
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3343,
                                    "end": 3350,
                                    "name": "replace",
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
                                    "start": 3351,
                                    "end": 3373,
                                    "value": null,
                                    "raw": "/( {2,}|\\n|\\t|\\{|\\})/g",
                                    "regex": {
                                      "flags": "g",
                                      "pattern": "( {2,}|\\n|\\t|\\{|\\})"
                                    }
                                  },
                                  {
                                    "type": "FunctionExpression",
                                    "start": 3375,
                                    "end": 3464,
                                    "id": null,
                                    "expression": false,
                                    "generator": false,
                                    "async": false,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 3384,
                                        "end": 3394,
                                        "name": "whitespace",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
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
                                            "left": {
                                              "type": "BinaryExpression",
                                              "start": 3415,
                                              "end": 3447,
                                              "left": {
                                                "type": "Literal",
                                                "start": 3415,
                                                "end": 3418,
                                                "value": "{",
                                                "raw": "'{'"
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "CallExpression",
                                                "start": 3421,
                                                "end": 3447,
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 3421,
                                                  "end": 3435,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 3421,
                                                    "end": 3425,
                                                    "name": "JSON",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 3426,
                                                    "end": 3435,
                                                    "name": "stringify",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "computed": false,
                                                  "optional": false
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "start": 3436,
                                                    "end": 3446,
                                                    "name": "whitespace",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  }
                                                ],
                                                "optional": false,
                                                "typeArguments": null
                                              }
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 3450,
                                              "end": 3453,
                                              "value": "}",
                                              "raw": "'}'"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "declare": false,
                                    "typeParameters": null,
                                    "returnType": null
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 3478,
                        "end": 3597,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 3553,
                            "end": 3591,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 3557,
                              "end": 3580,
                              "left": {
                                "type": "CallExpression",
                                "start": 3557,
                                "end": 3575,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3557,
                                  "end": 3569,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3557,
                                    "end": 3561,
                                    "name": "text",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3562,
                                    "end": 3569,
                                    "name": "indexOf",
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
                                    "start": 3570,
                                    "end": 3574,
                                    "value": "\n",
                                    "raw": "'\\n'"
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "operator": ">",
                              "right": {
                                "type": "UnaryExpression",
                                "start": 3578,
                                "end": 3580,
                                "operator": "-",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3579,
                                  "end": 3580,
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3582,
                              "end": 3591,
                              "body": []
                            },
                            "alternate": null
                          }
                        ]
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 3602,
                            "end": 3606
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3607,
                            "end": 3613,
                            "name": "output",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3617,
                          "end": 3621,
                          "name": "text",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 3685,
        "end": 3844,
        "id": {
          "type": "Identifier",
          "start": 3691,
          "end": 3702,
          "name": "StyleParser",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 3703,
          "end": 3844,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 3707,
              "end": 3719,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3707,
                "end": 3713,
                "name": "styles",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 3716,
                "end": 3718,
                "properties": []
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 3722,
              "end": 3842,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3722,
                "end": 3733,
                "name": "toJSXString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 3736,
                "end": 3842,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3742,
                  "end": 3842,
                  "body": [
                    {
                      "type": "ForInStatement",
                      "start": 3748,
                      "end": 3838,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 3753,
                        "end": 3760,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 3757,
                            "end": 3760,
                            "id": {
                              "type": "Identifier",
                              "start": 3757,
                              "end": 3760,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 3764,
                        "end": 3775,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3764,
                          "end": 3768
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3769,
                          "end": 3775,
                          "name": "styles",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 3777,
                        "end": 3838,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 3785,
                            "end": 3832,
                            "test": {
                              "type": "UnaryExpression",
                              "start": 3789,
                              "end": 3821,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "CallExpression",
                                "start": 3790,
                                "end": 3821,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3790,
                                  "end": 3816,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 3790,
                                    "end": 3801,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3790,
                                      "end": 3794
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3795,
                                      "end": 3801,
                                      "name": "styles",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3802,
                                    "end": 3816,
                                    "name": "hasOwnProperty",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3817,
                                    "end": 3820,
                                    "name": "key",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3823,
                              "end": 3832,
                              "body": []
                            },
                            "alternate": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
