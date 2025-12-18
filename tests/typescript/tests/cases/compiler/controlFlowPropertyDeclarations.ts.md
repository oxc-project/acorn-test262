__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 34,
    "end": 41,
    "range": [
      34,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDOMPropertyConfig",
    "start": 52,
    "end": 73,
    "range": [
      52,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 76,
    "end": 83,
    "range": [
      76,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "String",
    "value": "'react/lib/HTMLDOMPropertyConfig'",
    "start": 84,
    "end": 117,
    "range": [
      84,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 269,
    "end": 272,
    "range": [
      269,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "propname",
    "start": 278,
    "end": 286,
    "range": [
      278,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 287,
    "end": 289,
    "range": [
      287,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDOMPropertyConfig",
    "start": 290,
    "end": 311,
    "range": [
      290,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 312,
    "end": 322,
    "range": [
      312,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 328,
    "end": 330,
    "range": [
      328,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDOMPropertyConfig",
    "start": 333,
    "end": 354,
    "range": [
      333,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 355,
    "end": 365,
    "range": [
      355,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 366,
    "end": 380,
    "range": [
      366,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "propname",
    "start": 381,
    "end": 389,
    "range": [
      381,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 398,
    "end": 406,
    "range": [
      398,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418,
    "range": [
      415,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "mapFrom",
    "start": 419,
    "end": 426,
    "range": [
      419,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDOMPropertyConfig",
    "start": 429,
    "end": 450,
    "range": [
      429,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "DOMAttributeNames",
    "start": 451,
    "end": 468,
    "range": [
      451,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "propname",
    "start": 469,
    "end": 477,
    "range": [
      469,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 479,
    "end": 481,
    "range": [
      479,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "propname",
    "start": 482,
    "end": 490,
    "range": [
      482,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 491,
    "end": 502,
    "range": [
      491,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 895,
    "end": 903,
    "range": [
      895,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "repeatString",
    "start": 904,
    "end": 916,
    "range": [
      904,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 925,
    "end": 930,
    "range": [
      925,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 936,
    "end": 938,
    "range": [
      936,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 940,
    "end": 945,
    "range": [
      940,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 946,
    "end": 949,
    "range": [
      946,
      949
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 959,
    "end": 965,
    "range": [
      959,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 966,
    "end": 972,
    "range": [
      966,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 980,
    "end": 982,
    "range": [
      980,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 984,
    "end": 989,
    "range": [
      984,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 997,
    "end": 1002,
    "range": [
      997,
      1002
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1003,
    "end": 1006,
    "range": [
      1003,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1007,
    "end": 1012,
    "range": [
      1007,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1020,
    "end": 1023,
    "range": [
      1020,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "repeated",
    "start": 1024,
    "end": 1032,
    "range": [
      1024,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1035,
    "end": 1037,
    "range": [
      1035,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1041,
    "end": 1046,
    "range": [
      1041,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 1048,
    "end": 1053,
    "range": [
      1048,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1061,
    "end": 1063,
    "range": [
      1061,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 1065,
    "end": 1070,
    "range": [
      1065,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "repeated",
    "start": 1084,
    "end": 1092,
    "range": [
      1084,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1093,
    "end": 1095,
    "range": [
      1093,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1096,
    "end": 1102,
    "range": [
      1096,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1114,
    "end": 1116,
    "range": [
      1114,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 1118,
    "end": 1123,
    "range": [
      1118,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 1124,
    "end": 1127,
    "range": [
      1124,
      1127
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1139,
    "end": 1145,
    "range": [
      1139,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1146,
    "end": 1148,
    "range": [
      1146,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1149,
    "end": 1155,
    "range": [
      1149,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1169,
    "end": 1175,
    "range": [
      1169,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "repeated",
    "start": 1176,
    "end": 1184,
    "range": [
      1176,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1380,
    "end": 1388,
    "range": [
      1380,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "endsWith",
    "start": 1389,
    "end": 1397,
    "range": [
      1389,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "haystack",
    "start": 1398,
    "end": 1406,
    "range": [
      1398,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "needle",
    "start": 1408,
    "end": 1414,
    "range": [
      1408,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1420,
    "end": 1426,
    "range": [
      1420,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "haystack",
    "start": 1427,
    "end": 1435,
    "range": [
      1427,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 1436,
    "end": 1441,
    "range": [
      1436,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "needle",
    "start": 1443,
    "end": 1449,
    "range": [
      1443,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1450,
    "end": 1456,
    "range": [
      1450,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1458,
    "end": 1461,
    "range": [
      1458,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "needle",
    "start": 1462,
    "end": 1468,
    "range": [
      1462,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1726,
    "end": 1734,
    "range": [
      1726,
      1734
    ]
  },
  {
    "type": "Identifier",
    "value": "trimEnd",
    "start": 1735,
    "end": 1742,
    "range": [
      1735,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "haystack",
    "start": 1743,
    "end": 1751,
    "range": [
      1743,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "needle",
    "start": 1753,
    "end": 1759,
    "range": [
      1753,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1765,
    "end": 1771,
    "range": [
      1765,
      1771
    ]
  },
  {
    "type": "Identifier",
    "value": "endsWith",
    "start": 1772,
    "end": 1780,
    "range": [
      1772,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "haystack",
    "start": 1781,
    "end": 1789,
    "range": [
      1781,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "needle",
    "start": 1791,
    "end": 1797,
    "range": [
      1791,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "haystack",
    "start": 1805,
    "end": 1813,
    "range": [
      1805,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 1814,
    "end": 1819,
    "range": [
      1814,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "needle",
    "start": 1824,
    "end": 1830,
    "range": [
      1824,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1831,
    "end": 1837,
    "range": [
      1831,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "haystack",
    "start": 1845,
    "end": 1853,
    "range": [
      1845,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1911,
    "end": 1919,
    "range": [
      1911,
      1919
    ]
  },
  {
    "type": "Identifier",
    "value": "hyphenToCamelCase",
    "start": 1920,
    "end": 1937,
    "range": [
      1920,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1938,
    "end": 1944,
    "range": [
      1938,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1950,
    "end": 1956,
    "range": [
      1950,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1957,
    "end": 1963,
    "range": [
      1957,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 1964,
    "end": 1971,
    "range": [
      1964,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/-(.)/g",
    "regex": {
      "flags": "g",
      "pattern": "-(.)"
    },
    "start": 1972,
    "end": 1979,
    "range": [
      1972,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1981,
    "end": 1989,
    "range": [
      1981,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 1990,
    "end": 1995,
    "range": [
      1990,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "chr",
    "start": 1997,
    "end": 2000,
    "range": [
      1997,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2008,
    "end": 2014,
    "range": [
      2008,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "chr",
    "start": 2015,
    "end": 2018,
    "range": [
      2015,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 2019,
    "end": 2030,
    "range": [
      2019,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2122,
    "end": 2130,
    "range": [
      2122,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 2131,
    "end": 2138,
    "range": [
      2131,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2139,
    "end": 2145,
    "range": [
      2139,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2152,
    "end": 2158,
    "range": [
      2152,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/[^\\s]/",
    "regex": {
      "flags": "",
      "pattern": "[^\\s]"
    },
    "start": 2160,
    "end": 2167,
    "range": [
      2160,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 2168,
    "end": 2172,
    "range": [
      2168,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2173,
    "end": 2179,
    "range": [
      2173,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2359,
    "end": 2367,
    "range": [
      2359,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "isConvertiblePixelValue",
    "start": 2368,
    "end": 2391,
    "range": [
      2368,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2392,
    "end": 2397,
    "range": [
      2392,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2403,
    "end": 2409,
    "range": [
      2403,
      2409
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/^\\d+px$/",
    "regex": {
      "flags": "",
      "pattern": "^\\d+px$"
    },
    "start": 2410,
    "end": 2419,
    "range": [
      2410,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 2420,
    "end": 2424,
    "range": [
      2420,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2425,
    "end": 2430,
    "range": [
      2425,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2436,
    "end": 2442,
    "range": [
      2436,
      2442
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2443,
    "end": 2448,
    "range": [
      2443,
      2448
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLtoJSX",
    "start": 2449,
    "end": 2458,
    "range": [
      2449,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2465,
    "end": 2472,
    "range": [
      2465,
      2472
    ]
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2473,
    "end": 2479,
    "range": [
      2473,
      2479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2479,
    "end": 2480,
    "range": [
      2479,
      2480
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2481,
    "end": 2487,
    "range": [
      2481,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2493,
    "end": 2500,
    "range": [
      2493,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 2501,
    "end": 2506,
    "range": [
      2501,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2508,
    "end": 2514,
    "range": [
      2508,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2520,
    "end": 2527,
    "range": [
      2520,
      2527
    ]
  },
  {
    "type": "Identifier",
    "value": "_inPreTag",
    "start": 2528,
    "end": 2537,
    "range": [
      2528,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2539,
    "end": 2546,
    "range": [
      2539,
      2546
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Identifier",
    "value": "_visitText",
    "start": 2648,
    "end": 2658,
    "range": [
      2648,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2662,
    "end": 2666,
    "range": [
      2662,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2668,
    "end": 2670,
    "range": [
      2668,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2677,
    "end": 2680,
    "range": [
      2677,
      2680
    ]
  },
  {
    "type": "Identifier",
    "value": "parentTag",
    "start": 2681,
    "end": 2690,
    "range": [
      2681,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2693,
    "end": 2697,
    "range": [
      2693,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "parentNode",
    "start": 2698,
    "end": 2708,
    "range": [
      2698,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2709,
    "end": 2711,
    "range": [
      2709,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2712,
    "end": 2716,
    "range": [
      2712,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Identifier",
    "value": "parentNode",
    "start": 2717,
    "end": 2727,
    "range": [
      2717,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 2728,
    "end": 2735,
    "range": [
      2728,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 2736,
    "end": 2747,
    "range": [
      2736,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2755,
    "end": 2757,
    "range": [
      2755,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2758,
    "end": 2759,
    "range": [
      2758,
      2759
    ]
  },
  {
    "type": "Identifier",
    "value": "parentTag",
    "start": 2759,
    "end": 2768,
    "range": [
      2759,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2769,
    "end": 2772,
    "range": [
      2769,
      2772
    ]
  },
  {
    "type": "String",
    "value": "'textarea'",
    "start": 2773,
    "end": 2783,
    "range": [
      2773,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2784,
    "end": 2786,
    "range": [
      2784,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "parentTag",
    "start": 2787,
    "end": 2796,
    "range": [
      2787,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2797,
    "end": 2800,
    "range": [
      2797,
      2800
    ]
  },
  {
    "type": "String",
    "value": "'style'",
    "start": 2801,
    "end": 2808,
    "range": [
      2801,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3000,
    "end": 3006,
    "range": [
      3000,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3019,
    "end": 3022,
    "range": [
      3019,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 3023,
    "end": 3027,
    "range": [
      3023,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 3030,
    "end": 3032,
    "range": [
      3030,
      3032
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3038,
    "end": 3040,
    "range": [
      3038,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3042,
    "end": 3046,
    "range": [
      3042,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "_inPreTag",
    "start": 3047,
    "end": 3056,
    "range": [
      3047,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 3294,
    "end": 3298,
    "range": [
      3294,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 3301,
    "end": 3305,
    "range": [
      3301,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 3315,
    "end": 3322,
    "range": [
      3315,
      3322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/\\r/g",
    "regex": {
      "flags": "g",
      "pattern": "\\r"
    },
    "start": 3323,
    "end": 3328,
    "range": [
      3323,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 3330,
    "end": 3332,
    "range": [
      3330,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 3343,
    "end": 3350,
    "range": [
      3343,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3350,
    "end": 3351,
    "range": [
      3350,
      3351
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/( {2,}|\\n|\\t|\\{|\\})/g",
    "regex": {
      "flags": "g",
      "pattern": "( {2,}|\\n|\\t|\\{|\\})"
    },
    "start": 3351,
    "end": 3373,
    "range": [
      3351,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3375,
    "end": 3383,
    "range": [
      3375,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Identifier",
    "value": "whitespace",
    "start": 3384,
    "end": 3394,
    "range": [
      3384,
      3394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3408,
    "end": 3414,
    "range": [
      3408,
      3414
    ]
  },
  {
    "type": "String",
    "value": "'{'",
    "start": 3415,
    "end": 3418,
    "range": [
      3415,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3419,
    "end": 3420,
    "range": [
      3419,
      3420
    ]
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 3421,
    "end": 3425,
    "range": [
      3421,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 3426,
    "end": 3435,
    "range": [
      3426,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Identifier",
    "value": "whitespace",
    "start": 3436,
    "end": 3446,
    "range": [
      3436,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3448,
    "end": 3449,
    "range": [
      3448,
      3449
    ]
  },
  {
    "type": "String",
    "value": "'}'",
    "start": 3450,
    "end": 3453,
    "range": [
      3450,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3471,
    "end": 3472,
    "range": [
      3471,
      3472
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3473,
    "end": 3477,
    "range": [
      3473,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3553,
    "end": 3555,
    "range": [
      3553,
      3555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 3557,
    "end": 3561,
    "range": [
      3557,
      3561
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3561,
    "end": 3562,
    "range": [
      3561,
      3562
    ]
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 3562,
    "end": 3569,
    "range": [
      3562,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "String",
    "value": "'\\n'",
    "start": 3570,
    "end": 3574,
    "range": [
      3570,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3576,
    "end": 3577,
    "range": [
      3576,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3579,
    "end": 3580,
    "range": [
      3579,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3590,
    "end": 3591,
    "range": [
      3590,
      3591
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3602,
    "end": 3606,
    "range": [
      3602,
      3606
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3606,
    "end": 3607,
    "range": [
      3606,
      3607
    ]
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 3607,
    "end": 3613,
    "range": [
      3607,
      3613
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 3614,
    "end": 3616,
    "range": [
      3614,
      3616
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 3617,
    "end": 3621,
    "range": [
      3617,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3630,
    "end": 3631,
    "range": [
      3630,
      3631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3631,
    "end": 3632,
    "range": [
      3631,
      3632
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3678,
    "end": 3684,
    "range": [
      3678,
      3684
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3685,
    "end": 3690,
    "range": [
      3685,
      3690
    ]
  },
  {
    "type": "Identifier",
    "value": "StyleParser",
    "start": 3691,
    "end": 3702,
    "range": [
      3691,
      3702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3703,
    "end": 3704,
    "range": [
      3703,
      3704
    ]
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 3707,
    "end": 3713,
    "range": [
      3707,
      3713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3714,
    "end": 3715,
    "range": [
      3714,
      3715
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3716,
    "end": 3717,
    "range": [
      3716,
      3717
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3717,
    "end": 3718,
    "range": [
      3717,
      3718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3718,
    "end": 3719,
    "range": [
      3718,
      3719
    ]
  },
  {
    "type": "Identifier",
    "value": "toJSXString",
    "start": 3722,
    "end": 3733,
    "range": [
      3722,
      3733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3736,
    "end": 3737,
    "range": [
      3736,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3739,
    "end": 3741,
    "range": [
      3739,
      3741
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3748,
    "end": 3751,
    "range": [
      3748,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3753,
    "end": 3756,
    "range": [
      3753,
      3756
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3757,
    "end": 3760,
    "range": [
      3757,
      3760
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3761,
    "end": 3763,
    "range": [
      3761,
      3763
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3764,
    "end": 3768,
    "range": [
      3764,
      3768
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3768,
    "end": 3769,
    "range": [
      3768,
      3769
    ]
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 3769,
    "end": 3775,
    "range": [
      3769,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3775,
    "end": 3776,
    "range": [
      3775,
      3776
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3777,
    "end": 3778,
    "range": [
      3777,
      3778
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3785,
    "end": 3787,
    "range": [
      3785,
      3787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3788,
    "end": 3789,
    "range": [
      3788,
      3789
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3789,
    "end": 3790,
    "range": [
      3789,
      3790
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3790,
    "end": 3794,
    "range": [
      3790,
      3794
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 3795,
    "end": 3801,
    "range": [
      3795,
      3801
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3801,
    "end": 3802,
    "range": [
      3801,
      3802
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 3802,
    "end": 3816,
    "range": [
      3802,
      3816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3817,
    "end": 3820,
    "range": [
      3817,
      3820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3821,
    "end": 3822,
    "range": [
      3821,
      3822
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3823,
    "end": 3824,
    "range": [
      3823,
      3824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3837,
    "end": 3838,
    "range": [
      3837,
      3838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  }
]
```
