__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 841,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 105,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 98,
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 98,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 81,
              "end": 98,
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 89,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 88,
                      "end": 89,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 98,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 94,
                  "end": 98
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 81,
                "end": 84,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 82,
                    "end": 83,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 99,
        "end": 105,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 101,
          "end": 105
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 258,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 257,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 109,
            "end": 256,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 114,
              "end": 256,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 120,
                  "end": 180,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 132,
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 135,
                    "end": 179,
                    "checkType": {
                      "type": "TSArrayType",
                      "start": 135,
                      "end": 147,
                      "elementType": {
                        "type": "TSTypeQuery",
                        "start": 136,
                        "end": 144,
                        "exprName": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "start": 156,
                      "end": 164,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 156,
                        "end": 162
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 174,
                      "end": 179,
                      "literal": {
                        "type": "Literal",
                        "start": 174,
                        "end": 179,
                        "raw": "false",
                        "value": false
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 167,
                      "end": 171,
                      "literal": {
                        "type": "Literal",
                        "start": 167,
                        "end": 171,
                        "raw": "true",
                        "value": true
                      }
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 185,
                  "end": 254,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 198,
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 201,
                    "end": 253,
                    "checkType": {
                      "type": "TSTypeLiteral",
                      "start": 201,
                      "end": 216,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 203,
                          "end": 214,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 204,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 204,
                            "end": 214,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 206,
                              "end": 214,
                              "exprName": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 214,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "extendsType": {
                      "type": "TSTypeLiteral",
                      "start": 225,
                      "end": 238,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 227,
                          "end": 236,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 227,
                            "end": 228,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 228,
                            "end": 236,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 230,
                              "end": 236
                            }
                          }
                        }
                      ]
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 248,
                      "end": 253,
                      "literal": {
                        "type": "Literal",
                        "start": 248,
                        "end": 253,
                        "raw": "false",
                        "value": false
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 241,
                      "end": 245,
                      "literal": {
                        "type": "Literal",
                        "start": 241,
                        "end": 245,
                        "raw": "true",
                        "value": true
                      }
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 438,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 288,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 288,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 271,
                "end": 288,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 275,
                    "end": 279,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 278,
                        "end": 279,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 279,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 281,
                  "end": 288,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 284,
                    "end": 288
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 271,
                  "end": 274,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 272,
                      "end": 273,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 273,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 291,
            "end": 438,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 296,
              "end": 438,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 302,
                  "end": 362,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 314,
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 317,
                    "end": 361,
                    "checkType": {
                      "type": "TSArrayType",
                      "start": 317,
                      "end": 329,
                      "elementType": {
                        "type": "TSTypeQuery",
                        "start": 318,
                        "end": 326,
                        "exprName": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 326,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "start": 338,
                      "end": 346,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 338,
                        "end": 344
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 356,
                      "end": 361,
                      "literal": {
                        "type": "Literal",
                        "start": 356,
                        "end": 361,
                        "raw": "false",
                        "value": false
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 349,
                      "end": 353,
                      "literal": {
                        "type": "Literal",
                        "start": 349,
                        "end": 353,
                        "raw": "true",
                        "value": true
                      }
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 367,
                  "end": 436,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 380,
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 383,
                    "end": 435,
                    "checkType": {
                      "type": "TSTypeLiteral",
                      "start": 383,
                      "end": 398,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 385,
                          "end": 396,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 386,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 386,
                            "end": 396,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 388,
                              "end": 396,
                              "exprName": {
                                "type": "Identifier",
                                "start": 395,
                                "end": 396,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "extendsType": {
                      "type": "TSTypeLiteral",
                      "start": 407,
                      "end": 420,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 409,
                          "end": 418,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 410,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 410,
                            "end": 418,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 412,
                              "end": 418
                            }
                          }
                        }
                      ]
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 430,
                      "end": 435,
                      "literal": {
                        "type": "Literal",
                        "start": 430,
                        "end": 435,
                        "raw": "false",
                        "value": false
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 423,
                      "end": 427,
                      "literal": {
                        "type": "Literal",
                        "start": 423,
                        "end": 427,
                        "raw": "true",
                        "value": true
                      }
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 291,
                "end": 292,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 631,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 469,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 450,
              "end": 469,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 452,
                "end": 469,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 456,
                    "end": 460,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 457,
                      "end": 460,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 459,
                        "end": 460,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 459,
                          "end": 460,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 462,
                  "end": 469,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 465,
                    "end": 469
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 452,
                  "end": 455,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 453,
                      "end": 454,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 454,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 472,
            "end": 631,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 489,
              "end": 631,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 495,
                  "end": 555,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 507,
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 510,
                    "end": 554,
                    "checkType": {
                      "type": "TSArrayType",
                      "start": 510,
                      "end": 522,
                      "elementType": {
                        "type": "TSTypeQuery",
                        "start": 511,
                        "end": 519,
                        "exprName": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "start": 531,
                      "end": 539,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 531,
                        "end": 537
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 549,
                      "end": 554,
                      "literal": {
                        "type": "Literal",
                        "start": 549,
                        "end": 554,
                        "raw": "false",
                        "value": false
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 542,
                      "end": 546,
                      "literal": {
                        "type": "Literal",
                        "start": 542,
                        "end": 546,
                        "raw": "true",
                        "value": true
                      }
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 560,
                  "end": 629,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 573,
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 576,
                    "end": 628,
                    "checkType": {
                      "type": "TSTypeLiteral",
                      "start": 576,
                      "end": 591,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 578,
                          "end": 589,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 578,
                            "end": 579,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 579,
                            "end": 589,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 581,
                              "end": 589,
                              "exprName": {
                                "type": "Identifier",
                                "start": 588,
                                "end": 589,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "extendsType": {
                      "type": "TSTypeLiteral",
                      "start": 600,
                      "end": 613,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 602,
                          "end": 611,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 602,
                            "end": 603,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 603,
                            "end": 611,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 605,
                              "end": 611
                            }
                          }
                        }
                      ]
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 623,
                      "end": 628,
                      "literal": {
                        "type": "Literal",
                        "start": 623,
                        "end": 628,
                        "raw": "false",
                        "value": false
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 616,
                      "end": 620,
                      "literal": {
                        "type": "Literal",
                        "start": 616,
                        "end": 620,
                        "raw": "true",
                        "value": true
                      }
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 481,
              "end": 485,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 486,
                "end": 487,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 634,
      "end": 840,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 839,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 669,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 669,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 645,
                "end": 669,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 647,
                    "end": 667,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 648,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 648,
                      "end": 667,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 650,
                        "end": 667,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 654,
                            "end": 658,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 655,
                              "end": 658,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 657,
                                "end": 658,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 657,
                                  "end": 658,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 660,
                          "end": 667,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 663,
                            "end": 667
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 650,
                          "end": 653,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 651,
                              "end": 652,
                              "const": false,
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 651,
                                "end": 652,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "out": false
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 672,
            "end": 839,
            "properties": [
              {
                "type": "Property",
                "start": 678,
                "end": 837,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 679,
                  "end": 837,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 683,
                    "end": 837,
                    "body": [
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 693,
                        "end": 753,
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "start": 698,
                          "end": 705,
                          "decorators": [],
                          "name": "isArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "start": 708,
                          "end": 752,
                          "checkType": {
                            "type": "TSArrayType",
                            "start": 708,
                            "end": 720,
                            "elementType": {
                              "type": "TSTypeQuery",
                              "start": 709,
                              "end": 717,
                              "exprName": {
                                "type": "Identifier",
                                "start": 716,
                                "end": 717,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "extendsType": {
                            "type": "TSArrayType",
                            "start": 729,
                            "end": 737,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 729,
                              "end": 735
                            }
                          },
                          "falseType": {
                            "type": "TSLiteralType",
                            "start": 747,
                            "end": 752,
                            "literal": {
                              "type": "Literal",
                              "start": 747,
                              "end": 752,
                              "raw": "false",
                              "value": false
                            }
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "start": 740,
                            "end": 744,
                            "literal": {
                              "type": "Literal",
                              "start": 740,
                              "end": 744,
                              "raw": "true",
                              "value": true
                            }
                          }
                        },
                        "typeParameters": null
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 762,
                        "end": 831,
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "start": 767,
                          "end": 775,
                          "decorators": [],
                          "name": "IsObject",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "start": 778,
                          "end": 830,
                          "checkType": {
                            "type": "TSTypeLiteral",
                            "start": 778,
                            "end": 793,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 780,
                                "end": 791,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 780,
                                  "end": 781,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 781,
                                  "end": 791,
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "start": 783,
                                    "end": 791,
                                    "exprName": {
                                      "type": "Identifier",
                                      "start": 790,
                                      "end": 791,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ]
                          },
                          "extendsType": {
                            "type": "TSTypeLiteral",
                            "start": 802,
                            "end": 815,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 804,
                                "end": 813,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 804,
                                  "end": 805,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 805,
                                  "end": 813,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 807,
                                    "end": 813
                                  }
                                }
                              }
                            ]
                          },
                          "falseType": {
                            "type": "TSLiteralType",
                            "start": 825,
                            "end": 830,
                            "literal": {
                              "type": "Literal",
                              "start": 825,
                              "end": 830,
                              "raw": "false",
                              "value": false
                            }
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "start": 818,
                            "end": 822,
                            "literal": {
                              "type": "Literal",
                              "start": 818,
                              "end": 822,
                              "raw": "true",
                              "value": true
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 680,
                      "end": 681,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
