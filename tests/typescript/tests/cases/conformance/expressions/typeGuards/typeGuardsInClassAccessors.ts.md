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
