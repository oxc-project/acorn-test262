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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 197,
                    "end": 203
                  }
                ],
                "start": 188,
                "end": 203
              },
              "start": 186,
              "end": 203
            },
            "start": 182,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 203
        }
      ],
      "declare": false,
      "start": 178,
      "end": 204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 246
      },
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
                  "start": 254,
                  "end": 260
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 263,
                  "end": 269
                }
              ],
              "start": 254,
              "end": 269
            },
            "start": 252,
            "end": 269
          },
          "start": 247,
          "end": 269
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
                "start": 320,
                "end": 323
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
                      "start": 334,
                      "end": 338
                    },
                    "prefix": true,
                    "start": 327,
                    "end": 338
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 343,
                    "end": 351
                  },
                  "start": 327,
                  "end": 351
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
                    "start": 355,
                    "end": 359
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 360,
                    "end": 366
                  },
                  "optional": false,
                  "computed": false,
                  "start": 355,
                  "end": 366
                },
                "start": 327,
                "end": 366
              },
              "start": 320,
              "end": 366
            },
            "directive": null,
            "start": 320,
            "end": 367
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
                          "start": 434,
                          "end": 440
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 443,
                          "end": 449
                        }
                      ],
                      "start": 434,
                      "end": 449
                    },
                    "start": 432,
                    "end": 449
                  },
                  "start": 428,
                  "end": 449
                },
                "init": null,
                "definite": false,
                "start": 428,
                "end": 449
              }
            ],
            "declare": false,
            "start": 424,
            "end": 450
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
                "start": 455,
                "end": 458
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
                      "start": 468,
                      "end": 472
                    },
                    "prefix": true,
                    "start": 461,
                    "end": 472
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 477,
                    "end": 485
                  },
                  "start": 461,
                  "end": 485
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
                    "start": 489,
                    "end": 493
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 489,
                  "end": 500
                },
                "start": 461,
                "end": 500
              },
              "start": 455,
              "end": 500
            },
            "directive": null,
            "start": 455,
            "end": 501
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
                "start": 559,
                "end": 562
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
                      "start": 572,
                      "end": 577
                    },
                    "prefix": true,
                    "start": 565,
                    "end": 577
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 582,
                    "end": 590
                  },
                  "start": 565,
                  "end": 590
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
                    "start": 594,
                    "end": 599
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 606
                  },
                  "optional": false,
                  "computed": false,
                  "start": 594,
                  "end": 606
                },
                "start": 565,
                "end": 606
              },
              "start": 559,
              "end": 606
            },
            "directive": null,
            "start": 559,
            "end": 607
          }
        ],
        "start": 271,
        "end": 619
      },
      "expression": false,
      "start": 236,
      "end": 619
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
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
                  "start": 669,
                  "end": 675
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 678,
                  "end": 684
                }
              ],
              "start": 669,
              "end": 684
            },
            "start": 667,
            "end": 684
          },
          "start": 662,
          "end": 684
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 702,
                          "end": 708
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 711,
                          "end": 717
                        }
                      ],
                      "start": 702,
                      "end": 717
                    },
                    "start": 700,
                    "end": 717
                  },
                  "start": 696,
                  "end": 717
                },
                "init": null,
                "definite": false,
                "start": 696,
                "end": 717
              }
            ],
            "declare": false,
            "start": 692,
            "end": 718
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 734
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 743,
                        "end": 749
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 752,
                        "end": 758
                      }
                    ],
                    "start": 743,
                    "end": 758
                  },
                  "start": 741,
                  "end": 758
                },
                "start": 735,
                "end": 758
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
                      "start": 817,
                      "end": 820
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
                            "start": 830,
                            "end": 834
                          },
                          "prefix": true,
                          "start": 823,
                          "end": 834
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 839,
                          "end": 847
                        },
                        "start": 823,
                        "end": 847
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
                          "start": 851,
                          "end": 855
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 856,
                          "end": 862
                        },
                        "optional": false,
                        "computed": false,
                        "start": 851,
                        "end": 862
                      },
                      "start": 823,
                      "end": 862
                    },
                    "start": 817,
                    "end": 862
                  },
                  "directive": null,
                  "start": 817,
                  "end": 863
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
                      "start": 936,
                      "end": 939
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
                            "start": 949,
                            "end": 953
                          },
                          "prefix": true,
                          "start": 942,
                          "end": 953
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 958,
                          "end": 966
                        },
                        "start": 942,
                        "end": 966
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
                          "start": 970,
                          "end": 974
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 975,
                          "end": 981
                        },
                        "optional": false,
                        "computed": false,
                        "start": 970,
                        "end": 981
                      },
                      "start": 942,
                      "end": 981
                    },
                    "start": 936,
                    "end": 981
                  },
                  "directive": null,
                  "start": 936,
                  "end": 982
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
                      "start": 1045,
                      "end": 1048
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
                            "start": 1058,
                            "end": 1063
                          },
                          "prefix": true,
                          "start": 1051,
                          "end": 1063
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1068,
                          "end": 1076
                        },
                        "start": 1051,
                        "end": 1076
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
                          "start": 1080,
                          "end": 1085
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1086,
                          "end": 1092
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1080,
                        "end": 1092
                      },
                      "start": 1051,
                      "end": 1092
                    },
                    "start": 1045,
                    "end": 1092
                  },
                  "directive": null,
                  "start": 1045,
                  "end": 1093
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
                        "name": "var3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1140,
                                "end": 1146
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1149,
                                "end": 1155
                              }
                            ],
                            "start": 1140,
                            "end": 1155
                          },
                          "start": 1138,
                          "end": 1155
                        },
                        "start": 1134,
                        "end": 1155
                      },
                      "init": null,
                      "definite": false,
                      "start": 1134,
                      "end": 1155
                    }
                  ],
                  "declare": false,
                  "start": 1130,
                  "end": 1156
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
                      "start": 1165,
                      "end": 1168
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
                            "name": "var3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1178,
                            "end": 1182
                          },
                          "prefix": true,
                          "start": 1171,
                          "end": 1182
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1187,
                          "end": 1195
                        },
                        "start": 1171,
                        "end": 1195
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1199,
                          "end": 1203
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1204,
                          "end": 1210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1199,
                        "end": 1210
                      },
                      "start": 1171,
                      "end": 1210
                    },
                    "start": 1165,
                    "end": 1210
                  },
                  "directive": null,
                  "start": 1165,
                  "end": 1211
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
                      "start": 1230,
                      "end": 1233
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
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1243,
                            "end": 1249
                          },
                          "prefix": true,
                          "start": 1236,
                          "end": 1249
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1254,
                          "end": 1262
                        },
                        "start": 1236,
                        "end": 1262
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1266,
                          "end": 1272
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1273,
                          "end": 1279
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1266,
                        "end": 1279
                      },
                      "start": 1236,
                      "end": 1279
                    },
                    "start": 1230,
                    "end": 1279
                  },
                  "directive": null,
                  "start": 1230,
                  "end": 1280
                }
              ],
              "start": 760,
              "end": 1296
            },
            "expression": false,
            "start": 723,
            "end": 1296
          }
        ],
        "start": 686,
        "end": 1298
      },
      "expression": false,
      "start": 650,
      "end": 1298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1333
      },
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
                  "start": 1341,
                  "end": 1347
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1350,
                  "end": 1356
                }
              ],
              "start": 1341,
              "end": 1356
            },
            "start": 1339,
            "end": 1356
          },
          "start": 1334,
          "end": 1356
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1415,
                          "end": 1421
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1424,
                          "end": 1430
                        }
                      ],
                      "start": 1415,
                      "end": 1430
                    },
                    "start": 1413,
                    "end": 1430
                  },
                  "start": 1409,
                  "end": 1430
                },
                "init": null,
                "definite": false,
                "start": 1409,
                "end": 1430
              }
            ],
            "declare": false,
            "start": 1405,
            "end": 1431
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1481,
                  "end": 1482
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
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
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1503,
                                "end": 1509
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1512,
                                "end": 1518
                              }
                            ],
                            "start": 1503,
                            "end": 1518
                          },
                          "start": 1501,
                          "end": 1518
                        },
                        "start": 1495,
                        "end": 1518
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
                              "start": 1577,
                              "end": 1580
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
                                    "start": 1590,
                                    "end": 1594
                                  },
                                  "prefix": true,
                                  "start": 1583,
                                  "end": 1594
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 1599,
                                  "end": 1607
                                },
                                "start": 1583,
                                "end": 1607
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
                                  "start": 1611,
                                  "end": 1615
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1616,
                                  "end": 1622
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1611,
                                "end": 1622
                              },
                              "start": 1583,
                              "end": 1622
                            },
                            "start": 1577,
                            "end": 1622
                          },
                          "directive": null,
                          "start": 1577,
                          "end": 1623
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
                              "start": 1696,
                              "end": 1699
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
                                    "start": 1709,
                                    "end": 1713
                                  },
                                  "prefix": true,
                                  "start": 1702,
                                  "end": 1713
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 1718,
                                  "end": 1726
                                },
                                "start": 1702,
                                "end": 1726
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
                                  "start": 1730,
                                  "end": 1734
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1735,
                                  "end": 1741
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1730,
                                "end": 1741
                              },
                              "start": 1702,
                              "end": 1741
                            },
                            "start": 1696,
                            "end": 1741
                          },
                          "directive": null,
                          "start": 1696,
                          "end": 1742
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
                              "start": 1805,
                              "end": 1808
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
                                    "start": 1818,
                                    "end": 1823
                                  },
                                  "prefix": true,
                                  "start": 1811,
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
                                "start": 1811,
                                "end": 1836
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
                                  "start": 1840,
                                  "end": 1845
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1846,
                                  "end": 1852
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1840,
                                "end": 1852
                              },
                              "start": 1811,
                              "end": 1852
                            },
                            "start": 1805,
                            "end": 1852
                          },
                          "directive": null,
                          "start": 1805,
                          "end": 1853
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
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 1900,
                                        "end": 1906
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 1909,
                                        "end": 1915
                                      }
                                    ],
                                    "start": 1900,
                                    "end": 1915
                                  },
                                  "start": 1898,
                                  "end": 1915
                                },
                                "start": 1894,
                                "end": 1915
                              },
                              "init": null,
                              "definite": false,
                              "start": 1894,
                              "end": 1915
                            }
                          ],
                          "declare": false,
                          "start": 1890,
                          "end": 1916
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
                              "start": 1925,
                              "end": 1928
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
                                    "name": "var3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1938,
                                    "end": 1942
                                  },
                                  "prefix": true,
                                  "start": 1931,
                                  "end": 1942
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 1947,
                                  "end": 1955
                                },
                                "start": 1931,
                                "end": 1955
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1959,
                                  "end": 1963
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1964,
                                  "end": 1970
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1959,
                                "end": 1970
                              },
                              "start": 1931,
                              "end": 1970
                            },
                            "start": 1925,
                            "end": 1970
                          },
                          "directive": null,
                          "start": 1925,
                          "end": 1971
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
                              "start": 1990,
                              "end": 1993
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
                                    "name": "param1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2003,
                                    "end": 2009
                                  },
                                  "prefix": true,
                                  "start": 1996,
                                  "end": 2009
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2014,
                                  "end": 2022
                                },
                                "start": 1996,
                                "end": 2022
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2026,
                                  "end": 2032
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2033,
                                  "end": 2039
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2026,
                                "end": 2039
                              },
                              "start": 1996,
                              "end": 2039
                            },
                            "start": 1990,
                            "end": 2039
                          },
                          "directive": null,
                          "start": 1990,
                          "end": 2040
                        }
                      ],
                      "start": 1520,
                      "end": 2056
                    },
                    "expression": false,
                    "start": 1485,
                    "end": 2056
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2058,
                      "end": 2063
                    }
                  ],
                  "optional": false,
                  "start": 1485,
                  "end": 2064
                },
                "definite": false,
                "start": 1481,
                "end": 2064
              }
            ],
            "declare": false,
            "start": 1477,
            "end": 2065
          }
        ],
        "start": 1358,
        "end": 2067
      },
      "expression": false,
      "start": 1322,
      "end": 2067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2097,
        "end": 2099
      },
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
                  "start": 2107,
                  "end": 2113
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2116,
                  "end": 2122
                }
              ],
              "start": 2107,
              "end": 2122
            },
            "start": 2105,
            "end": 2122
          },
          "start": 2100,
          "end": 2122
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2181,
                          "end": 2187
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2190,
                          "end": 2196
                        }
                      ],
                      "start": 2181,
                      "end": 2196
                    },
                    "start": 2179,
                    "end": 2196
                  },
                  "start": 2175,
                  "end": 2196
                },
                "init": null,
                "definite": false,
                "start": 2175,
                "end": 2196
              }
            ],
            "declare": false,
            "start": 2171,
            "end": 2197
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2247,
                  "end": 2248
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 2261,
                                "end": 2267
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 2270,
                                "end": 2276
                              }
                            ],
                            "start": 2261,
                            "end": 2276
                          },
                          "start": 2259,
                          "end": 2276
                        },
                        "start": 2253,
                        "end": 2276
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
                              "start": 2338,
                              "end": 2341
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
                                    "start": 2351,
                                    "end": 2355
                                  },
                                  "prefix": true,
                                  "start": 2344,
                                  "end": 2355
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2360,
                                  "end": 2368
                                },
                                "start": 2344,
                                "end": 2368
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
                                  "start": 2372,
                                  "end": 2376
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2377,
                                  "end": 2383
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2372,
                                "end": 2383
                              },
                              "start": 2344,
                              "end": 2383
                            },
                            "start": 2338,
                            "end": 2383
                          },
                          "directive": null,
                          "start": 2338,
                          "end": 2384
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
                              "start": 2457,
                              "end": 2460
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
                                    "start": 2470,
                                    "end": 2474
                                  },
                                  "prefix": true,
                                  "start": 2463,
                                  "end": 2474
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2479,
                                  "end": 2487
                                },
                                "start": 2463,
                                "end": 2487
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
                                  "start": 2491,
                                  "end": 2495
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2496,
                                  "end": 2502
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2491,
                                "end": 2502
                              },
                              "start": 2463,
                              "end": 2502
                            },
                            "start": 2457,
                            "end": 2502
                          },
                          "directive": null,
                          "start": 2457,
                          "end": 2503
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
                              "start": 2566,
                              "end": 2569
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
                                    "start": 2579,
                                    "end": 2584
                                  },
                                  "prefix": true,
                                  "start": 2572,
                                  "end": 2584
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2589,
                                  "end": 2597
                                },
                                "start": 2572,
                                "end": 2597
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
                                  "start": 2601,
                                  "end": 2606
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2607,
                                  "end": 2613
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2601,
                                "end": 2613
                              },
                              "start": 2572,
                              "end": 2613
                            },
                            "start": 2566,
                            "end": 2613
                          },
                          "directive": null,
                          "start": 2566,
                          "end": 2614
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
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 2661,
                                        "end": 2667
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 2670,
                                        "end": 2676
                                      }
                                    ],
                                    "start": 2661,
                                    "end": 2676
                                  },
                                  "start": 2659,
                                  "end": 2676
                                },
                                "start": 2655,
                                "end": 2676
                              },
                              "init": null,
                              "definite": false,
                              "start": 2655,
                              "end": 2676
                            }
                          ],
                          "declare": false,
                          "start": 2651,
                          "end": 2677
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
                              "start": 2686,
                              "end": 2689
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
                                    "name": "var3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2699,
                                    "end": 2703
                                  },
                                  "prefix": true,
                                  "start": 2692,
                                  "end": 2703
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2708,
                                  "end": 2716
                                },
                                "start": 2692,
                                "end": 2716
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2720,
                                  "end": 2724
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2725,
                                  "end": 2731
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2720,
                                "end": 2731
                              },
                              "start": 2692,
                              "end": 2731
                            },
                            "start": 2686,
                            "end": 2731
                          },
                          "directive": null,
                          "start": 2686,
                          "end": 2732
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
                              "start": 2751,
                              "end": 2754
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
                                    "name": "param1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2764,
                                    "end": 2770
                                  },
                                  "prefix": true,
                                  "start": 2757,
                                  "end": 2770
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2775,
                                  "end": 2783
                                },
                                "start": 2757,
                                "end": 2783
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2787,
                                  "end": 2793
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2794,
                                  "end": 2800
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2787,
                                "end": 2800
                              },
                              "start": 2757,
                              "end": 2800
                            },
                            "start": 2751,
                            "end": 2800
                          },
                          "directive": null,
                          "start": 2751,
                          "end": 2801
                        }
                      ],
                      "start": 2281,
                      "end": 2817
                    },
                    "id": null,
                    "generator": false,
                    "start": 2252,
                    "end": 2817
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2819,
                      "end": 2824
                    }
                  ],
                  "optional": false,
                  "start": 2251,
                  "end": 2825
                },
                "definite": false,
                "start": 2247,
                "end": 2825
              }
            ],
            "declare": false,
            "start": 2243,
            "end": 2826
          }
        ],
        "start": 2124,
        "end": 2828
      },
      "expression": false,
      "start": 2088,
      "end": 2828
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
                    "start": 2901,
                    "end": 2907
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2910,
                    "end": 2916
                  }
                ],
                "start": 2901,
                "end": 2916
              },
              "start": 2899,
              "end": 2916
            },
            "start": 2891,
            "end": 2916
          },
          "init": null,
          "definite": false,
          "start": 2891,
          "end": 2916
        }
      ],
      "declare": false,
      "start": 2887,
      "end": 2917
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2927,
        "end": 2929
      },
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
                          "start": 2948,
                          "end": 2954
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2957,
                          "end": 2963
                        }
                      ],
                      "start": 2948,
                      "end": 2963
                    },
                    "start": 2946,
                    "end": 2963
                  },
                  "start": 2942,
                  "end": 2963
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2966,
                  "end": 2974
                },
                "definite": false,
                "start": 2942,
                "end": 2974
              }
            ],
            "declare": false,
            "start": 2938,
            "end": 2975
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2987,
              "end": 2991
            },
            "start": 2980,
            "end": 2992
          }
        ],
        "start": 2932,
        "end": 2994
      },
      "expression": false,
      "start": 2918,
      "end": 2994
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
          "start": 2995,
          "end": 3003
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3013,
                  "end": 3015
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3013,
                "end": 3017
              },
              "prefix": true,
              "start": 3006,
              "end": 3017
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 3022,
              "end": 3030
            },
            "start": 3006,
            "end": 3030
          },
          "operator": "&&",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3034,
              "end": 3036
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3034,
            "end": 3038
          },
          "start": 3006,
          "end": 3038
        },
        "start": 2995,
        "end": 3038
      },
      "directive": null,
      "start": 2995,
      "end": 3039
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 3059
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
    "value": "var1",
    "start": 182,
    "end": 186,
    "range": [
      182,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 197,
    "end": 203,
    "range": [
      197,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 236,
    "end": 244,
    "range": [
      236,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 247,
    "end": 252,
    "range": [
      247,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260,
    "range": [
      254,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 263,
    "end": 269,
    "range": [
      263,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 320,
    "end": 323,
    "range": [
      320,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 327,
    "end": 333,
    "range": [
      327,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 334,
    "end": 338,
    "range": [
      334,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 339,
    "end": 342,
    "range": [
      339,
      342
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 343,
    "end": 351,
    "range": [
      343,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 352,
    "end": 354,
    "range": [
      352,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 355,
    "end": 359,
    "range": [
      355,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 360,
    "end": 366,
    "range": [
      360,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 424,
    "end": 427,
    "range": [
      424,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 443,
    "end": 449,
    "range": [
      443,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 455,
    "end": 458,
    "range": [
      455,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 468,
    "end": 472,
    "range": [
      468,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 477,
    "end": 485,
    "range": [
      477,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 486,
    "end": 488,
    "range": [
      486,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 489,
    "end": 493,
    "range": [
      489,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 494,
    "end": 500,
    "range": [
      494,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 559,
    "end": 562,
    "range": [
      559,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 565,
    "end": 571,
    "range": [
      565,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 572,
    "end": 577,
    "range": [
      572,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 582,
    "end": 590,
    "range": [
      582,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 591,
    "end": 593,
    "range": [
      591,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 594,
    "end": 599,
    "range": [
      594,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 600,
    "end": 606,
    "range": [
      600,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 650,
    "end": 658,
    "range": [
      650,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 659,
    "end": 661,
    "range": [
      659,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 662,
    "end": 667,
    "range": [
      662,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 669,
    "end": 675,
    "range": [
      669,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 678,
    "end": 684,
    "range": [
      678,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 692,
    "end": 695,
    "range": [
      692,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 696,
    "end": 700,
    "range": [
      696,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 702,
    "end": 708,
    "range": [
      702,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 711,
    "end": 717,
    "range": [
      711,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 723,
    "end": 731,
    "range": [
      723,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 732,
    "end": 734,
    "range": [
      732,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 735,
    "end": 741,
    "range": [
      735,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 743,
    "end": 749,
    "range": [
      743,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 752,
    "end": 758,
    "range": [
      752,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 817,
    "end": 820,
    "range": [
      817,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 823,
    "end": 829,
    "range": [
      823,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 830,
    "end": 834,
    "range": [
      830,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 835,
    "end": 838,
    "range": [
      835,
      838
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 839,
    "end": 847,
    "range": [
      839,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 848,
    "end": 850,
    "range": [
      848,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 851,
    "end": 855,
    "range": [
      851,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 856,
    "end": 862,
    "range": [
      856,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 936,
    "end": 939,
    "range": [
      936,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 942,
    "end": 948,
    "range": [
      942,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 949,
    "end": 953,
    "range": [
      949,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 954,
    "end": 957,
    "range": [
      954,
      957
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 958,
    "end": 966,
    "range": [
      958,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 967,
    "end": 969,
    "range": [
      967,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 970,
    "end": 974,
    "range": [
      970,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 975,
    "end": 981,
    "range": [
      975,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1045,
    "end": 1048,
    "range": [
      1045,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1051,
    "end": 1057,
    "range": [
      1051,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1058,
    "end": 1063,
    "range": [
      1058,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1064,
    "end": 1067,
    "range": [
      1064,
      1067
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1068,
    "end": 1076,
    "range": [
      1068,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1077,
    "end": 1079,
    "range": [
      1077,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1080,
    "end": 1085,
    "range": [
      1080,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1086,
    "end": 1092,
    "range": [
      1086,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1130,
    "end": 1133,
    "range": [
      1130,
      1133
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1134,
    "end": 1138,
    "range": [
      1134,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1140,
    "end": 1146,
    "range": [
      1140,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "type": "Identifier",
    "value": "num",
    "start": 1165,
    "end": 1168,
    "range": [
      1165,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1171,
    "end": 1177,
    "range": [
      1171,
      1177
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1178,
    "end": 1182,
    "range": [
      1178,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1183,
    "end": 1186,
    "range": [
      1183,
      1186
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1187,
    "end": 1195,
    "range": [
      1187,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1196,
    "end": 1198,
    "range": [
      1196,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1199,
    "end": 1203,
    "range": [
      1199,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1204,
    "end": 1210,
    "range": [
      1204,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1230,
    "end": 1233,
    "range": [
      1230,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1236,
    "end": 1242,
    "range": [
      1236,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 1243,
    "end": 1249,
    "range": [
      1243,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1250,
    "end": 1253,
    "range": [
      1250,
      1253
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1254,
    "end": 1262,
    "range": [
      1254,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1263,
    "end": 1265,
    "range": [
      1263,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 1266,
    "end": 1272,
    "range": [
      1266,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1273,
    "end": 1279,
    "range": [
      1273,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1322,
    "end": 1330,
    "range": [
      1322,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1331,
    "end": 1333,
    "range": [
      1331,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1334,
    "end": 1339,
    "range": [
      1334,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1341,
    "end": 1347,
    "range": [
      1341,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1350,
    "end": 1356,
    "range": [
      1350,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1405,
    "end": 1408,
    "range": [
      1405,
      1408
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1409,
    "end": 1413,
    "range": [
      1409,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1415,
    "end": 1421,
    "range": [
      1415,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1424,
    "end": 1430,
    "range": [
      1424,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1477,
    "end": 1480,
    "range": [
      1477,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1485,
    "end": 1493,
    "range": [
      1485,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 1495,
    "end": 1501,
    "range": [
      1495,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1503,
    "end": 1509,
    "range": [
      1503,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1512,
    "end": 1518,
    "range": [
      1512,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1577,
    "end": 1580,
    "range": [
      1577,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1583,
    "end": 1589,
    "range": [
      1583,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1590,
    "end": 1594,
    "range": [
      1590,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1595,
    "end": 1598,
    "range": [
      1595,
      1598
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1599,
    "end": 1607,
    "range": [
      1599,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1608,
    "end": 1610,
    "range": [
      1608,
      1610
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1611,
    "end": 1615,
    "range": [
      1611,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1616,
    "end": 1622,
    "range": [
      1616,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1696,
    "end": 1699,
    "range": [
      1696,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1702,
    "end": 1708,
    "range": [
      1702,
      1708
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1709,
    "end": 1713,
    "range": [
      1709,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1714,
    "end": 1717,
    "range": [
      1714,
      1717
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1718,
    "end": 1726,
    "range": [
      1718,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1727,
    "end": 1729,
    "range": [
      1727,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1730,
    "end": 1734,
    "range": [
      1730,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1735,
    "end": 1741,
    "range": [
      1735,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1805,
    "end": 1808,
    "range": [
      1805,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1811,
    "end": 1817,
    "range": [
      1811,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1818,
    "end": 1823,
    "range": [
      1818,
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
    "value": "param",
    "start": 1840,
    "end": 1845,
    "range": [
      1840,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1846,
    "end": 1852,
    "range": [
      1846,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1890,
    "end": 1893,
    "range": [
      1890,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1894,
    "end": 1898,
    "range": [
      1894,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1900,
    "end": 1906,
    "range": [
      1900,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1909,
    "end": 1915,
    "range": [
      1909,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1925,
    "end": 1928,
    "range": [
      1925,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1931,
    "end": 1937,
    "range": [
      1931,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1938,
    "end": 1942,
    "range": [
      1938,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1943,
    "end": 1946,
    "range": [
      1943,
      1946
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1947,
    "end": 1955,
    "range": [
      1947,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1956,
    "end": 1958,
    "range": [
      1956,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1959,
    "end": 1963,
    "range": [
      1959,
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
    "value": "length",
    "start": 1964,
    "end": 1970,
    "range": [
      1964,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1990,
    "end": 1993,
    "range": [
      1990,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1996,
    "end": 2002,
    "range": [
      1996,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 2003,
    "end": 2009,
    "range": [
      2003,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2010,
    "end": 2013,
    "range": [
      2010,
      2013
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2014,
    "end": 2022,
    "range": [
      2014,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2023,
    "end": 2025,
    "range": [
      2023,
      2025
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 2026,
    "end": 2032,
    "range": [
      2026,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2033,
    "end": 2039,
    "range": [
      2033,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2058,
    "end": 2063,
    "range": [
      2058,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2088,
    "end": 2096,
    "range": [
      2088,
      2096
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2097,
    "end": 2099,
    "range": [
      2097,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2100,
    "end": 2105,
    "range": [
      2100,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2107,
    "end": 2113,
    "range": [
      2107,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2116,
    "end": 2122,
    "range": [
      2116,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2171,
    "end": 2174,
    "range": [
      2171,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2175,
    "end": 2179,
    "range": [
      2175,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2181,
    "end": 2187,
    "range": [
      2181,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2190,
    "end": 2196,
    "range": [
      2190,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2243,
    "end": 2246,
    "range": [
      2243,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 2253,
    "end": 2259,
    "range": [
      2253,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2259,
    "end": 2260,
    "range": [
      2259,
      2260
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2261,
    "end": 2267,
    "range": [
      2261,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2270,
    "end": 2276,
    "range": [
      2270,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2278,
    "end": 2280,
    "range": [
      2278,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2338,
    "end": 2341,
    "range": [
      2338,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2344,
    "end": 2350,
    "range": [
      2344,
      2350
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2351,
    "end": 2355,
    "range": [
      2351,
      2355
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2356,
    "end": 2359,
    "range": [
      2356,
      2359
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2360,
    "end": 2368,
    "range": [
      2360,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2369,
    "end": 2371,
    "range": [
      2369,
      2371
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2372,
    "end": 2376,
    "range": [
      2372,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2377,
    "end": 2383,
    "range": [
      2377,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2383,
    "end": 2384,
    "range": [
      2383,
      2384
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2457,
    "end": 2460,
    "range": [
      2457,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2463,
    "end": 2469,
    "range": [
      2463,
      2469
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2470,
    "end": 2474,
    "range": [
      2470,
      2474
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2475,
    "end": 2478,
    "range": [
      2475,
      2478
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2479,
    "end": 2487,
    "range": [
      2479,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2488,
    "end": 2490,
    "range": [
      2488,
      2490
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2491,
    "end": 2495,
    "range": [
      2491,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2496,
    "end": 2502,
    "range": [
      2496,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2566,
    "end": 2569,
    "range": [
      2566,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2572,
    "end": 2578,
    "range": [
      2572,
      2578
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2579,
    "end": 2584,
    "range": [
      2579,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2585,
    "end": 2588,
    "range": [
      2585,
      2588
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2589,
    "end": 2597,
    "range": [
      2589,
      2597
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2598,
    "end": 2600,
    "range": [
      2598,
      2600
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2601,
    "end": 2606,
    "range": [
      2601,
      2606
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2607,
    "end": 2613,
    "range": [
      2607,
      2613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2651,
    "end": 2654,
    "range": [
      2651,
      2654
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 2655,
    "end": 2659,
    "range": [
      2655,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2661,
    "end": 2667,
    "range": [
      2661,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2670,
    "end": 2676,
    "range": [
      2670,
      2676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2676,
    "end": 2677,
    "range": [
      2676,
      2677
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2686,
    "end": 2689,
    "range": [
      2686,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2692,
    "end": 2698,
    "range": [
      2692,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 2699,
    "end": 2703,
    "range": [
      2699,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2704,
    "end": 2707,
    "range": [
      2704,
      2707
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2708,
    "end": 2716,
    "range": [
      2708,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2717,
    "end": 2719,
    "range": [
      2717,
      2719
    ]
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 2720,
    "end": 2724,
    "range": [
      2720,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2725,
    "end": 2731,
    "range": [
      2725,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2751,
    "end": 2754,
    "range": [
      2751,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2755,
    "end": 2756,
    "range": [
      2755,
      2756
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2757,
    "end": 2763,
    "range": [
      2757,
      2763
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 2764,
    "end": 2770,
    "range": [
      2764,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2771,
    "end": 2774,
    "range": [
      2771,
      2774
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2775,
    "end": 2783,
    "range": [
      2775,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2784,
    "end": 2786,
    "range": [
      2784,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 2787,
    "end": 2793,
    "range": [
      2787,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2793,
    "end": 2794,
    "range": [
      2793,
      2794
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2794,
    "end": 2800,
    "range": [
      2794,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2819,
    "end": 2824,
    "range": [
      2819,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2887,
    "end": 2890,
    "range": [
      2887,
      2890
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2891,
    "end": 2899,
    "range": [
      2891,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2901,
    "end": 2907,
    "range": [
      2901,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2910,
    "end": 2916,
    "range": [
      2910,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2918,
    "end": 2926,
    "range": [
      2918,
      2926
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2927,
    "end": 2929,
    "range": [
      2927,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2932,
    "end": 2933,
    "range": [
      2932,
      2933
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2938,
    "end": 2941,
    "range": [
      2938,
      2941
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2942,
    "end": 2946,
    "range": [
      2942,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2948,
    "end": 2954,
    "range": [
      2948,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2957,
    "end": 2963,
    "range": [
      2957,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2966,
    "end": 2974,
    "range": [
      2966,
      2974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2974,
    "end": 2975,
    "range": [
      2974,
      2975
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2980,
    "end": 2986,
    "range": [
      2980,
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
    "value": ";",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2995,
    "end": 3003,
    "range": [
      2995,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3006,
    "end": 3012,
    "range": [
      3006,
      3012
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 3013,
    "end": 3015,
    "range": [
      3013,
      3015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3016,
    "end": 3017,
    "range": [
      3016,
      3017
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3018,
    "end": 3021,
    "range": [
      3018,
      3021
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3022,
    "end": 3030,
    "range": [
      3022,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3031,
    "end": 3033,
    "range": [
      3031,
      3033
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 3034,
    "end": 3036,
    "range": [
      3034,
      3036
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3036,
    "end": 3037,
    "range": [
      3036,
      3037
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3037,
    "end": 3038,
    "range": [
      3037,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  }
]
```
