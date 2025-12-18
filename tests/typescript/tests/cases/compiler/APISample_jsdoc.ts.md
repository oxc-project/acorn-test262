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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 306,
    "end": 313,
    "range": [
      306,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317,
    "range": [
      314,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 318,
    "end": 325,
    "range": [
      318,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 333,
    "end": 339,
    "range": [
      333,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 342,
    "end": 344,
    "range": [
      342,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 348,
    "end": 352,
    "range": [
      348,
      352
    ]
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 353,
    "end": 365,
    "range": [
      353,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 540,
    "end": 548,
    "range": [
      540,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "parseCommentsIntoDefinition",
    "start": 549,
    "end": 576,
    "range": [
      549,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 577,
    "end": 581,
    "range": [
      577,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 583,
    "end": 586,
    "range": [
      583,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 633,
    "end": 635,
    "range": [
      633,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 636,
    "end": 642,
    "range": [
      636,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "definition",
    "start": 681,
    "end": 691,
    "range": [
      681,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 694,
    "end": 705,
    "range": [
      694,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 708,
    "end": 714,
    "range": [
      708,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 720,
    "end": 726,
    "range": [
      720,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 729,
    "end": 735,
    "range": [
      729,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 738,
    "end": 747,
    "range": [
      738,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "otherAnnotations",
    "start": 787,
    "end": 803,
    "range": [
      787,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 811,
    "end": 817,
    "range": [
      811,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 820,
    "end": 824,
    "range": [
      820,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 828,
    "end": 832,
    "range": [
      828,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 839,
    "end": 841,
    "range": [
      839,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 844,
    "end": 850,
    "range": [
      844,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 862,
    "end": 868,
    "range": [
      862,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 914,
    "end": 917,
    "range": [
      914,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "comments",
    "start": 918,
    "end": 926,
    "range": [
      918,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 929,
    "end": 935,
    "range": [
      929,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "getDocumentationComment",
    "start": 936,
    "end": 959,
    "range": [
      936,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 960,
    "end": 969,
    "range": [
      960,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 977,
    "end": 979,
    "range": [
      977,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "comments",
    "start": 981,
    "end": 989,
    "range": [
      981,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 990,
    "end": 996,
    "range": [
      990,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "definition",
    "start": 1008,
    "end": 1018,
    "range": [
      1008,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 1019,
    "end": 1030,
    "range": [
      1019,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "comments",
    "start": 1033,
    "end": 1041,
    "range": [
      1033,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1042,
    "end": 1045,
    "range": [
      1042,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "comment",
    "start": 1046,
    "end": 1053,
    "range": [
      1046,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1054,
    "end": 1056,
    "range": [
      1054,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "comment",
    "start": 1057,
    "end": 1064,
    "range": [
      1057,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1065,
    "end": 1069,
    "range": [
      1065,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1070,
    "end": 1073,
    "range": [
      1070,
      1073
    ]
  },
  {
    "type": "String",
    "value": "\"lineBreak\"",
    "start": 1074,
    "end": 1085,
    "range": [
      1074,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "comment",
    "start": 1088,
    "end": 1095,
    "range": [
      1088,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 1096,
    "end": 1100,
    "range": [
      1096,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "comment",
    "start": 1103,
    "end": 1110,
    "range": [
      1103,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 1111,
    "end": 1115,
    "range": [
      1111,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "trim",
    "start": 1116,
    "end": 1120,
    "range": [
      1116,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 1123,
    "end": 1130,
    "range": [
      1123,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/\\r\\n/g",
    "regex": {
      "flags": "g",
      "pattern": "\\r\\n"
    },
    "start": 1131,
    "end": 1138,
    "range": [
      1131,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "String",
    "value": "\"\\n\"",
    "start": 1140,
    "end": 1144,
    "range": [
      1140,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 1147,
    "end": 1151,
    "range": [
      1147,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1152,
    "end": 1154,
    "range": [
      1152,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
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
    "type": "Keyword",
    "value": "const",
    "start": 1209,
    "end": 1214,
    "range": [
      1209,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "jsdocs",
    "start": 1215,
    "end": 1221,
    "range": [
      1215,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1224,
    "end": 1230,
    "range": [
      1224,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "getJsDocTags",
    "start": 1231,
    "end": 1243,
    "range": [
      1231,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1244,
    "end": 1248,
    "range": [
      1244,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "checker",
    "start": 1249,
    "end": 1256,
    "range": [
      1249,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "jsdocs",
    "start": 1263,
    "end": 1269,
    "range": [
      1263,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1270,
    "end": 1277,
    "range": [
      1270,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "doc",
    "start": 1278,
    "end": 1281,
    "range": [
      1278,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1282,
    "end": 1284,
    "range": [
      1282,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1361,
    "end": 1366,
    "range": [
      1361,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1369,
    "end": 1373,
    "range": [
      1369,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 1375,
    "end": 1379,
    "range": [
      1375,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "doc",
    "start": 1384,
    "end": 1387,
    "range": [
      1384,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1397,
    "end": 1399,
    "range": [
      1397,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1401,
    "end": 1405,
    "range": [
      1401,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "userValidationKeywords",
    "start": 1406,
    "end": 1428,
    "range": [
      1406,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1429,
    "end": 1433,
    "range": [
      1429,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "definition",
    "start": 1450,
    "end": 1460,
    "range": [
      1450,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1461,
    "end": 1465,
    "range": [
      1461,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1469,
    "end": 1473,
    "range": [
      1469,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "parseValue",
    "start": 1474,
    "end": 1484,
    "range": [
      1474,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 1485,
    "end": 1489,
    "range": [
      1485,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1502,
    "end": 1506,
    "range": [
      1502,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "otherAnnotations",
    "start": 1556,
    "end": 1572,
    "range": [
      1556,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "doc",
    "start": 1573,
    "end": 1576,
    "range": [
      1573,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1577,
    "end": 1581,
    "range": [
      1577,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1585,
    "end": 1589,
    "range": [
      1585,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1680,
    "end": 1686,
    "range": [
      1680,
      1686
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1687,
    "end": 1696,
    "range": [
      1687,
      1696
    ]
  },
  {
    "type": "Identifier",
    "value": "Annotations",
    "start": 1697,
    "end": 1708,
    "range": [
      1697,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1716,
    "end": 1720,
    "range": [
      1716,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1722,
    "end": 1728,
    "range": [
      1722,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1731,
    "end": 1734,
    "range": [
      1731,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1738,
    "end": 1746,
    "range": [
      1738,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "getAnnotations",
    "start": 1747,
    "end": 1761,
    "range": [
      1747,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1762,
    "end": 1766,
    "range": [
      1762,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1768,
    "end": 1771,
    "range": [
      1768,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1773,
    "end": 1777,
    "range": [
      1773,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1779,
    "end": 1781,
    "range": [
      1779,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1782,
    "end": 1786,
    "range": [
      1782,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "Annotations",
    "start": 1789,
    "end": 1800,
    "range": [
      1789,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1803,
    "end": 1812,
    "range": [
      1803,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1819,
    "end": 1824,
    "range": [
      1819,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1825,
    "end": 1831,
    "range": [
      1825,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1833,
    "end": 1835,
    "range": [
      1833,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1836,
    "end": 1842,
    "range": [
      1836,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1846,
    "end": 1850,
    "range": [
      1846,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1851,
    "end": 1853,
    "range": [
      1851,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1854,
    "end": 1857,
    "range": [
      1854,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1859,
    "end": 1865,
    "range": [
      1859,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1871,
    "end": 1873,
    "range": [
      1871,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1876,
    "end": 1882,
    "range": [
      1876,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1894,
    "end": 1900,
    "range": [
      1894,
      1900
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1901,
    "end": 1910,
    "range": [
      1901,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1923,
    "end": 1928,
    "range": [
      1923,
      1928
    ]
  },
  {
    "type": "Identifier",
    "value": "jsDocTags",
    "start": 1929,
    "end": 1938,
    "range": [
      1929,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1940,
    "end": 1942,
    "range": [
      1940,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Identifier",
    "value": "JSDocTagInfo",
    "start": 1943,
    "end": 1955,
    "range": [
      1943,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1960,
    "end": 1966,
    "range": [
      1960,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "getJsDocTags",
    "start": 1967,
    "end": 1979,
    "range": [
      1967,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1980,
    "end": 1984,
    "range": [
      1980,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "checker",
    "start": 1985,
    "end": 1992,
    "range": [
      1985,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1999,
    "end": 2001,
    "range": [
      1999,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Identifier",
    "value": "jsDocTags",
    "start": 2004,
    "end": 2013,
    "range": [
      2004,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2014,
    "end": 2016,
    "range": [
      2014,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "jsDocTags",
    "start": 2018,
    "end": 2027,
    "range": [
      2018,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2028,
    "end": 2034,
    "range": [
      2028,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2046,
    "end": 2052,
    "range": [
      2046,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2053,
    "end": 2062,
    "range": [
      2053,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2075,
    "end": 2080,
    "range": [
      2075,
      2080
    ]
  },
  {
    "type": "Identifier",
    "value": "annotations",
    "start": 2081,
    "end": 2092,
    "range": [
      2081,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Identifier",
    "value": "Annotations",
    "start": 2094,
    "end": 2105,
    "range": [
      2094,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Identifier",
    "value": "jsDocTags",
    "start": 2108,
    "end": 2117,
    "range": [
      2108,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 2118,
    "end": 2124,
    "range": [
      2118,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2126,
    "end": 2132,
    "range": [
      2126,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "Annotations",
    "start": 2134,
    "end": 2145,
    "range": [
      2134,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Identifier",
    "value": "jsDocTag",
    "start": 2147,
    "end": 2155,
    "range": [
      2147,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2157,
    "end": 2159,
    "range": [
      2157,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "JSDocTagInfo",
    "start": 2160,
    "end": 2172,
    "range": [
      2160,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2174,
    "end": 2176,
    "range": [
      2174,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2187,
    "end": 2192,
    "range": [
      2187,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2193,
    "end": 2198,
    "range": [
      2193,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2201,
    "end": 2205,
    "range": [
      2201,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "parseJsDocTag",
    "start": 2206,
    "end": 2219,
    "range": [
      2206,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Identifier",
    "value": "jsDocTag",
    "start": 2220,
    "end": 2228,
    "range": [
      2220,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2239,
    "end": 2241,
    "range": [
      2239,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2243,
    "end": 2248,
    "range": [
      2243,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2249,
    "end": 2252,
    "range": [
      2249,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2253,
    "end": 2262,
    "range": [
      2253,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2278,
    "end": 2284,
    "range": [
      2278,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Identifier",
    "value": "jsDocTag",
    "start": 2285,
    "end": 2293,
    "range": [
      2285,
      2293
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2294,
    "end": 2298,
    "range": [
      2294,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2302,
    "end": 2307,
    "range": [
      2302,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2328,
    "end": 2334,
    "range": [
      2328,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2335,
    "end": 2341,
    "range": [
      2335,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2359,
    "end": 2365,
    "range": [
      2359,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2366,
    "end": 2372,
    "range": [
      2366,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2373,
    "end": 2377,
    "range": [
      2373,
      2377
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Identifier",
    "value": "annotations",
    "start": 2378,
    "end": 2389,
    "range": [
      2378,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2391,
    "end": 2397,
    "range": [
      2391,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Identifier",
    "value": "annotations",
    "start": 2400,
    "end": 2411,
    "range": [
      2400,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2414,
    "end": 2423,
    "range": [
      2414,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2484,
    "end": 2492,
    "range": [
      2484,
      2492
    ]
  },
  {
    "type": "Identifier",
    "value": "parseSpecificTags",
    "start": 2493,
    "end": 2510,
    "range": [
      2493,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2511,
    "end": 2515,
    "range": [
      2511,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2517,
    "end": 2519,
    "range": [
      2517,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2520,
    "end": 2524,
    "range": [
      2520,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2532,
    "end": 2534,
    "range": [
      2532,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2536,
    "end": 2540,
    "range": [
      2536,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2541,
    "end": 2545,
    "range": [
      2541,
      2545
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2546,
    "end": 2549,
    "range": [
      2546,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2550,
    "end": 2552,
    "range": [
      2550,
      2552
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2553,
    "end": 2563,
    "range": [
      2553,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "Parameter",
    "start": 2564,
    "end": 2573,
    "range": [
      2564,
      2573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2585,
    "end": 2591,
    "range": [
      2585,
      2591
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2592,
    "end": 2594,
    "range": [
      2592,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocParameterTags",
    "start": 2595,
    "end": 2616,
    "range": [
      2595,
      2616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2617,
    "end": 2621,
    "range": [
      2617,
      2621
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2622,
    "end": 2624,
    "range": [
      2622,
      2624
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2625,
    "end": 2627,
    "range": [
      2625,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "ParameterDeclaration",
    "start": 2628,
    "end": 2648,
    "range": [
      2628,
      2648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2648,
    "end": 2649,
    "range": [
      2648,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2661,
    "end": 2663,
    "range": [
      2661,
      2663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2664,
    "end": 2665,
    "range": [
      2664,
      2665
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2665,
    "end": 2669,
    "range": [
      2665,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2670,
    "end": 2674,
    "range": [
      2670,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2675,
    "end": 2678,
    "range": [
      2675,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2679,
    "end": 2681,
    "range": [
      2679,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2682,
    "end": 2692,
    "range": [
      2682,
      2692
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2692,
    "end": 2693,
    "range": [
      2692,
      2693
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 2693,
    "end": 2712,
    "range": [
      2693,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2724,
    "end": 2729,
    "range": [
      2724,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 2730,
    "end": 2734,
    "range": [
      2730,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2737,
    "end": 2741,
    "range": [
      2737,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2742,
    "end": 2744,
    "range": [
      2742,
      2744
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2745,
    "end": 2747,
    "range": [
      2745,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 2748,
    "end": 2767,
    "range": [
      2748,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2777,
    "end": 2779,
    "range": [
      2777,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2781,
    "end": 2783,
    "range": [
      2781,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Identifier",
    "value": "hasJSDocParameterTags",
    "start": 2784,
    "end": 2805,
    "range": [
      2784,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 2806,
    "end": 2810,
    "range": [
      2806,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2827,
    "end": 2832,
    "range": [
      2827,
      2832
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 2833,
    "end": 2837,
    "range": [
      2833,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2839,
    "end": 2841,
    "range": [
      2839,
      2841
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Identifier",
    "value": "JSDocTag",
    "start": 2842,
    "end": 2850,
    "range": [
      2842,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2853,
    "end": 2854,
    "range": [
      2853,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2871,
    "end": 2874,
    "range": [
      2871,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2876,
    "end": 2881,
    "range": [
      2876,
      2881
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 2882,
    "end": 2886,
    "range": [
      2882,
      2886
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2887,
    "end": 2889,
    "range": [
      2887,
      2889
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 2890,
    "end": 2894,
    "range": [
      2890,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 2895,
    "end": 2905,
    "range": [
      2895,
      2905
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2905,
    "end": 2906,
    "range": [
      2905,
      2906
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2906,
    "end": 2909,
    "range": [
      2906,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2910,
    "end": 2912,
    "range": [
      2910,
      2912
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocParameterTags",
    "start": 2913,
    "end": 2934,
    "range": [
      2913,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2955,
    "end": 2957,
    "range": [
      2955,
      2957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 2959,
    "end": 2963,
    "range": [
      2959,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 2965,
    "end": 2969,
    "range": [
      2965,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2970,
    "end": 2974,
    "range": [
      2970,
      2974
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2974,
    "end": 2975,
    "range": [
      2974,
      2975
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2975,
    "end": 2978,
    "range": [
      2975,
      2978
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 2978,
    "end": 2982,
    "range": [
      2978,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2983,
    "end": 2984,
    "range": [
      2983,
      2984
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2997,
    "end": 2998,
    "range": [
      2997,
      2998
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3011,
    "end": 3017,
    "range": [
      3011,
      3017
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 3018,
    "end": 3022,
    "range": [
      3018,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3022,
    "end": 3023,
    "range": [
      3022,
      3023
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3043,
    "end": 3051,
    "range": [
      3043,
      3051
    ]
  },
  {
    "type": "Identifier",
    "value": "getReturnTypeFromJSDoc",
    "start": 3052,
    "end": 3074,
    "range": [
      3052,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3075,
    "end": 3079,
    "range": [
      3075,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3081,
    "end": 3083,
    "range": [
      3081,
      3083
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 3084,
    "end": 3088,
    "range": [
      3084,
      3088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3088,
    "end": 3089,
    "range": [
      3088,
      3089
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3096,
    "end": 3098,
    "range": [
      3096,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3099,
    "end": 3100,
    "range": [
      3099,
      3100
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3100,
    "end": 3104,
    "range": [
      3100,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3105,
    "end": 3109,
    "range": [
      3105,
      3109
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3110,
    "end": 3113,
    "range": [
      3110,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3114,
    "end": 3116,
    "range": [
      3114,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 3117,
    "end": 3127,
    "range": [
      3117,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3127,
    "end": 3128,
    "range": [
      3127,
      3128
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 3128,
    "end": 3147,
    "range": [
      3128,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3159,
    "end": 3165,
    "range": [
      3159,
      3165
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3166,
    "end": 3168,
    "range": [
      3166,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocReturnType",
    "start": 3169,
    "end": 3187,
    "range": [
      3169,
      3187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3188,
    "end": 3192,
    "range": [
      3188,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3192,
    "end": 3193,
    "range": [
      3192,
      3193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3193,
    "end": 3194,
    "range": [
      3193,
      3194
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3205,
    "end": 3208,
    "range": [
      3205,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3209,
    "end": 3213,
    "range": [
      3209,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3214,
    "end": 3215,
    "range": [
      3214,
      3215
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3216,
    "end": 3218,
    "range": [
      3216,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocType",
    "start": 3219,
    "end": 3231,
    "range": [
      3219,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3232,
    "end": 3236,
    "range": [
      3232,
      3236
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3243,
    "end": 3245,
    "range": [
      3243,
      3245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3246,
    "end": 3247,
    "range": [
      3246,
      3247
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3247,
    "end": 3251,
    "range": [
      3247,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3252,
    "end": 3254,
    "range": [
      3252,
      3254
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3255,
    "end": 3259,
    "range": [
      3255,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3260,
    "end": 3264,
    "range": [
      3260,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3265,
    "end": 3268,
    "range": [
      3265,
      3268
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3269,
    "end": 3271,
    "range": [
      3269,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3271,
    "end": 3272,
    "range": [
      3271,
      3272
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 3272,
    "end": 3282,
    "range": [
      3272,
      3282
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionType",
    "start": 3283,
    "end": 3295,
    "range": [
      3283,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3307,
    "end": 3313,
    "range": [
      3307,
      3313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3315,
    "end": 3319,
    "range": [
      3315,
      3319
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3320,
    "end": 3322,
    "range": [
      3320,
      3322
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3323,
    "end": 3325,
    "range": [
      3323,
      3325
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionTypeNode",
    "start": 3326,
    "end": 3342,
    "range": [
      3326,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3344,
    "end": 3348,
    "range": [
      3344,
      3348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3348,
    "end": 3349,
    "range": [
      3348,
      3349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3359,
    "end": 3367,
    "range": [
      3359,
      3367
    ]
  },
  {
    "type": "Identifier",
    "value": "getAllTags",
    "start": 3368,
    "end": 3378,
    "range": [
      3368,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3378,
    "end": 3379,
    "range": [
      3378,
      3379
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3379,
    "end": 3383,
    "range": [
      3379,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3385,
    "end": 3387,
    "range": [
      3385,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 3388,
    "end": 3392,
    "range": [
      3388,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3400,
    "end": 3402,
    "range": [
      3400,
      3402
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocTags",
    "start": 3403,
    "end": 3415,
    "range": [
      3403,
      3415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3416,
    "end": 3420,
    "range": [
      3416,
      3420
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3420,
    "end": 3421,
    "range": [
      3420,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3423,
    "end": 3424,
    "range": [
      3423,
      3424
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3426,
    "end": 3434,
    "range": [
      3426,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "getSomeOtherTags",
    "start": 3435,
    "end": 3451,
    "range": [
      3435,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3452,
    "end": 3456,
    "range": [
      3452,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3458,
    "end": 3460,
    "range": [
      3458,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 3461,
    "end": 3465,
    "range": [
      3461,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3473,
    "end": 3478,
    "range": [
      3473,
      3478
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 3479,
    "end": 3483,
    "range": [
      3479,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3483,
    "end": 3484,
    "range": [
      3483,
      3484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3485,
    "end": 3486,
    "range": [
      3485,
      3486
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3486,
    "end": 3488,
    "range": [
      3486,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Identifier",
    "value": "JSDocTag",
    "start": 3489,
    "end": 3497,
    "range": [
      3489,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3500,
    "end": 3509,
    "range": [
      3500,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3510,
    "end": 3511,
    "range": [
      3510,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3515,
    "end": 3516,
    "range": [
      3515,
      3516
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 3523,
    "end": 3527,
    "range": [
      3523,
      3527
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3528,
    "end": 3532,
    "range": [
      3528,
      3532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3532,
    "end": 3533,
    "range": [
      3532,
      3533
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3533,
    "end": 3535,
    "range": [
      3533,
      3535
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocAugmentsTag",
    "start": 3536,
    "end": 3555,
    "range": [
      3536,
      3555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3555,
    "end": 3556,
    "range": [
      3555,
      3556
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3556,
    "end": 3560,
    "range": [
      3556,
      3560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3560,
    "end": 3561,
    "range": [
      3560,
      3561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3561,
    "end": 3562,
    "range": [
      3561,
      3562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 3568,
    "end": 3572,
    "range": [
      3568,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3573,
    "end": 3577,
    "range": [
      3573,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3578,
    "end": 3580,
    "range": [
      3578,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocClassTag",
    "start": 3581,
    "end": 3597,
    "range": [
      3581,
      3597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3597,
    "end": 3598,
    "range": [
      3597,
      3598
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3598,
    "end": 3602,
    "range": [
      3598,
      3602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3602,
    "end": 3603,
    "range": [
      3602,
      3603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 3610,
    "end": 3614,
    "range": [
      3610,
      3614
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3615,
    "end": 3619,
    "range": [
      3615,
      3619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3619,
    "end": 3620,
    "range": [
      3619,
      3620
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3620,
    "end": 3622,
    "range": [
      3620,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocReturnTag",
    "start": 3623,
    "end": 3640,
    "range": [
      3623,
      3640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3641,
    "end": 3645,
    "range": [
      3641,
      3645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3645,
    "end": 3646,
    "range": [
      3645,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3653,
    "end": 3658,
    "range": [
      3653,
      3658
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3659,
    "end": 3663,
    "range": [
      3659,
      3663
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3666,
    "end": 3668,
    "range": [
      3666,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocTypeTag",
    "start": 3669,
    "end": 3684,
    "range": [
      3669,
      3684
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3684,
    "end": 3685,
    "range": [
      3684,
      3685
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3685,
    "end": 3689,
    "range": [
      3685,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3690,
    "end": 3691,
    "range": [
      3690,
      3691
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3696,
    "end": 3698,
    "range": [
      3696,
      3698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3699,
    "end": 3700,
    "range": [
      3699,
      3700
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3700,
    "end": 3704,
    "range": [
      3700,
      3704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3704,
    "end": 3705,
    "range": [
      3704,
      3705
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3706,
    "end": 3707,
    "range": [
      3706,
      3707
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 3716,
    "end": 3720,
    "range": [
      3716,
      3720
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3720,
    "end": 3721,
    "range": [
      3720,
      3721
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3721,
    "end": 3725,
    "range": [
      3721,
      3725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3726,
    "end": 3730,
    "range": [
      3726,
      3730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3730,
    "end": 3731,
    "range": [
      3730,
      3731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 3743,
    "end": 3747,
    "range": [
      3743,
      3747
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3747,
    "end": 3748,
    "range": [
      3747,
      3748
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3748,
    "end": 3752,
    "range": [
      3748,
      3752
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
    "type": "Identifier",
    "value": "ts",
    "start": 3753,
    "end": 3755,
    "range": [
      3753,
      3755
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3755,
    "end": 3756,
    "range": [
      3755,
      3756
    ]
  },
  {
    "type": "Identifier",
    "value": "getJSDocTemplateTag",
    "start": 3756,
    "end": 3775,
    "range": [
      3756,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3775,
    "end": 3776,
    "range": [
      3775,
      3776
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3776,
    "end": 3780,
    "range": [
      3776,
      3780
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3780,
    "end": 3781,
    "range": [
      3780,
      3781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3781,
    "end": 3782,
    "range": [
      3781,
      3782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3782,
    "end": 3783,
    "range": [
      3782,
      3783
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3788,
    "end": 3794,
    "range": [
      3788,
      3794
    ]
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 3795,
    "end": 3799,
    "range": [
      3795,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3801,
    "end": 3802,
    "range": [
      3801,
      3802
    ]
  }
]
```
