__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
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
                "body": [],
                "start": 18,
                "end": 25
              },
              "expression": false,
              "start": 15,
              "end": 25
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
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
                "body": [],
                "start": 34,
                "end": 41
              },
              "expression": false,
              "start": 31,
              "end": 41
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 30,
            "end": 41
          }
        ],
        "start": 8,
        "end": 43
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
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
              "name": "simple",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 183
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 186,
                          "end": 190
                        },
                        "definite": false,
                        "start": 177,
                        "end": 190
                      }
                    ],
                    "declare": false,
                    "start": 171,
                    "end": 191
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
                          "name": "_superIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 217
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 220,
                          "end": 224
                        },
                        "definite": false,
                        "start": 206,
                        "end": 224
                      }
                    ],
                    "declare": false,
                    "start": 200,
                    "end": 225
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 271,
                          "end": 276
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 278
                        },
                        "optional": false,
                        "computed": false,
                        "start": 271,
                        "end": 278
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 271,
                      "end": 280
                    },
                    "directive": null,
                    "start": 271,
                    "end": 281
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 327,
                          "end": 332
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 334
                        },
                        "optional": false,
                        "computed": false,
                        "start": 327,
                        "end": 334
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 327,
                      "end": 336
                    },
                    "directive": null,
                    "start": 327,
                    "end": 337
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 383,
                          "end": 388
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 389,
                          "end": 392
                        },
                        "optional": false,
                        "computed": true,
                        "start": 383,
                        "end": 393
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 383,
                      "end": 395
                    },
                    "directive": null,
                    "start": 383,
                    "end": 396
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 447
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 450,
                            "end": 455
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 456,
                            "end": 457
                          },
                          "optional": false,
                          "computed": false,
                          "start": 450,
                          "end": 457
                        },
                        "definite": false,
                        "start": 446,
                        "end": 457
                      }
                    ],
                    "declare": false,
                    "start": 440,
                    "end": 458
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 508
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 511,
                            "end": 516
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 517,
                            "end": 520
                          },
                          "optional": false,
                          "computed": true,
                          "start": 511,
                          "end": 521
                        },
                        "definite": false,
                        "start": 507,
                        "end": 521
                      }
                    ],
                    "declare": false,
                    "start": 501,
                    "end": 522
                  }
                ],
                "start": 161,
                "end": 528
              },
              "expression": false,
              "start": 158,
              "end": 528
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 146,
            "end": 528
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "advanced",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 628
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 647,
                          "end": 653
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 656,
                          "end": 660
                        },
                        "definite": false,
                        "start": 647,
                        "end": 660
                      }
                    ],
                    "declare": false,
                    "start": 641,
                    "end": 661
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
                          "name": "_superIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 687
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 690,
                          "end": 694
                        },
                        "definite": false,
                        "start": 676,
                        "end": 694
                      }
                    ],
                    "declare": false,
                    "start": 670,
                    "end": 695
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 710,
                          "end": 711
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 720,
                            "end": 722
                          },
                          "id": null,
                          "generator": false,
                          "start": 714,
                          "end": 722
                        },
                        "definite": false,
                        "start": 710,
                        "end": 722
                      }
                    ],
                    "declare": false,
                    "start": 704,
                    "end": 723
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 770,
                          "end": 775
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 776,
                          "end": 777
                        },
                        "optional": false,
                        "computed": false,
                        "start": 770,
                        "end": 777
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 770,
                      "end": 779
                    },
                    "directive": null,
                    "start": 770,
                    "end": 780
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 826,
                          "end": 831
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 832,
                          "end": 835
                        },
                        "optional": false,
                        "computed": true,
                        "start": 826,
                        "end": 836
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 826,
                      "end": 838
                    },
                    "directive": null,
                    "start": 826,
                    "end": 839
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 889,
                          "end": 890
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 893,
                            "end": 898
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 899,
                            "end": 900
                          },
                          "optional": false,
                          "computed": false,
                          "start": 893,
                          "end": 900
                        },
                        "definite": false,
                        "start": 889,
                        "end": 900
                      }
                    ],
                    "declare": false,
                    "start": 883,
                    "end": 901
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 950,
                          "end": 951
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 954,
                            "end": 959
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 960,
                            "end": 963
                          },
                          "optional": false,
                          "computed": true,
                          "start": 954,
                          "end": 964
                        },
                        "definite": false,
                        "start": 950,
                        "end": 964
                      }
                    ],
                    "declare": false,
                    "start": 944,
                    "end": 965
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1011,
                          "end": 1016
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1017,
                          "end": 1018
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1011,
                        "end": 1018
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1021,
                        "end": 1022
                      },
                      "start": 1011,
                      "end": 1022
                    },
                    "directive": null,
                    "start": 1011,
                    "end": 1023
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1068,
                          "end": 1073
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 1074,
                          "end": 1077
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1068,
                        "end": 1078
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1081,
                        "end": 1082
                      },
                      "start": 1068,
                      "end": 1082
                    },
                    "directive": null,
                    "start": 1068,
                    "end": 1083
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1149,
                              "end": 1150
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1152,
                                "end": 1157
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1158,
                                "end": 1159
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1152,
                              "end": 1159
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1149,
                            "end": 1159
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1147,
                        "end": 1161
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1166,
                              "end": 1167
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1166,
                              "end": 1167
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1166,
                            "end": 1167
                          }
                        ],
                        "start": 1164,
                        "end": 1169
                      },
                      "start": 1147,
                      "end": 1169
                    },
                    "directive": null,
                    "start": 1146,
                    "end": 1171
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1236,
                              "end": 1237
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1239,
                                "end": 1244
                              },
                              "property": {
                                "type": "Literal",
                                "value": "x",
                                "raw": "\"x\"",
                                "start": 1245,
                                "end": 1248
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1239,
                              "end": 1249
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1236,
                            "end": 1249
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1234,
                        "end": 1251
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1256,
                              "end": 1257
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1256,
                              "end": 1257
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1256,
                            "end": 1257
                          }
                        ],
                        "start": 1254,
                        "end": 1259
                      },
                      "start": 1234,
                      "end": 1259
                    },
                    "directive": null,
                    "start": 1233,
                    "end": 1261
                  }
                ],
                "start": 631,
                "end": 1267
              },
              "expression": false,
              "start": 628,
              "end": 1267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 614,
            "end": 1267
          }
        ],
        "start": 63,
        "end": 1269
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 1269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1269
}
```
