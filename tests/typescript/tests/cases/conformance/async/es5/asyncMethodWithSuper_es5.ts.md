__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1143,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 25,
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
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 25,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 25,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 41,
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
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 41,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 41,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 1143,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 1143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 465,
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
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 465,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                        "optional": false,
                        "computed": true
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 377,
                    "end": 395,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 383,
                        "end": 394,
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
                          "object": {
                            "type": "Super",
                            "start": 387,
                            "end": 392
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 393,
                            "end": 394,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 438,
                    "end": 459,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 444,
                        "end": 458,
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
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 551,
            "end": 1141,
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
            "value": {
              "type": "FunctionExpression",
              "start": 565,
              "end": 1141,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 568,
                "end": 1141,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 578,
                    "end": 597,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 584,
                        "end": 596,
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
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 594,
                            "end": 596,
                            "body": []
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                        "optional": false,
                        "computed": true
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 757,
                    "end": 775,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 763,
                        "end": 774,
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
                          "object": {
                            "type": "Super",
                            "start": 767,
                            "end": 772
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 774,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 818,
                    "end": 839,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 824,
                        "end": 838,
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
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                        "optional": false,
                        "computed": true
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
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1023,
                            "end": 1033,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1023,
                              "end": 1024,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
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
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1040,
                              "end": 1041,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1040,
                              "end": 1041,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
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
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1110,
                            "end": 1123,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1110,
                              "end": 1111,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
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
                              "optional": false,
                              "computed": true
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1131,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1130,
                              "end": 1131,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
