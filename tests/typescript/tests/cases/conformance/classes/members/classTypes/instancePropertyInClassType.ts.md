__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 690,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 347,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 347,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 220,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 220,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 42,
                  "end": 52,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 61,
                  "end": 102,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 66,
                    "end": 102,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 69,
                      "end": 102,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 83,
                          "end": 92,
                          "argument": {
                            "type": "Literal",
                            "start": 90,
                            "end": 91,
                            "raw": "1",
                            "value": 1
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
                  "start": 111,
                  "end": 123,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 116,
                    "end": 123,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 123,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 132,
                  "end": 153,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 134,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 153,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 137,
                      "end": 153,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 139,
                          "end": 151,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 146,
                            "end": 150
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
                  "start": 162,
                  "end": 214,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 173,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 173,
                    "end": 214,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 211,
                      "end": 214,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 174,
                        "end": 190,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 190,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 182,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 192,
                        "end": 209,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 209,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 209,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 203,
                              "end": 209
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
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
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 245,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 234,
                  "end": 245,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 240,
                      "end": 241,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 243,
                      "end": 244,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 251,
            "end": 266,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 255,
                "end": 265,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 256,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 259,
                  "end": 265,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 259,
                    "end": 263,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 263,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 271,
            "end": 284,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 275,
                "end": 283,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 277,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 280,
                  "end": 283,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 281,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 289,
            "end": 302,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 293,
                "end": 301,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 295,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 298,
                  "end": 301,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 301,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 307,
            "end": 315,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 307,
              "end": 314,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 307,
                "end": 310,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "raw": "4",
                "value": 4
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 320,
            "end": 335,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 334,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 326,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 329,
                  "end": 334,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 329,
                    "end": 332,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 330,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 332,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "NonGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 349,
      "end": 690,
      "body": {
        "type": "TSModuleBlock",
        "start": 364,
        "end": 690,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 370,
            "end": 562,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 383,
              "end": 562,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 393,
                  "end": 398,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 397,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 396,
                      "end": 397,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 396,
                        "end": 397,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 407,
                  "end": 451,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 412,
                    "end": 451,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 415,
                      "end": 451,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 429,
                          "end": 441,
                          "argument": {
                            "type": "Literal",
                            "start": 436,
                            "end": 440,
                            "raw": "null",
                            "value": null
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
                  "start": 460,
                  "end": 475,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 465,
                    "end": 475,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 472,
                      "end": 475,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 466,
                        "end": 470,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 467,
                          "end": 470,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 469,
                            "end": 470,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 469,
                              "end": 470,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                  "start": 484,
                  "end": 505,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 486,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 486,
                    "end": 505,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 489,
                      "end": 505,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 491,
                          "end": 503,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 498,
                            "end": 502
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
                  "start": 514,
                  "end": 556,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 525,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 525,
                    "end": 556,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 553,
                      "end": 556,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 526,
                        "end": 537,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 533,
                          "end": 537,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 534,
                            "end": 537,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 536,
                              "end": 537,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 536,
                                "end": 537,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 539,
                        "end": 551,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 551,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 548,
                            "end": 551,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 550,
                              "end": 551,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 550,
                                "end": 551,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
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
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 377,
              "end": 382,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 378,
                  "end": 379,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 379,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 380,
                  "end": 381,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 381,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 568,
            "end": 589,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 572,
                "end": 588,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 576,
                  "end": 588,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 582,
                      "end": 583,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 585,
                      "end": 587,
                      "raw": "''",
                      "value": ""
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 581,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 594,
            "end": 609,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 598,
                "end": 608,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 599,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 602,
                  "end": 608,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 602,
                    "end": 606,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 603,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 606,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 614,
            "end": 627,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 618,
                "end": 626,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 620,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 623,
                  "end": 626,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 624,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 632,
            "end": 645,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 636,
                "end": 644,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 638,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 641,
                  "end": 644,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 642,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 643,
                    "end": 644,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 650,
            "end": 659,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 650,
              "end": 658,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 650,
                "end": 653,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 651,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 652,
                  "end": 653,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 656,
                "end": 658,
                "raw": "''",
                "value": ""
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 664,
            "end": 679,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 668,
                "end": 678,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 670,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 673,
                  "end": 678,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 673,
                    "end": 676,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 673,
                      "end": 674,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 676,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 363,
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
