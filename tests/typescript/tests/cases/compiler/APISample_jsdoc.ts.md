__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 306,
  "end": 3802,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 331,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 330,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 330,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 330,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 327,
                "end": 330
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "parseCommentsIntoDefinition",
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
          "start": 577,
          "end": 586,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 581,
            "end": 586,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 583,
              "end": 586
            }
          }
        },
        {
          "type": "Identifier",
          "start": 625,
          "end": 642,
          "decorators": [],
          "name": "symbol",
          "optional": false,
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
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 642,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 681,
          "end": 748,
          "decorators": [],
          "name": "definition",
          "optional": false,
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
                    "decorators": [],
                    "name": "description",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 718,
                        "end": 726,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 720,
                          "end": 726
                        }
                      }
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
          }
        },
        {
          "type": "Identifier",
          "start": 787,
          "end": 825,
          "decorators": [],
          "name": "otherAnnotations",
          "optional": false,
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
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 809,
                        "end": 817,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 811,
                          "end": 817
                        }
                      }
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 826,
        "end": 832,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 828,
          "end": 832
        }
      },
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
              "argument": {
                "type": "Identifier",
                "start": 844,
                "end": 850,
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 918,
                "end": 970,
                "id": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 926,
                  "decorators": [],
                  "name": "comments",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 936,
                      "end": 959,
                      "decorators": [],
                      "name": "getDocumentationComment",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 960,
                      "end": 969,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "comments",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 990,
                "end": 996,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
                        "decorators": [],
                        "name": "definition",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1030,
                        "decorators": [],
                        "name": "description",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                              "decorators": [],
                              "name": "comments",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1042,
                              "end": 1045,
                              "decorators": [],
                              "name": "map",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1046,
                              "end": 1145,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1046,
                                  "end": 1053,
                                  "decorators": [],
                                  "name": "comment",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
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
                                      "decorators": [],
                                      "name": "comment",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1065,
                                      "end": 1069,
                                      "decorators": [],
                                      "name": "kind",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
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
                                    "decorators": [],
                                    "name": "comment",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1096,
                                    "end": 1100,
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
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
                                            "decorators": [],
                                            "name": "comment",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1111,
                                            "end": 1115,
                                            "decorators": [],
                                            "name": "text",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1116,
                                          "end": 1120,
                                          "decorators": [],
                                          "name": "trim",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1123,
                                      "end": 1130,
                                      "decorators": [],
                                      "name": "replace",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
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
                                  "optional": false
                                }
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1147,
                          "end": 1151,
                          "decorators": [],
                          "name": "join",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1152,
                          "end": 1154,
                          "value": "",
                          "raw": "\"\""
                        }
                      ],
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
            "type": "VariableDeclaration",
            "start": 1209,
            "end": 1258,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1215,
                "end": 1257,
                "id": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1221,
                  "decorators": [],
                  "name": "jsdocs",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1231,
                      "end": 1243,
                      "decorators": [],
                      "name": "getJsDocTags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                        "decorators": [],
                        "name": "checker",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "jsdocs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1270,
                  "end": 1277,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1278,
                  "end": 1606,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1278,
                      "end": 1281,
                      "decorators": [],
                      "name": "doc",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1285,
                    "end": 1606,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1361,
                        "end": 1388,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1367,
                            "end": 1387,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 1367,
                              "end": 1381,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1369,
                                  "end": 1373,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1369,
                                    "end": 1373,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1369,
                                    "end": 1373,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 1375,
                                  "end": 1379,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1375,
                                    "end": 1379,
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1375,
                                    "end": 1379,
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1384,
                              "end": 1387,
                              "decorators": [],
                              "name": "doc",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
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
                              "decorators": [],
                              "name": "userValidationKeywords",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1429,
                            "end": 1433,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
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
                                    "decorators": [],
                                    "name": "definition",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1461,
                                    "end": 1465,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
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
                                      "decorators": [],
                                      "name": "parseValue",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1485,
                                      "end": 1489,
                                      "decorators": [],
                                      "name": "text",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
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
                                    "decorators": [],
                                    "name": "otherAnnotations",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "start": 1573,
                                    "end": 1581,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1573,
                                      "end": 1576,
                                      "decorators": [],
                                      "name": "doc",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1577,
                                      "end": 1581,
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "optional": false,
                                  "computed": true
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
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "Annotations",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1720,
                    "end": 1728,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1722,
                      "end": 1728
                    }
                  }
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1738,
      "end": 2426,
      "id": {
        "type": "Identifier",
        "start": 1747,
        "end": 1761,
        "decorators": [],
        "name": "getAnnotations",
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
          "start": 1762,
          "end": 1771,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1766,
            "end": 1771,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1768,
              "end": 1771
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1773,
          "end": 1786,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1782,
                  "end": 1786,
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
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
                "decorators": [],
                "name": "Annotations",
                "optional": false,
                "typeAnnotation": null
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 1813,
        "end": 2426,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1819,
            "end": 1866,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1825,
                "end": 1865,
                "id": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1842,
                  "decorators": [],
                  "name": "symbol",
                  "optional": false,
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
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1842,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
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
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
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
              "argument": {
                "type": "Identifier",
                "start": 1876,
                "end": 1882,
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1929,
                "end": 1993,
                "id": {
                  "type": "Identifier",
                  "start": 1929,
                  "end": 1957,
                  "decorators": [],
                  "name": "jsDocTags",
                  "optional": false,
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
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1943,
                            "end": 1955,
                            "decorators": [],
                            "name": "JSDocTagInfo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  }
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
                      "decorators": [],
                      "name": "symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1967,
                      "end": 1979,
                      "decorators": [],
                      "name": "getJsDocTags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                        "decorators": [],
                        "name": "checker",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
                "argument": {
                  "type": "Identifier",
                  "start": 2004,
                  "end": 2013,
                  "decorators": [],
                  "name": "jsDocTags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "||",
              "right": {
                "type": "UnaryExpression",
                "start": 2017,
                "end": 2034,
                "operator": "!",
                "argument": {
                  "type": "MemberExpression",
                  "start": 2018,
                  "end": 2034,
                  "object": {
                    "type": "Identifier",
                    "start": 2018,
                    "end": 2027,
                    "decorators": [],
                    "name": "jsDocTags",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2028,
                    "end": 2034,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "prefix": true
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
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2081,
                "end": 2353,
                "id": {
                  "type": "Identifier",
                  "start": 2081,
                  "end": 2105,
                  "decorators": [],
                  "name": "annotations",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Annotations",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
                      "decorators": [],
                      "name": "jsDocTags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2118,
                      "end": 2124,
                      "decorators": [],
                      "name": "reduce",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2125,
                      "end": 2348,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2126,
                          "end": 2145,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
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
                                "decorators": [],
                                "name": "Annotations",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 2147,
                          "end": 2172,
                          "decorators": [],
                          "name": "jsDocTag",
                          "optional": false,
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
                                  "decorators": [],
                                  "name": "ts",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2160,
                                  "end": 2172,
                                  "decorators": [],
                                  "name": "JSDocTagInfo",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2177,
                        "end": 2348,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 2187,
                            "end": 2230,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 2193,
                                "end": 2229,
                                "id": {
                                  "type": "Identifier",
                                  "start": 2193,
                                  "end": 2198,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "parseJsDocTag",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 2220,
                                      "end": 2228,
                                      "decorators": [],
                                      "name": "jsDocTag",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
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
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "!==",
                              "right": {
                                "type": "Identifier",
                                "start": 2253,
                                "end": 2262,
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "start": 2285,
                                        "end": 2298,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 2285,
                                          "end": 2293,
                                          "decorators": [],
                                          "name": "jsDocTag",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 2294,
                                          "end": 2298,
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "optional": false,
                                      "computed": true
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2302,
                                      "end": 2307,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
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
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 2350,
                      "end": 2352,
                      "properties": []
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2373,
                      "end": 2377,
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2378,
                      "end": 2389,
                      "decorators": [],
                      "name": "annotations",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2391,
                  "end": 2397,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 2400,
                "end": 2411,
                "decorators": [],
                "name": "annotations",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "Identifier",
                "start": 2414,
                "end": 2423,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2484,
      "end": 3041,
      "id": {
        "type": "Identifier",
        "start": 2493,
        "end": 2510,
        "decorators": [],
        "name": "parseSpecificTags",
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
          "start": 2511,
          "end": 2524,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2520,
                  "end": 2524,
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2541,
                  "end": 2545,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2553,
                    "end": 2563,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2564,
                  "end": 2573,
                  "decorators": [],
                  "name": "Parameter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2595,
                        "end": 2616,
                        "decorators": [],
                        "name": "getJSDocParameterTags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TSAsExpression",
                        "start": 2617,
                        "end": 2648,
                        "expression": {
                          "type": "Identifier",
                          "start": 2617,
                          "end": 2621,
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2628,
                              "end": 2648,
                              "decorators": [],
                              "name": "ParameterDeclaration",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "optional": false
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
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2670,
                  "end": 2674,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2682,
                    "end": 2692,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2693,
                  "end": 2712,
                  "decorators": [],
                  "name": "FunctionDeclaration",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2730,
                      "end": 2767,
                      "id": {
                        "type": "Identifier",
                        "start": 2730,
                        "end": 2734,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 2737,
                        "end": 2767,
                        "expression": {
                          "type": "Identifier",
                          "start": 2737,
                          "end": 2741,
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2748,
                              "end": 2767,
                              "decorators": [],
                              "name": "FunctionDeclaration",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "definite": false
                    }
                  ],
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
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2784,
                        "end": 2805,
                        "decorators": [],
                        "name": "hasJSDocParameterTags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2806,
                        "end": 2810,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2833,
                            "end": 2857,
                            "id": {
                              "type": "Identifier",
                              "start": 2833,
                              "end": 2852,
                              "decorators": [],
                              "name": "flat",
                              "optional": false,
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
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 2842,
                                        "end": 2850,
                                        "decorators": [],
                                        "name": "JSDocTag",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
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
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2882,
                              "end": 2886,
                              "id": {
                                "type": "Identifier",
                                "start": 2882,
                                "end": 2886,
                                "decorators": [],
                                "name": "tags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
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
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2895,
                                "end": 2905,
                                "decorators": [],
                                "name": "parameters",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2906,
                              "end": 2909,
                              "decorators": [],
                              "name": "map",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 2910,
                              "end": 2934,
                              "object": {
                                "type": "Identifier",
                                "start": 2910,
                                "end": 2912,
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2913,
                                "end": 2934,
                                "decorators": [],
                                "name": "getJSDocParameterTags",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ],
                          "optional": false
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
                                "decorators": [],
                                "name": "tags",
                                "optional": false,
                                "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "flat",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2970,
                                      "end": 2974,
                                      "decorators": [],
                                      "name": "push",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "SpreadElement",
                                      "start": 2975,
                                      "end": 2982,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 2978,
                                        "end": 2982,
                                        "decorators": [],
                                        "name": "tags",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ],
                                  "optional": false
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
                          "decorators": [],
                          "name": "flat",
                          "optional": false,
                          "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3043,
      "end": 3357,
      "id": {
        "type": "Identifier",
        "start": 3052,
        "end": 3074,
        "decorators": [],
        "name": "getReturnTypeFromJSDoc",
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
          "start": 3075,
          "end": 3088,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3084,
                  "end": 3088,
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3105,
                  "end": 3109,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3117,
                    "end": 3127,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3128,
                  "end": 3147,
                  "decorators": [],
                  "name": "FunctionDeclaration",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3169,
                        "end": 3187,
                        "decorators": [],
                        "name": "getJSDocReturnType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3188,
                        "end": 3192,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3209,
                "end": 3237,
                "id": {
                  "type": "Identifier",
                  "start": 3209,
                  "end": 3213,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3219,
                      "end": 3231,
                      "decorators": [],
                      "name": "getJSDocType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3232,
                      "end": 3236,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3260,
                    "end": 3264,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3272,
                      "end": 3282,
                      "decorators": [],
                      "name": "SyntaxKind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3283,
                    "end": 3295,
                    "decorators": [],
                    "name": "FunctionType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3326,
                            "end": 3342,
                            "decorators": [],
                            "name": "FunctionTypeNode",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3344,
                      "end": 3348,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3359,
      "end": 3424,
      "id": {
        "type": "Identifier",
        "start": 3368,
        "end": 3378,
        "decorators": [],
        "name": "getAllTags",
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
          "start": 3379,
          "end": 3392,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3388,
                  "end": 3392,
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3403,
                  "end": 3415,
                  "decorators": [],
                  "name": "getJSDocTags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3416,
                  "end": 3420,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3426,
      "end": 3802,
      "id": {
        "type": "Identifier",
        "start": 3435,
        "end": 3451,
        "decorators": [],
        "name": "getSomeOtherTags",
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
          "start": 3452,
          "end": 3465,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3461,
                  "end": 3465,
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3467,
        "end": 3802,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3473,
            "end": 3518,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3479,
                "end": 3517,
                "id": {
                  "type": "Identifier",
                  "start": 3479,
                  "end": 3512,
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
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
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3489,
                                "end": 3497,
                                "decorators": [],
                                "name": "JSDocTag",
                                "optional": false,
                                "typeAnnotation": null
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
                  }
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
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3528,
                  "end": 3532,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3536,
                      "end": 3555,
                      "decorators": [],
                      "name": "getJSDocAugmentsTag",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3556,
                      "end": 3560,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
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
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3573,
                  "end": 3577,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3581,
                      "end": 3597,
                      "decorators": [],
                      "name": "getJSDocClassTag",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3598,
                      "end": 3602,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
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
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3615,
                  "end": 3619,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3623,
                      "end": 3640,
                      "decorators": [],
                      "name": "getJSDocReturnTag",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3641,
                      "end": 3645,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3653,
            "end": 3691,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3659,
                "end": 3690,
                "id": {
                  "type": "Identifier",
                  "start": 3659,
                  "end": 3663,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3669,
                      "end": 3684,
                      "decorators": [],
                      "name": "getJSDocTypeTag",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3685,
                      "end": 3689,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
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
                        "decorators": [],
                        "name": "tags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3721,
                        "end": 3725,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3726,
                        "end": 3730,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3748,
                  "end": 3752,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3756,
                      "end": 3775,
                      "decorators": [],
                      "name": "getJSDocTemplateTag",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 3776,
                      "end": 3780,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
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
              "decorators": [],
              "name": "tags",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
