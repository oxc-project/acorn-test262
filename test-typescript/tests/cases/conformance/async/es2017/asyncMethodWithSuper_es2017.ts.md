__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1144,
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
      "end": 1143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 1143,
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
            "end": 1141,
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
              "end": 1141,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 568,
                "end": 1141,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
