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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 244
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 280
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
                              "start": 288,
                              "end": 294
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 297,
                              "end": 303
                            }
                          ],
                          "start": 288,
                          "end": 303
                        },
                        "start": 286,
                        "end": 303
                      },
                      "start": 281,
                      "end": 303
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
                            "start": 362,
                            "end": 365
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
                                  "start": 375,
                                  "end": 379
                                },
                                "prefix": true,
                                "start": 368,
                                "end": 379
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 384,
                                "end": 392
                              },
                              "start": 368,
                              "end": 392
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
                                "start": 396,
                                "end": 400
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 401,
                                "end": 407
                              },
                              "optional": false,
                              "computed": false,
                              "start": 396,
                              "end": 407
                            },
                            "start": 368,
                            "end": 407
                          },
                          "start": 362,
                          "end": 407
                        },
                        "directive": null,
                        "start": 362,
                        "end": 408
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
                                      "start": 483,
                                      "end": 489
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 492,
                                      "end": 498
                                    }
                                  ],
                                  "start": 483,
                                  "end": 498
                                },
                                "start": 481,
                                "end": 498
                              },
                              "start": 477,
                              "end": 498
                            },
                            "init": null,
                            "definite": false,
                            "start": 477,
                            "end": 498
                          }
                        ],
                        "declare": false,
                        "start": 473,
                        "end": 499
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
                            "start": 508,
                            "end": 511
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
                                  "start": 521,
                                  "end": 525
                                },
                                "prefix": true,
                                "start": 514,
                                "end": 525
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 530,
                                "end": 538
                              },
                              "start": 514,
                              "end": 538
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
                                "start": 542,
                                "end": 546
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 553
                              },
                              "optional": false,
                              "computed": false,
                              "start": 542,
                              "end": 553
                            },
                            "start": 514,
                            "end": 553
                          },
                          "start": 508,
                          "end": 553
                        },
                        "directive": null,
                        "start": 508,
                        "end": 554
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
                            "start": 620,
                            "end": 623
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
                                  "start": 633,
                                  "end": 638
                                },
                                "prefix": true,
                                "start": 626,
                                "end": 638
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 643,
                                "end": 651
                              },
                              "start": 626,
                              "end": 651
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
                                "start": 655,
                                "end": 660
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 661,
                                "end": 667
                              },
                              "optional": false,
                              "computed": false,
                              "start": 655,
                              "end": 667
                            },
                            "start": 626,
                            "end": 667
                          },
                          "start": 620,
                          "end": 667
                        },
                        "directive": null,
                        "start": 620,
                        "end": 668
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "strOrNum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 703
                        },
                        "start": 688,
                        "end": 704
                      }
                    ],
                    "start": 305,
                    "end": 710
                  },
                  "expression": false,
                  "start": 280,
                  "end": 710
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 274,
                "end": 710
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 724
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
                            "start": 784,
                            "end": 787
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
                                  "start": 797,
                                  "end": 801
                                },
                                "prefix": true,
                                "start": 790,
                                "end": 801
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 806,
                                "end": 814
                              },
                              "start": 790,
                              "end": 814
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
                                "start": 818,
                                "end": 822
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 823,
                                "end": 829
                              },
                              "optional": false,
                              "computed": false,
                              "start": 818,
                              "end": 829
                            },
                            "start": 790,
                            "end": 829
                          },
                          "start": 784,
                          "end": 829
                        },
                        "directive": null,
                        "start": 784,
                        "end": 830
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
                                      "start": 905,
                                      "end": 911
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 914,
                                      "end": 920
                                    }
                                  ],
                                  "start": 905,
                                  "end": 920
                                },
                                "start": 903,
                                "end": 920
                              },
                              "start": 899,
                              "end": 920
                            },
                            "init": null,
                            "definite": false,
                            "start": 899,
                            "end": 920
                          }
                        ],
                        "declare": false,
                        "start": 895,
                        "end": 921
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
                            "start": 930,
                            "end": 933
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
                                  "start": 943,
                                  "end": 947
                                },
                                "prefix": true,
                                "start": 936,
                                "end": 947
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 952,
                                "end": 960
                              },
                              "start": 936,
                              "end": 960
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
                                "start": 964,
                                "end": 968
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 969,
                                "end": 975
                              },
                              "optional": false,
                              "computed": false,
                              "start": 964,
                              "end": 975
                            },
                            "start": 936,
                            "end": 975
                          },
                          "start": 930,
                          "end": 975
                        },
                        "directive": null,
                        "start": 930,
                        "end": 976
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "strOrNum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1003,
                          "end": 1011
                        },
                        "start": 996,
                        "end": 1012
                      }
                    ],
                    "start": 727,
                    "end": 1018
                  },
                  "expression": false,
                  "start": 724,
                  "end": 1018
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 716,
                "end": 1018
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1032
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
                              "start": 1040,
                              "end": 1046
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 1049,
                              "end": 1055
                            }
                          ],
                          "start": 1040,
                          "end": 1055
                        },
                        "start": 1038,
                        "end": 1055
                      },
                      "start": 1033,
                      "end": 1055
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
                            "start": 1114,
                            "end": 1117
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
                                  "start": 1127,
                                  "end": 1131
                                },
                                "prefix": true,
                                "start": 1120,
                                "end": 1131
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 1136,
                                "end": 1144
                              },
                              "start": 1120,
                              "end": 1144
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
                                "start": 1148,
                                "end": 1152
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1153,
                                "end": 1159
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1148,
                              "end": 1159
                            },
                            "start": 1120,
                            "end": 1159
                          },
                          "start": 1114,
                          "end": 1159
                        },
                        "directive": null,
                        "start": 1114,
                        "end": 1160
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
                                      "start": 1235,
                                      "end": 1241
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 1244,
                                      "end": 1250
                                    }
                                  ],
                                  "start": 1235,
                                  "end": 1250
                                },
                                "start": 1233,
                                "end": 1250
                              },
                              "start": 1229,
                              "end": 1250
                            },
                            "init": null,
                            "definite": false,
                            "start": 1229,
                            "end": 1250
                          }
                        ],
                        "declare": false,
                        "start": 1225,
                        "end": 1251
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
                            "start": 1260,
                            "end": 1263
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
                                  "start": 1273,
                                  "end": 1277
                                },
                                "prefix": true,
                                "start": 1266,
                                "end": 1277
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 1282,
                                "end": 1290
                              },
                              "start": 1266,
                              "end": 1290
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
                                "start": 1294,
                                "end": 1298
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1299,
                                "end": 1305
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1294,
                              "end": 1305
                            },
                            "start": 1266,
                            "end": 1305
                          },
                          "start": 1260,
                          "end": 1305
                        },
                        "directive": null,
                        "start": 1260,
                        "end": 1306
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
                            "start": 1372,
                            "end": 1375
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
                                  "start": 1385,
                                  "end": 1390
                                },
                                "prefix": true,
                                "start": 1378,
                                "end": 1390
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 1395,
                                "end": 1403
                              },
                              "start": 1378,
                              "end": 1403
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
                                "start": 1407,
                                "end": 1412
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1413,
                                "end": 1419
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1407,
                              "end": 1419
                            },
                            "start": 1378,
                            "end": 1419
                          },
                          "start": 1372,
                          "end": 1419
                        },
                        "directive": null,
                        "start": 1372,
                        "end": 1420
                      }
                    ],
                    "start": 1057,
                    "end": 1436
                  },
                  "expression": false,
                  "start": 1032,
                  "end": 1436
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1024,
                "end": 1436
              }
            ],
            "start": 247,
            "end": 1438
          },
          "definite": false,
          "start": 240,
          "end": 1438
        }
      ],
      "declare": false,
      "start": 236,
      "end": 1439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1475,
          "end": 1483
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1493,
                    "end": 1497
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1504
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1493,
                  "end": 1504
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrNum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1505,
                    "end": 1513
                  }
                ],
                "optional": false,
                "start": 1493,
                "end": 1514
              },
              "prefix": true,
              "start": 1486,
              "end": 1514
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1519,
              "end": 1527
            },
            "start": 1486,
            "end": 1527
          },
          "operator": "&&",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1531,
                "end": 1535
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1542
              },
              "optional": false,
              "computed": false,
              "start": 1531,
              "end": 1542
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1551
              }
            ],
            "optional": false,
            "start": 1531,
            "end": 1552
          },
          "start": 1486,
          "end": 1552
        },
        "start": 1475,
        "end": 1552
      },
      "directive": null,
      "start": 1475,
      "end": 1553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1585,
          "end": 1593
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1603,
                  "end": 1607
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1608,
                  "end": 1612
                },
                "optional": false,
                "computed": false,
                "start": 1603,
                "end": 1612
              },
              "prefix": true,
              "start": 1596,
              "end": 1612
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1617,
              "end": 1625
            },
            "start": 1596,
            "end": 1625
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1633
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1638
            },
            "optional": false,
            "computed": false,
            "start": 1629,
            "end": 1638
          },
          "start": 1596,
          "end": 1638
        },
        "start": 1585,
        "end": 1638
      },
      "directive": null,
      "start": 1585,
      "end": 1639
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 1640
}
```
