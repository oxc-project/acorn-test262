__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              },
              "start": 41,
              "end": 45
            },
            "start": 34,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 45
        }
      ],
      "declare": true,
      "start": 22,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "HTMLDOMPropertyConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 73
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 83
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "react/lib/HTMLDOMPropertyConfig",
                "raw": "'react/lib/HTMLDOMPropertyConfig'",
                "start": 84,
                "end": 117
              }
            ],
            "optional": false,
            "start": 76,
            "end": 118
          },
          "definite": false,
          "start": 52,
          "end": 118
        }
      ],
      "declare": false,
      "start": 48,
      "end": 119
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "propname",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 286
            },
            "init": null,
            "definite": false,
            "start": 278,
            "end": 286
          }
        ],
        "declare": false,
        "start": 274,
        "end": 286
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLDOMPropertyConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 311
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Properties",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 322
        },
        "optional": false,
        "computed": false,
        "start": 290,
        "end": 322
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDOMPropertyConfig",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 354
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Properties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 355,
                      "end": 365
                    },
                    "optional": false,
                    "computed": false,
                    "start": 333,
                    "end": 365
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 380
                  },
                  "optional": false,
                  "computed": false,
                  "start": 333,
                  "end": 380
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propname",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 389
                  }
                ],
                "optional": false,
                "start": 333,
                "end": 390
              },
              "prefix": true,
              "start": 332,
              "end": 390
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 398,
                  "end": 407
                }
              ],
              "start": 392,
              "end": 411
            },
            "alternate": null,
            "start": 328,
            "end": 411
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapFrom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 426
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLDOMPropertyConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 450
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DOMAttributeNames",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 451,
                        "end": 468
                      },
                      "optional": false,
                      "computed": false,
                      "start": 429,
                      "end": 468
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propname",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 477
                    },
                    "optional": false,
                    "computed": true,
                    "start": 429,
                    "end": 478
                  },
                  "operator": "||",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "propname",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 490
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toLowerCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 502
                      },
                      "optional": false,
                      "computed": false,
                      "start": 482,
                      "end": 502
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 482,
                    "end": 504
                  },
                  "start": 429,
                  "end": 504
                },
                "definite": false,
                "start": 419,
                "end": 504
              }
            ],
            "declare": false,
            "start": 415,
            "end": 505
          }
        ],
        "start": 324,
        "end": 507
      },
      "start": 269,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "repeatString",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 916
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "string",
          "optional": false,
          "typeAnnotation": null,
          "start": 917,
          "end": 923
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "times",
          "optional": false,
          "typeAnnotation": null,
          "start": 925,
          "end": 930
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "times",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 945
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 950,
                "end": 951
              },
              "start": 940,
              "end": 951
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 972
                  },
                  "start": 959,
                  "end": 973
                }
              ],
              "start": 953,
              "end": 977
            },
            "alternate": null,
            "start": 936,
            "end": 977
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "times",
                "optional": false,
                "typeAnnotation": null,
                "start": 984,
                "end": 989
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 992,
                "end": 993
              },
              "start": 984,
              "end": 993
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1012
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1003,
                    "end": 1014
                  },
                  "start": 997,
                  "end": 1015
                }
              ],
              "start": 995,
              "end": 1017
            },
            "alternate": null,
            "start": 980,
            "end": 1017
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "repeated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1032
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1035,
                  "end": 1037
                },
                "definite": false,
                "start": 1024,
                "end": 1037
              }
            ],
            "declare": false,
            "start": 1020,
            "end": 1038
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "times",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1053
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "times",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1065,
                      "end": 1070
                    },
                    "operator": "&",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1073,
                      "end": 1074
                    },
                    "start": 1065,
                    "end": 1074
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "repeated",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1084,
                            "end": 1092
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1096,
                            "end": 1102
                          },
                          "start": 1084,
                          "end": 1102
                        },
                        "directive": null,
                        "start": 1084,
                        "end": 1103
                      }
                    ],
                    "start": 1076,
                    "end": 1109
                  },
                  "alternate": null,
                  "start": 1061,
                  "end": 1109
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "AssignmentExpression",
                    "operator": ">>=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "times",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1118,
                      "end": 1123
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1128,
                      "end": 1129
                    },
                    "start": 1118,
                    "end": 1129
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1139,
                            "end": 1145
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1149,
                            "end": 1155
                          },
                          "start": 1139,
                          "end": 1155
                        },
                        "directive": null,
                        "start": 1139,
                        "end": 1156
                      }
                    ],
                    "start": 1131,
                    "end": 1162
                  },
                  "alternate": null,
                  "start": 1114,
                  "end": 1162
                }
              ],
              "start": 1055,
              "end": 1166
            },
            "start": 1041,
            "end": 1166
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "repeated",
              "optional": false,
              "typeAnnotation": null,
              "start": 1176,
              "end": 1184
            },
            "start": 1169,
            "end": 1185
          }
        ],
        "start": 932,
        "end": 1187
      },
      "expression": false,
      "start": 895,
      "end": 1187
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "endsWith",
        "optional": false,
        "typeAnnotation": null,
        "start": 1389,
        "end": 1397
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haystack",
          "optional": false,
          "typeAnnotation": null,
          "start": 1398,
          "end": 1406
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "needle",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1414
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "haystack",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1427,
                    "end": 1435
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "slice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1436,
                    "end": 1441
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1427,
                  "end": 1441
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "needle",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1443,
                        "end": 1449
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1450,
                        "end": 1456
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1443,
                      "end": 1456
                    },
                    "prefix": true,
                    "start": 1442,
                    "end": 1456
                  }
                ],
                "optional": false,
                "start": 1427,
                "end": 1457
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "needle",
                "optional": false,
                "typeAnnotation": null,
                "start": 1462,
                "end": 1468
              },
              "start": 1427,
              "end": 1468
            },
            "start": 1420,
            "end": 1469
          }
        ],
        "start": 1416,
        "end": 1471
      },
      "expression": false,
      "start": 1380,
      "end": 1471
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "trimEnd",
        "optional": false,
        "typeAnnotation": null,
        "start": 1735,
        "end": 1742
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haystack",
          "optional": false,
          "typeAnnotation": null,
          "start": 1743,
          "end": 1751
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "needle",
          "optional": false,
          "typeAnnotation": null,
          "start": 1753,
          "end": 1759
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "endsWith",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1772,
                  "end": 1780
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "haystack",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1781,
                    "end": 1789
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "needle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1791,
                    "end": 1797
                  }
                ],
                "optional": false,
                "start": 1772,
                "end": 1798
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "haystack",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1805,
                    "end": 1813
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "slice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1814,
                    "end": 1819
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1805,
                  "end": 1819
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1820,
                    "end": 1821
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "needle",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1824,
                        "end": 1830
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1831,
                        "end": 1837
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1824,
                      "end": 1837
                    },
                    "prefix": true,
                    "start": 1823,
                    "end": 1837
                  }
                ],
                "optional": false,
                "start": 1805,
                "end": 1838
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "haystack",
                "optional": false,
                "typeAnnotation": null,
                "start": 1845,
                "end": 1853
              },
              "start": 1772,
              "end": 1853
            },
            "start": 1765,
            "end": 1854
          }
        ],
        "start": 1761,
        "end": 1856
      },
      "expression": false,
      "start": 1726,
      "end": 1856
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hyphenToCamelCase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1920,
        "end": 1937
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "string",
          "optional": false,
          "typeAnnotation": null,
          "start": 1938,
          "end": 1944
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1957,
                  "end": 1963
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "replace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1964,
                  "end": 1971
                },
                "optional": false,
                "computed": false,
                "start": 1957,
                "end": 1971
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "/-(.)/g",
                  "regex": {
                    "pattern": "-(.)",
                    "flags": "g"
                  },
                  "start": 1972,
                  "end": 1979
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1990,
                      "end": 1995
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1997,
                      "end": 2000
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "chr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2015,
                              "end": 2018
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2019,
                              "end": 2030
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2015,
                            "end": 2030
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2015,
                          "end": 2032
                        },
                        "start": 2008,
                        "end": 2033
                      }
                    ],
                    "start": 2002,
                    "end": 2037
                  },
                  "expression": false,
                  "start": 1981,
                  "end": 2037
                }
              ],
              "optional": false,
              "start": 1957,
              "end": 2038
            },
            "start": 1950,
            "end": 2039
          }
        ],
        "start": 1946,
        "end": 2041
      },
      "expression": false,
      "start": 1911,
      "end": 2041
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 2131,
        "end": 2138
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "string",
          "optional": false,
          "typeAnnotation": null,
          "start": 2139,
          "end": 2145
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/[^\\s]/",
                    "regex": {
                      "pattern": "[^\\s]",
                      "flags": ""
                    },
                    "start": 2160,
                    "end": 2167
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2168,
                    "end": 2172
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2160,
                  "end": 2172
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2173,
                    "end": 2179
                  }
                ],
                "optional": false,
                "start": 2160,
                "end": 2180
              },
              "prefix": true,
              "start": 2159,
              "end": 2180
            },
            "start": 2152,
            "end": 2181
          }
        ],
        "start": 2147,
        "end": 2183
      },
      "expression": false,
      "start": 2122,
      "end": 2183
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isConvertiblePixelValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 2368,
        "end": 2391
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 2392,
          "end": 2397
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^\\d+px$/",
                  "regex": {
                    "pattern": "^\\d+px$",
                    "flags": ""
                  },
                  "start": 2410,
                  "end": 2419
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2420,
                  "end": 2424
                },
                "optional": false,
                "computed": false,
                "start": 2410,
                "end": 2424
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2425,
                  "end": 2430
                }
              ],
              "optional": false,
              "start": 2410,
              "end": 2431
            },
            "start": 2403,
            "end": 2432
          }
        ],
        "start": 2399,
        "end": 2434
      },
      "expression": false,
      "start": 2359,
      "end": 2434
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLtoJSX",
          "optional": false,
          "typeAnnotation": null,
          "start": 2449,
          "end": 2458
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "output",
                "optional": false,
                "typeAnnotation": null,
                "start": 2473,
                "end": 2479
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2481,
                  "end": 2487
                },
                "start": 2479,
                "end": 2487
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2465,
              "end": 2488
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "level",
                "optional": false,
                "typeAnnotation": null,
                "start": 2501,
                "end": 2506
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2508,
                  "end": 2514
                },
                "start": 2506,
                "end": 2514
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2493,
              "end": 2515
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_inPreTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 2528,
                "end": 2537
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 2539,
                  "end": 2546
                },
                "start": 2537,
                "end": 2546
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2520,
              "end": 2547
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_visitText",
                "optional": false,
                "typeAnnotation": null,
                "start": 2648,
                "end": 2658
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2662,
                    "end": 2666
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2681,
                            "end": 2690
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "node",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2693,
                                "end": 2697
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "parentNode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2698,
                                "end": 2708
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2693,
                              "end": 2708
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2712,
                                      "end": 2716
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parentNode",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2717,
                                      "end": 2727
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2712,
                                    "end": 2727
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tagName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2728,
                                    "end": 2735
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2712,
                                  "end": 2735
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toLowerCase",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2736,
                                  "end": 2747
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2712,
                                "end": 2747
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2712,
                              "end": 2749
                            },
                            "start": 2693,
                            "end": 2749
                          },
                          "definite": false,
                          "start": 2681,
                          "end": 2749
                        }
                      ],
                      "declare": false,
                      "start": 2677,
                      "end": 2750
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2759,
                            "end": 2768
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "textarea",
                            "raw": "'textarea'",
                            "start": 2773,
                            "end": 2783
                          },
                          "start": 2759,
                          "end": 2783
                        },
                        "operator": "||",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2787,
                            "end": 2796
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "style",
                            "raw": "'style'",
                            "start": 2801,
                            "end": 2808
                          },
                          "start": 2787,
                          "end": 2808
                        },
                        "start": 2759,
                        "end": 2808
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 3000,
                            "end": 3007
                          }
                        ],
                        "start": 2810,
                        "end": 3013
                      },
                      "alternate": null,
                      "start": 2755,
                      "end": 3013
                    },
                    {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3023,
                            "end": 3027
                          },
                          "init": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 3030,
                            "end": 3032
                          },
                          "definite": false,
                          "start": 3023,
                          "end": 3032
                        }
                      ],
                      "declare": false,
                      "start": 3019,
                      "end": 3032
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3042,
                          "end": 3046
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_inPreTag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3047,
                          "end": 3056
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3042,
                        "end": 3056
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "text",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3294,
                                "end": 3298
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "text",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3301,
                                        "end": 3305
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "replace",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3315,
                                        "end": 3322
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3301,
                                      "end": 3322
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "/\\r/g",
                                        "regex": {
                                          "pattern": "\\r",
                                          "flags": "g"
                                        },
                                        "start": 3323,
                                        "end": 3328
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3330,
                                        "end": 3332
                                      }
                                    ],
                                    "optional": false,
                                    "start": 3301,
                                    "end": 3333
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "replace",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3343,
                                    "end": 3350
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3301,
                                  "end": 3350
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "/( {2,}|\\n|\\t|\\{|\\})/g",
                                    "regex": {
                                      "pattern": "( {2,}|\\n|\\t|\\{|\\})",
                                      "flags": "g"
                                    },
                                    "start": 3351,
                                    "end": 3373
                                  },
                                  {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "generator": false,
                                    "async": false,
                                    "declare": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "whitespace",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3384,
                                        "end": 3394
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Literal",
                                                "value": "{",
                                                "raw": "'{'",
                                                "start": 3415,
                                                "end": 3418
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "JSON",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 3421,
                                                    "end": 3425
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "stringify",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 3426,
                                                    "end": 3435
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 3421,
                                                  "end": 3435
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "whitespace",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 3436,
                                                    "end": 3446
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 3421,
                                                "end": 3447
                                              },
                                              "start": 3415,
                                              "end": 3447
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "}",
                                              "raw": "'}'",
                                              "start": 3450,
                                              "end": 3453
                                            },
                                            "start": 3415,
                                            "end": 3453
                                          },
                                          "start": 3408,
                                          "end": 3454
                                        }
                                      ],
                                      "start": 3396,
                                      "end": 3464
                                    },
                                    "expression": false,
                                    "start": 3375,
                                    "end": 3464
                                  }
                                ],
                                "optional": false,
                                "start": 3301,
                                "end": 3465
                              },
                              "start": 3294,
                              "end": 3465
                            },
                            "directive": null,
                            "start": 3294,
                            "end": 3466
                          }
                        ],
                        "start": 3058,
                        "end": 3472
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3557,
                                    "end": 3561
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "indexOf",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3562,
                                    "end": 3569
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3557,
                                  "end": 3569
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "\n",
                                    "raw": "'\\n'",
                                    "start": 3570,
                                    "end": 3574
                                  }
                                ],
                                "optional": false,
                                "start": 3557,
                                "end": 3575
                              },
                              "operator": ">",
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 3579,
                                  "end": 3580
                                },
                                "prefix": true,
                                "start": 3578,
                                "end": 3580
                              },
                              "start": 3557,
                              "end": 3580
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 3582,
                              "end": 3591
                            },
                            "alternate": null,
                            "start": 3553,
                            "end": 3591
                          }
                        ],
                        "start": 3478,
                        "end": 3597
                      },
                      "start": 3038,
                      "end": 3597
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "+=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3602,
                            "end": 3606
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "output",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3607,
                            "end": 3613
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3602,
                          "end": 3613
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "text",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3617,
                          "end": 3621
                        },
                        "start": 3602,
                        "end": 3621
                      },
                      "directive": null,
                      "start": 3602,
                      "end": 3622
                    }
                  ],
                  "start": 2671,
                  "end": 3626
                },
                "id": null,
                "generator": false,
                "start": 2661,
                "end": 3626
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2648,
              "end": 3626
            }
          ],
          "start": 2459,
          "end": 3631
        },
        "abstract": false,
        "declare": false,
        "start": 2443,
        "end": 3631
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2436,
      "end": 3631
    },
    {
      "type": "EmptyStatement",
      "start": 3631,
      "end": 3632
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyleParser",
          "optional": false,
          "typeAnnotation": null,
          "start": 3691,
          "end": 3702
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "styles",
                "optional": false,
                "typeAnnotation": null,
                "start": 3707,
                "end": 3713
              },
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 3716,
                "end": 3718
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3707,
              "end": 3719
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "toJSXString",
                "optional": false,
                "typeAnnotation": null,
                "start": 3722,
                "end": 3733
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForInStatement",
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3757,
                              "end": 3760
                            },
                            "init": null,
                            "definite": false,
                            "start": 3757,
                            "end": 3760
                          }
                        ],
                        "declare": false,
                        "start": 3753,
                        "end": 3760
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3764,
                          "end": 3768
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "styles",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3769,
                          "end": 3775
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3764,
                        "end": 3775
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3790,
                                      "end": 3794
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "styles",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3795,
                                      "end": 3801
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3790,
                                    "end": 3801
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "hasOwnProperty",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3802,
                                    "end": 3816
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3790,
                                  "end": 3816
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3817,
                                    "end": 3820
                                  }
                                ],
                                "optional": false,
                                "start": 3790,
                                "end": 3821
                              },
                              "prefix": true,
                              "start": 3789,
                              "end": 3821
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 3823,
                              "end": 3832
                            },
                            "alternate": null,
                            "start": 3785,
                            "end": 3832
                          }
                        ],
                        "start": 3777,
                        "end": 3838
                      },
                      "start": 3748,
                      "end": 3838
                    }
                  ],
                  "start": 3742,
                  "end": 3842
                },
                "id": null,
                "generator": false,
                "start": 3736,
                "end": 3842
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3722,
              "end": 3842
            }
          ],
          "start": 3703,
          "end": 3844
        },
        "abstract": false,
        "declare": false,
        "start": 3685,
        "end": 3844
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3678,
      "end": 3844
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 3844
}
```
