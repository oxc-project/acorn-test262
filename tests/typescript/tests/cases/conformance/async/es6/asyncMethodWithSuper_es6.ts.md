__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5241,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 25,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 25,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 41,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 4311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 4311,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 465,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "decorators": [],
              "name": "simple",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 465,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 465,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 208,
                    "end": 218,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 208,
                      "end": 217,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 215,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 208,
                          "end": 213
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 215,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 264,
                    "end": 274,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 264,
                      "end": 273,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 264,
                        "end": 271,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 264,
                          "end": 269
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 271,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 333,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 320,
                      "end": 332,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 320,
                        "end": 330,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 320,
                          "end": 325
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 326,
                          "end": 329,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 384,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 387,
                          "end": 394,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 387,
                            "end": 392
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 393,
                            "end": 394,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 445,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 448,
                          "end": 458,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 448,
                            "end": 453
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 454,
                            "end": 457,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 551,
            "end": 1425,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 557,
              "end": 565,
              "decorators": [],
              "name": "advanced",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 565,
              "end": 1425,
              "async": true,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 584,
                          "end": 585,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 588,
                          "end": 596,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 594,
                            "end": 596,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 644,
                    "end": 654,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 644,
                      "end": 653,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 644,
                        "end": 651,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 644,
                          "end": 649
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 651,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 700,
                    "end": 713,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 700,
                      "end": 712,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 700,
                        "end": 710,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 700,
                          "end": 705
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 706,
                          "end": 709,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 763,
                          "end": 764,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 767,
                          "end": 774,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 767,
                            "end": 772
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 774,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 825,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 828,
                          "end": 838,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 828,
                            "end": 833
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 834,
                            "end": 837,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 885,
                    "end": 897,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 885,
                      "end": 896,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 885,
                        "end": 892,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 885,
                          "end": 890
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 891,
                          "end": 892,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 895,
                        "end": 896,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 942,
                    "end": 957,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 942,
                      "end": 956,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 942,
                        "end": 952,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 942,
                          "end": 947
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 948,
                          "end": 951,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 955,
                        "end": 956,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1020,
                    "end": 1045,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1021,
                      "end": 1043,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1021,
                        "end": 1035,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1023,
                            "end": 1033,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1023,
                              "end": 1024,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 1026,
                              "end": 1033,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1026,
                                "end": 1031
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1032,
                                "end": 1033,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1040,
                              "end": 1041,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1040,
                              "end": 1041,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1107,
                    "end": 1135,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1108,
                      "end": 1133,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1108,
                        "end": 1125,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1110,
                            "end": 1123,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1110,
                              "end": 1111,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 1113,
                              "end": 1123,
                              "computed": true,
                              "object": {
                                "type": "Super",
                                "start": 1113,
                                "end": 1118
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "start": 1119,
                                "end": 1122,
                                "raw": "\"x\"",
                                "value": "x"
                              }
                            }
                          }
                        ],
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1131,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1131,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1181,
                    "end": 1199,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1182,
                      "end": 1197,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 1188,
                        "end": 1197,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1188,
                          "end": 1195,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 1188,
                            "end": 1193
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1194,
                            "end": 1195,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1244,
                    "end": 1265,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1245,
                      "end": 1263,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 1251,
                        "end": 1263,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1251,
                          "end": 1261,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 1251,
                            "end": 1256
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 1257,
                            "end": 1260,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1317,
                    "end": 1341,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1318,
                      "end": 1339,
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 1330,
                        "end": 1339,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1330,
                          "end": 1337,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 1330,
                            "end": 1335
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1336,
                            "end": 1337,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1392,
                    "end": 1419,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1393,
                      "end": 1417,
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 1405,
                        "end": 1417,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1405,
                          "end": 1415,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 1405,
                            "end": 1410
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 1411,
                            "end": 1414,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1431,
            "end": 1735,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1437,
              "end": 1467,
              "decorators": [],
              "name": "property_access_only_read_only",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1467,
              "end": 1735,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 1470,
                "end": 1735,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1517,
                    "end": 1527,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1517,
                      "end": 1526,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1517,
                        "end": 1524,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 1517,
                          "end": 1522
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1523,
                          "end": 1524,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1577,
                          "end": 1578,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1581,
                          "end": 1588,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 1581,
                            "end": 1586
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1587,
                            "end": 1588,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1635,
                    "end": 1653,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1636,
                      "end": 1651,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 1642,
                        "end": 1651,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1642,
                          "end": 1649,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 1642,
                            "end": 1647
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1648,
                            "end": 1649,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1705,
                    "end": 1729,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1706,
                      "end": 1727,
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 1718,
                        "end": 1727,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1718,
                          "end": 1725,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 1718,
                            "end": 1723
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1724,
                            "end": 1725,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1741,
            "end": 2124,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1747,
              "end": 1778,
              "decorators": [],
              "name": "property_access_only_write_only",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1778,
              "end": 2124,
              "async": true,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1797,
                          "end": 1798,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1801,
                          "end": 1809,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1807,
                            "end": 1809,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1856,
                    "end": 1868,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1856,
                      "end": 1867,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1856,
                        "end": 1863,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 1856,
                          "end": 1861
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1862,
                          "end": 1863,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1866,
                        "end": 1867,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1931,
                    "end": 1956,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1932,
                      "end": 1954,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1932,
                        "end": 1946,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1934,
                            "end": 1944,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1934,
                              "end": 1935,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 1937,
                              "end": 1944,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1937,
                                "end": 1942
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1943,
                                "end": 1944,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1951,
                              "end": 1952,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1951,
                              "end": 1952,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2011,
                    "end": 2031,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2012,
                      "end": 2029,
                      "async": false,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2018,
                        "end": 2029,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2018,
                          "end": 2025,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 2018,
                            "end": 2023
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2024,
                            "end": 2025,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2028,
                          "end": 2029,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2092,
                    "end": 2118,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2093,
                      "end": 2116,
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2105,
                        "end": 2116,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2105,
                          "end": 2112,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 2105,
                            "end": 2110
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2111,
                            "end": 2112,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2115,
                          "end": 2116,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2130,
            "end": 2441,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2136,
              "end": 2165,
              "decorators": [],
              "name": "element_access_only_read_only",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2165,
              "end": 2441,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 2168,
                "end": 2441,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2214,
                    "end": 2227,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2214,
                      "end": 2226,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2214,
                        "end": 2224,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 2214,
                          "end": 2219
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 2220,
                          "end": 2223,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2276,
                          "end": 2277,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 2280,
                          "end": 2290,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 2280,
                            "end": 2285
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 2286,
                            "end": 2289,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2336,
                    "end": 2357,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2337,
                      "end": 2355,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 2343,
                        "end": 2355,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2343,
                          "end": 2353,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 2343,
                            "end": 2348
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 2349,
                            "end": 2352,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2408,
                    "end": 2435,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2409,
                      "end": 2433,
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 2421,
                        "end": 2433,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2421,
                          "end": 2431,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 2421,
                            "end": 2426
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 2427,
                            "end": 2430,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2447,
            "end": 2837,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2453,
              "end": 2483,
              "decorators": [],
              "name": "element_access_only_write_only",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2483,
              "end": 2837,
              "async": true,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2502,
                          "end": 2503,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 2506,
                          "end": 2514,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 2512,
                            "end": 2514,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2560,
                    "end": 2575,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2560,
                      "end": 2574,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2560,
                        "end": 2570,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 2560,
                          "end": 2565
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 2566,
                          "end": 2569,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2573,
                        "end": 2574,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2637,
                    "end": 2665,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2638,
                      "end": 2663,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 2638,
                        "end": 2655,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2640,
                            "end": 2653,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2640,
                              "end": 2641,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 2643,
                              "end": 2653,
                              "computed": true,
                              "object": {
                                "type": "Super",
                                "start": 2643,
                                "end": 2648
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "start": 2649,
                                "end": 2652,
                                "raw": "\"x\"",
                                "value": "x"
                              }
                            }
                          }
                        ],
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2660,
                              "end": 2661,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 2660,
                              "end": 2661,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2719,
                    "end": 2742,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2720,
                      "end": 2740,
                      "async": false,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2726,
                        "end": 2740,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2726,
                          "end": 2736,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 2726,
                            "end": 2731
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 2732,
                            "end": 2735,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2739,
                          "end": 2740,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2802,
                    "end": 2831,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 2803,
                      "end": 2829,
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 2815,
                        "end": 2829,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2815,
                          "end": 2825,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 2815,
                            "end": 2820
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 2821,
                            "end": 2824,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2828,
                          "end": 2829,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2843,
            "end": 3162,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2851,
              "end": 2894,
              "decorators": [],
              "name": "property_access_only_read_only_in_generator",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2894,
              "end": 3162,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 2897,
                "end": 3162,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2944,
                    "end": 2954,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2944,
                      "end": 2953,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2944,
                        "end": 2951,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 2944,
                          "end": 2949
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2950,
                          "end": 2951,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3004,
                          "end": 3005,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 3008,
                          "end": 3015,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 3008,
                            "end": 3013
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3014,
                            "end": 3015,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3062,
                    "end": 3080,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3063,
                      "end": 3078,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 3069,
                        "end": 3078,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3069,
                          "end": 3076,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 3069,
                            "end": 3074
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3075,
                            "end": 3076,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3132,
                    "end": 3156,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3133,
                      "end": 3154,
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 3145,
                        "end": 3154,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3145,
                          "end": 3152,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 3145,
                            "end": 3150
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3151,
                            "end": 3152,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3168,
            "end": 3566,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3176,
              "end": 3220,
              "decorators": [],
              "name": "property_access_only_write_only_in_generator",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3220,
              "end": 3566,
              "async": true,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3239,
                          "end": 3240,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 3243,
                          "end": 3251,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3249,
                            "end": 3251,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3298,
                    "end": 3310,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3298,
                      "end": 3309,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3298,
                        "end": 3305,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 3298,
                          "end": 3303
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3304,
                          "end": 3305,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3308,
                        "end": 3309,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3373,
                    "end": 3398,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3374,
                      "end": 3396,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 3374,
                        "end": 3388,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 3376,
                            "end": 3386,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3376,
                              "end": 3377,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 3379,
                              "end": 3386,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 3379,
                                "end": 3384
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3385,
                                "end": 3386,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ],
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3393,
                              "end": 3394,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 3393,
                              "end": 3394,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3453,
                    "end": 3473,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3454,
                      "end": 3471,
                      "async": false,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 3460,
                        "end": 3471,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 3460,
                          "end": 3467,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 3460,
                            "end": 3465
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3466,
                            "end": 3467,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3470,
                          "end": 3471,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3534,
                    "end": 3560,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3535,
                      "end": 3558,
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 3547,
                        "end": 3558,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 3547,
                          "end": 3554,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 3547,
                            "end": 3552
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3553,
                            "end": 3554,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3557,
                          "end": 3558,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3572,
            "end": 3898,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3580,
              "end": 3622,
              "decorators": [],
              "name": "element_access_only_read_only_in_generator",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3622,
              "end": 3898,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 3625,
                "end": 3898,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3671,
                    "end": 3684,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3671,
                      "end": 3683,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3671,
                        "end": 3681,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 3671,
                          "end": 3676
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 3677,
                          "end": 3680,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3733,
                          "end": 3734,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 3737,
                          "end": 3747,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 3737,
                            "end": 3742
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 3743,
                            "end": 3746,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3793,
                    "end": 3814,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3794,
                      "end": 3812,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 3800,
                        "end": 3812,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3800,
                          "end": 3810,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 3800,
                            "end": 3805
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 3806,
                            "end": 3809,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3865,
                    "end": 3892,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 3866,
                      "end": 3890,
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 3878,
                        "end": 3890,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3878,
                          "end": 3888,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 3878,
                            "end": 3883
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 3884,
                            "end": 3887,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3904,
            "end": 4309,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3912,
              "end": 3955,
              "decorators": [],
              "name": "element_access_only_write_only_in_generator",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3955,
              "end": 4309,
              "async": true,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3974,
                          "end": 3975,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 3978,
                          "end": 3986,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3984,
                            "end": 3986,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4032,
                    "end": 4047,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4032,
                      "end": 4046,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 4032,
                        "end": 4042,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 4032,
                          "end": 4037
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 4038,
                          "end": 4041,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4045,
                        "end": 4046,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4109,
                    "end": 4137,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4110,
                      "end": 4135,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 4110,
                        "end": 4127,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 4112,
                            "end": 4125,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4112,
                              "end": 4113,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 4115,
                              "end": 4125,
                              "computed": true,
                              "object": {
                                "type": "Super",
                                "start": 4115,
                                "end": 4120
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "start": 4121,
                                "end": 4124,
                                "raw": "\"x\"",
                                "value": "x"
                              }
                            }
                          }
                        ],
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4132,
                              "end": 4133,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 4132,
                              "end": 4133,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4191,
                    "end": 4214,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 4192,
                      "end": 4212,
                      "async": false,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4198,
                        "end": 4212,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4198,
                          "end": 4208,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 4198,
                            "end": 4203
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 4204,
                            "end": 4207,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4211,
                          "end": 4212,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4274,
                    "end": 4303,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 4275,
                      "end": 4301,
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4287,
                        "end": 4301,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4287,
                          "end": 4297,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 4287,
                            "end": 4292
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 4293,
                            "end": 4296,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4300,
                          "end": 4301,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4369,
      "end": 4585,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4380,
        "end": 4585,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4386,
            "end": 4407,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4390,
              "end": 4396,
              "decorators": [],
              "name": "setter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4396,
              "end": 4407,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4405,
                "end": 4407,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4397,
                  "end": 4403,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4398,
                    "end": 4403,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4400,
                      "end": 4403
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4412,
            "end": 4441,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4416,
              "end": 4422,
              "decorators": [],
              "name": "getter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4422,
              "end": 4441,
              "async": false,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4424,
                "end": 4429,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4426,
                  "end": 4429
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4446,
            "end": 4471,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4446,
              "end": 4452,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4452,
              "end": 4471,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4469,
                "end": 4471,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4453,
                  "end": 4462,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4454,
                    "end": 4462,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4456,
                      "end": 4462
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4463,
                "end": 4468,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4465,
                  "end": 4468
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4477,
            "end": 4505,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4488,
              "end": 4494,
              "decorators": [],
              "name": "setter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4494,
              "end": 4505,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4503,
                "end": 4505,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4495,
                  "end": 4501,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4496,
                    "end": 4501,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4498,
                      "end": 4501
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4510,
            "end": 4546,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4521,
              "end": 4527,
              "decorators": [],
              "name": "getter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4527,
              "end": 4546,
              "async": false,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4529,
                "end": 4534,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4531,
                  "end": 4534
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4551,
            "end": 4583,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4558,
              "end": 4564,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4564,
              "end": 4583,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4581,
                "end": 4583,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4565,
                  "end": 4574,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4566,
                    "end": 4574,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4568,
                      "end": 4574
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4575,
                "end": 4580,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4577,
                  "end": 4580
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4375,
        "end": 4379,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4587,
      "end": 5241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4614,
        "end": 5241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4620,
            "end": 4663,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4620,
              "end": 4621,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4621,
              "end": 4663,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 4645,
                        "end": 4661,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 4658,
                            "end": 4660,
                            "raw": "''",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4645,
                          "end": 4657,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 4645,
                            "end": 4650
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4651,
                            "end": 4657,
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4668,
            "end": 4707,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4668,
              "end": 4669,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4669,
              "end": 4707,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "MemberExpression",
                        "start": 4693,
                        "end": 4705,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 4693,
                          "end": 4698
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4699,
                          "end": 4705,
                          "decorators": [],
                          "name": "getter",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4712,
            "end": 4756,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4712,
              "end": 4713,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4713,
              "end": 4756,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4737,
                        "end": 4754,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4737,
                          "end": 4749,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 4737,
                            "end": 4742
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4743,
                            "end": 4749,
                            "decorators": [],
                            "name": "setter",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 4752,
                          "end": 4754,
                          "raw": "''",
                          "value": ""
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4761,
            "end": 4807,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4761,
              "end": 4762,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4762,
              "end": 4807,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 4786,
                        "end": 4805,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 4802,
                            "end": 4804,
                            "raw": "''",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4786,
                          "end": 4801,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 4786,
                            "end": 4791
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 4792,
                            "end": 4800,
                            "raw": "\"method\"",
                            "value": "method"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4812,
            "end": 4854,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4812,
              "end": 4813,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4813,
              "end": 4854,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "MemberExpression",
                        "start": 4837,
                        "end": 4852,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 4837,
                          "end": 4842
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 4843,
                          "end": 4851,
                          "raw": "\"getter\"",
                          "value": "getter"
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4859,
            "end": 4906,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4859,
              "end": 4860,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4860,
              "end": 4906,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 4884,
                        "end": 4904,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4884,
                          "end": 4899,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 4884,
                            "end": 4889
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 4890,
                            "end": 4898,
                            "raw": "\"setter\"",
                            "value": "setter"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 4902,
                          "end": 4904,
                          "raw": "''",
                          "value": ""
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4911,
            "end": 4961,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4918,
              "end": 4919,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4919,
              "end": 4961,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 4943,
                        "end": 4959,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 4956,
                            "end": 4958,
                            "raw": "''",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4943,
                          "end": 4955,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 4943,
                            "end": 4948
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4949,
                            "end": 4955,
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4966,
            "end": 5012,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4973,
              "end": 4974,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4974,
              "end": 5012,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "MemberExpression",
                        "start": 4998,
                        "end": 5010,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 4998,
                          "end": 5003
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 5004,
                          "end": 5010,
                          "decorators": [],
                          "name": "getter",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5017,
            "end": 5068,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5024,
              "end": 5025,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 5025,
              "end": 5068,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 5049,
                        "end": 5066,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 5049,
                          "end": 5061,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 5049,
                            "end": 5054
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 5055,
                            "end": 5061,
                            "decorators": [],
                            "name": "setter",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 5064,
                          "end": 5066,
                          "raw": "''",
                          "value": ""
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5073,
            "end": 5126,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5080,
              "end": 5081,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 5081,
              "end": 5126,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "CallExpression",
                        "start": 5105,
                        "end": 5124,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 5121,
                            "end": 5123,
                            "raw": "''",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 5105,
                          "end": 5120,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 5105,
                            "end": 5110
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 5111,
                            "end": 5119,
                            "raw": "\"method\"",
                            "value": "method"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5131,
            "end": 5180,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5138,
              "end": 5139,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 5139,
              "end": 5180,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "MemberExpression",
                        "start": 5163,
                        "end": 5178,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 5163,
                          "end": 5168
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 5169,
                          "end": 5177,
                          "raw": "\"getter\"",
                          "value": "getter"
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5185,
            "end": 5239,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5192,
              "end": 5193,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 5193,
              "end": 5239,
              "async": false,
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
                      "async": true,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 5217,
                        "end": 5237,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 5217,
                          "end": 5232,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 5217,
                            "end": 5222
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 5223,
                            "end": 5231,
                            "raw": "\"setter\"",
                            "value": "setter"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 5235,
                          "end": 5237,
                          "raw": "''",
                          "value": ""
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4593,
        "end": 4600,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 4609,
        "end": 4613,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
