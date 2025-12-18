__ESTREE_TEST__:AST:
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 208,
                          "end": 213
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 215
                        },
                        "optional": false,
                        "computed": false,
                        "start": 208,
                        "end": 215
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 208,
                      "end": 217
                    },
                    "directive": null,
                    "start": 208,
                    "end": 218
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 264,
                          "end": 269
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 270,
                          "end": 271
                        },
                        "optional": false,
                        "computed": false,
                        "start": 264,
                        "end": 271
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 264,
                      "end": 273
                    },
                    "directive": null,
                    "start": 264,
                    "end": 274
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 320,
                          "end": 325
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 326,
                          "end": 329
                        },
                        "optional": false,
                        "computed": true,
                        "start": 320,
                        "end": 330
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 320,
                      "end": 332
                    },
                    "directive": null,
                    "start": 320,
                    "end": 333
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
                          "start": 383,
                          "end": 384
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 387,
                            "end": 392
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 393,
                            "end": 394
                          },
                          "optional": false,
                          "computed": false,
                          "start": 387,
                          "end": 394
                        },
                        "definite": false,
                        "start": 383,
                        "end": 394
                      }
                    ],
                    "declare": false,
                    "start": 377,
                    "end": 395
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
                          "start": 444,
                          "end": 445
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 448,
                            "end": 453
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 454,
                            "end": 457
                          },
                          "optional": false,
                          "computed": true,
                          "start": 448,
                          "end": 458
                        },
                        "definite": false,
                        "start": 444,
                        "end": 458
                      }
                    ],
                    "declare": false,
                    "start": 438,
                    "end": 459
                  }
                ],
                "start": 161,
                "end": 465
              },
              "expression": false,
              "start": 158,
              "end": 465
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 146,
            "end": 465
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
              "start": 557,
              "end": 565
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 585
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
                            "start": 594,
                            "end": 596
                          },
                          "id": null,
                          "generator": false,
                          "start": 588,
                          "end": 596
                        },
                        "definite": false,
                        "start": 584,
                        "end": 596
                      }
                    ],
                    "declare": false,
                    "start": 578,
                    "end": 597
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 644,
                          "end": 649
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 651
                        },
                        "optional": false,
                        "computed": false,
                        "start": 644,
                        "end": 651
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 644,
                      "end": 653
                    },
                    "directive": null,
                    "start": 644,
                    "end": 654
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 700,
                          "end": 705
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 706,
                          "end": 709
                        },
                        "optional": false,
                        "computed": true,
                        "start": 700,
                        "end": 710
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 700,
                      "end": 712
                    },
                    "directive": null,
                    "start": 700,
                    "end": 713
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
                          "start": 763,
                          "end": 764
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 767,
                            "end": 772
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 773,
                            "end": 774
                          },
                          "optional": false,
                          "computed": false,
                          "start": 767,
                          "end": 774
                        },
                        "definite": false,
                        "start": 763,
                        "end": 774
                      }
                    ],
                    "declare": false,
                    "start": 757,
                    "end": 775
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
                          "start": 824,
                          "end": 825
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 828,
                            "end": 833
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 834,
                            "end": 837
                          },
                          "optional": false,
                          "computed": true,
                          "start": 828,
                          "end": 838
                        },
                        "definite": false,
                        "start": 824,
                        "end": 838
                      }
                    ],
                    "declare": false,
                    "start": 818,
                    "end": 839
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
                          "start": 885,
                          "end": 890
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 891,
                          "end": 892
                        },
                        "optional": false,
                        "computed": false,
                        "start": 885,
                        "end": 892
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 895,
                        "end": 896
                      },
                      "start": 885,
                      "end": 896
                    },
                    "directive": null,
                    "start": 885,
                    "end": 897
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
                          "start": 942,
                          "end": 947
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 948,
                          "end": 951
                        },
                        "optional": false,
                        "computed": true,
                        "start": 942,
                        "end": 952
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 955,
                        "end": 956
                      },
                      "start": 942,
                      "end": 956
                    },
                    "directive": null,
                    "start": 942,
                    "end": 957
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
                              "start": 1023,
                              "end": 1024
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1026,
                                "end": 1031
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1032,
                                "end": 1033
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1026,
                              "end": 1033
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1023,
                            "end": 1033
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1021,
                        "end": 1035
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
                              "start": 1040,
                              "end": 1041
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1040,
                              "end": 1041
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1040,
                            "end": 1041
                          }
                        ],
                        "start": 1038,
                        "end": 1043
                      },
                      "start": 1021,
                      "end": 1043
                    },
                    "directive": null,
                    "start": 1020,
                    "end": 1045
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
                              "start": 1110,
                              "end": 1111
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1113,
                                "end": 1118
                              },
                              "property": {
                                "type": "Literal",
                                "value": "x",
                                "raw": "\"x\"",
                                "start": 1119,
                                "end": 1122
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1113,
                              "end": 1123
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1110,
                            "end": 1123
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1108,
                        "end": 1125
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
                              "start": 1130,
                              "end": 1131
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1130,
                              "end": 1131
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1130,
                            "end": 1131
                          }
                        ],
                        "start": 1128,
                        "end": 1133
                      },
                      "start": 1108,
                      "end": 1133
                    },
                    "directive": null,
                    "start": 1107,
                    "end": 1135
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1188,
                            "end": 1193
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1194,
                            "end": 1195
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1188,
                          "end": 1195
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1188,
                        "end": 1197
                      },
                      "id": null,
                      "generator": false,
                      "start": 1182,
                      "end": 1197
                    },
                    "directive": null,
                    "start": 1181,
                    "end": 1199
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1251,
                            "end": 1256
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 1257,
                            "end": 1260
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1251,
                          "end": 1261
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1251,
                        "end": 1263
                      },
                      "id": null,
                      "generator": false,
                      "start": 1245,
                      "end": 1263
                    },
                    "directive": null,
                    "start": 1244,
                    "end": 1265
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1330,
                            "end": 1335
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1336,
                            "end": 1337
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1330,
                          "end": 1337
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1330,
                        "end": 1339
                      },
                      "id": null,
                      "generator": false,
                      "start": 1318,
                      "end": 1339
                    },
                    "directive": null,
                    "start": 1317,
                    "end": 1341
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1405,
                            "end": 1410
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 1411,
                            "end": 1414
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1405,
                          "end": 1415
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1405,
                        "end": 1417
                      },
                      "id": null,
                      "generator": false,
                      "start": 1393,
                      "end": 1417
                    },
                    "directive": null,
                    "start": 1392,
                    "end": 1419
                  }
                ],
                "start": 568,
                "end": 1425
              },
              "expression": false,
              "start": 565,
              "end": 1425
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 551,
            "end": 1425
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property_access_only_read_only",
              "optional": false,
              "typeAnnotation": null,
              "start": 1437,
              "end": 1467
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1517,
                          "end": 1522
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1523,
                          "end": 1524
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1517,
                        "end": 1524
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1517,
                      "end": 1526
                    },
                    "directive": null,
                    "start": 1517,
                    "end": 1527
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
                          "start": 1577,
                          "end": 1578
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1581,
                            "end": 1586
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1588
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1581,
                          "end": 1588
                        },
                        "definite": false,
                        "start": 1577,
                        "end": 1588
                      }
                    ],
                    "declare": false,
                    "start": 1571,
                    "end": 1589
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1642,
                            "end": 1647
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1648,
                            "end": 1649
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1642,
                          "end": 1649
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1642,
                        "end": 1651
                      },
                      "id": null,
                      "generator": false,
                      "start": 1636,
                      "end": 1651
                    },
                    "directive": null,
                    "start": 1635,
                    "end": 1653
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1718,
                            "end": 1723
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1724,
                            "end": 1725
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1718,
                          "end": 1725
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1718,
                        "end": 1727
                      },
                      "id": null,
                      "generator": false,
                      "start": 1706,
                      "end": 1727
                    },
                    "directive": null,
                    "start": 1705,
                    "end": 1729
                  }
                ],
                "start": 1470,
                "end": 1735
              },
              "expression": false,
              "start": 1467,
              "end": 1735
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1431,
            "end": 1735
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property_access_only_write_only",
              "optional": false,
              "typeAnnotation": null,
              "start": 1747,
              "end": 1778
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1797,
                          "end": 1798
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
                            "start": 1807,
                            "end": 1809
                          },
                          "id": null,
                          "generator": false,
                          "start": 1801,
                          "end": 1809
                        },
                        "definite": false,
                        "start": 1797,
                        "end": 1809
                      }
                    ],
                    "declare": false,
                    "start": 1791,
                    "end": 1810
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
                          "start": 1856,
                          "end": 1861
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1862,
                          "end": 1863
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1856,
                        "end": 1863
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1866,
                        "end": 1867
                      },
                      "start": 1856,
                      "end": 1867
                    },
                    "directive": null,
                    "start": 1856,
                    "end": 1868
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
                              "start": 1934,
                              "end": 1935
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1937,
                                "end": 1942
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1943,
                                "end": 1944
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1937,
                              "end": 1944
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1934,
                            "end": 1944
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1932,
                        "end": 1946
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
                              "start": 1951,
                              "end": 1952
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1951,
                              "end": 1952
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1951,
                            "end": 1952
                          }
                        ],
                        "start": 1949,
                        "end": 1954
                      },
                      "start": 1932,
                      "end": 1954
                    },
                    "directive": null,
                    "start": 1931,
                    "end": 1956
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2018,
                            "end": 2023
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2024,
                            "end": 2025
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2018,
                          "end": 2025
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2028,
                          "end": 2029
                        },
                        "start": 2018,
                        "end": 2029
                      },
                      "id": null,
                      "generator": false,
                      "start": 2012,
                      "end": 2029
                    },
                    "directive": null,
                    "start": 2011,
                    "end": 2031
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2105,
                            "end": 2110
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2111,
                            "end": 2112
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2105,
                          "end": 2112
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2115,
                          "end": 2116
                        },
                        "start": 2105,
                        "end": 2116
                      },
                      "id": null,
                      "generator": false,
                      "start": 2093,
                      "end": 2116
                    },
                    "directive": null,
                    "start": 2092,
                    "end": 2118
                  }
                ],
                "start": 1781,
                "end": 2124
              },
              "expression": false,
              "start": 1778,
              "end": 2124
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1741,
            "end": 2124
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "element_access_only_read_only",
              "optional": false,
              "typeAnnotation": null,
              "start": 2136,
              "end": 2165
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2214,
                          "end": 2219
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 2220,
                          "end": 2223
                        },
                        "optional": false,
                        "computed": true,
                        "start": 2214,
                        "end": 2224
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2214,
                      "end": 2226
                    },
                    "directive": null,
                    "start": 2214,
                    "end": 2227
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
                          "start": 2276,
                          "end": 2277
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2280,
                            "end": 2285
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 2286,
                            "end": 2289
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2280,
                          "end": 2290
                        },
                        "definite": false,
                        "start": 2276,
                        "end": 2290
                      }
                    ],
                    "declare": false,
                    "start": 2270,
                    "end": 2291
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2343,
                            "end": 2348
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 2349,
                            "end": 2352
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2343,
                          "end": 2353
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2343,
                        "end": 2355
                      },
                      "id": null,
                      "generator": false,
                      "start": 2337,
                      "end": 2355
                    },
                    "directive": null,
                    "start": 2336,
                    "end": 2357
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2421,
                            "end": 2426
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 2427,
                            "end": 2430
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2421,
                          "end": 2431
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2421,
                        "end": 2433
                      },
                      "id": null,
                      "generator": false,
                      "start": 2409,
                      "end": 2433
                    },
                    "directive": null,
                    "start": 2408,
                    "end": 2435
                  }
                ],
                "start": 2168,
                "end": 2441
              },
              "expression": false,
              "start": 2165,
              "end": 2441
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2130,
            "end": 2441
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "element_access_only_write_only",
              "optional": false,
              "typeAnnotation": null,
              "start": 2453,
              "end": 2483
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2502,
                          "end": 2503
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
                            "start": 2512,
                            "end": 2514
                          },
                          "id": null,
                          "generator": false,
                          "start": 2506,
                          "end": 2514
                        },
                        "definite": false,
                        "start": 2502,
                        "end": 2514
                      }
                    ],
                    "declare": false,
                    "start": 2496,
                    "end": 2515
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
                          "start": 2560,
                          "end": 2565
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 2566,
                          "end": 2569
                        },
                        "optional": false,
                        "computed": true,
                        "start": 2560,
                        "end": 2570
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2573,
                        "end": 2574
                      },
                      "start": 2560,
                      "end": 2574
                    },
                    "directive": null,
                    "start": 2560,
                    "end": 2575
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
                              "start": 2640,
                              "end": 2641
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 2643,
                                "end": 2648
                              },
                              "property": {
                                "type": "Literal",
                                "value": "x",
                                "raw": "\"x\"",
                                "start": 2649,
                                "end": 2652
                              },
                              "optional": false,
                              "computed": true,
                              "start": 2643,
                              "end": 2653
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2640,
                            "end": 2653
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2638,
                        "end": 2655
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
                              "start": 2660,
                              "end": 2661
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2660,
                              "end": 2661
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 2660,
                            "end": 2661
                          }
                        ],
                        "start": 2658,
                        "end": 2663
                      },
                      "start": 2638,
                      "end": 2663
                    },
                    "directive": null,
                    "start": 2637,
                    "end": 2665
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2726,
                            "end": 2731
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 2732,
                            "end": 2735
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2726,
                          "end": 2736
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2739,
                          "end": 2740
                        },
                        "start": 2726,
                        "end": 2740
                      },
                      "id": null,
                      "generator": false,
                      "start": 2720,
                      "end": 2740
                    },
                    "directive": null,
                    "start": 2719,
                    "end": 2742
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2815,
                            "end": 2820
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 2821,
                            "end": 2824
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2815,
                          "end": 2825
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2828,
                          "end": 2829
                        },
                        "start": 2815,
                        "end": 2829
                      },
                      "id": null,
                      "generator": false,
                      "start": 2803,
                      "end": 2829
                    },
                    "directive": null,
                    "start": 2802,
                    "end": 2831
                  }
                ],
                "start": 2486,
                "end": 2837
              },
              "expression": false,
              "start": 2483,
              "end": 2837
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2447,
            "end": 2837
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property_access_only_read_only_in_generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2851,
              "end": 2894
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": true,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2944,
                          "end": 2949
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2950,
                          "end": 2951
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2944,
                        "end": 2951
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2944,
                      "end": 2953
                    },
                    "directive": null,
                    "start": 2944,
                    "end": 2954
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
                          "start": 3004,
                          "end": 3005
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3008,
                            "end": 3013
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3014,
                            "end": 3015
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3008,
                          "end": 3015
                        },
                        "definite": false,
                        "start": 3004,
                        "end": 3015
                      }
                    ],
                    "declare": false,
                    "start": 2998,
                    "end": 3016
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3069,
                            "end": 3074
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3075,
                            "end": 3076
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3069,
                          "end": 3076
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3069,
                        "end": 3078
                      },
                      "id": null,
                      "generator": false,
                      "start": 3063,
                      "end": 3078
                    },
                    "directive": null,
                    "start": 3062,
                    "end": 3080
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3145,
                            "end": 3150
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3151,
                            "end": 3152
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3145,
                          "end": 3152
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3145,
                        "end": 3154
                      },
                      "id": null,
                      "generator": false,
                      "start": 3133,
                      "end": 3154
                    },
                    "directive": null,
                    "start": 3132,
                    "end": 3156
                  }
                ],
                "start": 2897,
                "end": 3162
              },
              "expression": false,
              "start": 2894,
              "end": 3162
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2843,
            "end": 3162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property_access_only_write_only_in_generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 3176,
              "end": 3220
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3239,
                          "end": 3240
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
                            "start": 3249,
                            "end": 3251
                          },
                          "id": null,
                          "generator": false,
                          "start": 3243,
                          "end": 3251
                        },
                        "definite": false,
                        "start": 3239,
                        "end": 3251
                      }
                    ],
                    "declare": false,
                    "start": 3233,
                    "end": 3252
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
                          "start": 3298,
                          "end": 3303
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3304,
                          "end": 3305
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3298,
                        "end": 3305
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3308,
                        "end": 3309
                      },
                      "start": 3298,
                      "end": 3309
                    },
                    "directive": null,
                    "start": 3298,
                    "end": 3310
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
                              "start": 3376,
                              "end": 3377
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 3379,
                                "end": 3384
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3385,
                                "end": 3386
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3379,
                              "end": 3386
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 3376,
                            "end": 3386
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3374,
                        "end": 3388
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
                              "start": 3393,
                              "end": 3394
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3393,
                              "end": 3394
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 3393,
                            "end": 3394
                          }
                        ],
                        "start": 3391,
                        "end": 3396
                      },
                      "start": 3374,
                      "end": 3396
                    },
                    "directive": null,
                    "start": 3373,
                    "end": 3398
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3460,
                            "end": 3465
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3466,
                            "end": 3467
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3460,
                          "end": 3467
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3470,
                          "end": 3471
                        },
                        "start": 3460,
                        "end": 3471
                      },
                      "id": null,
                      "generator": false,
                      "start": 3454,
                      "end": 3471
                    },
                    "directive": null,
                    "start": 3453,
                    "end": 3473
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3547,
                            "end": 3552
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3553,
                            "end": 3554
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3547,
                          "end": 3554
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3557,
                          "end": 3558
                        },
                        "start": 3547,
                        "end": 3558
                      },
                      "id": null,
                      "generator": false,
                      "start": 3535,
                      "end": 3558
                    },
                    "directive": null,
                    "start": 3534,
                    "end": 3560
                  }
                ],
                "start": 3223,
                "end": 3566
              },
              "expression": false,
              "start": 3220,
              "end": 3566
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3168,
            "end": 3566
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "element_access_only_read_only_in_generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 3580,
              "end": 3622
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": true,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3671,
                          "end": 3676
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 3677,
                          "end": 3680
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3671,
                        "end": 3681
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3671,
                      "end": 3683
                    },
                    "directive": null,
                    "start": 3671,
                    "end": 3684
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
                          "start": 3733,
                          "end": 3734
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3737,
                            "end": 3742
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 3743,
                            "end": 3746
                          },
                          "optional": false,
                          "computed": true,
                          "start": 3737,
                          "end": 3747
                        },
                        "definite": false,
                        "start": 3733,
                        "end": 3747
                      }
                    ],
                    "declare": false,
                    "start": 3727,
                    "end": 3748
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3800,
                            "end": 3805
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 3806,
                            "end": 3809
                          },
                          "optional": false,
                          "computed": true,
                          "start": 3800,
                          "end": 3810
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3800,
                        "end": 3812
                      },
                      "id": null,
                      "generator": false,
                      "start": 3794,
                      "end": 3812
                    },
                    "directive": null,
                    "start": 3793,
                    "end": 3814
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 3878,
                            "end": 3883
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 3884,
                            "end": 3887
                          },
                          "optional": false,
                          "computed": true,
                          "start": 3878,
                          "end": 3888
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3878,
                        "end": 3890
                      },
                      "id": null,
                      "generator": false,
                      "start": 3866,
                      "end": 3890
                    },
                    "directive": null,
                    "start": 3865,
                    "end": 3892
                  }
                ],
                "start": 3625,
                "end": 3898
              },
              "expression": false,
              "start": 3622,
              "end": 3898
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3572,
            "end": 3898
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "element_access_only_write_only_in_generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 3912,
              "end": 3955
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3974,
                          "end": 3975
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
                            "start": 3984,
                            "end": 3986
                          },
                          "id": null,
                          "generator": false,
                          "start": 3978,
                          "end": 3986
                        },
                        "definite": false,
                        "start": 3974,
                        "end": 3986
                      }
                    ],
                    "declare": false,
                    "start": 3968,
                    "end": 3987
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
                          "start": 4032,
                          "end": 4037
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 4038,
                          "end": 4041
                        },
                        "optional": false,
                        "computed": true,
                        "start": 4032,
                        "end": 4042
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4045,
                        "end": 4046
                      },
                      "start": 4032,
                      "end": 4046
                    },
                    "directive": null,
                    "start": 4032,
                    "end": 4047
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
                              "start": 4112,
                              "end": 4113
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 4115,
                                "end": 4120
                              },
                              "property": {
                                "type": "Literal",
                                "value": "x",
                                "raw": "\"x\"",
                                "start": 4121,
                                "end": 4124
                              },
                              "optional": false,
                              "computed": true,
                              "start": 4115,
                              "end": 4125
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4112,
                            "end": 4125
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4110,
                        "end": 4127
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
                              "start": 4132,
                              "end": 4133
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4132,
                              "end": 4133
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 4132,
                            "end": 4133
                          }
                        ],
                        "start": 4130,
                        "end": 4135
                      },
                      "start": 4110,
                      "end": 4135
                    },
                    "directive": null,
                    "start": 4109,
                    "end": 4137
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 4198,
                            "end": 4203
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 4204,
                            "end": 4207
                          },
                          "optional": false,
                          "computed": true,
                          "start": 4198,
                          "end": 4208
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4211,
                          "end": 4212
                        },
                        "start": 4198,
                        "end": 4212
                      },
                      "id": null,
                      "generator": false,
                      "start": 4192,
                      "end": 4212
                    },
                    "directive": null,
                    "start": 4191,
                    "end": 4214
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 4287,
                            "end": 4292
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 4293,
                            "end": 4296
                          },
                          "optional": false,
                          "computed": true,
                          "start": 4287,
                          "end": 4297
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4300,
                          "end": 4301
                        },
                        "start": 4287,
                        "end": 4301
                      },
                      "id": null,
                      "generator": false,
                      "start": 4275,
                      "end": 4301
                    },
                    "directive": null,
                    "start": 4274,
                    "end": 4303
                  }
                ],
                "start": 3958,
                "end": 4309
              },
              "expression": false,
              "start": 3955,
              "end": 4309
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3904,
            "end": 4309
          }
        ],
        "start": 63,
        "end": 4311
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 4311
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4375,
        "end": 4379
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
              "name": "setter",
              "optional": false,
              "typeAnnotation": null,
              "start": 4390,
              "end": 4396
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4400,
                      "end": 4403
                    },
                    "start": 4398,
                    "end": 4403
                  },
                  "start": 4397,
                  "end": 4403
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4405,
                "end": 4407
              },
              "expression": false,
              "start": 4396,
              "end": 4407
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4386,
            "end": 4407
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getter",
              "optional": false,
              "typeAnnotation": null,
              "start": 4416,
              "end": 4422
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4426,
                  "end": 4429
                },
                "start": 4424,
                "end": 4429
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 4432,
                    "end": 4439
                  }
                ],
                "start": 4430,
                "end": 4441
              },
              "expression": false,
              "start": 4422,
              "end": 4441
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4412,
            "end": 4441
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 4446,
              "end": 4452
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4456,
                      "end": 4462
                    },
                    "start": 4454,
                    "end": 4462
                  },
                  "start": 4453,
                  "end": 4462
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4465,
                  "end": 4468
                },
                "start": 4463,
                "end": 4468
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4469,
                "end": 4471
              },
              "expression": false,
              "start": 4452,
              "end": 4471
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4446,
            "end": 4471
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setter",
              "optional": false,
              "typeAnnotation": null,
              "start": 4488,
              "end": 4494
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4498,
                      "end": 4501
                    },
                    "start": 4496,
                    "end": 4501
                  },
                  "start": 4495,
                  "end": 4501
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4503,
                "end": 4505
              },
              "expression": false,
              "start": 4494,
              "end": 4505
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4477,
            "end": 4505
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getter",
              "optional": false,
              "typeAnnotation": null,
              "start": 4521,
              "end": 4527
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4531,
                  "end": 4534
                },
                "start": 4529,
                "end": 4534
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 4537,
                    "end": 4544
                  }
                ],
                "start": 4535,
                "end": 4546
              },
              "expression": false,
              "start": 4527,
              "end": 4546
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4510,
            "end": 4546
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 4558,
              "end": 4564
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4568,
                      "end": 4574
                    },
                    "start": 4566,
                    "end": 4574
                  },
                  "start": 4565,
                  "end": 4574
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4577,
                  "end": 4580
                },
                "start": 4575,
                "end": 4580
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4581,
                "end": 4583
              },
              "expression": false,
              "start": 4564,
              "end": 4583
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4551,
            "end": 4583
          }
        ],
        "start": 4380,
        "end": 4585
      },
      "abstract": false,
      "declare": false,
      "start": 4369,
      "end": 4585
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 4593,
        "end": 4600
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4609,
        "end": 4613
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 4620,
              "end": 4621
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 4645,
                            "end": 4650
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4651,
                            "end": 4657
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4645,
                          "end": 4657
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 4658,
                            "end": 4660
                          }
                        ],
                        "optional": false,
                        "start": 4645,
                        "end": 4661
                      },
                      "id": null,
                      "generator": false,
                      "start": 4633,
                      "end": 4661
                    },
                    "start": 4626,
                    "end": 4661
                  }
                ],
                "start": 4624,
                "end": 4663
              },
              "expression": false,
              "start": 4621,
              "end": 4663
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4620,
            "end": 4663
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 4668,
              "end": 4669
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 4693,
                          "end": 4698
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4699,
                          "end": 4705
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4693,
                        "end": 4705
                      },
                      "id": null,
                      "generator": false,
                      "start": 4681,
                      "end": 4705
                    },
                    "start": 4674,
                    "end": 4705
                  }
                ],
                "start": 4672,
                "end": 4707
              },
              "expression": false,
              "start": 4669,
              "end": 4707
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4668,
            "end": 4707
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 4712,
              "end": 4713
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 4737,
                            "end": 4742
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4743,
                            "end": 4749
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4737,
                          "end": 4749
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 4752,
                          "end": 4754
                        },
                        "start": 4737,
                        "end": 4754
                      },
                      "id": null,
                      "generator": false,
                      "start": 4725,
                      "end": 4754
                    },
                    "start": 4718,
                    "end": 4754
                  }
                ],
                "start": 4716,
                "end": 4756
              },
              "expression": false,
              "start": 4713,
              "end": 4756
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4712,
            "end": 4756
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 4761,
              "end": 4762
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 4786,
                            "end": 4791
                          },
                          "property": {
                            "type": "Literal",
                            "value": "method",
                            "raw": "\"method\"",
                            "start": 4792,
                            "end": 4800
                          },
                          "optional": false,
                          "computed": true,
                          "start": 4786,
                          "end": 4801
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 4802,
                            "end": 4804
                          }
                        ],
                        "optional": false,
                        "start": 4786,
                        "end": 4805
                      },
                      "id": null,
                      "generator": false,
                      "start": 4774,
                      "end": 4805
                    },
                    "start": 4767,
                    "end": 4805
                  }
                ],
                "start": 4765,
                "end": 4807
              },
              "expression": false,
              "start": 4762,
              "end": 4807
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4761,
            "end": 4807
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 4812,
              "end": 4813
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 4837,
                          "end": 4842
                        },
                        "property": {
                          "type": "Literal",
                          "value": "getter",
                          "raw": "\"getter\"",
                          "start": 4843,
                          "end": 4851
                        },
                        "optional": false,
                        "computed": true,
                        "start": 4837,
                        "end": 4852
                      },
                      "id": null,
                      "generator": false,
                      "start": 4825,
                      "end": 4852
                    },
                    "start": 4818,
                    "end": 4852
                  }
                ],
                "start": 4816,
                "end": 4854
              },
              "expression": false,
              "start": 4813,
              "end": 4854
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4812,
            "end": 4854
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 4859,
              "end": 4860
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 4884,
                            "end": 4889
                          },
                          "property": {
                            "type": "Literal",
                            "value": "setter",
                            "raw": "\"setter\"",
                            "start": 4890,
                            "end": 4898
                          },
                          "optional": false,
                          "computed": true,
                          "start": 4884,
                          "end": 4899
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 4902,
                          "end": 4904
                        },
                        "start": 4884,
                        "end": 4904
                      },
                      "id": null,
                      "generator": false,
                      "start": 4872,
                      "end": 4904
                    },
                    "start": 4865,
                    "end": 4904
                  }
                ],
                "start": 4863,
                "end": 4906
              },
              "expression": false,
              "start": 4860,
              "end": 4906
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4859,
            "end": 4906
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 4918,
              "end": 4919
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 4943,
                            "end": 4948
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4949,
                            "end": 4955
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4943,
                          "end": 4955
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 4956,
                            "end": 4958
                          }
                        ],
                        "optional": false,
                        "start": 4943,
                        "end": 4959
                      },
                      "id": null,
                      "generator": false,
                      "start": 4931,
                      "end": 4959
                    },
                    "start": 4924,
                    "end": 4959
                  }
                ],
                "start": 4922,
                "end": 4961
              },
              "expression": false,
              "start": 4919,
              "end": 4961
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4911,
            "end": 4961
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 4973,
              "end": 4974
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 4998,
                          "end": 5003
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5004,
                          "end": 5010
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4998,
                        "end": 5010
                      },
                      "id": null,
                      "generator": false,
                      "start": 4986,
                      "end": 5010
                    },
                    "start": 4979,
                    "end": 5010
                  }
                ],
                "start": 4977,
                "end": 5012
              },
              "expression": false,
              "start": 4974,
              "end": 5012
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4966,
            "end": 5012
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 5024,
              "end": 5025
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 5049,
                            "end": 5054
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5055,
                            "end": 5061
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5049,
                          "end": 5061
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 5064,
                          "end": 5066
                        },
                        "start": 5049,
                        "end": 5066
                      },
                      "id": null,
                      "generator": false,
                      "start": 5037,
                      "end": 5066
                    },
                    "start": 5030,
                    "end": 5066
                  }
                ],
                "start": 5028,
                "end": 5068
              },
              "expression": false,
              "start": 5025,
              "end": 5068
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5017,
            "end": 5068
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 5080,
              "end": 5081
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 5105,
                            "end": 5110
                          },
                          "property": {
                            "type": "Literal",
                            "value": "method",
                            "raw": "\"method\"",
                            "start": 5111,
                            "end": 5119
                          },
                          "optional": false,
                          "computed": true,
                          "start": 5105,
                          "end": 5120
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 5121,
                            "end": 5123
                          }
                        ],
                        "optional": false,
                        "start": 5105,
                        "end": 5124
                      },
                      "id": null,
                      "generator": false,
                      "start": 5093,
                      "end": 5124
                    },
                    "start": 5086,
                    "end": 5124
                  }
                ],
                "start": 5084,
                "end": 5126
              },
              "expression": false,
              "start": 5081,
              "end": 5126
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5073,
            "end": 5126
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 5138,
              "end": 5139
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 5163,
                          "end": 5168
                        },
                        "property": {
                          "type": "Literal",
                          "value": "getter",
                          "raw": "\"getter\"",
                          "start": 5169,
                          "end": 5177
                        },
                        "optional": false,
                        "computed": true,
                        "start": 5163,
                        "end": 5178
                      },
                      "id": null,
                      "generator": false,
                      "start": 5151,
                      "end": 5178
                    },
                    "start": 5144,
                    "end": 5178
                  }
                ],
                "start": 5142,
                "end": 5180
              },
              "expression": false,
              "start": 5139,
              "end": 5180
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5131,
            "end": 5180
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 5192,
              "end": 5193
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 5217,
                            "end": 5222
                          },
                          "property": {
                            "type": "Literal",
                            "value": "setter",
                            "raw": "\"setter\"",
                            "start": 5223,
                            "end": 5231
                          },
                          "optional": false,
                          "computed": true,
                          "start": 5217,
                          "end": 5232
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 5235,
                          "end": 5237
                        },
                        "start": 5217,
                        "end": 5237
                      },
                      "id": null,
                      "generator": false,
                      "start": 5205,
                      "end": 5237
                    },
                    "start": 5198,
                    "end": 5237
                  }
                ],
                "start": 5196,
                "end": 5239
              },
              "expression": false,
              "start": 5193,
              "end": 5239
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5185,
            "end": 5239
          }
        ],
        "start": 4614,
        "end": 5241
      },
      "abstract": false,
      "declare": false,
      "start": 4587,
      "end": 5241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5241
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50,
    "range": [
      45,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 53,
    "end": 60,
    "range": [
      53,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "simple",
    "start": 152,
    "end": 158,
    "range": [
      152,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 208,
    "end": 213,
    "range": [
      208,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 264,
    "end": 269,
    "range": [
      264,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 320,
    "end": 325,
    "range": [
      320,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 326,
    "end": 329,
    "range": [
      326,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 377,
    "end": 382,
    "range": [
      377,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 387,
    "end": 392,
    "range": [
      387,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 438,
    "end": 443,
    "range": [
      438,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 448,
    "end": 453,
    "range": [
      448,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 454,
    "end": 457,
    "range": [
      454,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 551,
    "end": 556,
    "range": [
      551,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "advanced",
    "start": 557,
    "end": 565,
    "range": [
      557,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 578,
    "end": 583,
    "range": [
      578,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 591,
    "end": 593,
    "range": [
      591,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 644,
    "end": 649,
    "range": [
      644,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 700,
    "end": 705,
    "range": [
      700,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 706,
    "end": 709,
    "range": [
      706,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 757,
    "end": 762,
    "range": [
      757,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 767,
    "end": 772,
    "range": [
      767,
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
    "value": "x",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 818,
    "end": 823,
    "range": [
      818,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 828,
    "end": 833,
    "range": [
      828,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 834,
    "end": 837,
    "range": [
      834,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 885,
    "end": 890,
    "range": [
      885,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 942,
    "end": 947,
    "range": [
      942,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 948,
    "end": 951,
    "range": [
      948,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1026,
    "end": 1031,
    "range": [
      1026,
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
    "value": "x",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1113,
    "end": 1118,
    "range": [
      1113,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 1119,
    "end": 1122,
    "range": [
      1119,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1188,
    "end": 1193,
    "range": [
      1188,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1248,
    "end": 1250,
    "range": [
      1248,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1251,
    "end": 1256,
    "range": [
      1251,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 1257,
    "end": 1260,
    "range": [
      1257,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1318,
    "end": 1323,
    "range": [
      1318,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1327,
    "end": 1329,
    "range": [
      1327,
      1329
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1330,
    "end": 1335,
    "range": [
      1330,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1393,
    "end": 1398,
    "range": [
      1393,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1402,
    "end": 1404,
    "range": [
      1402,
      1404
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1405,
    "end": 1410,
    "range": [
      1405,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 1411,
    "end": 1414,
    "range": [
      1411,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1431,
    "end": 1436,
    "range": [
      1431,
      1436
    ]
  },
  {
    "type": "Identifier",
    "value": "property_access_only_read_only",
    "start": 1437,
    "end": 1467,
    "range": [
      1437,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1517,
    "end": 1522,
    "range": [
      1517,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1571,
    "end": 1576,
    "range": [
      1571,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1581,
    "end": 1586,
    "range": [
      1581,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1639,
    "end": 1641,
    "range": [
      1639,
      1641
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1642,
    "end": 1647,
    "range": [
      1642,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1706,
    "end": 1711,
    "range": [
      1706,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1715,
    "end": 1717,
    "range": [
      1715,
      1717
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1718,
    "end": 1723,
    "range": [
      1718,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1741,
    "end": 1746,
    "range": [
      1741,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "property_access_only_write_only",
    "start": 1747,
    "end": 1778,
    "range": [
      1747,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1791,
    "end": 1796,
    "range": [
      1791,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1804,
    "end": 1806,
    "range": [
      1804,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1856,
    "end": 1861,
    "range": [
      1856,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1937,
    "end": 1942,
    "range": [
      1937,
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
    "value": "x",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2015,
    "end": 2017,
    "range": [
      2015,
      2017
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2018,
    "end": 2023,
    "range": [
      2018,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2093,
    "end": 2098,
    "range": [
      2093,
      2098
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
    "type": "Punctuator",
    "value": ")",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2102,
    "end": 2104,
    "range": [
      2102,
      2104
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2105,
    "end": 2110,
    "range": [
      2105,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2130,
    "end": 2135,
    "range": [
      2130,
      2135
    ]
  },
  {
    "type": "Identifier",
    "value": "element_access_only_read_only",
    "start": 2136,
    "end": 2165,
    "range": [
      2136,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2214,
    "end": 2219,
    "range": [
      2214,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2220,
    "end": 2223,
    "range": [
      2220,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2270,
    "end": 2275,
    "range": [
      2270,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2280,
    "end": 2285,
    "range": [
      2280,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2286,
    "end": 2289,
    "range": [
      2286,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2340,
    "end": 2342,
    "range": [
      2340,
      2342
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2343,
    "end": 2348,
    "range": [
      2343,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2349,
    "end": 2352,
    "range": [
      2349,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2409,
    "end": 2414,
    "range": [
      2409,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2418,
    "end": 2420,
    "range": [
      2418,
      2420
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2421,
    "end": 2426,
    "range": [
      2421,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2427,
    "end": 2430,
    "range": [
      2427,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2447,
    "end": 2452,
    "range": [
      2447,
      2452
    ]
  },
  {
    "type": "Identifier",
    "value": "element_access_only_write_only",
    "start": 2453,
    "end": 2483,
    "range": [
      2453,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2496,
    "end": 2501,
    "range": [
      2496,
      2501
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2509,
    "end": 2511,
    "range": [
      2509,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
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
    "value": "super",
    "start": 2560,
    "end": 2565,
    "range": [
      2560,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2565,
    "end": 2566,
    "range": [
      2565,
      2566
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2566,
    "end": 2569,
    "range": [
      2566,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2574,
    "end": 2575,
    "range": [
      2574,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2643,
    "end": 2648,
    "range": [
      2643,
      2648
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2648,
    "end": 2649,
    "range": [
      2648,
      2649
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2649,
    "end": 2652,
    "range": [
      2649,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2663,
    "end": 2664,
    "range": [
      2663,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2664,
    "end": 2665,
    "range": [
      2664,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2723,
    "end": 2725,
    "range": [
      2723,
      2725
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2726,
    "end": 2731,
    "range": [
      2726,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2732,
    "end": 2735,
    "range": [
      2732,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2803,
    "end": 2808,
    "range": [
      2803,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
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
    "value": "=>",
    "start": 2812,
    "end": 2814,
    "range": [
      2812,
      2814
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2815,
    "end": 2820,
    "range": [
      2815,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2821,
    "end": 2824,
    "range": [
      2821,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2843,
    "end": 2848,
    "range": [
      2843,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "property_access_only_read_only_in_generator",
    "start": 2851,
    "end": 2894,
    "range": [
      2851,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2944,
    "end": 2949,
    "range": [
      2944,
      2949
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2950,
    "end": 2951,
    "range": [
      2950,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2998,
    "end": 3003,
    "range": [
      2998,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3008,
    "end": 3013,
    "range": [
      3008,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3066,
    "end": 3068,
    "range": [
      3066,
      3068
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3069,
    "end": 3074,
    "range": [
      3069,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3133,
    "end": 3138,
    "range": [
      3133,
      3138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3140,
    "end": 3141,
    "range": [
      3140,
      3141
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3142,
    "end": 3144,
    "range": [
      3142,
      3144
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3145,
    "end": 3150,
    "range": [
      3145,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3155,
    "end": 3156,
    "range": [
      3155,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3168,
    "end": 3173,
    "range": [
      3168,
      3173
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3174,
    "end": 3175,
    "range": [
      3174,
      3175
    ]
  },
  {
    "type": "Identifier",
    "value": "property_access_only_write_only_in_generator",
    "start": 3176,
    "end": 3220,
    "range": [
      3176,
      3220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3221,
    "end": 3222,
    "range": [
      3221,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3233,
    "end": 3238,
    "range": [
      3233,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3246,
    "end": 3248,
    "range": [
      3246,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3298,
    "end": 3303,
    "range": [
      3298,
      3303
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3376,
    "end": 3377,
    "range": [
      3376,
      3377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3379,
    "end": 3384,
    "range": [
      3379,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3389,
    "end": 3390,
    "range": [
      3389,
      3390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3454,
    "end": 3455,
    "range": [
      3454,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3457,
    "end": 3459,
    "range": [
      3457,
      3459
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3460,
    "end": 3465,
    "range": [
      3460,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3471,
    "end": 3472,
    "range": [
      3471,
      3472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3472,
    "end": 3473,
    "range": [
      3472,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3534,
    "end": 3535,
    "range": [
      3534,
      3535
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3535,
    "end": 3540,
    "range": [
      3535,
      3540
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3544,
    "end": 3546,
    "range": [
      3544,
      3546
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3547,
    "end": 3552,
    "range": [
      3547,
      3552
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3555,
    "end": 3556,
    "range": [
      3555,
      3556
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3559,
    "end": 3560,
    "range": [
      3559,
      3560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3565,
    "end": 3566,
    "range": [
      3565,
      3566
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3572,
    "end": 3577,
    "range": [
      3572,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Identifier",
    "value": "element_access_only_read_only_in_generator",
    "start": 3580,
    "end": 3622,
    "range": [
      3580,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3671,
    "end": 3676,
    "range": [
      3671,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 3677,
    "end": 3680,
    "range": [
      3677,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3680,
    "end": 3681,
    "range": [
      3680,
      3681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3727,
    "end": 3732,
    "range": [
      3727,
      3732
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3735,
    "end": 3736,
    "range": [
      3735,
      3736
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3737,
    "end": 3742,
    "range": [
      3737,
      3742
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 3743,
    "end": 3746,
    "range": [
      3743,
      3746
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3746,
    "end": 3747,
    "range": [
      3746,
      3747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3747,
    "end": 3748,
    "range": [
      3747,
      3748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3795,
    "end": 3796,
    "range": [
      3795,
      3796
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3797,
    "end": 3799,
    "range": [
      3797,
      3799
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3800,
    "end": 3805,
    "range": [
      3800,
      3805
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3805,
    "end": 3806,
    "range": [
      3805,
      3806
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 3806,
    "end": 3809,
    "range": [
      3806,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3811,
    "end": 3812,
    "range": [
      3811,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3812,
    "end": 3813,
    "range": [
      3812,
      3813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3813,
    "end": 3814,
    "range": [
      3813,
      3814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3865,
    "end": 3866,
    "range": [
      3865,
      3866
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3866,
    "end": 3871,
    "range": [
      3866,
      3871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3872,
    "end": 3873,
    "range": [
      3872,
      3873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3875,
    "end": 3877,
    "range": [
      3875,
      3877
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3878,
    "end": 3883,
    "range": [
      3878,
      3883
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3883,
    "end": 3884,
    "range": [
      3883,
      3884
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 3884,
    "end": 3887,
    "range": [
      3884,
      3887
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3887,
    "end": 3888,
    "range": [
      3887,
      3888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3888,
    "end": 3889,
    "range": [
      3888,
      3889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3889,
    "end": 3890,
    "range": [
      3889,
      3890
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3890,
    "end": 3891,
    "range": [
      3890,
      3891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3897,
    "end": 3898,
    "range": [
      3897,
      3898
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3904,
    "end": 3909,
    "range": [
      3904,
      3909
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3910,
    "end": 3911,
    "range": [
      3910,
      3911
    ]
  },
  {
    "type": "Identifier",
    "value": "element_access_only_write_only_in_generator",
    "start": 3912,
    "end": 3955,
    "range": [
      3912,
      3955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3968,
    "end": 3973,
    "range": [
      3968,
      3973
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3974,
    "end": 3975,
    "range": [
      3974,
      3975
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3976,
    "end": 3977,
    "range": [
      3976,
      3977
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3978,
    "end": 3979,
    "range": [
      3978,
      3979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3979,
    "end": 3980,
    "range": [
      3979,
      3980
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3981,
    "end": 3983,
    "range": [
      3981,
      3983
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3984,
    "end": 3985,
    "range": [
      3984,
      3985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3985,
    "end": 3986,
    "range": [
      3985,
      3986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3986,
    "end": 3987,
    "range": [
      3986,
      3987
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4032,
    "end": 4037,
    "range": [
      4032,
      4037
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4037,
    "end": 4038,
    "range": [
      4037,
      4038
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 4038,
    "end": 4041,
    "range": [
      4038,
      4041
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4041,
    "end": 4042,
    "range": [
      4041,
      4042
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4043,
    "end": 4044,
    "range": [
      4043,
      4044
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4045,
    "end": 4046,
    "range": [
      4045,
      4046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4046,
    "end": 4047,
    "range": [
      4046,
      4047
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4110,
    "end": 4111,
    "range": [
      4110,
      4111
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4115,
    "end": 4120,
    "range": [
      4115,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 4121,
    "end": 4124,
    "range": [
      4121,
      4124
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4124,
    "end": 4125,
    "range": [
      4124,
      4125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4126,
    "end": 4127,
    "range": [
      4126,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4128,
    "end": 4129,
    "range": [
      4128,
      4129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4130,
    "end": 4131,
    "range": [
      4130,
      4131
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4132,
    "end": 4133,
    "range": [
      4132,
      4133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4134,
    "end": 4135,
    "range": [
      4134,
      4135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4135,
    "end": 4136,
    "range": [
      4135,
      4136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4136,
    "end": 4137,
    "range": [
      4136,
      4137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4191,
    "end": 4192,
    "range": [
      4191,
      4192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4192,
    "end": 4193,
    "range": [
      4192,
      4193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4195,
    "end": 4197,
    "range": [
      4195,
      4197
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4198,
    "end": 4203,
    "range": [
      4198,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4203,
    "end": 4204,
    "range": [
      4203,
      4204
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 4204,
    "end": 4207,
    "range": [
      4204,
      4207
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4207,
    "end": 4208,
    "range": [
      4207,
      4208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4209,
    "end": 4210,
    "range": [
      4209,
      4210
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4211,
    "end": 4212,
    "range": [
      4211,
      4212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4212,
    "end": 4213,
    "range": [
      4212,
      4213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4213,
    "end": 4214,
    "range": [
      4213,
      4214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4274,
    "end": 4275,
    "range": [
      4274,
      4275
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4275,
    "end": 4280,
    "range": [
      4275,
      4280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4281,
    "end": 4282,
    "range": [
      4281,
      4282
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4284,
    "end": 4286,
    "range": [
      4284,
      4286
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4287,
    "end": 4292,
    "range": [
      4287,
      4292
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4292,
    "end": 4293,
    "range": [
      4292,
      4293
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 4293,
    "end": 4296,
    "range": [
      4293,
      4296
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4296,
    "end": 4297,
    "range": [
      4296,
      4297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4298,
    "end": 4299,
    "range": [
      4298,
      4299
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4300,
    "end": 4301,
    "range": [
      4300,
      4301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4301,
    "end": 4302,
    "range": [
      4301,
      4302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4302,
    "end": 4303,
    "range": [
      4302,
      4303
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4308,
    "end": 4309,
    "range": [
      4308,
      4309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4310,
    "end": 4311,
    "range": [
      4310,
      4311
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4369,
    "end": 4374,
    "range": [
      4369,
      4374
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4375,
    "end": 4379,
    "range": [
      4375,
      4379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4380,
    "end": 4381,
    "range": [
      4380,
      4381
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 4386,
    "end": 4389,
    "range": [
      4386,
      4389
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 4390,
    "end": 4396,
    "range": [
      4390,
      4396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4397,
    "end": 4398,
    "range": [
      4397,
      4398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4398,
    "end": 4399,
    "range": [
      4398,
      4399
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4400,
    "end": 4403,
    "range": [
      4400,
      4403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4403,
    "end": 4404,
    "range": [
      4403,
      4404
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4405,
    "end": 4406,
    "range": [
      4405,
      4406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4406,
    "end": 4407,
    "range": [
      4406,
      4407
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4412,
    "end": 4415,
    "range": [
      4412,
      4415
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 4416,
    "end": 4422,
    "range": [
      4416,
      4422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4422,
    "end": 4423,
    "range": [
      4422,
      4423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4423,
    "end": 4424,
    "range": [
      4423,
      4424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4424,
    "end": 4425,
    "range": [
      4424,
      4425
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4426,
    "end": 4429,
    "range": [
      4426,
      4429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4430,
    "end": 4431,
    "range": [
      4430,
      4431
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4432,
    "end": 4438,
    "range": [
      4432,
      4438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4438,
    "end": 4439,
    "range": [
      4438,
      4439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4440,
    "end": 4441,
    "range": [
      4440,
      4441
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 4446,
    "end": 4452,
    "range": [
      4446,
      4452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4453,
    "end": 4454,
    "range": [
      4453,
      4454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4454,
    "end": 4455,
    "range": [
      4454,
      4455
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4456,
    "end": 4462,
    "range": [
      4456,
      4462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4462,
    "end": 4463,
    "range": [
      4462,
      4463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4463,
    "end": 4464,
    "range": [
      4463,
      4464
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4465,
    "end": 4468,
    "range": [
      4465,
      4468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4469,
    "end": 4470,
    "range": [
      4469,
      4470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4470,
    "end": 4471,
    "range": [
      4470,
      4471
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4477,
    "end": 4483,
    "range": [
      4477,
      4483
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 4484,
    "end": 4487,
    "range": [
      4484,
      4487
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 4488,
    "end": 4494,
    "range": [
      4488,
      4494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4494,
    "end": 4495,
    "range": [
      4494,
      4495
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4495,
    "end": 4496,
    "range": [
      4495,
      4496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4496,
    "end": 4497,
    "range": [
      4496,
      4497
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4498,
    "end": 4501,
    "range": [
      4498,
      4501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4501,
    "end": 4502,
    "range": [
      4501,
      4502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4503,
    "end": 4504,
    "range": [
      4503,
      4504
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4504,
    "end": 4505,
    "range": [
      4504,
      4505
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4510,
    "end": 4516,
    "range": [
      4510,
      4516
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4517,
    "end": 4520,
    "range": [
      4517,
      4520
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 4521,
    "end": 4527,
    "range": [
      4521,
      4527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4527,
    "end": 4528,
    "range": [
      4527,
      4528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4529,
    "end": 4530,
    "range": [
      4529,
      4530
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4531,
    "end": 4534,
    "range": [
      4531,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4537,
    "end": 4543,
    "range": [
      4537,
      4543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4545,
    "end": 4546,
    "range": [
      4545,
      4546
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4551,
    "end": 4557,
    "range": [
      4551,
      4557
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 4558,
    "end": 4564,
    "range": [
      4558,
      4564
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4564,
    "end": 4565,
    "range": [
      4564,
      4565
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4565,
    "end": 4566,
    "range": [
      4565,
      4566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4566,
    "end": 4567,
    "range": [
      4566,
      4567
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4568,
    "end": 4574,
    "range": [
      4568,
      4574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4574,
    "end": 4575,
    "range": [
      4574,
      4575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4575,
    "end": 4576,
    "range": [
      4575,
      4576
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4577,
    "end": 4580,
    "range": [
      4577,
      4580
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4581,
    "end": 4582,
    "range": [
      4581,
      4582
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4582,
    "end": 4583,
    "range": [
      4582,
      4583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4584,
    "end": 4585,
    "range": [
      4584,
      4585
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4587,
    "end": 4592,
    "range": [
      4587,
      4592
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4593,
    "end": 4600,
    "range": [
      4593,
      4600
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4601,
    "end": 4608,
    "range": [
      4601,
      4608
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4609,
    "end": 4613,
    "range": [
      4609,
      4613
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4614,
    "end": 4615,
    "range": [
      4614,
      4615
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4621,
    "end": 4622,
    "range": [
      4621,
      4622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4622,
    "end": 4623,
    "range": [
      4622,
      4623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4624,
    "end": 4625,
    "range": [
      4624,
      4625
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4626,
    "end": 4632,
    "range": [
      4626,
      4632
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4633,
    "end": 4638,
    "range": [
      4633,
      4638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4639,
    "end": 4640,
    "range": [
      4639,
      4640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4640,
    "end": 4641,
    "range": [
      4640,
      4641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4642,
    "end": 4644,
    "range": [
      4642,
      4644
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4645,
    "end": 4650,
    "range": [
      4645,
      4650
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4650,
    "end": 4651,
    "range": [
      4650,
      4651
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 4651,
    "end": 4657,
    "range": [
      4651,
      4657
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4657,
    "end": 4658,
    "range": [
      4657,
      4658
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 4658,
    "end": 4660,
    "range": [
      4658,
      4660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4660,
    "end": 4661,
    "range": [
      4660,
      4661
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4668,
    "end": 4669,
    "range": [
      4668,
      4669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4669,
    "end": 4670,
    "range": [
      4669,
      4670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4670,
    "end": 4671,
    "range": [
      4670,
      4671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4672,
    "end": 4673,
    "range": [
      4672,
      4673
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4674,
    "end": 4680,
    "range": [
      4674,
      4680
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4681,
    "end": 4686,
    "range": [
      4681,
      4686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4687,
    "end": 4688,
    "range": [
      4687,
      4688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4688,
    "end": 4689,
    "range": [
      4688,
      4689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4690,
    "end": 4692,
    "range": [
      4690,
      4692
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4693,
    "end": 4698,
    "range": [
      4693,
      4698
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4698,
    "end": 4699,
    "range": [
      4698,
      4699
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 4699,
    "end": 4705,
    "range": [
      4699,
      4705
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4706,
    "end": 4707,
    "range": [
      4706,
      4707
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4716,
    "end": 4717,
    "range": [
      4716,
      4717
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4718,
    "end": 4724,
    "range": [
      4718,
      4724
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4725,
    "end": 4730,
    "range": [
      4725,
      4730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4731,
    "end": 4732,
    "range": [
      4731,
      4732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4732,
    "end": 4733,
    "range": [
      4732,
      4733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4734,
    "end": 4736,
    "range": [
      4734,
      4736
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4737,
    "end": 4742,
    "range": [
      4737,
      4742
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4742,
    "end": 4743,
    "range": [
      4742,
      4743
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 4743,
    "end": 4749,
    "range": [
      4743,
      4749
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4750,
    "end": 4751,
    "range": [
      4750,
      4751
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 4752,
    "end": 4754,
    "range": [
      4752,
      4754
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4755,
    "end": 4756,
    "range": [
      4755,
      4756
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 4761,
    "end": 4762,
    "range": [
      4761,
      4762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4762,
    "end": 4763,
    "range": [
      4762,
      4763
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4763,
    "end": 4764,
    "range": [
      4763,
      4764
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4765,
    "end": 4766,
    "range": [
      4765,
      4766
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4767,
    "end": 4773,
    "range": [
      4767,
      4773
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4774,
    "end": 4779,
    "range": [
      4774,
      4779
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4780,
    "end": 4781,
    "range": [
      4780,
      4781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4781,
    "end": 4782,
    "range": [
      4781,
      4782
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4783,
    "end": 4785,
    "range": [
      4783,
      4785
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4786,
    "end": 4791,
    "range": [
      4786,
      4791
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4791,
    "end": 4792,
    "range": [
      4791,
      4792
    ]
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 4792,
    "end": 4800,
    "range": [
      4792,
      4800
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4800,
    "end": 4801,
    "range": [
      4800,
      4801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4801,
    "end": 4802,
    "range": [
      4801,
      4802
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 4802,
    "end": 4804,
    "range": [
      4802,
      4804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4804,
    "end": 4805,
    "range": [
      4804,
      4805
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4806,
    "end": 4807,
    "range": [
      4806,
      4807
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 4812,
    "end": 4813,
    "range": [
      4812,
      4813
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4813,
    "end": 4814,
    "range": [
      4813,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4814,
    "end": 4815,
    "range": [
      4814,
      4815
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4816,
    "end": 4817,
    "range": [
      4816,
      4817
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4818,
    "end": 4824,
    "range": [
      4818,
      4824
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4825,
    "end": 4830,
    "range": [
      4825,
      4830
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4831,
    "end": 4832,
    "range": [
      4831,
      4832
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4834,
    "end": 4836,
    "range": [
      4834,
      4836
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4837,
    "end": 4842,
    "range": [
      4837,
      4842
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4842,
    "end": 4843,
    "range": [
      4842,
      4843
    ]
  },
  {
    "type": "String",
    "value": "\"getter\"",
    "start": 4843,
    "end": 4851,
    "range": [
      4843,
      4851
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4851,
    "end": 4852,
    "range": [
      4851,
      4852
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4853,
    "end": 4854,
    "range": [
      4853,
      4854
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4859,
    "end": 4860,
    "range": [
      4859,
      4860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4860,
    "end": 4861,
    "range": [
      4860,
      4861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4861,
    "end": 4862,
    "range": [
      4861,
      4862
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4863,
    "end": 4864,
    "range": [
      4863,
      4864
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4865,
    "end": 4871,
    "range": [
      4865,
      4871
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4872,
    "end": 4877,
    "range": [
      4872,
      4877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4878,
    "end": 4879,
    "range": [
      4878,
      4879
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4879,
    "end": 4880,
    "range": [
      4879,
      4880
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4881,
    "end": 4883,
    "range": [
      4881,
      4883
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4884,
    "end": 4889,
    "range": [
      4884,
      4889
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4889,
    "end": 4890,
    "range": [
      4889,
      4890
    ]
  },
  {
    "type": "String",
    "value": "\"setter\"",
    "start": 4890,
    "end": 4898,
    "range": [
      4890,
      4898
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4898,
    "end": 4899,
    "range": [
      4898,
      4899
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 4902,
    "end": 4904,
    "range": [
      4902,
      4904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4905,
    "end": 4906,
    "range": [
      4905,
      4906
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4911,
    "end": 4917,
    "range": [
      4911,
      4917
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4918,
    "end": 4919,
    "range": [
      4918,
      4919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4919,
    "end": 4920,
    "range": [
      4919,
      4920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4920,
    "end": 4921,
    "range": [
      4920,
      4921
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4922,
    "end": 4923,
    "range": [
      4922,
      4923
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4924,
    "end": 4930,
    "range": [
      4924,
      4930
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4931,
    "end": 4936,
    "range": [
      4931,
      4936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4937,
    "end": 4938,
    "range": [
      4937,
      4938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4938,
    "end": 4939,
    "range": [
      4938,
      4939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4940,
    "end": 4942,
    "range": [
      4940,
      4942
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4943,
    "end": 4948,
    "range": [
      4943,
      4948
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4948,
    "end": 4949,
    "range": [
      4948,
      4949
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 4949,
    "end": 4955,
    "range": [
      4949,
      4955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4955,
    "end": 4956,
    "range": [
      4955,
      4956
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 4956,
    "end": 4958,
    "range": [
      4956,
      4958
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4958,
    "end": 4959,
    "range": [
      4958,
      4959
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4960,
    "end": 4961,
    "range": [
      4960,
      4961
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4966,
    "end": 4972,
    "range": [
      4966,
      4972
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4973,
    "end": 4974,
    "range": [
      4973,
      4974
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4974,
    "end": 4975,
    "range": [
      4974,
      4975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4975,
    "end": 4976,
    "range": [
      4975,
      4976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4977,
    "end": 4978,
    "range": [
      4977,
      4978
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4979,
    "end": 4985,
    "range": [
      4979,
      4985
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4986,
    "end": 4991,
    "range": [
      4986,
      4991
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4992,
    "end": 4993,
    "range": [
      4992,
      4993
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4993,
    "end": 4994,
    "range": [
      4993,
      4994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4995,
    "end": 4997,
    "range": [
      4995,
      4997
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4998,
    "end": 5003,
    "range": [
      4998,
      5003
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5003,
    "end": 5004,
    "range": [
      5003,
      5004
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 5004,
    "end": 5010,
    "range": [
      5004,
      5010
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5011,
    "end": 5012,
    "range": [
      5011,
      5012
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5017,
    "end": 5023,
    "range": [
      5017,
      5023
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5024,
    "end": 5025,
    "range": [
      5024,
      5025
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5025,
    "end": 5026,
    "range": [
      5025,
      5026
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5026,
    "end": 5027,
    "range": [
      5026,
      5027
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5028,
    "end": 5029,
    "range": [
      5028,
      5029
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5030,
    "end": 5036,
    "range": [
      5030,
      5036
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5037,
    "end": 5042,
    "range": [
      5037,
      5042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5043,
    "end": 5044,
    "range": [
      5043,
      5044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5044,
    "end": 5045,
    "range": [
      5044,
      5045
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5046,
    "end": 5048,
    "range": [
      5046,
      5048
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 5049,
    "end": 5054,
    "range": [
      5049,
      5054
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5054,
    "end": 5055,
    "range": [
      5054,
      5055
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 5055,
    "end": 5061,
    "range": [
      5055,
      5061
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5062,
    "end": 5063,
    "range": [
      5062,
      5063
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 5064,
    "end": 5066,
    "range": [
      5064,
      5066
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5067,
    "end": 5068,
    "range": [
      5067,
      5068
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5073,
    "end": 5079,
    "range": [
      5073,
      5079
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5080,
    "end": 5081,
    "range": [
      5080,
      5081
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5081,
    "end": 5082,
    "range": [
      5081,
      5082
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5082,
    "end": 5083,
    "range": [
      5082,
      5083
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5084,
    "end": 5085,
    "range": [
      5084,
      5085
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5086,
    "end": 5092,
    "range": [
      5086,
      5092
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5093,
    "end": 5098,
    "range": [
      5093,
      5098
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5099,
    "end": 5100,
    "range": [
      5099,
      5100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5100,
    "end": 5101,
    "range": [
      5100,
      5101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5102,
    "end": 5104,
    "range": [
      5102,
      5104
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 5105,
    "end": 5110,
    "range": [
      5105,
      5110
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5110,
    "end": 5111,
    "range": [
      5110,
      5111
    ]
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 5111,
    "end": 5119,
    "range": [
      5111,
      5119
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5119,
    "end": 5120,
    "range": [
      5119,
      5120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5120,
    "end": 5121,
    "range": [
      5120,
      5121
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 5121,
    "end": 5123,
    "range": [
      5121,
      5123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5123,
    "end": 5124,
    "range": [
      5123,
      5124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5125,
    "end": 5126,
    "range": [
      5125,
      5126
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5131,
    "end": 5137,
    "range": [
      5131,
      5137
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5138,
    "end": 5139,
    "range": [
      5138,
      5139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5139,
    "end": 5140,
    "range": [
      5139,
      5140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5140,
    "end": 5141,
    "range": [
      5140,
      5141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5142,
    "end": 5143,
    "range": [
      5142,
      5143
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5144,
    "end": 5150,
    "range": [
      5144,
      5150
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5151,
    "end": 5156,
    "range": [
      5151,
      5156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5157,
    "end": 5158,
    "range": [
      5157,
      5158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5158,
    "end": 5159,
    "range": [
      5158,
      5159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5160,
    "end": 5162,
    "range": [
      5160,
      5162
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 5163,
    "end": 5168,
    "range": [
      5163,
      5168
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5168,
    "end": 5169,
    "range": [
      5168,
      5169
    ]
  },
  {
    "type": "String",
    "value": "\"getter\"",
    "start": 5169,
    "end": 5177,
    "range": [
      5169,
      5177
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5177,
    "end": 5178,
    "range": [
      5177,
      5178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5179,
    "end": 5180,
    "range": [
      5179,
      5180
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5185,
    "end": 5191,
    "range": [
      5185,
      5191
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5192,
    "end": 5193,
    "range": [
      5192,
      5193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5193,
    "end": 5194,
    "range": [
      5193,
      5194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5194,
    "end": 5195,
    "range": [
      5194,
      5195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5196,
    "end": 5197,
    "range": [
      5196,
      5197
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5198,
    "end": 5204,
    "range": [
      5198,
      5204
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5205,
    "end": 5210,
    "range": [
      5205,
      5210
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5211,
    "end": 5212,
    "range": [
      5211,
      5212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5212,
    "end": 5213,
    "range": [
      5212,
      5213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5214,
    "end": 5216,
    "range": [
      5214,
      5216
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 5217,
    "end": 5222,
    "range": [
      5217,
      5222
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5222,
    "end": 5223,
    "range": [
      5222,
      5223
    ]
  },
  {
    "type": "String",
    "value": "\"setter\"",
    "start": 5223,
    "end": 5231,
    "range": [
      5223,
      5231
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5231,
    "end": 5232,
    "range": [
      5231,
      5232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5233,
    "end": 5234,
    "range": [
      5233,
      5234
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 5235,
    "end": 5237,
    "range": [
      5235,
      5237
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5238,
    "end": 5239,
    "range": [
      5238,
      5239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5240,
    "end": 5241,
    "range": [
      5240,
      5241
    ]
  }
]
```
