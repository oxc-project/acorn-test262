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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 327,
                "end": 330
              },
              "start": 325,
              "end": 330
            },
            "start": 318,
            "end": 330
          },
          "init": null,
          "definite": false,
          "start": 318,
          "end": 330
        }
      ],
      "declare": true,
      "start": 306,
      "end": 331
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 347
          },
          "start": 340,
          "end": 347
        }
      ],
      "source": {
        "type": "Literal",
        "value": "typescript",
        "raw": "\"typescript\"",
        "start": 353,
        "end": 365
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 333,
      "end": 366
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parseCommentsIntoDefinition",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 576
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 583,
              "end": 586
            },
            "start": 581,
            "end": 586
          },
          "start": 577,
          "end": 586
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "symbol",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 635
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 642
                },
                "start": 633,
                "end": 642
              },
              "typeArguments": null,
              "start": 633,
              "end": 642
            },
            "start": 631,
            "end": 642
          },
          "start": 625,
          "end": 642
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "description",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 705
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 708,
                      "end": 714
                    },
                    "start": 706,
                    "end": 714
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 694,
                  "end": 715
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 720,
                          "end": 726
                        },
                        "start": 718,
                        "end": 726
                      },
                      "start": 717,
                      "end": 726
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 729,
                      "end": 747
                    },
                    "start": 727,
                    "end": 747
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 716,
                  "end": 747
                }
              ],
              "start": 693,
              "end": 748
            },
            "start": 691,
            "end": 748
          },
          "start": 681,
          "end": 748
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "otherAnnotations",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 811,
                          "end": 817
                        },
                        "start": 809,
                        "end": 817
                      },
                      "start": 808,
                      "end": 817
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 820,
                        "end": 824
                      },
                      "start": 820,
                      "end": 824
                    },
                    "start": 818,
                    "end": 824
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 807,
                  "end": 824
                }
              ],
              "start": 805,
              "end": 825
            },
            "start": 803,
            "end": 825
          },
          "start": 787,
          "end": 825
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 828,
          "end": 832
        },
        "start": 826,
        "end": 832
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
                "type": "Identifier",
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 850
              },
              "prefix": true,
              "start": 843,
              "end": 850
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 862,
                  "end": 869
                }
              ],
              "start": 852,
              "end": 875
            },
            "alternate": null,
            "start": 839,
            "end": 875
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 918,
                  "end": 926
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 929,
                      "end": 935
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getDocumentationComment",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 936,
                      "end": 959
                    },
                    "optional": false,
                    "computed": false,
                    "start": 929,
                    "end": 959
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 960,
                      "end": 969
                    }
                  ],
                  "optional": false,
                  "start": 929,
                  "end": 970
                },
                "definite": false,
                "start": 918,
                "end": 970
              }
            ],
            "declare": false,
            "start": 914,
            "end": 971
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "comments",
                "optional": false,
                "typeAnnotation": null,
                "start": 981,
                "end": 989
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 996
              },
              "optional": false,
              "computed": false,
              "start": 981,
              "end": 996
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1008,
                        "end": 1018
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "description",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1019,
                        "end": 1030
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1008,
                      "end": 1030
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
                              "name": "comments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1033,
                              "end": 1041
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "map",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1042,
                              "end": 1045
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1033,
                            "end": 1045
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "comment",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1046,
                                  "end": 1053
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "comment",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1057,
                                      "end": 1064
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "kind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1065,
                                      "end": 1069
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1057,
                                    "end": 1069
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Literal",
                                    "value": "lineBreak",
                                    "raw": "\"lineBreak\"",
                                    "start": 1074,
                                    "end": 1085
                                  },
                                  "start": 1057,
                                  "end": 1085
                                },
                                "consequent": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "comment",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1088,
                                    "end": 1095
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1096,
                                    "end": 1100
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1088,
                                  "end": 1100
                                },
                                "alternate": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "comment",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1103,
                                            "end": 1110
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "text",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1111,
                                            "end": 1115
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1103,
                                          "end": 1115
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "trim",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1116,
                                          "end": 1120
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1103,
                                        "end": 1120
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 1103,
                                      "end": 1122
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "replace",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1123,
                                      "end": 1130
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1103,
                                    "end": 1130
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "/\\r\\n/g",
                                      "regex": {
                                        "pattern": "\\r\\n",
                                        "flags": "g"
                                      },
                                      "start": 1131,
                                      "end": 1138
                                    },
                                    {
                                      "type": "Literal",
                                      "value": "\n",
                                      "raw": "\"\\n\"",
                                      "start": 1140,
                                      "end": 1144
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1103,
                                  "end": 1145
                                },
                                "start": 1057,
                                "end": 1145
                              },
                              "id": null,
                              "generator": false,
                              "start": 1046,
                              "end": 1145
                            }
                          ],
                          "optional": false,
                          "start": 1033,
                          "end": 1146
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "join",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1147,
                          "end": 1151
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1033,
                        "end": 1151
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 1152,
                          "end": 1154
                        }
                      ],
                      "optional": false,
                      "start": 1033,
                      "end": 1155
                    },
                    "start": 1008,
                    "end": 1155
                  },
                  "directive": null,
                  "start": 1008,
                  "end": 1156
                }
              ],
              "start": 998,
              "end": 1162
            },
            "alternate": null,
            "start": 977,
            "end": 1162
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "jsdocs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1215,
                  "end": 1221
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1224,
                      "end": 1230
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJsDocTags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1231,
                      "end": 1243
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1224,
                    "end": 1243
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1244,
                        "end": 1248
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "checker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1249,
                        "end": 1256
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1244,
                      "end": 1256
                    }
                  ],
                  "optional": false,
                  "start": 1224,
                  "end": 1257
                },
                "definite": false,
                "start": 1215,
                "end": 1257
              }
            ],
            "declare": false,
            "start": 1209,
            "end": 1258
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "jsdocs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1263,
                  "end": 1269
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1270,
                  "end": 1277
                },
                "optional": false,
                "computed": false,
                "start": 1263,
                "end": 1277
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1278,
                      "end": 1281
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1369,
                                    "end": 1373
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1369,
                                    "end": 1373
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1369,
                                  "end": 1373
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1375,
                                    "end": 1379
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1375,
                                    "end": 1379
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1375,
                                  "end": 1379
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1367,
                              "end": 1381
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "doc",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1384,
                              "end": 1387
                            },
                            "definite": false,
                            "start": 1367,
                            "end": 1387
                          }
                        ],
                        "declare": false,
                        "start": 1361,
                        "end": 1388
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1401,
                              "end": 1405
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "userValidationKeywords",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1406,
                              "end": 1428
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1401,
                            "end": 1428
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1429,
                            "end": 1433
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1401,
                          "end": 1434
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "definition",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1450,
                                    "end": 1460
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1461,
                                    "end": 1465
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1450,
                                  "end": 1466
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1469,
                                      "end": 1473
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parseValue",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1474,
                                      "end": 1484
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1469,
                                    "end": 1484
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "text",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1485,
                                      "end": 1489
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1469,
                                  "end": 1490
                                },
                                "start": 1450,
                                "end": 1490
                              },
                              "directive": null,
                              "start": 1450,
                              "end": 1491
                            }
                          ],
                          "start": 1436,
                          "end": 1501
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "otherAnnotations",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1556,
                                    "end": 1572
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "doc",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1573,
                                      "end": 1576
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1577,
                                      "end": 1581
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1573,
                                    "end": 1581
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1556,
                                  "end": 1582
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 1585,
                                  "end": 1589
                                },
                                "start": 1556,
                                "end": 1589
                              },
                              "directive": null,
                              "start": 1556,
                              "end": 1590
                            }
                          ],
                          "start": 1507,
                          "end": 1600
                        },
                        "start": 1397,
                        "end": 1600
                      }
                    ],
                    "start": 1285,
                    "end": 1606
                  },
                  "id": null,
                  "generator": false,
                  "start": 1278,
                  "end": 1606
                }
              ],
              "optional": false,
              "start": 1263,
              "end": 1607
            },
            "directive": null,
            "start": 1263,
            "end": 1608
          }
        ],
        "start": 833,
        "end": 1610
      },
      "expression": false,
      "start": 540,
      "end": 1610
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Annotations",
          "optional": false,
          "typeAnnotation": null,
          "start": 1697,
          "end": 1708
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1722,
                      "end": 1728
                    },
                    "start": 1720,
                    "end": 1728
                  },
                  "start": 1716,
                  "end": 1728
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1731,
                  "end": 1734
                },
                "start": 1729,
                "end": 1734
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1715,
              "end": 1735
            }
          ],
          "start": 1709,
          "end": 1737
        },
        "declare": false,
        "start": 1687,
        "end": 1737
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1680,
      "end": 1737
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAnnotations",
        "optional": false,
        "typeAnnotation": null,
        "start": 1747,
        "end": 1761
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1768,
              "end": 1771
            },
            "start": 1766,
            "end": 1771
          },
          "start": 1762,
          "end": 1771
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1779,
                  "end": 1781
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1782,
                  "end": 1786
                },
                "start": 1779,
                "end": 1786
              },
              "typeArguments": null,
              "start": 1779,
              "end": 1786
            },
            "start": 1777,
            "end": 1786
          },
          "start": 1773,
          "end": 1786
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Annotations",
                "optional": false,
                "typeAnnotation": null,
                "start": 1789,
                "end": 1800
              },
              "typeArguments": null,
              "start": 1789,
              "end": 1800
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 1803,
              "end": 1812
            }
          ],
          "start": 1789,
          "end": 1812
        },
        "start": 1787,
        "end": 1812
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1833,
                          "end": 1835
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1836,
                          "end": 1842
                        },
                        "start": 1833,
                        "end": 1842
                      },
                      "typeArguments": null,
                      "start": 1833,
                      "end": 1842
                    },
                    "start": 1831,
                    "end": 1842
                  },
                  "start": 1825,
                  "end": 1842
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1846,
                      "end": 1850
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1854,
                      "end": 1857
                    },
                    "start": 1846,
                    "end": 1857
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1859,
                    "end": 1865
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1845,
                  "end": 1865
                },
                "definite": false,
                "start": 1825,
                "end": 1865
              }
            ],
            "declare": false,
            "start": 1819,
            "end": 1866
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1876,
                "end": 1882
              },
              "prefix": true,
              "start": 1875,
              "end": 1882
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1901,
                    "end": 1910
                  },
                  "start": 1894,
                  "end": 1911
                }
              ],
              "start": 1884,
              "end": 1917
            },
            "alternate": null,
            "start": 1871,
            "end": 1917
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "jsDocTags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1940,
                            "end": 1942
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSDocTagInfo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1943,
                            "end": 1955
                          },
                          "start": 1940,
                          "end": 1955
                        },
                        "typeArguments": null,
                        "start": 1940,
                        "end": 1955
                      },
                      "start": 1940,
                      "end": 1957
                    },
                    "start": 1938,
                    "end": 1957
                  },
                  "start": 1929,
                  "end": 1957
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1960,
                      "end": 1966
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJsDocTags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1967,
                      "end": 1979
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1960,
                    "end": 1979
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1980,
                        "end": 1984
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "checker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1985,
                        "end": 1992
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1980,
                      "end": 1992
                    }
                  ],
                  "optional": false,
                  "start": 1960,
                  "end": 1993
                },
                "definite": false,
                "start": 1929,
                "end": 1993
              }
            ],
            "declare": false,
            "start": 1923,
            "end": 1994
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "jsDocTags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2004,
                  "end": 2013
                },
                "prefix": true,
                "start": 2003,
                "end": 2013
              },
              "operator": "||",
              "right": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "jsDocTags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2018,
                    "end": 2027
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2028,
                    "end": 2034
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2018,
                  "end": 2034
                },
                "prefix": true,
                "start": 2017,
                "end": 2034
              },
              "start": 2003,
              "end": 2034
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2053,
                    "end": 2062
                  },
                  "start": 2046,
                  "end": 2063
                }
              ],
              "start": 2036,
              "end": 2069
            },
            "alternate": null,
            "start": 1999,
            "end": 2069
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "annotations",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Annotations",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2094,
                        "end": 2105
                      },
                      "typeArguments": null,
                      "start": 2094,
                      "end": 2105
                    },
                    "start": 2092,
                    "end": 2105
                  },
                  "start": 2081,
                  "end": 2105
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "jsDocTags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2108,
                      "end": 2117
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reduce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2118,
                      "end": 2124
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2108,
                    "end": 2124
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Annotations",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2134,
                                "end": 2145
                              },
                              "typeArguments": null,
                              "start": 2134,
                              "end": 2145
                            },
                            "start": 2132,
                            "end": 2145
                          },
                          "start": 2126,
                          "end": 2145
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "jsDocTag",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ts",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2157,
                                  "end": 2159
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "JSDocTagInfo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2160,
                                  "end": 2172
                                },
                                "start": 2157,
                                "end": 2172
                              },
                              "typeArguments": null,
                              "start": 2157,
                              "end": 2172
                            },
                            "start": 2155,
                            "end": 2172
                          },
                          "start": 2147,
                          "end": 2172
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2193,
                                  "end": 2198
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2201,
                                      "end": 2205
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parseJsDocTag",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2206,
                                      "end": 2219
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2201,
                                    "end": 2219
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "jsDocTag",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2220,
                                      "end": 2228
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2201,
                                  "end": 2229
                                },
                                "definite": false,
                                "start": 2193,
                                "end": 2229
                              }
                            ],
                            "declare": false,
                            "start": 2187,
                            "end": 2230
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2243,
                                "end": 2248
                              },
                              "operator": "!==",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2253,
                                "end": 2262
                              },
                              "start": 2243,
                              "end": 2262
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2278,
                                        "end": 2284
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "jsDocTag",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2285,
                                          "end": 2293
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2294,
                                          "end": 2298
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 2285,
                                        "end": 2298
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 2278,
                                      "end": 2299
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2302,
                                      "end": 2307
                                    },
                                    "start": 2278,
                                    "end": 2307
                                  },
                                  "directive": null,
                                  "start": 2278,
                                  "end": 2308
                                }
                              ],
                              "start": 2264,
                              "end": 2318
                            },
                            "alternate": null,
                            "start": 2239,
                            "end": 2318
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2335,
                              "end": 2341
                            },
                            "start": 2328,
                            "end": 2342
                          }
                        ],
                        "start": 2177,
                        "end": 2348
                      },
                      "id": null,
                      "generator": false,
                      "start": 2125,
                      "end": 2348
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 2350,
                      "end": 2352
                    }
                  ],
                  "optional": false,
                  "start": 2108,
                  "end": 2353
                },
                "definite": false,
                "start": 2081,
                "end": 2353
              }
            ],
            "declare": false,
            "start": 2075,
            "end": 2354
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2366,
                      "end": 2372
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2373,
                      "end": 2377
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2366,
                    "end": 2377
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "annotations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2378,
                      "end": 2389
                    }
                  ],
                  "optional": false,
                  "start": 2366,
                  "end": 2390
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2391,
                  "end": 2397
                },
                "optional": false,
                "computed": false,
                "start": 2366,
                "end": 2397
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "annotations",
                "optional": false,
                "typeAnnotation": null,
                "start": 2400,
                "end": 2411
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2414,
                "end": 2423
              },
              "start": 2366,
              "end": 2423
            },
            "start": 2359,
            "end": 2424
          }
        ],
        "start": 1813,
        "end": 2426
      },
      "expression": false,
      "start": 1738,
      "end": 2426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parseSpecificTags",
        "optional": false,
        "typeAnnotation": null,
        "start": 2493,
        "end": 2510
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2517,
                  "end": 2519
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2520,
                  "end": 2524
                },
                "start": 2517,
                "end": 2524
              },
              "typeArguments": null,
              "start": 2517,
              "end": 2524
            },
            "start": 2515,
            "end": 2524
          },
          "start": 2511,
          "end": 2524
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2536,
                  "end": 2540
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2541,
                  "end": 2545
                },
                "optional": false,
                "computed": false,
                "start": 2536,
                "end": 2545
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2550,
                    "end": 2552
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2553,
                    "end": 2563
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2550,
                  "end": 2563
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parameter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2564,
                  "end": 2573
                },
                "optional": false,
                "computed": false,
                "start": 2550,
                "end": 2573
              },
              "start": 2536,
              "end": 2573
            },
            "consequent": {
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
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2592,
                        "end": 2594
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getJSDocParameterTags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2595,
                        "end": 2616
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2592,
                      "end": 2616
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2617,
                          "end": 2621
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2625,
                              "end": 2627
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ParameterDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2628,
                              "end": 2648
                            },
                            "start": 2625,
                            "end": 2648
                          },
                          "typeArguments": null,
                          "start": 2625,
                          "end": 2648
                        },
                        "start": 2617,
                        "end": 2648
                      }
                    ],
                    "optional": false,
                    "start": 2592,
                    "end": 2649
                  },
                  "start": 2585,
                  "end": 2650
                }
              ],
              "start": 2575,
              "end": 2656
            },
            "alternate": null,
            "start": 2532,
            "end": 2656
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2665,
                  "end": 2669
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2670,
                  "end": 2674
                },
                "optional": false,
                "computed": false,
                "start": 2665,
                "end": 2674
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2679,
                    "end": 2681
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2682,
                    "end": 2692
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2679,
                  "end": 2692
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2693,
                  "end": 2712
                },
                "optional": false,
                "computed": false,
                "start": 2679,
                "end": 2712
              },
              "start": 2665,
              "end": 2712
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2730,
                        "end": 2734
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2737,
                          "end": 2741
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2745,
                              "end": 2747
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FunctionDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2748,
                              "end": 2767
                            },
                            "start": 2745,
                            "end": 2767
                          },
                          "typeArguments": null,
                          "start": 2745,
                          "end": 2767
                        },
                        "start": 2737,
                        "end": 2767
                      },
                      "definite": false,
                      "start": 2730,
                      "end": 2767
                    }
                  ],
                  "declare": false,
                  "start": 2724,
                  "end": 2768
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2781,
                        "end": 2783
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasJSDocParameterTags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2784,
                        "end": 2805
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2781,
                      "end": 2805
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2806,
                        "end": 2810
                      }
                    ],
                    "optional": false,
                    "start": 2781,
                    "end": 2811
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "flat",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2839,
                                        "end": 2841
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "JSDocTag",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2842,
                                        "end": 2850
                                      },
                                      "start": 2839,
                                      "end": 2850
                                    },
                                    "typeArguments": null,
                                    "start": 2839,
                                    "end": 2850
                                  },
                                  "start": 2839,
                                  "end": 2852
                                },
                                "start": 2837,
                                "end": 2852
                              },
                              "start": 2833,
                              "end": 2852
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 2855,
                              "end": 2857
                            },
                            "definite": false,
                            "start": 2833,
                            "end": 2857
                          }
                        ],
                        "declare": false,
                        "start": 2827,
                        "end": 2858
                      },
                      {
                        "type": "ForOfStatement",
                        "await": false,
                        "left": {
                          "type": "VariableDeclaration",
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "tags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2882,
                                "end": 2886
                              },
                              "init": null,
                              "definite": false,
                              "start": 2882,
                              "end": 2886
                            }
                          ],
                          "declare": false,
                          "start": 2876,
                          "end": 2886
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2890,
                                "end": 2894
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "parameters",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2895,
                                "end": 2905
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2890,
                              "end": 2905
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "map",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2906,
                              "end": 2909
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2890,
                            "end": 2909
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2910,
                                "end": 2912
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getJSDocParameterTags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2913,
                                "end": 2934
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2910,
                              "end": 2934
                            }
                          ],
                          "optional": false,
                          "start": 2890,
                          "end": 2935
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "tags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2959,
                                "end": 2963
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "flat",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2965,
                                      "end": 2969
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "push",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2970,
                                      "end": 2974
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2965,
                                    "end": 2974
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tags",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2978,
                                        "end": 2982
                                      },
                                      "start": 2975,
                                      "end": 2982
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2965,
                                  "end": 2983
                                },
                                "directive": null,
                                "start": 2965,
                                "end": 2984
                              },
                              "alternate": null,
                              "start": 2955,
                              "end": 2984
                            }
                          ],
                          "start": 2937,
                          "end": 2998
                        },
                        "start": 2871,
                        "end": 2998
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3018,
                          "end": 3022
                        },
                        "start": 3011,
                        "end": 3023
                      }
                    ],
                    "start": 2813,
                    "end": 3033
                  },
                  "alternate": null,
                  "start": 2777,
                  "end": 3033
                }
              ],
              "start": 2714,
              "end": 3039
            },
            "alternate": null,
            "start": 2661,
            "end": 3039
          }
        ],
        "start": 2526,
        "end": 3041
      },
      "expression": false,
      "start": 2484,
      "end": 3041
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getReturnTypeFromJSDoc",
        "optional": false,
        "typeAnnotation": null,
        "start": 3052,
        "end": 3074
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3081,
                  "end": 3083
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3084,
                  "end": 3088
                },
                "start": 3081,
                "end": 3088
              },
              "typeArguments": null,
              "start": 3081,
              "end": 3088
            },
            "start": 3079,
            "end": 3088
          },
          "start": 3075,
          "end": 3088
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3100,
                  "end": 3104
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3105,
                  "end": 3109
                },
                "optional": false,
                "computed": false,
                "start": 3100,
                "end": 3109
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3114,
                    "end": 3116
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3117,
                    "end": 3127
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3114,
                  "end": 3127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3128,
                  "end": 3147
                },
                "optional": false,
                "computed": false,
                "start": 3114,
                "end": 3147
              },
              "start": 3100,
              "end": 3147
            },
            "consequent": {
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
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3166,
                        "end": 3168
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getJSDocReturnType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3169,
                        "end": 3187
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3166,
                      "end": 3187
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3188,
                        "end": 3192
                      }
                    ],
                    "optional": false,
                    "start": 3166,
                    "end": 3193
                  },
                  "start": 3159,
                  "end": 3194
                }
              ],
              "start": 3149,
              "end": 3200
            },
            "alternate": null,
            "start": 3096,
            "end": 3200
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3209,
                  "end": 3213
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3216,
                      "end": 3218
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3219,
                      "end": 3231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3216,
                    "end": 3231
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3232,
                      "end": 3236
                    }
                  ],
                  "optional": false,
                  "start": 3216,
                  "end": 3237
                },
                "definite": false,
                "start": 3209,
                "end": 3237
              }
            ],
            "declare": false,
            "start": 3205,
            "end": 3238
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 3247,
                "end": 3251
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3255,
                    "end": 3259
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3260,
                    "end": 3264
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3255,
                  "end": 3264
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3269,
                      "end": 3271
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SyntaxKind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3272,
                      "end": 3282
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3269,
                    "end": 3282
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FunctionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3283,
                    "end": 3295
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3269,
                  "end": 3295
                },
                "start": 3255,
                "end": 3295
              },
              "start": 3247,
              "end": 3295
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3315,
                        "end": 3319
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3323,
                            "end": 3325
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FunctionTypeNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3326,
                            "end": 3342
                          },
                          "start": 3323,
                          "end": 3342
                        },
                        "typeArguments": null,
                        "start": 3323,
                        "end": 3342
                      },
                      "start": 3315,
                      "end": 3342
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3344,
                      "end": 3348
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3314,
                    "end": 3348
                  },
                  "start": 3307,
                  "end": 3349
                }
              ],
              "start": 3297,
              "end": 3355
            },
            "alternate": null,
            "start": 3243,
            "end": 3355
          }
        ],
        "start": 3090,
        "end": 3357
      },
      "expression": false,
      "start": 3043,
      "end": 3357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAllTags",
        "optional": false,
        "typeAnnotation": null,
        "start": 3368,
        "end": 3378
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3385,
                  "end": 3387
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3388,
                  "end": 3392
                },
                "start": 3385,
                "end": 3392
              },
              "typeArguments": null,
              "start": 3385,
              "end": 3392
            },
            "start": 3383,
            "end": 3392
          },
          "start": 3379,
          "end": 3392
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3400,
                  "end": 3402
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getJSDocTags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3403,
                  "end": 3415
                },
                "optional": false,
                "computed": false,
                "start": 3400,
                "end": 3415
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3416,
                  "end": 3420
                }
              ],
              "optional": false,
              "start": 3400,
              "end": 3421
            },
            "directive": null,
            "start": 3400,
            "end": 3422
          }
        ],
        "start": 3394,
        "end": 3424
      },
      "expression": false,
      "start": 3359,
      "end": 3424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSomeOtherTags",
        "optional": false,
        "typeAnnotation": null,
        "start": 3435,
        "end": 3451
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3458,
                  "end": 3460
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3461,
                  "end": 3465
                },
                "start": 3458,
                "end": 3465
              },
              "typeArguments": null,
              "start": 3458,
              "end": 3465
            },
            "start": 3456,
            "end": 3465
          },
          "start": 3452,
          "end": 3465
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3486,
                                "end": 3488
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "JSDocTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3489,
                                "end": 3497
                              },
                              "start": 3486,
                              "end": 3497
                            },
                            "typeArguments": null,
                            "start": 3486,
                            "end": 3497
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 3500,
                            "end": 3509
                          }
                        ],
                        "start": 3486,
                        "end": 3509
                      },
                      "start": 3485,
                      "end": 3512
                    },
                    "start": 3483,
                    "end": 3512
                  },
                  "start": 3479,
                  "end": 3512
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 3515,
                  "end": 3517
                },
                "definite": false,
                "start": 3479,
                "end": 3517
              }
            ],
            "declare": false,
            "start": 3473,
            "end": 3518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3523,
                  "end": 3527
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3528,
                  "end": 3532
                },
                "optional": false,
                "computed": false,
                "start": 3523,
                "end": 3532
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3533,
                      "end": 3535
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocAugmentsTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3536,
                      "end": 3555
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3533,
                    "end": 3555
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3556,
                      "end": 3560
                    }
                  ],
                  "optional": false,
                  "start": 3533,
                  "end": 3561
                }
              ],
              "optional": false,
              "start": 3523,
              "end": 3562
            },
            "directive": null,
            "start": 3523,
            "end": 3563
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3568,
                  "end": 3572
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3573,
                  "end": 3577
                },
                "optional": false,
                "computed": false,
                "start": 3568,
                "end": 3577
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3578,
                      "end": 3580
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocClassTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3581,
                      "end": 3597
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3578,
                    "end": 3597
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3598,
                      "end": 3602
                    }
                  ],
                  "optional": false,
                  "start": 3578,
                  "end": 3603
                }
              ],
              "optional": false,
              "start": 3568,
              "end": 3604
            },
            "directive": null,
            "start": 3568,
            "end": 3605
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3610,
                  "end": 3614
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3615,
                  "end": 3619
                },
                "optional": false,
                "computed": false,
                "start": 3610,
                "end": 3619
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3620,
                      "end": 3622
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocReturnTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3623,
                      "end": 3640
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3620,
                    "end": 3640
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3641,
                      "end": 3645
                    }
                  ],
                  "optional": false,
                  "start": 3620,
                  "end": 3646
                }
              ],
              "optional": false,
              "start": 3610,
              "end": 3647
            },
            "directive": null,
            "start": 3610,
            "end": 3648
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3659,
                  "end": 3663
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3666,
                      "end": 3668
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocTypeTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3669,
                      "end": 3684
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3666,
                    "end": 3684
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3685,
                      "end": 3689
                    }
                  ],
                  "optional": false,
                  "start": 3666,
                  "end": 3690
                },
                "definite": false,
                "start": 3659,
                "end": 3690
              }
            ],
            "declare": false,
            "start": 3653,
            "end": 3691
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 3700,
              "end": 3704
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3716,
                        "end": 3720
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3721,
                        "end": 3725
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3716,
                      "end": 3725
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3726,
                        "end": 3730
                      }
                    ],
                    "optional": false,
                    "start": 3716,
                    "end": 3731
                  },
                  "directive": null,
                  "start": 3716,
                  "end": 3732
                }
              ],
              "start": 3706,
              "end": 3738
            },
            "alternate": null,
            "start": 3696,
            "end": 3738
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3743,
                  "end": 3747
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3748,
                  "end": 3752
                },
                "optional": false,
                "computed": false,
                "start": 3743,
                "end": 3752
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3753,
                      "end": 3755
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getJSDocTemplateTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3756,
                      "end": 3775
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3753,
                    "end": 3775
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3776,
                      "end": 3780
                    }
                  ],
                  "optional": false,
                  "start": 3753,
                  "end": 3781
                }
              ],
              "optional": false,
              "start": 3743,
              "end": 3782
            },
            "directive": null,
            "start": 3743,
            "end": 3783
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tags",
              "optional": false,
              "typeAnnotation": null,
              "start": 3795,
              "end": 3799
            },
            "start": 3788,
            "end": 3800
          }
        ],
        "start": 3467,
        "end": 3802
      },
      "expression": false,
      "start": 3426,
      "end": 3802
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 306,
  "end": 3802
}
```
