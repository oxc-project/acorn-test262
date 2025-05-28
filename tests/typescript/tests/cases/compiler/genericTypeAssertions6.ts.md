__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 441,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 150,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 85,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 85,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 44,
                    "end": 57,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 48,
                        "end": 56,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 52,
                          "end": 56,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 53,
                            "end": 54,
                            "typeName": {
                              "type": "Identifier",
                              "start": 53,
                              "end": 54,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 56,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 66,
                    "end": 79,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 70,
                        "end": 78,
                        "id": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 74,
                          "end": 78,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 76,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 76,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 77,
                            "end": 78,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 148,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 148,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 96,
                      "end": 97,
                      "typeName": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 102,
                      "end": 103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 148,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 124,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 115,
                      "end": 123,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 116,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 119,
                        "end": 123,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 120,
                          "end": 121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "expression": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 133,
                    "end": 142,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 133,
                      "end": 141,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 137,
                        "end": 141,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 138,
                          "end": 139,
                          "typeName": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 139,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "expression": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
    },
    {
      "type": "ClassDeclaration",
      "start": 152,
      "end": 377,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 174,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 174,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 176,
            "end": 190,
            "name": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 190,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 201,
        "end": 207,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 202,
            "end": 203,
            "typeName": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 205,
            "end": 206,
            "typeName": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 208,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 375,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 375,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 216,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 220,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 222,
                "end": 375,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 232,
                    "end": 248,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 236,
                        "end": 247,
                        "id": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 237,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 239,
                              "end": 243,
                              "typeName": {
                                "type": "Identifier",
                                "start": 239,
                                "end": 243,
                                "decorators": [],
                                "name": "Date",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 257,
                    "end": 273,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 261,
                        "end": 272,
                        "id": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 262,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 265,
                          "end": 272,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 266,
                            "end": 270,
                            "typeName": {
                              "type": "Identifier",
                              "start": 266,
                              "end": 270,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 272,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 282,
                    "end": 304,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 286,
                        "end": 303,
                        "id": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 290,
                          "end": 303,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 291,
                            "end": 292,
                            "typeName": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 292,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "NewExpression",
                            "start": 293,
                            "end": 303,
                            "callee": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 301,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 313,
                    "end": 335,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 317,
                        "end": 334,
                        "id": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 321,
                          "end": 334,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 322,
                            "end": 323,
                            "typeName": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 323,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "NewExpression",
                            "start": 324,
                            "end": 334,
                            "callee": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 332,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 344,
                    "end": 369,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 348,
                        "end": 368,
                        "id": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 352,
                          "end": 368,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 353,
                            "end": 354,
                            "typeName": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 354,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 355,
                            "end": 368,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 356,
                              "end": 357,
                              "typeName": {
                                "type": "Identifier",
                                "start": 356,
                                "end": 357,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "expression": {
                              "type": "NewExpression",
                              "start": 358,
                              "end": 368,
                              "callee": {
                                "type": "Identifier",
                                "start": 362,
                                "end": 366,
                                "decorators": [],
                                "name": "Date",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 400,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 399,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 384,
              "end": 399,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 386,
                "end": 399,
                "typeName": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 387,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 387,
                  "end": 399,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 392,
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 392,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 398,
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 398,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 441,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 421,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 408,
                "end": 421,
                "typeName": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 409,
                  "end": 421,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 410,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 414,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 416,
                      "end": 420,
                      "typeName": {
                        "type": "Identifier",
                        "start": 416,
                        "end": 420,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 424,
            "end": 440,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 438,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 426,
                "end": 438,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 427,
                    "end": 431,
                    "typeName": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 431,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 433,
                    "end": 437,
                    "typeName": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 437,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "expression": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
