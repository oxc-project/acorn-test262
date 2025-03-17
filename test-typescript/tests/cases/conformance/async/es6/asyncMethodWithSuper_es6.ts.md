__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5242,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 25,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 25,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 41,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 41,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 4311,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 4311,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 465,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "name": "simple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 465,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 465,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 208,
                    "end": 218,
                    "expression": {
                      "type": "CallExpression",
                      "start": 208,
                      "end": 217,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 215,
                        "object": {
                          "type": "Super",
                          "start": 208,
                          "end": 213
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 215,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 264,
                    "end": 274,
                    "expression": {
                      "type": "CallExpression",
                      "start": 264,
                      "end": 273,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 264,
                        "end": 271,
                        "object": {
                          "type": "Super",
                          "start": 264,
                          "end": 269
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 271,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 333,
                    "expression": {
                      "type": "CallExpression",
                      "start": 320,
                      "end": 332,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 330,
                        "object": {
                          "type": "Super",
                          "start": 320,
                          "end": 325
                        },
                        "property": {
                          "type": "Literal",
                          "start": 326,
                          "end": 329,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 377,
                    "end": 395,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 383,
                        "end": 394,
                        "id": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 384,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 387,
                          "end": 394,
                          "object": {
                            "type": "Super",
                            "start": 387,
                            "end": 392
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 393,
                            "end": 394,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 438,
                    "end": 459,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 444,
                        "end": 458,
                        "id": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 445,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 448,
                          "end": 458,
                          "object": {
                            "type": "Super",
                            "start": 448,
                            "end": 453
                          },
                          "property": {
                            "type": "Literal",
                            "start": 454,
                            "end": 457,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 551,
            "end": 1425,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 557,
              "end": 565,
              "name": "advanced",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 565,
              "end": 1425,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 568,
                "end": 1425,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 578,
                    "end": 597,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 584,
                        "end": 596,
                        "id": {
                          "type": "Identifier",
                          "start": 584,
                          "end": 585,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 588,
                          "end": 596,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 594,
                            "end": 596,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 644,
                    "end": 654,
                    "expression": {
                      "type": "CallExpression",
                      "start": 644,
                      "end": 653,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 644,
                        "end": 651,
                        "object": {
                          "type": "Super",
                          "start": 644,
                          "end": 649
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 651,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 700,
                    "end": 713,
                    "expression": {
                      "type": "CallExpression",
                      "start": 700,
                      "end": 712,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 700,
                        "end": 710,
                        "object": {
                          "type": "Super",
                          "start": 700,
                          "end": 705
                        },
                        "property": {
                          "type": "Literal",
                          "start": 706,
                          "end": 709,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 757,
                    "end": 775,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 763,
                        "end": 774,
                        "id": {
                          "type": "Identifier",
                          "start": 763,
                          "end": 764,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 767,
                          "end": 774,
                          "object": {
                            "type": "Super",
                            "start": 767,
                            "end": 772
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 774,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 818,
                    "end": 839,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 824,
                        "end": 838,
                        "id": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 825,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 828,
                          "end": 838,
                          "object": {
                            "type": "Super",
                            "start": 828,
                            "end": 833
                          },
                          "property": {
                            "type": "Literal",
                            "start": 834,
                            "end": 837,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 885,
                    "end": 897,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 885,
                      "end": 896,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 885,
                        "end": 892,
                        "object": {
                          "type": "Super",
                          "start": 885,
                          "end": 890
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 891,
                          "end": 892,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 895,
                        "end": 896,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 942,
                    "end": 957,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 942,
                      "end": 956,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 942,
                        "end": 952,
                        "object": {
                          "type": "Super",
                          "start": 942,
                          "end": 947
                        },
                        "property": {
                          "type": "Literal",
                          "start": 948,
                          "end": 951,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 955,
                        "end": 956,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1020,
                    "end": 1045,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1021,
                      "end": 1043,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1021,
                        "end": 1035,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1023,
                            "end": 1033,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1023,
                              "end": 1024,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 1026,
                              "end": 1033,
                              "object": {
                                "type": "Super",
                                "start": 1026,
                                "end": 1031
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1032,
                                "end": 1033,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1038,
                        "end": 1043,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1040,
                            "end": 1041,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1040,
                              "end": 1041,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1040,
                              "end": 1041,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1107,
                    "end": 1135,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1108,
                      "end": 1133,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1108,
                        "end": 1125,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1110,
                            "end": 1123,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1110,
                              "end": 1111,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 1113,
                              "end": 1123,
                              "object": {
                                "type": "Super",
                                "start": 1113,
                                "end": 1118
                              },
                              "property": {
                                "type": "Literal",
                                "start": 1119,
                                "end": 1122,
                                "value": "x",
                                "raw": "\"x\""
                              },
                              "computed": true,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1128,
                        "end": 1133,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1130,
                            "end": 1131,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1131,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1131,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1181,
                    "end": 1199,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1182,
                      "end": 1197,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1188,
                        "end": 1197,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1188,
                          "end": 1195,
                          "object": {
                            "type": "Super",
                            "start": 1188,
                            "end": 1193
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1194,
                            "end": 1195,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1244,
                    "end": 1265,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1245,
                      "end": 1263,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1251,
                        "end": 1263,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1251,
                          "end": 1261,
                          "object": {
                            "type": "Super",
                            "start": 1251,
                            "end": 1256
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1257,
                            "end": 1260,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1317,
                    "end": 1341,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1318,
                      "end": 1339,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1330,
                        "end": 1339,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1330,
                          "end": 1337,
                          "object": {
                            "type": "Super",
                            "start": 1330,
                            "end": 1335
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1336,
                            "end": 1337,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1392,
                    "end": 1419,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1393,
                      "end": 1417,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1405,
                        "end": 1417,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1405,
                          "end": 1415,
                          "object": {
                            "type": "Super",
                            "start": 1405,
                            "end": 1410
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1411,
                            "end": 1414,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1431,
            "end": 1735,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1437,
              "end": 1467,
              "name": "property_access_only_read_only",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1467,
              "end": 1735,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1470,
                "end": 1735,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1517,
                    "end": 1527,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1517,
                      "end": 1526,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1517,
                        "end": 1524,
                        "object": {
                          "type": "Super",
                          "start": 1517,
                          "end": 1522
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1523,
                          "end": 1524,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1571,
                    "end": 1589,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1577,
                        "end": 1588,
                        "id": {
                          "type": "Identifier",
                          "start": 1577,
                          "end": 1578,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1581,
                          "end": 1588,
                          "object": {
                            "type": "Super",
                            "start": 1581,
                            "end": 1586
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1587,
                            "end": 1588,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1635,
                    "end": 1653,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1636,
                      "end": 1651,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1642,
                        "end": 1651,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1642,
                          "end": 1649,
                          "object": {
                            "type": "Super",
                            "start": 1642,
                            "end": 1647
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1648,
                            "end": 1649,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1705,
                    "end": 1729,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1706,
                      "end": 1727,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1718,
                        "end": 1727,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1718,
                          "end": 1725,
                          "object": {
                            "type": "Super",
                            "start": 1718,
                            "end": 1723
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1724,
                            "end": 1725,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1741,
            "end": 2124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1747,
              "end": 1778,
              "name": "property_access_only_write_only",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1778,
              "end": 2124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1781,
                "end": 2124,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1791,
                    "end": 1810,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1797,
                        "end": 1809,
                        "id": {
                          "type": "Identifier",
                          "start": 1797,
                          "end": 1798,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1801,
                          "end": 1809,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1807,
                            "end": 1809,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1856,
                    "end": 1868,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1856,
                      "end": 1867,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1856,
                        "end": 1863,
                        "object": {
                          "type": "Super",
                          "start": 1856,
                          "end": 1861
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1862,
                          "end": 1863,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1866,
                        "end": 1867,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1931,
                    "end": 1956,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1932,
                      "end": 1954,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1932,
                        "end": 1946,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1934,
                            "end": 1944,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1934,
                              "end": 1935,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 1937,
                              "end": 1944,
                              "object": {
                                "type": "Super",
                                "start": 1937,
                                "end": 1942
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1943,
                                "end": 1944,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1949,
                        "end": 1954,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1951,
                            "end": 1952,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1951,
                              "end": 1952,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1951,
                              "end": 1952,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2011,
                    "end": 2031,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2012,
                      "end": 2029,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2018,
                        "end": 2029,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2018,
                          "end": 2025,
                          "object": {
                            "type": "Super",
                            "start": 2018,
                            "end": 2023
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2024,
                            "end": 2025,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2028,
                          "end": 2029,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2092,
                    "end": 2118,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2093,
                      "end": 2116,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2105,
                        "end": 2116,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2105,
                          "end": 2112,
                          "object": {
                            "type": "Super",
                            "start": 2105,
                            "end": 2110
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2111,
                            "end": 2112,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2115,
                          "end": 2116,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2130,
            "end": 2441,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2136,
              "end": 2165,
              "name": "element_access_only_read_only",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2165,
              "end": 2441,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2168,
                "end": 2441,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2214,
                    "end": 2227,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2214,
                      "end": 2226,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2214,
                        "end": 2224,
                        "object": {
                          "type": "Super",
                          "start": 2214,
                          "end": 2219
                        },
                        "property": {
                          "type": "Literal",
                          "start": 2220,
                          "end": 2223,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2270,
                    "end": 2291,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2276,
                        "end": 2290,
                        "id": {
                          "type": "Identifier",
                          "start": 2276,
                          "end": 2277,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 2280,
                          "end": 2290,
                          "object": {
                            "type": "Super",
                            "start": 2280,
                            "end": 2285
                          },
                          "property": {
                            "type": "Literal",
                            "start": 2286,
                            "end": 2289,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2336,
                    "end": 2357,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2337,
                      "end": 2355,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 2343,
                        "end": 2355,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2343,
                          "end": 2353,
                          "object": {
                            "type": "Super",
                            "start": 2343,
                            "end": 2348
                          },
                          "property": {
                            "type": "Literal",
                            "start": 2349,
                            "end": 2352,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2408,
                    "end": 2435,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2409,
                      "end": 2433,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 2421,
                        "end": 2433,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2421,
                          "end": 2431,
                          "object": {
                            "type": "Super",
                            "start": 2421,
                            "end": 2426
                          },
                          "property": {
                            "type": "Literal",
                            "start": 2427,
                            "end": 2430,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2447,
            "end": 2837,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2453,
              "end": 2483,
              "name": "element_access_only_write_only",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2483,
              "end": 2837,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2486,
                "end": 2837,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2496,
                    "end": 2515,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2502,
                        "end": 2514,
                        "id": {
                          "type": "Identifier",
                          "start": 2502,
                          "end": 2503,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 2506,
                          "end": 2514,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 2512,
                            "end": 2514,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2560,
                    "end": 2575,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2560,
                      "end": 2574,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2560,
                        "end": 2570,
                        "object": {
                          "type": "Super",
                          "start": 2560,
                          "end": 2565
                        },
                        "property": {
                          "type": "Literal",
                          "start": 2566,
                          "end": 2569,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2573,
                        "end": 2574,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2637,
                    "end": 2665,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2638,
                      "end": 2663,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 2638,
                        "end": 2655,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2640,
                            "end": 2653,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2640,
                              "end": 2641,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 2643,
                              "end": 2653,
                              "object": {
                                "type": "Super",
                                "start": 2643,
                                "end": 2648
                              },
                              "property": {
                                "type": "Literal",
                                "start": 2649,
                                "end": 2652,
                                "value": "x",
                                "raw": "\"x\""
                              },
                              "computed": true,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 2658,
                        "end": 2663,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2660,
                            "end": 2661,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2660,
                              "end": 2661,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2660,
                              "end": 2661,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2719,
                    "end": 2742,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2720,
                      "end": 2740,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2726,
                        "end": 2740,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2726,
                          "end": 2736,
                          "object": {
                            "type": "Super",
                            "start": 2726,
                            "end": 2731
                          },
                          "property": {
                            "type": "Literal",
                            "start": 2732,
                            "end": 2735,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2739,
                          "end": 2740,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2802,
                    "end": 2831,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2803,
                      "end": 2829,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2815,
                        "end": 2829,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2815,
                          "end": 2825,
                          "object": {
                            "type": "Super",
                            "start": 2815,
                            "end": 2820
                          },
                          "property": {
                            "type": "Literal",
                            "start": 2821,
                            "end": 2824,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2828,
                          "end": 2829,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2843,
            "end": 3162,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2851,
              "end": 2894,
              "name": "property_access_only_read_only_in_generator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2894,
              "end": 3162,
              "id": null,
              "expression": false,
              "generator": true,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2897,
                "end": 3162,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2944,
                    "end": 2954,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2944,
                      "end": 2953,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2944,
                        "end": 2951,
                        "object": {
                          "type": "Super",
                          "start": 2944,
                          "end": 2949
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2950,
                          "end": 2951,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2998,
                    "end": 3016,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3004,
                        "end": 3015,
                        "id": {
                          "type": "Identifier",
                          "start": 3004,
                          "end": 3005,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 3008,
                          "end": 3015,
                          "object": {
                            "type": "Super",
                            "start": 3008,
                            "end": 3013
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3014,
                            "end": 3015,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3062,
                    "end": 3080,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3063,
                      "end": 3078,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 3069,
                        "end": 3078,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3069,
                          "end": 3076,
                          "object": {
                            "type": "Super",
                            "start": 3069,
                            "end": 3074
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3075,
                            "end": 3076,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3132,
                    "end": 3156,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3133,
                      "end": 3154,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 3145,
                        "end": 3154,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3145,
                          "end": 3152,
                          "object": {
                            "type": "Super",
                            "start": 3145,
                            "end": 3150
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3151,
                            "end": 3152,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3168,
            "end": 3566,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3176,
              "end": 3220,
              "name": "property_access_only_write_only_in_generator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3220,
              "end": 3566,
              "id": null,
              "expression": false,
              "generator": true,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3223,
                "end": 3566,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3233,
                    "end": 3252,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3239,
                        "end": 3251,
                        "id": {
                          "type": "Identifier",
                          "start": 3239,
                          "end": 3240,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 3243,
                          "end": 3251,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 3249,
                            "end": 3251,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3298,
                    "end": 3310,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3298,
                      "end": 3309,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3298,
                        "end": 3305,
                        "object": {
                          "type": "Super",
                          "start": 3298,
                          "end": 3303
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3304,
                          "end": 3305,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3308,
                        "end": 3309,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3373,
                    "end": 3398,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3374,
                      "end": 3396,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 3374,
                        "end": 3388,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 3376,
                            "end": 3386,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3376,
                              "end": 3377,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 3379,
                              "end": 3386,
                              "object": {
                                "type": "Super",
                                "start": 3379,
                                "end": 3384
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3385,
                                "end": 3386,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 3391,
                        "end": 3396,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 3393,
                            "end": 3394,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3393,
                              "end": 3394,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 3393,
                              "end": 3394,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3453,
                    "end": 3473,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3454,
                      "end": 3471,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 3460,
                        "end": 3471,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 3460,
                          "end": 3467,
                          "object": {
                            "type": "Super",
                            "start": 3460,
                            "end": 3465
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3466,
                            "end": 3467,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3470,
                          "end": 3471,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3534,
                    "end": 3560,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3535,
                      "end": 3558,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 3547,
                        "end": 3558,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 3547,
                          "end": 3554,
                          "object": {
                            "type": "Super",
                            "start": 3547,
                            "end": 3552
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3553,
                            "end": 3554,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3557,
                          "end": 3558,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3572,
            "end": 3898,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3580,
              "end": 3622,
              "name": "element_access_only_read_only_in_generator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3622,
              "end": 3898,
              "id": null,
              "expression": false,
              "generator": true,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3625,
                "end": 3898,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3671,
                    "end": 3684,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3671,
                      "end": 3683,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3671,
                        "end": 3681,
                        "object": {
                          "type": "Super",
                          "start": 3671,
                          "end": 3676
                        },
                        "property": {
                          "type": "Literal",
                          "start": 3677,
                          "end": 3680,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3727,
                    "end": 3748,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3733,
                        "end": 3747,
                        "id": {
                          "type": "Identifier",
                          "start": 3733,
                          "end": 3734,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 3737,
                          "end": 3747,
                          "object": {
                            "type": "Super",
                            "start": 3737,
                            "end": 3742
                          },
                          "property": {
                            "type": "Literal",
                            "start": 3743,
                            "end": 3746,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3793,
                    "end": 3814,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3794,
                      "end": 3812,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 3800,
                        "end": 3812,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3800,
                          "end": 3810,
                          "object": {
                            "type": "Super",
                            "start": 3800,
                            "end": 3805
                          },
                          "property": {
                            "type": "Literal",
                            "start": 3806,
                            "end": 3809,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3865,
                    "end": 3892,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3866,
                      "end": 3890,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 3878,
                        "end": 3890,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3878,
                          "end": 3888,
                          "object": {
                            "type": "Super",
                            "start": 3878,
                            "end": 3883
                          },
                          "property": {
                            "type": "Literal",
                            "start": 3884,
                            "end": 3887,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3904,
            "end": 4309,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3912,
              "end": 3955,
              "name": "element_access_only_write_only_in_generator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3955,
              "end": 4309,
              "id": null,
              "expression": false,
              "generator": true,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3958,
                "end": 4309,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3968,
                    "end": 3987,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3974,
                        "end": 3986,
                        "id": {
                          "type": "Identifier",
                          "start": 3974,
                          "end": 3975,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 3978,
                          "end": 3986,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 3984,
                            "end": 3986,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4032,
                    "end": 4047,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4032,
                      "end": 4046,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 4032,
                        "end": 4042,
                        "object": {
                          "type": "Super",
                          "start": 4032,
                          "end": 4037
                        },
                        "property": {
                          "type": "Literal",
                          "start": 4038,
                          "end": 4041,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4045,
                        "end": 4046,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4109,
                    "end": 4137,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4110,
                      "end": 4135,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 4110,
                        "end": 4127,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 4112,
                            "end": 4125,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4112,
                              "end": 4113,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 4115,
                              "end": 4125,
                              "object": {
                                "type": "Super",
                                "start": 4115,
                                "end": 4120
                              },
                              "property": {
                                "type": "Literal",
                                "start": 4121,
                                "end": 4124,
                                "value": "x",
                                "raw": "\"x\""
                              },
                              "computed": true,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 4130,
                        "end": 4135,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 4132,
                            "end": 4133,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4132,
                              "end": 4133,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 4132,
                              "end": 4133,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4191,
                    "end": 4214,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 4192,
                      "end": 4212,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4198,
                        "end": 4212,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4198,
                          "end": 4208,
                          "object": {
                            "type": "Super",
                            "start": 4198,
                            "end": 4203
                          },
                          "property": {
                            "type": "Literal",
                            "start": 4204,
                            "end": 4207,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4211,
                          "end": 4212,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4274,
                    "end": 4303,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 4275,
                      "end": 4301,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4287,
                        "end": 4301,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4287,
                          "end": 4297,
                          "object": {
                            "type": "Super",
                            "start": 4287,
                            "end": 4292
                          },
                          "property": {
                            "type": "Literal",
                            "start": 4293,
                            "end": 4296,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4300,
                          "end": 4301,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4369,
      "end": 4585,
      "id": {
        "type": "Identifier",
        "start": 4375,
        "end": 4379,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4380,
        "end": 4585,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4386,
            "end": 4407,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4390,
              "end": 4396,
              "name": "setter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 4396,
              "end": 4407,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4397,
                  "end": 4403,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4398,
                    "end": 4403,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4400,
                      "end": 4403
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4405,
                "end": 4407,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4412,
            "end": 4441,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4416,
              "end": 4422,
              "name": "getter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 4422,
              "end": 4441,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4430,
                "end": 4441,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4432,
                    "end": 4439,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4424,
                "end": 4429,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4426,
                  "end": 4429
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4446,
            "end": 4471,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4446,
              "end": 4452,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4452,
              "end": 4471,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4453,
                  "end": 4462,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4454,
                    "end": 4462,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4456,
                      "end": 4462
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4469,
                "end": 4471,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4463,
                "end": 4468,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4465,
                  "end": 4468
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4477,
            "end": 4505,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4488,
              "end": 4494,
              "name": "setter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 4494,
              "end": 4505,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4495,
                  "end": 4501,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4496,
                    "end": 4501,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4498,
                      "end": 4501
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4503,
                "end": 4505,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4510,
            "end": 4546,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4521,
              "end": 4527,
              "name": "getter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 4527,
              "end": 4546,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4535,
                "end": 4546,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4537,
                    "end": 4544,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4529,
                "end": 4534,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4531,
                  "end": 4534
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4551,
            "end": 4583,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4558,
              "end": 4564,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4564,
              "end": 4583,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4565,
                  "end": 4574,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4566,
                    "end": 4574,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4568,
                      "end": 4574
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4581,
                "end": 4583,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4575,
                "end": 4580,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4577,
                  "end": 4580
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4587,
      "end": 5241,
      "id": {
        "type": "Identifier",
        "start": 4593,
        "end": 4600,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 4609,
        "end": 4613,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 4614,
        "end": 5241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4620,
            "end": 4663,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4620,
              "end": 4621,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4621,
              "end": 4663,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4624,
                "end": 4663,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4626,
                    "end": 4661,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4633,
                      "end": 4661,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 4645,
                        "end": 4661,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4645,
                          "end": 4657,
                          "object": {
                            "type": "Super",
                            "start": 4645,
                            "end": 4650
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4651,
                            "end": 4657,
                            "name": "method",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 4658,
                            "end": 4660,
                            "value": "",
                            "raw": "''"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4668,
            "end": 4707,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4668,
              "end": 4669,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4669,
              "end": 4707,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4672,
                "end": 4707,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4674,
                    "end": 4705,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4681,
                      "end": 4705,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 4693,
                        "end": 4705,
                        "object": {
                          "type": "Super",
                          "start": 4693,
                          "end": 4698
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4699,
                          "end": 4705,
                          "name": "getter",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4712,
            "end": 4756,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4712,
              "end": 4713,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4713,
              "end": 4756,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4716,
                "end": 4756,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4718,
                    "end": 4754,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4725,
                      "end": 4754,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4737,
                        "end": 4754,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4737,
                          "end": 4749,
                          "object": {
                            "type": "Super",
                            "start": 4737,
                            "end": 4742
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4743,
                            "end": 4749,
                            "name": "setter",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 4752,
                          "end": 4754,
                          "value": "",
                          "raw": "''"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4761,
            "end": 4807,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4761,
              "end": 4762,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4762,
              "end": 4807,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4765,
                "end": 4807,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4767,
                    "end": 4805,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4774,
                      "end": 4805,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 4786,
                        "end": 4805,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4786,
                          "end": 4801,
                          "object": {
                            "type": "Super",
                            "start": 4786,
                            "end": 4791
                          },
                          "property": {
                            "type": "Literal",
                            "start": 4792,
                            "end": 4800,
                            "value": "method",
                            "raw": "\"method\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 4802,
                            "end": 4804,
                            "value": "",
                            "raw": "''"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4812,
            "end": 4854,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4812,
              "end": 4813,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4813,
              "end": 4854,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4816,
                "end": 4854,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4818,
                    "end": 4852,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4825,
                      "end": 4852,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 4837,
                        "end": 4852,
                        "object": {
                          "type": "Super",
                          "start": 4837,
                          "end": 4842
                        },
                        "property": {
                          "type": "Literal",
                          "start": 4843,
                          "end": 4851,
                          "value": "getter",
                          "raw": "\"getter\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4859,
            "end": 4906,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4859,
              "end": 4860,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4860,
              "end": 4906,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4863,
                "end": 4906,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4865,
                    "end": 4904,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4872,
                      "end": 4904,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4884,
                        "end": 4904,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4884,
                          "end": 4899,
                          "object": {
                            "type": "Super",
                            "start": 4884,
                            "end": 4889
                          },
                          "property": {
                            "type": "Literal",
                            "start": 4890,
                            "end": 4898,
                            "value": "setter",
                            "raw": "\"setter\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 4902,
                          "end": 4904,
                          "value": "",
                          "raw": "''"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4911,
            "end": 4961,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4918,
              "end": 4919,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4919,
              "end": 4961,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4922,
                "end": 4961,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4924,
                    "end": 4959,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4931,
                      "end": 4959,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 4943,
                        "end": 4959,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4943,
                          "end": 4955,
                          "object": {
                            "type": "Super",
                            "start": 4943,
                            "end": 4948
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4949,
                            "end": 4955,
                            "name": "method",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 4956,
                            "end": 4958,
                            "value": "",
                            "raw": "''"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4966,
            "end": 5012,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4973,
              "end": 4974,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4974,
              "end": 5012,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4977,
                "end": 5012,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4979,
                    "end": 5010,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 4986,
                      "end": 5010,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 4998,
                        "end": 5010,
                        "object": {
                          "type": "Super",
                          "start": 4998,
                          "end": 5003
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5004,
                          "end": 5010,
                          "name": "getter",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5017,
            "end": 5068,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5024,
              "end": 5025,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5025,
              "end": 5068,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5028,
                "end": 5068,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5030,
                    "end": 5066,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 5037,
                      "end": 5066,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 5049,
                        "end": 5066,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 5049,
                          "end": 5061,
                          "object": {
                            "type": "Super",
                            "start": 5049,
                            "end": 5054
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 5055,
                            "end": 5061,
                            "name": "setter",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 5064,
                          "end": 5066,
                          "value": "",
                          "raw": "''"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5073,
            "end": 5126,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5080,
              "end": 5081,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5081,
              "end": 5126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5084,
                "end": 5126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5086,
                    "end": 5124,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 5093,
                      "end": 5124,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 5105,
                        "end": 5124,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 5105,
                          "end": 5120,
                          "object": {
                            "type": "Super",
                            "start": 5105,
                            "end": 5110
                          },
                          "property": {
                            "type": "Literal",
                            "start": 5111,
                            "end": 5119,
                            "value": "method",
                            "raw": "\"method\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 5121,
                            "end": 5123,
                            "value": "",
                            "raw": "''"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5131,
            "end": 5180,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5138,
              "end": 5139,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5139,
              "end": 5180,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5142,
                "end": 5180,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5144,
                    "end": 5178,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 5151,
                      "end": 5178,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 5163,
                        "end": 5178,
                        "object": {
                          "type": "Super",
                          "start": 5163,
                          "end": 5168
                        },
                        "property": {
                          "type": "Literal",
                          "start": 5169,
                          "end": 5177,
                          "value": "getter",
                          "raw": "\"getter\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5185,
            "end": 5239,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5192,
              "end": 5193,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5193,
              "end": 5239,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5196,
                "end": 5239,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5198,
                    "end": 5237,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 5205,
                      "end": 5237,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 5217,
                        "end": 5237,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 5217,
                          "end": 5232,
                          "object": {
                            "type": "Super",
                            "start": 5217,
                            "end": 5222
                          },
                          "property": {
                            "type": "Literal",
                            "start": 5223,
                            "end": 5231,
                            "value": "setter",
                            "raw": "\"setter\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 5235,
                          "end": 5237,
                          "value": "",
                          "raw": "''"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
