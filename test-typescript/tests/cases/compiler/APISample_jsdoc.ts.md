__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 306,
  "end": 3803,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 330,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 330,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 330,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 327,
                "end": 330
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
      "type": "ImportDeclaration",
      "start": 333,
      "end": 366,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 340,
          "end": 347,
          "local": {
            "type": "Identifier",
            "start": 345,
            "end": 347,
            "name": "ts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 353,
        "end": 365,
        "value": "typescript",
        "raw": "\"typescript\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 540,
      "end": 1610,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 576,
        "name": "parseCommentsIntoDefinition",
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
          "start": 577,
          "end": 586,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 581,
            "end": 586,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 583,
              "end": 586
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 625,
          "end": 642,
          "name": "symbol",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 631,
            "end": 642,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 633,
              "end": 642,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 633,
                "end": 642,
                "left": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 635,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 642,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 681,
          "end": 748,
          "name": "definition",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 691,
            "end": 748,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 693,
              "end": 748,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 694,
                  "end": 715,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 705,
                    "name": "description",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 706,
                    "end": 714,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 708,
                      "end": 714
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSIndexSignature",
                  "start": 716,
                  "end": 747,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 717,
                      "end": 726,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 718,
                        "end": 726,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 720,
                          "end": 726
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 727,
                    "end": 747,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 729,
                      "end": 747,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 729,
                          "end": 735
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 738,
                          "end": 747
                        }
                      ]
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 787,
          "end": 825,
          "name": "otherAnnotations",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 803,
            "end": 825,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 805,
              "end": 825,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 807,
                  "end": 824,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 808,
                      "end": 817,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 809,
                        "end": 817,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 811,
                          "end": 817
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 818,
                    "end": 824,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 820,
                      "end": 824,
                      "literal": {
                        "type": "Literal",
                        "start": 820,
                        "end": 824,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 833,
        "end": 1610,
        "body": [
          {
            "type": "IfStatement",
            "start": 839,
            "end": 875,
            "test": {
              "type": "UnaryExpression",
              "start": 843,
              "end": 850,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 844,
                "end": 850,
                "name": "symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 852,
              "end": 875,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 862,
                  "end": 869,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 914,
            "end": 971,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 918,
                "end": 970,
                "id": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 926,
                  "name": "comments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 929,
                  "end": 970,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 929,
                    "end": 959,
                    "object": {
                      "type": "Identifier",
                      "start": 929,
                      "end": 935,
                      "name": "symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 936,
                      "end": 959,
                      "name": "getDocumentationComment",
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
                      "start": 960,
                      "end": 969,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 977,
            "end": 1162,
            "test": {
              "type": "MemberExpression",
              "start": 981,
              "end": 996,
              "object": {
                "type": "Identifier",
                "start": 981,
                "end": 989,
                "name": "comments",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 990,
                "end": 996,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 998,
              "end": 1162,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1008,
                  "end": 1156,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1008,
                    "end": 1155,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1008,
                      "end": 1030,
                      "object": {
                        "type": "Identifier",
                        "start": 1008,
                        "end": 1018,
                        "name": "definition",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1030,
                        "name": "description",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 1033,
                      "end": 1155,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1033,
                        "end": 1151,
                        "object": {
                          "type": "CallExpression",
                          "start": 1033,
                          "end": 1146,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1033,
                            "end": 1045,
                            "object": {
                              "type": "Identifier",
                              "start": 1033,
                              "end": 1041,
                              "name": "comments",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1042,
                              "end": 1045,
                              "name": "map",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1046,
                              "end": 1145,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1046,
                                  "end": 1053,
                                  "name": "comment",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "ConditionalExpression",
                                "start": 1057,
                                "end": 1145,
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 1057,
                                  "end": 1085,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 1057,
                                    "end": 1069,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1057,
                                      "end": 1064,
                                      "name": "comment",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1065,
                                      "end": 1069,
                                      "name": "kind",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Literal",
                                    "start": 1074,
                                    "end": 1085,
                                    "value": "lineBreak",
                                    "raw": "\"lineBreak\""
                                  }
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "start": 1088,
                                  "end": 1100,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1088,
                                    "end": 1095,
                                    "name": "comment",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1096,
                                    "end": 1100,
                                    "name": "text",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "alternate": {
                                  "type": "CallExpression",
                                  "start": 1103,
                                  "end": 1145,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1103,
                                    "end": 1130,
                                    "object": {
                                      "type": "CallExpression",
                                      "start": 1103,
                                      "end": 1122,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 1103,
                                        "end": 1120,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 1103,
                                          "end": 1115,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1103,
                                            "end": 1110,
                                            "name": "comment",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1111,
                                            "end": 1115,
                                            "name": "text",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1116,
                                          "end": 1120,
                                          "name": "trim",
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
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1123,
                                      "end": 1130,
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
                                      "start": 1131,
                                      "end": 1138,
                                      "value": null,
                                      "raw": "/\\r\\n/g",
                                      "regex": {
                                        "flags": "g",
                                        "pattern": "\\r\\n"
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 1140,
                                      "end": 1144,
                                      "value": "\n",
                                      "raw": "\"\\n\""
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1147,
                          "end": 1151,
                          "name": "join",
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
                          "start": 1152,
                          "end": 1154,
                          "value": "",
                          "raw": "\"\""
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
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1209,
            "end": 1258,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1215,
                "end": 1257,
                "id": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1221,
                  "name": "jsdocs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1224,
                  "end": 1257,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1224,
                    "end": 1243,
                    "object": {
                      "type": "Identifier",
                      "start": 1224,
                      "end": 1230,
                      "name": "symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1231,
                      "end": 1243,
                      "name": "getJsDocTags",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 1244,
                      "end": 1256,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1244,
                        "end": 1248
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1249,
                        "end": 1256,
                        "name": "checker",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
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
            "start": 1263,
            "end": 1608,
            "expression": {
              "type": "CallExpression",
              "start": 1263,
              "end": 1607,
              "callee": {
                "type": "MemberExpression",
                "start": 1263,
                "end": 1277,
                "object": {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1269,
                  "name": "jsdocs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1270,
                  "end": 1277,
                  "name": "forEach",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1278,
                  "end": 1606,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1278,
                      "end": 1281,
                      "name": "doc",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1285,
                    "end": 1606,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1361,
                        "end": 1388,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1367,
                            "end": 1387,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 1367,
                              "end": 1381,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1369,
                                  "end": 1373,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1369,
                                    "end": 1373,
                                    "name": "name",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1369,
                                    "end": 1373,
                                    "name": "name",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 1375,
                                  "end": 1379,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1375,
                                    "end": 1379,
                                    "name": "text",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1375,
                                    "end": 1379,
                                    "name": "text",
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
                              "type": "Identifier",
                              "start": 1384,
                              "end": 1387,
                              "name": "doc",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      {
                        "type": "IfStatement",
                        "start": 1397,
                        "end": 1600,
                        "test": {
                          "type": "MemberExpression",
                          "start": 1401,
                          "end": 1434,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1401,
                            "end": 1428,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1401,
                              "end": 1405
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1406,
                              "end": 1428,
                              "name": "userValidationKeywords",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1429,
                            "end": 1433,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1436,
                          "end": 1501,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1450,
                              "end": 1491,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1450,
                                "end": 1490,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1450,
                                  "end": 1466,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1450,
                                    "end": 1460,
                                    "name": "definition",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1461,
                                    "end": 1465,
                                    "name": "name",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "start": 1469,
                                  "end": 1490,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1469,
                                    "end": 1484,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1469,
                                      "end": 1473
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1474,
                                      "end": 1484,
                                      "name": "parseValue",
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
                                      "start": 1485,
                                      "end": 1489,
                                      "name": "text",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                          "start": 1507,
                          "end": 1600,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1556,
                              "end": 1590,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1556,
                                "end": 1589,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1556,
                                  "end": 1582,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1556,
                                    "end": 1572,
                                    "name": "otherAnnotations",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "start": 1573,
                                    "end": 1581,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1573,
                                      "end": 1576,
                                      "name": "doc",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1577,
                                      "end": 1581,
                                      "name": "name",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 1585,
                                  "end": 1589,
                                  "value": true,
                                  "raw": "true"
                                }
                              },
                              "directive": null
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 826,
        "end": 832,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 828,
          "end": 832
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1680,
      "end": 1737,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1687,
        "end": 1737,
        "id": {
          "type": "Identifier",
          "start": 1697,
          "end": 1708,
          "name": "Annotations",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1709,
          "end": 1737,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1715,
              "end": 1735,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1716,
                  "end": 1728,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1720,
                    "end": 1728,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1722,
                      "end": 1728
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1729,
                "end": 1734,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1731,
                  "end": 1734
                }
              },
              "readonly": false,
              "static": false,
              "accessibility": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1738,
      "end": 2426,
      "id": {
        "type": "Identifier",
        "start": 1747,
        "end": 1761,
        "name": "getAnnotations",
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
          "start": 1762,
          "end": 1771,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1766,
            "end": 1771,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1768,
              "end": 1771
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1773,
          "end": 1786,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1777,
            "end": 1786,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1779,
              "end": 1786,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1779,
                "end": 1786,
                "left": {
                  "type": "Identifier",
                  "start": 1779,
                  "end": 1781,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1782,
                  "end": 1786,
                  "name": "Node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1813,
        "end": 2426,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1819,
            "end": 1866,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1825,
                "end": 1865,
                "id": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1842,
                  "name": "symbol",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1831,
                    "end": 1842,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1833,
                      "end": 1842,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1833,
                        "end": 1842,
                        "left": {
                          "type": "Identifier",
                          "start": 1833,
                          "end": 1835,
                          "name": "ts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1842,
                          "name": "Symbol",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1845,
                  "end": 1865,
                  "object": {
                    "type": "TSAsExpression",
                    "start": 1846,
                    "end": 1857,
                    "expression": {
                      "type": "Identifier",
                      "start": 1846,
                      "end": 1850,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1854,
                      "end": 1857
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1859,
                    "end": 1865,
                    "name": "symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1871,
            "end": 1917,
            "test": {
              "type": "UnaryExpression",
              "start": 1875,
              "end": 1882,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1876,
                "end": 1882,
                "name": "symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1884,
              "end": 1917,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1894,
                  "end": 1911,
                  "argument": {
                    "type": "Identifier",
                    "start": 1901,
                    "end": 1910,
                    "name": "undefined",
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
            "type": "VariableDeclaration",
            "start": 1923,
            "end": 1994,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1929,
                "end": 1993,
                "id": {
                  "type": "Identifier",
                  "start": 1929,
                  "end": 1957,
                  "name": "jsDocTags",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1938,
                    "end": 1957,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1940,
                      "end": 1957,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1940,
                        "end": 1955,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 1940,
                          "end": 1955,
                          "left": {
                            "type": "Identifier",
                            "start": 1940,
                            "end": 1942,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1943,
                            "end": 1955,
                            "name": "JSDocTagInfo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1960,
                  "end": 1993,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1960,
                    "end": 1979,
                    "object": {
                      "type": "Identifier",
                      "start": 1960,
                      "end": 1966,
                      "name": "symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1967,
                      "end": 1979,
                      "name": "getJsDocTags",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 1980,
                      "end": 1992,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1980,
                        "end": 1984
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1985,
                        "end": 1992,
                        "name": "checker",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
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
            "type": "IfStatement",
            "start": 1999,
            "end": 2069,
            "test": {
              "type": "LogicalExpression",
              "start": 2003,
              "end": 2034,
              "left": {
                "type": "UnaryExpression",
                "start": 2003,
                "end": 2013,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 2004,
                  "end": 2013,
                  "name": "jsDocTags",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "UnaryExpression",
                "start": 2017,
                "end": 2034,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 2018,
                  "end": 2034,
                  "object": {
                    "type": "Identifier",
                    "start": 2018,
                    "end": 2027,
                    "name": "jsDocTags",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2028,
                    "end": 2034,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2036,
              "end": 2069,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2046,
                  "end": 2063,
                  "argument": {
                    "type": "Identifier",
                    "start": 2053,
                    "end": 2062,
                    "name": "undefined",
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
            "type": "VariableDeclaration",
            "start": 2075,
            "end": 2354,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2081,
                "end": 2353,
                "id": {
                  "type": "Identifier",
                  "start": 2081,
                  "end": 2105,
                  "name": "annotations",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2092,
                    "end": 2105,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2094,
                      "end": 2105,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2094,
                        "end": 2105,
                        "name": "Annotations",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2108,
                  "end": 2353,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2108,
                    "end": 2124,
                    "object": {
                      "type": "Identifier",
                      "start": 2108,
                      "end": 2117,
                      "name": "jsDocTags",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2118,
                      "end": 2124,
                      "name": "reduce",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2125,
                      "end": 2348,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2126,
                          "end": 2145,
                          "name": "result",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2132,
                            "end": 2145,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2134,
                              "end": 2145,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2134,
                                "end": 2145,
                                "name": "Annotations",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 2147,
                          "end": 2172,
                          "name": "jsDocTag",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2155,
                            "end": 2172,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2157,
                              "end": 2172,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2157,
                                "end": 2172,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2157,
                                  "end": 2159,
                                  "name": "ts",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2160,
                                  "end": 2172,
                                  "name": "JSDocTagInfo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 2177,
                        "end": 2348,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 2187,
                            "end": 2230,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 2193,
                                "end": 2229,
                                "id": {
                                  "type": "Identifier",
                                  "start": 2193,
                                  "end": 2198,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 2201,
                                  "end": 2229,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 2201,
                                    "end": 2219,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2201,
                                      "end": 2205
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2206,
                                      "end": 2219,
                                      "name": "parseJsDocTag",
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
                                      "start": 2220,
                                      "end": 2228,
                                      "name": "jsDocTag",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
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
                            "type": "IfStatement",
                            "start": 2239,
                            "end": 2318,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2243,
                              "end": 2262,
                              "left": {
                                "type": "Identifier",
                                "start": 2243,
                                "end": 2248,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "!==",
                              "right": {
                                "type": "Identifier",
                                "start": 2253,
                                "end": 2262,
                                "name": "undefined",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2264,
                              "end": 2318,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2278,
                                  "end": 2308,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2278,
                                    "end": 2307,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2278,
                                      "end": 2299,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 2278,
                                        "end": 2284,
                                        "name": "result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "start": 2285,
                                        "end": 2298,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 2285,
                                          "end": 2293,
                                          "name": "jsDocTag",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 2294,
                                          "end": 2298,
                                          "name": "name",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "computed": true,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2302,
                                      "end": 2307,
                                      "name": "value",
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
                            "type": "ReturnStatement",
                            "start": 2328,
                            "end": 2342,
                            "argument": {
                              "type": "Identifier",
                              "start": 2335,
                              "end": 2341,
                              "name": "result",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 2350,
                      "end": 2352,
                      "properties": []
                    }
                  ],
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
            "type": "ReturnStatement",
            "start": 2359,
            "end": 2424,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2366,
              "end": 2423,
              "test": {
                "type": "MemberExpression",
                "start": 2366,
                "end": 2397,
                "object": {
                  "type": "CallExpression",
                  "start": 2366,
                  "end": 2390,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2366,
                    "end": 2377,
                    "object": {
                      "type": "Identifier",
                      "start": 2366,
                      "end": 2372,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2373,
                      "end": 2377,
                      "name": "keys",
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
                      "start": 2378,
                      "end": 2389,
                      "name": "annotations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2391,
                  "end": 2397,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 2400,
                "end": 2411,
                "name": "annotations",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 2414,
                "end": 2423,
                "name": "undefined",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1787,
        "end": 1812,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1789,
          "end": 1812,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1789,
              "end": 1800,
              "typeName": {
                "type": "Identifier",
                "start": 1789,
                "end": 1800,
                "name": "Annotations",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 1803,
              "end": 1812
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2484,
      "end": 3041,
      "id": {
        "type": "Identifier",
        "start": 2493,
        "end": 2510,
        "name": "parseSpecificTags",
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
          "start": 2511,
          "end": 2524,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2515,
            "end": 2524,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2517,
              "end": 2524,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 2517,
                "end": 2524,
                "left": {
                  "type": "Identifier",
                  "start": 2517,
                  "end": 2519,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2520,
                  "end": 2524,
                  "name": "Node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2526,
        "end": 3041,
        "body": [
          {
            "type": "IfStatement",
            "start": 2532,
            "end": 2656,
            "test": {
              "type": "BinaryExpression",
              "start": 2536,
              "end": 2573,
              "left": {
                "type": "MemberExpression",
                "start": 2536,
                "end": 2545,
                "object": {
                  "type": "Identifier",
                  "start": 2536,
                  "end": 2540,
                  "name": "node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2541,
                  "end": 2545,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 2550,
                "end": 2573,
                "object": {
                  "type": "MemberExpression",
                  "start": 2550,
                  "end": 2563,
                  "object": {
                    "type": "Identifier",
                    "start": 2550,
                    "end": 2552,
                    "name": "ts",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2553,
                    "end": 2563,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2564,
                  "end": 2573,
                  "name": "Parameter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2575,
              "end": 2656,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2585,
                  "end": 2650,
                  "argument": {
                    "type": "CallExpression",
                    "start": 2592,
                    "end": 2649,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2592,
                      "end": 2616,
                      "object": {
                        "type": "Identifier",
                        "start": 2592,
                        "end": 2594,
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2595,
                        "end": 2616,
                        "name": "getJSDocParameterTags",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "TSAsExpression",
                        "start": 2617,
                        "end": 2648,
                        "expression": {
                          "type": "Identifier",
                          "start": 2617,
                          "end": 2621,
                          "name": "node",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2625,
                          "end": 2648,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 2625,
                            "end": 2648,
                            "left": {
                              "type": "Identifier",
                              "start": 2625,
                              "end": 2627,
                              "name": "ts",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2628,
                              "end": 2648,
                              "name": "ParameterDeclaration",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2661,
            "end": 3039,
            "test": {
              "type": "BinaryExpression",
              "start": 2665,
              "end": 2712,
              "left": {
                "type": "MemberExpression",
                "start": 2665,
                "end": 2674,
                "object": {
                  "type": "Identifier",
                  "start": 2665,
                  "end": 2669,
                  "name": "node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2670,
                  "end": 2674,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 2679,
                "end": 2712,
                "object": {
                  "type": "MemberExpression",
                  "start": 2679,
                  "end": 2692,
                  "object": {
                    "type": "Identifier",
                    "start": 2679,
                    "end": 2681,
                    "name": "ts",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2682,
                    "end": 2692,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2693,
                  "end": 2712,
                  "name": "FunctionDeclaration",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2714,
              "end": 3039,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2724,
                  "end": 2768,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2730,
                      "end": 2767,
                      "id": {
                        "type": "Identifier",
                        "start": 2730,
                        "end": 2734,
                        "name": "func",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 2737,
                        "end": 2767,
                        "expression": {
                          "type": "Identifier",
                          "start": 2737,
                          "end": 2741,
                          "name": "node",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2745,
                          "end": 2767,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 2745,
                            "end": 2767,
                            "left": {
                              "type": "Identifier",
                              "start": 2745,
                              "end": 2747,
                              "name": "ts",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2748,
                              "end": 2767,
                              "name": "FunctionDeclaration",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 2777,
                  "end": 3033,
                  "test": {
                    "type": "CallExpression",
                    "start": 2781,
                    "end": 2811,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2781,
                      "end": 2805,
                      "object": {
                        "type": "Identifier",
                        "start": 2781,
                        "end": 2783,
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2784,
                        "end": 2805,
                        "name": "hasJSDocParameterTags",
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
                        "start": 2806,
                        "end": 2810,
                        "name": "func",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2813,
                    "end": 3033,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2827,
                        "end": 2858,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2833,
                            "end": 2857,
                            "id": {
                              "type": "Identifier",
                              "start": 2833,
                              "end": 2852,
                              "name": "flat",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2837,
                                "end": 2852,
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "start": 2839,
                                  "end": 2852,
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "start": 2839,
                                    "end": 2850,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 2839,
                                      "end": 2850,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2839,
                                        "end": 2841,
                                        "name": "ts",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 2842,
                                        "end": 2850,
                                        "name": "JSDocTag",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "start": 2855,
                              "end": 2857,
                              "elements": []
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      {
                        "type": "ForOfStatement",
                        "start": 2871,
                        "end": 2998,
                        "await": false,
                        "left": {
                          "type": "VariableDeclaration",
                          "start": 2876,
                          "end": 2886,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2882,
                              "end": 2886,
                              "id": {
                                "type": "Identifier",
                                "start": 2882,
                                "end": 2886,
                                "name": "tags",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 2890,
                          "end": 2935,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2890,
                            "end": 2909,
                            "object": {
                              "type": "MemberExpression",
                              "start": 2890,
                              "end": 2905,
                              "object": {
                                "type": "Identifier",
                                "start": 2890,
                                "end": 2894,
                                "name": "func",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2895,
                                "end": 2905,
                                "name": "parameters",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2906,
                              "end": 2909,
                              "name": "map",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 2910,
                              "end": 2934,
                              "object": {
                                "type": "Identifier",
                                "start": 2910,
                                "end": 2912,
                                "name": "ts",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2913,
                                "end": 2934,
                                "name": "getJSDocParameterTags",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 2937,
                          "end": 2998,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 2955,
                              "end": 2984,
                              "test": {
                                "type": "Identifier",
                                "start": 2959,
                                "end": 2963,
                                "name": "tags",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "start": 2965,
                                "end": 2984,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 2965,
                                  "end": 2983,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 2965,
                                    "end": 2974,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 2965,
                                      "end": 2969,
                                      "name": "flat",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2970,
                                      "end": 2974,
                                      "name": "push",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "SpreadElement",
                                      "start": 2975,
                                      "end": 2982,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 2978,
                                        "end": 2982,
                                        "name": "tags",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              },
                              "alternate": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 3011,
                        "end": 3023,
                        "argument": {
                          "type": "Identifier",
                          "start": 3018,
                          "end": 3022,
                          "name": "flat",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3043,
      "end": 3357,
      "id": {
        "type": "Identifier",
        "start": 3052,
        "end": 3074,
        "name": "getReturnTypeFromJSDoc",
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
          "start": 3075,
          "end": 3088,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3079,
            "end": 3088,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3081,
              "end": 3088,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 3081,
                "end": 3088,
                "left": {
                  "type": "Identifier",
                  "start": 3081,
                  "end": 3083,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 3084,
                  "end": 3088,
                  "name": "Node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3090,
        "end": 3357,
        "body": [
          {
            "type": "IfStatement",
            "start": 3096,
            "end": 3200,
            "test": {
              "type": "BinaryExpression",
              "start": 3100,
              "end": 3147,
              "left": {
                "type": "MemberExpression",
                "start": 3100,
                "end": 3109,
                "object": {
                  "type": "Identifier",
                  "start": 3100,
                  "end": 3104,
                  "name": "node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3105,
                  "end": 3109,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 3114,
                "end": 3147,
                "object": {
                  "type": "MemberExpression",
                  "start": 3114,
                  "end": 3127,
                  "object": {
                    "type": "Identifier",
                    "start": 3114,
                    "end": 3116,
                    "name": "ts",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3117,
                    "end": 3127,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3128,
                  "end": 3147,
                  "name": "FunctionDeclaration",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3149,
              "end": 3200,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3159,
                  "end": 3194,
                  "argument": {
                    "type": "CallExpression",
                    "start": 3166,
                    "end": 3193,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3166,
                      "end": 3187,
                      "object": {
                        "type": "Identifier",
                        "start": 3166,
                        "end": 3168,
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3169,
                        "end": 3187,
                        "name": "getJSDocReturnType",
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
                        "start": 3188,
                        "end": 3192,
                        "name": "node",
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
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3205,
            "end": 3238,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3209,
                "end": 3237,
                "id": {
                  "type": "Identifier",
                  "start": 3209,
                  "end": 3213,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3216,
                  "end": 3237,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3216,
                    "end": 3231,
                    "object": {
                      "type": "Identifier",
                      "start": 3216,
                      "end": 3218,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3219,
                      "end": 3231,
                      "name": "getJSDocType",
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
                      "start": 3232,
                      "end": 3236,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 3243,
            "end": 3355,
            "test": {
              "type": "LogicalExpression",
              "start": 3247,
              "end": 3295,
              "left": {
                "type": "Identifier",
                "start": 3247,
                "end": 3251,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3255,
                "end": 3295,
                "left": {
                  "type": "MemberExpression",
                  "start": 3255,
                  "end": 3264,
                  "object": {
                    "type": "Identifier",
                    "start": 3255,
                    "end": 3259,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3260,
                    "end": 3264,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "start": 3269,
                  "end": 3295,
                  "object": {
                    "type": "MemberExpression",
                    "start": 3269,
                    "end": 3282,
                    "object": {
                      "type": "Identifier",
                      "start": 3269,
                      "end": 3271,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3272,
                      "end": 3282,
                      "name": "SyntaxKind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3283,
                    "end": 3295,
                    "name": "FunctionType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3297,
              "end": 3355,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3307,
                  "end": 3349,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 3314,
                    "end": 3348,
                    "object": {
                      "type": "TSAsExpression",
                      "start": 3315,
                      "end": 3342,
                      "expression": {
                        "type": "Identifier",
                        "start": 3315,
                        "end": 3319,
                        "name": "type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3323,
                        "end": 3342,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3323,
                          "end": 3342,
                          "left": {
                            "type": "Identifier",
                            "start": 3323,
                            "end": 3325,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3326,
                            "end": 3342,
                            "name": "FunctionTypeNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3344,
                      "end": 3348,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3359,
      "end": 3424,
      "id": {
        "type": "Identifier",
        "start": 3368,
        "end": 3378,
        "name": "getAllTags",
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
          "start": 3379,
          "end": 3392,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3383,
            "end": 3392,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3385,
              "end": 3392,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 3385,
                "end": 3392,
                "left": {
                  "type": "Identifier",
                  "start": 3385,
                  "end": 3387,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 3388,
                  "end": 3392,
                  "name": "Node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3394,
        "end": 3424,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3400,
            "end": 3422,
            "expression": {
              "type": "CallExpression",
              "start": 3400,
              "end": 3421,
              "callee": {
                "type": "MemberExpression",
                "start": 3400,
                "end": 3415,
                "object": {
                  "type": "Identifier",
                  "start": 3400,
                  "end": 3402,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3403,
                  "end": 3415,
                  "name": "getJSDocTags",
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
                  "start": 3416,
                  "end": 3420,
                  "name": "node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3426,
      "end": 3802,
      "id": {
        "type": "Identifier",
        "start": 3435,
        "end": 3451,
        "name": "getSomeOtherTags",
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
          "start": 3452,
          "end": 3465,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3456,
            "end": 3465,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3458,
              "end": 3465,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 3458,
                "end": 3465,
                "left": {
                  "type": "Identifier",
                  "start": 3458,
                  "end": 3460,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 3461,
                  "end": 3465,
                  "name": "Node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3467,
        "end": 3802,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3473,
            "end": 3518,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3479,
                "end": 3517,
                "id": {
                  "type": "Identifier",
                  "start": 3479,
                  "end": 3512,
                  "name": "tags",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3483,
                    "end": 3512,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3485,
                      "end": 3512,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 3486,
                        "end": 3509,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 3486,
                            "end": 3497,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3486,
                              "end": 3497,
                              "left": {
                                "type": "Identifier",
                                "start": 3486,
                                "end": 3488,
                                "name": "ts",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3489,
                                "end": 3497,
                                "name": "JSDocTag",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 3500,
                            "end": 3509
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3515,
                  "end": 3517,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3523,
            "end": 3563,
            "expression": {
              "type": "CallExpression",
              "start": 3523,
              "end": 3562,
              "callee": {
                "type": "MemberExpression",
                "start": 3523,
                "end": 3532,
                "object": {
                  "type": "Identifier",
                  "start": 3523,
                  "end": 3527,
                  "name": "tags",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3528,
                  "end": 3532,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 3533,
                  "end": 3561,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3533,
                    "end": 3555,
                    "object": {
                      "type": "Identifier",
                      "start": 3533,
                      "end": 3535,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3536,
                      "end": 3555,
                      "name": "getJSDocAugmentsTag",
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
                      "start": 3556,
                      "end": 3560,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3568,
            "end": 3605,
            "expression": {
              "type": "CallExpression",
              "start": 3568,
              "end": 3604,
              "callee": {
                "type": "MemberExpression",
                "start": 3568,
                "end": 3577,
                "object": {
                  "type": "Identifier",
                  "start": 3568,
                  "end": 3572,
                  "name": "tags",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3573,
                  "end": 3577,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 3578,
                  "end": 3603,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3578,
                    "end": 3597,
                    "object": {
                      "type": "Identifier",
                      "start": 3578,
                      "end": 3580,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3581,
                      "end": 3597,
                      "name": "getJSDocClassTag",
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
                      "start": 3598,
                      "end": 3602,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3610,
            "end": 3648,
            "expression": {
              "type": "CallExpression",
              "start": 3610,
              "end": 3647,
              "callee": {
                "type": "MemberExpression",
                "start": 3610,
                "end": 3619,
                "object": {
                  "type": "Identifier",
                  "start": 3610,
                  "end": 3614,
                  "name": "tags",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3615,
                  "end": 3619,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 3620,
                  "end": 3646,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3620,
                    "end": 3640,
                    "object": {
                      "type": "Identifier",
                      "start": 3620,
                      "end": 3622,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3623,
                      "end": 3640,
                      "name": "getJSDocReturnTag",
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
                      "start": 3641,
                      "end": 3645,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3653,
            "end": 3691,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3659,
                "end": 3690,
                "id": {
                  "type": "Identifier",
                  "start": 3659,
                  "end": 3663,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3666,
                  "end": 3690,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3666,
                    "end": 3684,
                    "object": {
                      "type": "Identifier",
                      "start": 3666,
                      "end": 3668,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3669,
                      "end": 3684,
                      "name": "getJSDocTypeTag",
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
                      "start": 3685,
                      "end": 3689,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
            "type": "IfStatement",
            "start": 3696,
            "end": 3738,
            "test": {
              "type": "Identifier",
              "start": 3700,
              "end": 3704,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3706,
              "end": 3738,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3716,
                  "end": 3732,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3716,
                    "end": 3731,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3716,
                      "end": 3725,
                      "object": {
                        "type": "Identifier",
                        "start": 3716,
                        "end": 3720,
                        "name": "tags",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3721,
                        "end": 3725,
                        "name": "push",
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
                        "start": 3726,
                        "end": 3730,
                        "name": "type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3743,
            "end": 3783,
            "expression": {
              "type": "CallExpression",
              "start": 3743,
              "end": 3782,
              "callee": {
                "type": "MemberExpression",
                "start": 3743,
                "end": 3752,
                "object": {
                  "type": "Identifier",
                  "start": 3743,
                  "end": 3747,
                  "name": "tags",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3748,
                  "end": 3752,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 3753,
                  "end": 3781,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3753,
                    "end": 3775,
                    "object": {
                      "type": "Identifier",
                      "start": 3753,
                      "end": 3755,
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3756,
                      "end": 3775,
                      "name": "getJSDocTemplateTag",
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
                      "start": 3776,
                      "end": 3780,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 3788,
            "end": 3800,
            "argument": {
              "type": "Identifier",
              "start": 3795,
              "end": 3799,
              "name": "tags",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
