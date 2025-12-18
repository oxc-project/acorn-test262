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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "start": 165,
            "end": 176
          },
          "init": null,
          "definite": false,
          "start": 165,
          "end": 176
        }
      ],
      "declare": false,
      "start": 161,
      "end": 177
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 192,
                    "end": 198
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 201,
                    "end": 207
                  }
                ],
                "start": 192,
                "end": 207
              },
              "start": 190,
              "end": 207
            },
            "start": 182,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 207
        }
      ],
      "declare": false,
      "start": 178,
      "end": 208
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 219,
                    "end": 225
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 228,
                    "end": 234
                  }
                ],
                "start": 219,
                "end": 234
              },
              "start": 217,
              "end": 234
            },
            "start": 213,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 234
        }
      ],
      "declare": false,
      "start": 209,
      "end": 235
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithAccessors",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 260
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 310
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 370,
                        "end": 373
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 383,
                              "end": 387
                            },
                            "prefix": true,
                            "start": 376,
                            "end": 387
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 392,
                            "end": 400
                          },
                          "start": 376,
                          "end": 400
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 404,
                            "end": 408
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 415
                          },
                          "optional": false,
                          "computed": false,
                          "start": 404,
                          "end": 415
                        },
                        "start": 376,
                        "end": 415
                      },
                      "start": 370,
                      "end": 415
                    },
                    "directive": null,
                    "start": 370,
                    "end": 416
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 491,
                                  "end": 497
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 500,
                                  "end": 506
                                }
                              ],
                              "start": 491,
                              "end": 506
                            },
                            "start": 489,
                            "end": 506
                          },
                          "start": 485,
                          "end": 506
                        },
                        "init": null,
                        "definite": false,
                        "start": 485,
                        "end": 506
                      }
                    ],
                    "declare": false,
                    "start": 481,
                    "end": 507
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 519
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 529,
                              "end": 533
                            },
                            "prefix": true,
                            "start": 522,
                            "end": 533
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 538,
                            "end": 546
                          },
                          "start": 522,
                          "end": 546
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 550,
                            "end": 554
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 561
                          },
                          "optional": false,
                          "computed": false,
                          "start": 550,
                          "end": 561
                        },
                        "start": 522,
                        "end": 561
                      },
                      "start": 516,
                      "end": 561
                    },
                    "directive": null,
                    "start": 516,
                    "end": 562
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 589,
                      "end": 597
                    },
                    "start": 582,
                    "end": 598
                  }
                ],
                "start": 313,
                "end": 604
              },
              "expression": false,
              "start": 310,
              "end": 604
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 304,
            "end": 604
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 652
            },
            "value": {
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 660,
                          "end": 666
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 669,
                          "end": 675
                        }
                      ],
                      "start": 660,
                      "end": 675
                    },
                    "start": 658,
                    "end": 675
                  },
                  "start": 653,
                  "end": 675
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 737
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 747,
                              "end": 751
                            },
                            "prefix": true,
                            "start": 740,
                            "end": 751
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 756,
                            "end": 764
                          },
                          "start": 740,
                          "end": 764
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 768,
                            "end": 772
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 773,
                            "end": 779
                          },
                          "optional": false,
                          "computed": false,
                          "start": 768,
                          "end": 779
                        },
                        "start": 740,
                        "end": 779
                      },
                      "start": 734,
                      "end": 779
                    },
                    "directive": null,
                    "start": 734,
                    "end": 780
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 848
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 858,
                              "end": 863
                            },
                            "prefix": true,
                            "start": 851,
                            "end": 863
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 868,
                            "end": 876
                          },
                          "start": 851,
                          "end": 876
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 880,
                            "end": 885
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 886,
                            "end": 892
                          },
                          "optional": false,
                          "computed": false,
                          "start": 880,
                          "end": 892
                        },
                        "start": 851,
                        "end": 892
                      },
                      "start": 845,
                      "end": 892
                    },
                    "directive": null,
                    "start": 845,
                    "end": 893
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 968,
                                  "end": 974
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 977,
                                  "end": 983
                                }
                              ],
                              "start": 968,
                              "end": 983
                            },
                            "start": 966,
                            "end": 983
                          },
                          "start": 962,
                          "end": 983
                        },
                        "init": null,
                        "definite": false,
                        "start": 962,
                        "end": 983
                      }
                    ],
                    "declare": false,
                    "start": 958,
                    "end": 984
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 993,
                        "end": 996
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1006,
                              "end": 1010
                            },
                            "prefix": true,
                            "start": 999,
                            "end": 1010
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1015,
                            "end": 1023
                          },
                          "start": 999,
                          "end": 1023
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1027,
                            "end": 1031
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1032,
                            "end": 1038
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1027,
                          "end": 1038
                        },
                        "start": 999,
                        "end": 1038
                      },
                      "start": 993,
                      "end": 1038
                    },
                    "directive": null,
                    "start": 993,
                    "end": 1039
                  }
                ],
                "start": 677,
                "end": 1055
              },
              "expression": false,
              "start": 652,
              "end": 1055
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 646,
            "end": 1055
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1113
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1176
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1186,
                              "end": 1190
                            },
                            "prefix": true,
                            "start": 1179,
                            "end": 1190
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1195,
                            "end": 1203
                          },
                          "start": 1179,
                          "end": 1203
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1207,
                            "end": 1211
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1212,
                            "end": 1218
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1207,
                          "end": 1218
                        },
                        "start": 1179,
                        "end": 1218
                      },
                      "start": 1173,
                      "end": 1218
                    },
                    "directive": null,
                    "start": 1173,
                    "end": 1219
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1294,
                                  "end": 1300
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1303,
                                  "end": 1309
                                }
                              ],
                              "start": 1294,
                              "end": 1309
                            },
                            "start": 1292,
                            "end": 1309
                          },
                          "start": 1288,
                          "end": 1309
                        },
                        "init": null,
                        "definite": false,
                        "start": 1288,
                        "end": 1309
                      }
                    ],
                    "declare": false,
                    "start": 1284,
                    "end": 1310
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1319,
                        "end": 1322
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1332,
                              "end": 1336
                            },
                            "prefix": true,
                            "start": 1325,
                            "end": 1336
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1341,
                            "end": 1349
                          },
                          "start": 1325,
                          "end": 1349
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1353,
                            "end": 1357
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1358,
                            "end": 1364
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1353,
                          "end": 1364
                        },
                        "start": 1325,
                        "end": 1364
                      },
                      "start": 1319,
                      "end": 1364
                    },
                    "directive": null,
                    "start": 1319,
                    "end": 1365
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1392,
                      "end": 1400
                    },
                    "start": 1385,
                    "end": 1401
                  }
                ],
                "start": 1116,
                "end": 1407
              },
              "expression": false,
              "start": 1113,
              "end": 1407
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1098,
            "end": 1407
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1462,
              "end": 1465
            },
            "value": {
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1473,
                          "end": 1479
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1482,
                          "end": 1488
                        }
                      ],
                      "start": 1473,
                      "end": 1488
                    },
                    "start": 1471,
                    "end": 1488
                  },
                  "start": 1466,
                  "end": 1488
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1547,
                        "end": 1550
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1560,
                              "end": 1564
                            },
                            "prefix": true,
                            "start": 1553,
                            "end": 1564
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1569,
                            "end": 1577
                          },
                          "start": 1553,
                          "end": 1577
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1581,
                            "end": 1585
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1586,
                            "end": 1592
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1581,
                          "end": 1592
                        },
                        "start": 1553,
                        "end": 1592
                      },
                      "start": 1547,
                      "end": 1592
                    },
                    "directive": null,
                    "start": 1547,
                    "end": 1593
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1658,
                        "end": 1661
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1671,
                              "end": 1676
                            },
                            "prefix": true,
                            "start": 1664,
                            "end": 1676
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1681,
                            "end": 1689
                          },
                          "start": 1664,
                          "end": 1689
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1693,
                            "end": 1698
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1699,
                            "end": 1705
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1693,
                          "end": 1705
                        },
                        "start": 1664,
                        "end": 1705
                      },
                      "start": 1658,
                      "end": 1705
                    },
                    "directive": null,
                    "start": 1658,
                    "end": 1706
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1781,
                                  "end": 1787
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1790,
                                  "end": 1796
                                }
                              ],
                              "start": 1781,
                              "end": 1796
                            },
                            "start": 1779,
                            "end": 1796
                          },
                          "start": 1775,
                          "end": 1796
                        },
                        "init": null,
                        "definite": false,
                        "start": 1775,
                        "end": 1796
                      }
                    ],
                    "declare": false,
                    "start": 1771,
                    "end": 1797
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1806,
                        "end": 1809
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1819,
                              "end": 1823
                            },
                            "prefix": true,
                            "start": 1812,
                            "end": 1823
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1828,
                            "end": 1836
                          },
                          "start": 1812,
                          "end": 1836
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1840,
                            "end": 1844
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1845,
                            "end": 1851
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1840,
                          "end": 1851
                        },
                        "start": 1812,
                        "end": 1851
                      },
                      "start": 1806,
                      "end": 1851
                    },
                    "directive": null,
                    "start": 1806,
                    "end": 1852
                  }
                ],
                "start": 1490,
                "end": 1868
              },
              "expression": false,
              "start": 1465,
              "end": 1868
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1450,
            "end": 1868
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1923
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1983,
                        "end": 1986
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1996,
                              "end": 2000
                            },
                            "prefix": true,
                            "start": 1989,
                            "end": 2000
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2005,
                            "end": 2013
                          },
                          "start": 1989,
                          "end": 2013
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2017,
                            "end": 2021
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2022,
                            "end": 2028
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2017,
                          "end": 2028
                        },
                        "start": 1989,
                        "end": 2028
                      },
                      "start": 1983,
                      "end": 2028
                    },
                    "directive": null,
                    "start": 1983,
                    "end": 2029
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2104,
                                  "end": 2110
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2113,
                                  "end": 2119
                                }
                              ],
                              "start": 2104,
                              "end": 2119
                            },
                            "start": 2102,
                            "end": 2119
                          },
                          "start": 2098,
                          "end": 2119
                        },
                        "init": null,
                        "definite": false,
                        "start": 2098,
                        "end": 2119
                      }
                    ],
                    "declare": false,
                    "start": 2094,
                    "end": 2120
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2129,
                        "end": 2132
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2142,
                              "end": 2146
                            },
                            "prefix": true,
                            "start": 2135,
                            "end": 2146
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2151,
                            "end": 2159
                          },
                          "start": 2135,
                          "end": 2159
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2163,
                            "end": 2167
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2168,
                            "end": 2174
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2163,
                          "end": 2174
                        },
                        "start": 2135,
                        "end": 2174
                      },
                      "start": 2129,
                      "end": 2174
                    },
                    "directive": null,
                    "start": 2129,
                    "end": 2175
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2202,
                      "end": 2210
                    },
                    "start": 2195,
                    "end": 2211
                  }
                ],
                "start": 1926,
                "end": 2217
              },
              "expression": false,
              "start": 1923,
              "end": 2217
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1910,
            "end": 2217
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2270,
              "end": 2272
            },
            "value": {
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2280,
                          "end": 2286
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2289,
                          "end": 2295
                        }
                      ],
                      "start": 2280,
                      "end": 2295
                    },
                    "start": 2278,
                    "end": 2295
                  },
                  "start": 2273,
                  "end": 2295
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2354,
                        "end": 2357
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2367,
                              "end": 2371
                            },
                            "prefix": true,
                            "start": 2360,
                            "end": 2371
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2376,
                            "end": 2384
                          },
                          "start": 2360,
                          "end": 2384
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2388,
                            "end": 2392
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2393,
                            "end": 2399
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2388,
                          "end": 2399
                        },
                        "start": 2360,
                        "end": 2399
                      },
                      "start": 2354,
                      "end": 2399
                    },
                    "directive": null,
                    "start": 2354,
                    "end": 2400
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2465,
                        "end": 2468
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2478,
                              "end": 2483
                            },
                            "prefix": true,
                            "start": 2471,
                            "end": 2483
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2488,
                            "end": 2496
                          },
                          "start": 2471,
                          "end": 2496
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2500,
                            "end": 2505
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2506,
                            "end": 2512
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2500,
                          "end": 2512
                        },
                        "start": 2471,
                        "end": 2512
                      },
                      "start": 2465,
                      "end": 2512
                    },
                    "directive": null,
                    "start": 2465,
                    "end": 2513
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2588,
                                  "end": 2594
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2597,
                                  "end": 2603
                                }
                              ],
                              "start": 2588,
                              "end": 2603
                            },
                            "start": 2586,
                            "end": 2603
                          },
                          "start": 2582,
                          "end": 2603
                        },
                        "init": null,
                        "definite": false,
                        "start": 2582,
                        "end": 2603
                      }
                    ],
                    "declare": false,
                    "start": 2578,
                    "end": 2604
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2613,
                        "end": 2616
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2626,
                              "end": 2630
                            },
                            "prefix": true,
                            "start": 2619,
                            "end": 2630
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2635,
                            "end": 2643
                          },
                          "start": 2619,
                          "end": 2643
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2647,
                            "end": 2651
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2652,
                            "end": 2658
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2647,
                          "end": 2658
                        },
                        "start": 2619,
                        "end": 2658
                      },
                      "start": 2613,
                      "end": 2658
                    },
                    "directive": null,
                    "start": 2613,
                    "end": 2659
                  }
                ],
                "start": 2297,
                "end": 2675
              },
              "expression": false,
              "start": 2272,
              "end": 2675
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2259,
            "end": 2675
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ss1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2744,
              "end": 2747
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2807,
                        "end": 2810
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2820,
                              "end": 2824
                            },
                            "prefix": true,
                            "start": 2813,
                            "end": 2824
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2829,
                            "end": 2837
                          },
                          "start": 2813,
                          "end": 2837
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2841,
                            "end": 2845
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2846,
                            "end": 2852
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2841,
                          "end": 2852
                        },
                        "start": 2813,
                        "end": 2852
                      },
                      "start": 2807,
                      "end": 2852
                    },
                    "directive": null,
                    "start": 2807,
                    "end": 2853
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2928,
                                  "end": 2934
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2937,
                                  "end": 2943
                                }
                              ],
                              "start": 2928,
                              "end": 2943
                            },
                            "start": 2926,
                            "end": 2943
                          },
                          "start": 2922,
                          "end": 2943
                        },
                        "init": null,
                        "definite": false,
                        "start": 2922,
                        "end": 2943
                      }
                    ],
                    "declare": false,
                    "start": 2918,
                    "end": 2944
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2953,
                        "end": 2956
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2966,
                              "end": 2970
                            },
                            "prefix": true,
                            "start": 2959,
                            "end": 2970
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2975,
                            "end": 2983
                          },
                          "start": 2959,
                          "end": 2983
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2987,
                            "end": 2991
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2992,
                            "end": 2998
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2987,
                          "end": 2998
                        },
                        "start": 2959,
                        "end": 2998
                      },
                      "start": 2953,
                      "end": 2998
                    },
                    "directive": null,
                    "start": 2953,
                    "end": 2999
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3026,
                      "end": 3034
                    },
                    "start": 3019,
                    "end": 3035
                  }
                ],
                "start": 2750,
                "end": 3041
              },
              "expression": false,
              "start": 2747,
              "end": 3041
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2725,
            "end": 3041
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ss1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3110,
              "end": 3113
            },
            "value": {
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3121,
                          "end": 3127
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3130,
                          "end": 3136
                        }
                      ],
                      "start": 3121,
                      "end": 3136
                    },
                    "start": 3119,
                    "end": 3136
                  },
                  "start": 3114,
                  "end": 3136
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3195,
                        "end": 3198
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3208,
                              "end": 3212
                            },
                            "prefix": true,
                            "start": 3201,
                            "end": 3212
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 3217,
                            "end": 3225
                          },
                          "start": 3201,
                          "end": 3225
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3229,
                            "end": 3233
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3234,
                            "end": 3240
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3229,
                          "end": 3240
                        },
                        "start": 3201,
                        "end": 3240
                      },
                      "start": 3195,
                      "end": 3240
                    },
                    "directive": null,
                    "start": 3195,
                    "end": 3241
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3306,
                        "end": 3309
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3319,
                              "end": 3324
                            },
                            "prefix": true,
                            "start": 3312,
                            "end": 3324
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 3329,
                            "end": 3337
                          },
                          "start": 3312,
                          "end": 3337
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3341,
                            "end": 3346
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3347,
                            "end": 3353
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3341,
                          "end": 3353
                        },
                        "start": 3312,
                        "end": 3353
                      },
                      "start": 3306,
                      "end": 3353
                    },
                    "directive": null,
                    "start": 3306,
                    "end": 3354
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 3429,
                                  "end": 3435
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3438,
                                  "end": 3444
                                }
                              ],
                              "start": 3429,
                              "end": 3444
                            },
                            "start": 3427,
                            "end": 3444
                          },
                          "start": 3423,
                          "end": 3444
                        },
                        "init": null,
                        "definite": false,
                        "start": 3423,
                        "end": 3444
                      }
                    ],
                    "declare": false,
                    "start": 3419,
                    "end": 3445
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3454,
                        "end": 3457
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3467,
                              "end": 3471
                            },
                            "prefix": true,
                            "start": 3460,
                            "end": 3471
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 3476,
                            "end": 3484
                          },
                          "start": 3460,
                          "end": 3484
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3488,
                            "end": 3492
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3493,
                            "end": 3499
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3488,
                          "end": 3499
                        },
                        "start": 3460,
                        "end": 3499
                      },
                      "start": 3454,
                      "end": 3499
                    },
                    "directive": null,
                    "start": 3454,
                    "end": 3500
                  }
                ],
                "start": 3138,
                "end": 3516
              },
              "expression": false,
              "start": 3113,
              "end": 3516
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3091,
            "end": 3516
          }
        ],
        "start": 261,
        "end": 3518
      },
      "abstract": false,
      "declare": false,
      "start": 236,
      "end": 3518
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 3518
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176,
    "range": [
      170,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181,
    "range": [
      178,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 182,
    "end": 190,
    "range": [
      182,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 192,
    "end": 198,
    "range": [
      192,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212,
    "range": [
      209,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 213,
    "end": 217,
    "range": [
      213,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225,
    "range": [
      219,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 228,
    "end": 234,
    "range": [
      228,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 236,
    "end": 241,
    "range": [
      236,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithAccessors",
    "start": 242,
    "end": 260,
    "range": [
      242,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 308,
    "end": 310,
    "range": [
      308,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 370,
    "end": 373,
    "range": [
      370,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 383,
    "end": 387,
    "range": [
      383,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 388,
    "end": 391,
    "range": [
      388,
      391
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 392,
    "end": 400,
    "range": [
      392,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 401,
    "end": 403,
    "range": [
      401,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 404,
    "end": 408,
    "range": [
      404,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 409,
    "end": 415,
    "range": [
      409,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 481,
    "end": 484,
    "range": [
      481,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 485,
    "end": 489,
    "range": [
      485,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 516,
    "end": 519,
    "range": [
      516,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 522,
    "end": 528,
    "range": [
      522,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 529,
    "end": 533,
    "range": [
      529,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 534,
    "end": 537,
    "range": [
      534,
      537
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 538,
    "end": 546,
    "range": [
      538,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 547,
    "end": 549,
    "range": [
      547,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 550,
    "end": 554,
    "range": [
      550,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 555,
    "end": 561,
    "range": [
      555,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 582,
    "end": 588,
    "range": [
      582,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 589,
    "end": 597,
    "range": [
      589,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 646,
    "end": 649,
    "range": [
      646,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 650,
    "end": 652,
    "range": [
      650,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 653,
    "end": 658,
    "range": [
      653,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 660,
    "end": 666,
    "range": [
      660,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 669,
    "end": 675,
    "range": [
      669,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 734,
    "end": 737,
    "range": [
      734,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 740,
    "end": 746,
    "range": [
      740,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 747,
    "end": 751,
    "range": [
      747,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 752,
    "end": 755,
    "range": [
      752,
      755
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 756,
    "end": 764,
    "range": [
      756,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 765,
    "end": 767,
    "range": [
      765,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 768,
    "end": 772,
    "range": [
      768,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 773,
    "end": 779,
    "range": [
      773,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 845,
    "end": 848,
    "range": [
      845,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 851,
    "end": 857,
    "range": [
      851,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 858,
    "end": 863,
    "range": [
      858,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 864,
    "end": 867,
    "range": [
      864,
      867
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 868,
    "end": 876,
    "range": [
      868,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 877,
    "end": 879,
    "range": [
      877,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 886,
    "end": 892,
    "range": [
      886,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 958,
    "end": 961,
    "range": [
      958,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 962,
    "end": 966,
    "range": [
      962,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 968,
    "end": 974,
    "range": [
      968,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 977,
    "end": 983,
    "range": [
      977,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 993,
    "end": 996,
    "range": [
      993,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 999,
    "end": 1005,
    "range": [
      999,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1006,
    "end": 1010,
    "range": [
      1006,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1011,
    "end": 1014,
    "range": [
      1011,
      1014
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1015,
    "end": 1023,
    "range": [
      1015,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1024,
    "end": 1026,
    "range": [
      1024,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1027,
    "end": 1031,
    "range": [
      1027,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1032,
    "end": 1038,
    "range": [
      1032,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1098,
    "end": 1105,
    "range": [
      1098,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1106,
    "end": 1109,
    "range": [
      1106,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 1110,
    "end": 1113,
    "range": [
      1110,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1173,
    "end": 1176,
    "range": [
      1173,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1179,
    "end": 1185,
    "range": [
      1179,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1186,
    "end": 1190,
    "range": [
      1186,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1191,
    "end": 1194,
    "range": [
      1191,
      1194
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1195,
    "end": 1203,
    "range": [
      1195,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1204,
    "end": 1206,
    "range": [
      1204,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1207,
    "end": 1211,
    "range": [
      1207,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1212,
    "end": 1218,
    "range": [
      1212,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1284,
    "end": 1287,
    "range": [
      1284,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1288,
    "end": 1292,
    "range": [
      1288,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1294,
    "end": 1300,
    "range": [
      1294,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1303,
    "end": 1309,
    "range": [
      1303,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1319,
    "end": 1322,
    "range": [
      1319,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1325,
    "end": 1331,
    "range": [
      1325,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1332,
    "end": 1336,
    "range": [
      1332,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1337,
    "end": 1340,
    "range": [
      1337,
      1340
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1341,
    "end": 1349,
    "range": [
      1341,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1350,
    "end": 1352,
    "range": [
      1350,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1353,
    "end": 1357,
    "range": [
      1353,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1358,
    "end": 1364,
    "range": [
      1358,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1385,
    "end": 1391,
    "range": [
      1385,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1392,
    "end": 1400,
    "range": [
      1392,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1450,
    "end": 1457,
    "range": [
      1450,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1458,
    "end": 1461,
    "range": [
      1458,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 1462,
    "end": 1465,
    "range": [
      1462,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1466,
    "end": 1471,
    "range": [
      1466,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1473,
    "end": 1479,
    "range": [
      1473,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1482,
    "end": 1488,
    "range": [
      1482,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1547,
    "end": 1550,
    "range": [
      1547,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1553,
    "end": 1559,
    "range": [
      1553,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1560,
    "end": 1564,
    "range": [
      1560,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1565,
    "end": 1568,
    "range": [
      1565,
      1568
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1569,
    "end": 1577,
    "range": [
      1569,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1578,
    "end": 1580,
    "range": [
      1578,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1581,
    "end": 1585,
    "range": [
      1581,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1586,
    "end": 1592,
    "range": [
      1586,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1658,
    "end": 1661,
    "range": [
      1658,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1664,
    "end": 1670,
    "range": [
      1664,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1671,
    "end": 1676,
    "range": [
      1671,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1677,
    "end": 1680,
    "range": [
      1677,
      1680
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1681,
    "end": 1689,
    "range": [
      1681,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1690,
    "end": 1692,
    "range": [
      1690,
      1692
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1693,
    "end": 1698,
    "range": [
      1693,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1699,
    "end": 1705,
    "range": [
      1699,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1771,
    "end": 1774,
    "range": [
      1771,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1775,
    "end": 1779,
    "range": [
      1775,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1781,
    "end": 1787,
    "range": [
      1781,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1790,
    "end": 1796,
    "range": [
      1790,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1806,
    "end": 1809,
    "range": [
      1806,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1812,
    "end": 1818,
    "range": [
      1812,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1819,
    "end": 1823,
    "range": [
      1819,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1824,
    "end": 1827,
    "range": [
      1824,
      1827
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1828,
    "end": 1836,
    "range": [
      1828,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1837,
    "end": 1839,
    "range": [
      1837,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1840,
    "end": 1844,
    "range": [
      1840,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1845,
    "end": 1851,
    "range": [
      1845,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1910,
    "end": 1916,
    "range": [
      1910,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1917,
    "end": 1920,
    "range": [
      1917,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1921,
    "end": 1923,
    "range": [
      1921,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1983,
    "end": 1986,
    "range": [
      1983,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1989,
    "end": 1995,
    "range": [
      1989,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1996,
    "end": 2000,
    "range": [
      1996,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2001,
    "end": 2004,
    "range": [
      2001,
      2004
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2005,
    "end": 2013,
    "range": [
      2005,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2014,
    "end": 2016,
    "range": [
      2014,
      2016
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2017,
    "end": 2021,
    "range": [
      2017,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2022,
    "end": 2028,
    "range": [
      2022,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2094,
    "end": 2097,
    "range": [
      2094,
      2097
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2098,
    "end": 2102,
    "range": [
      2098,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2104,
    "end": 2110,
    "range": [
      2104,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2113,
    "end": 2119,
    "range": [
      2113,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2129,
    "end": 2132,
    "range": [
      2129,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2135,
    "end": 2141,
    "range": [
      2135,
      2141
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2142,
    "end": 2146,
    "range": [
      2142,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2147,
    "end": 2150,
    "range": [
      2147,
      2150
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2151,
    "end": 2159,
    "range": [
      2151,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2160,
    "end": 2162,
    "range": [
      2160,
      2162
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2163,
    "end": 2167,
    "range": [
      2163,
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
    "value": "length",
    "start": 2168,
    "end": 2174,
    "range": [
      2168,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2195,
    "end": 2201,
    "range": [
      2195,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2202,
    "end": 2210,
    "range": [
      2202,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2259,
    "end": 2265,
    "range": [
      2259,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2266,
    "end": 2269,
    "range": [
      2266,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2270,
    "end": 2272,
    "range": [
      2270,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2273,
    "end": 2278,
    "range": [
      2273,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2280,
    "end": 2286,
    "range": [
      2280,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2289,
    "end": 2295,
    "range": [
      2289,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2354,
    "end": 2357,
    "range": [
      2354,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2360,
    "end": 2366,
    "range": [
      2360,
      2366
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2367,
    "end": 2371,
    "range": [
      2367,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2372,
    "end": 2375,
    "range": [
      2372,
      2375
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2376,
    "end": 2384,
    "range": [
      2376,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2385,
    "end": 2387,
    "range": [
      2385,
      2387
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2388,
    "end": 2392,
    "range": [
      2388,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2393,
    "end": 2399,
    "range": [
      2393,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2465,
    "end": 2468,
    "range": [
      2465,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2471,
    "end": 2477,
    "range": [
      2471,
      2477
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2478,
    "end": 2483,
    "range": [
      2478,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2484,
    "end": 2487,
    "range": [
      2484,
      2487
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2488,
    "end": 2496,
    "range": [
      2488,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2497,
    "end": 2499,
    "range": [
      2497,
      2499
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2500,
    "end": 2505,
    "range": [
      2500,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2506,
    "end": 2512,
    "range": [
      2506,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2578,
    "end": 2581,
    "range": [
      2578,
      2581
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2582,
    "end": 2586,
    "range": [
      2582,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2588,
    "end": 2594,
    "range": [
      2588,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2597,
    "end": 2603,
    "range": [
      2597,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2613,
    "end": 2616,
    "range": [
      2613,
      2616
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2619,
    "end": 2625,
    "range": [
      2619,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2626,
    "end": 2630,
    "range": [
      2626,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2631,
    "end": 2634,
    "range": [
      2631,
      2634
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2635,
    "end": 2643,
    "range": [
      2635,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2644,
    "end": 2646,
    "range": [
      2644,
      2646
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2647,
    "end": 2651,
    "range": [
      2647,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2652,
    "end": 2658,
    "range": [
      2652,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2725,
    "end": 2732,
    "range": [
      2725,
      2732
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2733,
    "end": 2739,
    "range": [
      2733,
      2739
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2740,
    "end": 2743,
    "range": [
      2740,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "ss1",
    "start": 2744,
    "end": 2747,
    "range": [
      2744,
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
    "value": "{",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2807,
    "end": 2810,
    "range": [
      2807,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2813,
    "end": 2819,
    "range": [
      2813,
      2819
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2820,
    "end": 2824,
    "range": [
      2820,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2825,
    "end": 2828,
    "range": [
      2825,
      2828
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2829,
    "end": 2837,
    "range": [
      2829,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2838,
    "end": 2840,
    "range": [
      2838,
      2840
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2841,
    "end": 2845,
    "range": [
      2841,
      2845
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2846,
    "end": 2852,
    "range": [
      2846,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2852,
    "end": 2853,
    "range": [
      2852,
      2853
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2918,
    "end": 2921,
    "range": [
      2918,
      2921
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2922,
    "end": 2926,
    "range": [
      2922,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2926,
    "end": 2927,
    "range": [
      2926,
      2927
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2928,
    "end": 2934,
    "range": [
      2928,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2937,
    "end": 2943,
    "range": [
      2937,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2953,
    "end": 2956,
    "range": [
      2953,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2959,
    "end": 2965,
    "range": [
      2959,
      2965
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2966,
    "end": 2970,
    "range": [
      2966,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2971,
    "end": 2974,
    "range": [
      2971,
      2974
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2975,
    "end": 2983,
    "range": [
      2975,
      2983
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2984,
    "end": 2986,
    "range": [
      2984,
      2986
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2987,
    "end": 2991,
    "range": [
      2987,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2992,
    "end": 2998,
    "range": [
      2992,
      2998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3019,
    "end": 3025,
    "range": [
      3019,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3026,
    "end": 3034,
    "range": [
      3026,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
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
    "value": "private",
    "start": 3091,
    "end": 3098,
    "range": [
      3091,
      3098
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3099,
    "end": 3105,
    "range": [
      3099,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3106,
    "end": 3109,
    "range": [
      3106,
      3109
    ]
  },
  {
    "type": "Identifier",
    "value": "ss1",
    "start": 3110,
    "end": 3113,
    "range": [
      3110,
      3113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3114,
    "end": 3119,
    "range": [
      3114,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3121,
    "end": 3127,
    "range": [
      3121,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3128,
    "end": 3129,
    "range": [
      3128,
      3129
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3130,
    "end": 3136,
    "range": [
      3130,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3138,
    "end": 3139,
    "range": [
      3138,
      3139
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3195,
    "end": 3198,
    "range": [
      3195,
      3198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3201,
    "end": 3207,
    "range": [
      3201,
      3207
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 3208,
    "end": 3212,
    "range": [
      3208,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3213,
    "end": 3216,
    "range": [
      3213,
      3216
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3217,
    "end": 3225,
    "range": [
      3217,
      3225
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3226,
    "end": 3228,
    "range": [
      3226,
      3228
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 3229,
    "end": 3233,
    "range": [
      3229,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3234,
    "end": 3240,
    "range": [
      3234,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3306,
    "end": 3309,
    "range": [
      3306,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3310,
    "end": 3311,
    "range": [
      3310,
      3311
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3312,
    "end": 3318,
    "range": [
      3312,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3319,
    "end": 3324,
    "range": [
      3319,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3325,
    "end": 3328,
    "range": [
      3325,
      3328
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3329,
    "end": 3337,
    "range": [
      3329,
      3337
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3338,
    "end": 3340,
    "range": [
      3338,
      3340
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3341,
    "end": 3346,
    "range": [
      3341,
      3346
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3347,
    "end": 3353,
    "range": [
      3347,
      3353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3419,
    "end": 3422,
    "range": [
      3419,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 3423,
    "end": 3427,
    "range": [
      3423,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3427,
    "end": 3428,
    "range": [
      3427,
      3428
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3429,
    "end": 3435,
    "range": [
      3429,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3436,
    "end": 3437,
    "range": [
      3436,
      3437
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3438,
    "end": 3444,
    "range": [
      3438,
      3444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 3454,
    "end": 3457,
    "range": [
      3454,
      3457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3458,
    "end": 3459,
    "range": [
      3458,
      3459
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3460,
    "end": 3466,
    "range": [
      3460,
      3466
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 3467,
    "end": 3471,
    "range": [
      3467,
      3471
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3472,
    "end": 3475,
    "range": [
      3472,
      3475
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3476,
    "end": 3484,
    "range": [
      3476,
      3484
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3485,
    "end": 3487,
    "range": [
      3485,
      3487
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 3488,
    "end": 3492,
    "range": [
      3488,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3493,
    "end": 3499,
    "range": [
      3493,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3515,
    "end": 3516,
    "range": [
      3515,
      3516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  }
]
```
