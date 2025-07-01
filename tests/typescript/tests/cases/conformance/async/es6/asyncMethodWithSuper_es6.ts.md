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
