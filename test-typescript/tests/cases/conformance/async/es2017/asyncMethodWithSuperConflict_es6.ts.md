__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1270,
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
      "end": 1269,
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
        "end": 1269,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 528,
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
              "end": 528,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 528,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 171,
                    "end": 191,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 177,
                        "end": 190,
                        "id": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 183,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 186,
                          "end": 190,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 200,
                    "end": 225,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 206,
                        "end": 224,
                        "id": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 217,
                          "name": "_superIndex",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 220,
                          "end": 224,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 271,
                    "end": 281,
                    "expression": {
                      "type": "CallExpression",
                      "start": 271,
                      "end": 280,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 271,
                        "end": 278,
                        "object": {
                          "type": "Super",
                          "start": 271,
                          "end": 276
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
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
                    "start": 327,
                    "end": 337,
                    "expression": {
                      "type": "CallExpression",
                      "start": 327,
                      "end": 336,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 327,
                        "end": 334,
                        "object": {
                          "type": "Super",
                          "start": 327,
                          "end": 332
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 333,
                          "end": 334,
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
                    "start": 383,
                    "end": 396,
                    "expression": {
                      "type": "CallExpression",
                      "start": 383,
                      "end": 395,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 383,
                        "end": 393,
                        "object": {
                          "type": "Super",
                          "start": 383,
                          "end": 388
                        },
                        "property": {
                          "type": "Literal",
                          "start": 389,
                          "end": 392,
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
                    "start": 440,
                    "end": 458,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 446,
                        "end": 457,
                        "id": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 447,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 450,
                          "end": 457,
                          "object": {
                            "type": "Super",
                            "start": 450,
                            "end": 455
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 456,
                            "end": 457,
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
                    "start": 501,
                    "end": 522,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 507,
                        "end": 521,
                        "id": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 508,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 511,
                          "end": 521,
                          "object": {
                            "type": "Super",
                            "start": 511,
                            "end": 516
                          },
                          "property": {
                            "type": "Literal",
                            "start": 517,
                            "end": 520,
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
            "start": 614,
            "end": 1267,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 620,
              "end": 628,
              "name": "advanced",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 628,
              "end": 1267,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 631,
                "end": 1267,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 641,
                    "end": 661,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 647,
                        "end": 660,
                        "id": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 653,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 656,
                          "end": 660,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 670,
                    "end": 695,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 676,
                        "end": 694,
                        "id": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 687,
                          "name": "_superIndex",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 690,
                          "end": 694,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 704,
                    "end": 723,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 710,
                        "end": 722,
                        "id": {
                          "type": "Identifier",
                          "start": 710,
                          "end": 711,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 714,
                          "end": 722,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 720,
                            "end": 722,
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
                    "start": 770,
                    "end": 780,
                    "expression": {
                      "type": "CallExpression",
                      "start": 770,
                      "end": 779,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 770,
                        "end": 777,
                        "object": {
                          "type": "Super",
                          "start": 770,
                          "end": 775
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 776,
                          "end": 777,
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
                    "start": 826,
                    "end": 839,
                    "expression": {
                      "type": "CallExpression",
                      "start": 826,
                      "end": 838,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 826,
                        "end": 836,
                        "object": {
                          "type": "Super",
                          "start": 826,
                          "end": 831
                        },
                        "property": {
                          "type": "Literal",
                          "start": 832,
                          "end": 835,
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
                    "start": 883,
                    "end": 901,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 889,
                        "end": 900,
                        "id": {
                          "type": "Identifier",
                          "start": 889,
                          "end": 890,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 893,
                          "end": 900,
                          "object": {
                            "type": "Super",
                            "start": 893,
                            "end": 898
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 899,
                            "end": 900,
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
                    "start": 944,
                    "end": 965,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 950,
                        "end": 964,
                        "id": {
                          "type": "Identifier",
                          "start": 950,
                          "end": 951,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 954,
                          "end": 964,
                          "object": {
                            "type": "Super",
                            "start": 954,
                            "end": 959
                          },
                          "property": {
                            "type": "Literal",
                            "start": 960,
                            "end": 963,
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
                    "start": 1011,
                    "end": 1023,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1011,
                      "end": 1022,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1011,
                        "end": 1018,
                        "object": {
                          "type": "Super",
                          "start": 1011,
                          "end": 1016
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1017,
                          "end": 1018,
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
                        "start": 1021,
                        "end": 1022,
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
                    "start": 1068,
                    "end": 1083,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1068,
                      "end": 1082,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1068,
                        "end": 1078,
                        "object": {
                          "type": "Super",
                          "start": 1068,
                          "end": 1073
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1074,
                          "end": 1077,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1081,
                        "end": 1082,
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
                    "start": 1146,
                    "end": 1171,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1147,
                      "end": 1169,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1147,
                        "end": 1161,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1149,
                            "end": 1159,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1149,
                              "end": 1150,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 1152,
                              "end": 1159,
                              "object": {
                                "type": "Super",
                                "start": 1152,
                                "end": 1157
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1158,
                                "end": 1159,
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
                        "start": 1164,
                        "end": 1169,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1166,
                            "end": 1167,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1166,
                              "end": 1167,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1166,
                              "end": 1167,
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
                    "start": 1233,
                    "end": 1261,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1234,
                      "end": 1259,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1234,
                        "end": 1251,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1236,
                            "end": 1249,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1236,
                              "end": 1237,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 1239,
                              "end": 1249,
                              "object": {
                                "type": "Super",
                                "start": 1239,
                                "end": 1244
                              },
                              "property": {
                                "type": "Literal",
                                "start": 1245,
                                "end": 1248,
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
                        "start": 1254,
                        "end": 1259,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1256,
                            "end": 1257,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1256,
                              "end": 1257,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1256,
                              "end": 1257,
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
