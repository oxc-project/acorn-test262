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
        "start": 13,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 85,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 44,
                    "end": 57,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 48,
                        "end": 56,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 52,
                          "end": 56,
                          "expression": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 56,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 53,
                            "end": 54,
                            "typeName": {
                              "type": "Identifier",
                              "start": 53,
                              "end": 54,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 66,
                    "end": 79,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 70,
                        "end": 78,
                        "id": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 74,
                          "end": 78,
                          "expression": {
                            "type": "Identifier",
                            "start": 77,
                            "end": 78,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 76,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 76,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
            "start": 91,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "name": "x",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "name": "y",
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 119,
                        "end": 123,
                        "expression": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 120,
                          "end": 121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 137,
                        "end": 141,
                        "expression": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 138,
                          "end": 139,
                          "typeName": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 139,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 152,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 208,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 375,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 375,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 216,
                  "end": 220,
                  "name": "x",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 222,
                "end": 375,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 232,
                    "end": 248,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 236,
                        "end": 247,
                        "id": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "name": "a",
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
                                "name": "Date",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 257,
                    "end": 273,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 261,
                        "end": 272,
                        "id": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 262,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 265,
                          "end": 272,
                          "expression": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 272,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 266,
                            "end": 270,
                            "typeName": {
                              "type": "Identifier",
                              "start": 266,
                              "end": 270,
                              "name": "Date",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 282,
                    "end": 304,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 286,
                        "end": 303,
                        "id": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 290,
                          "end": 303,
                          "expression": {
                            "type": "NewExpression",
                            "start": 293,
                            "end": 303,
                            "callee": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 301,
                              "name": "Date",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 291,
                            "end": 292,
                            "typeName": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 292,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 313,
                    "end": 335,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 317,
                        "end": 334,
                        "id": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 321,
                          "end": 334,
                          "expression": {
                            "type": "NewExpression",
                            "start": 324,
                            "end": 334,
                            "callee": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 332,
                              "name": "Date",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 322,
                            "end": 323,
                            "typeName": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 323,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 344,
                    "end": 369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 348,
                        "end": 368,
                        "id": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 352,
                          "end": 368,
                          "expression": {
                            "type": "TSTypeAssertion",
                            "start": 355,
                            "end": 368,
                            "expression": {
                              "type": "NewExpression",
                              "start": 358,
                              "end": 368,
                              "callee": {
                                "type": "Identifier",
                                "start": 362,
                                "end": 366,
                                "name": "Date",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 356,
                              "end": 357,
                              "typeName": {
                                "type": "Identifier",
                                "start": 356,
                                "end": 357,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 353,
                            "end": 354,
                            "typeName": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 354,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 174,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 190,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 399,
            "name": "b",
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
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 421,
            "name": "c",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 424,
            "end": 440,
            "expression": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 438,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
