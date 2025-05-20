__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 707,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 92,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 92,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 52,
            "end": 64,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 63,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 63,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 61,
                      "end": 63,
                      "members": []
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 69,
            "end": 77,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 69,
              "end": 76,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 72,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 90,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 82,
              "end": 89,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 82,
                "end": 85,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 28,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 28,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 25,
                "end": 28,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 26,
                    "end": 27,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 27,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 25,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 30,
          "end": 44,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 44,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 33,
              "end": 44,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 41,
                "end": 44,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 41,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 204,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 140,
        "end": 204,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 146,
            "end": 176,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 150,
                "end": 175,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 175,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 155,
                      "end": 175,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 157,
                          "end": 173,
                          "accessibility": null,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 158,
                              "end": 167,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 159,
                                "end": 167,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 161,
                                  "end": 167
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 168,
                            "end": 173,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 170,
                              "end": 173
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 181,
            "end": 189,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 181,
              "end": 188,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 194,
            "end": 202,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 194,
              "end": 201,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 194,
                "end": 197,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 105,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 122,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 122,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 119,
                "end": 122,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 121,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 119,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 124,
          "end": 138,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 138,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 138,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 135,
                "end": 138,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 135,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 236,
        "end": 251,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 242,
            "end": 249,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 242,
              "end": 248,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 246,
                "end": 248,
                "properties": []
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 221,
          "end": 234,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 234,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 231,
                "end": 234,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 233,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 231,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 217,
        "end": 220,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 218,
            "end": 219,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 275,
      "end": 354,
      "body": {
        "type": "TSInterfaceBody",
        "start": 290,
        "end": 354,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 296,
            "end": 324,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 323,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 301,
                "end": 323,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 303,
                    "end": 321,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 304,
                        "end": 315,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 307,
                          "end": 315,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 309,
                            "end": 315
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 318,
                        "end": 321
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 329,
            "end": 338,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 332,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 337,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 352,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 346,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 351,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 348,
                "end": 351
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 289,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 356,
      "end": 400,
      "body": {
        "type": "TSInterfaceBody",
        "start": 385,
        "end": 400,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 391,
            "end": 398,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 394,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 380,
          "end": 384,
          "expression": {
            "type": "Identifier",
            "start": 380,
            "end": 384,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 368,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 368,
        "end": 371,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 369,
            "end": 370,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 402,
      "end": 453,
      "body": {
        "type": "TSInterfaceBody",
        "start": 422,
        "end": 453,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 424,
            "end": 437,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 428,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 436,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 430,
                "end": 436
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 438,
            "end": 451,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 443,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 451,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 445,
                "end": 451
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 421,
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 453,
      "end": 454
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 455,
      "end": 538,
      "body": {
        "type": "TSInterfaceBody",
        "start": 481,
        "end": 538,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 511,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 490,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 510,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 492,
                "end": 510,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 499,
                  "end": 510,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 509,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 509,
                        "decorators": [],
                        "name": "Something",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 499,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 476,
          "end": 480,
          "expression": {
            "type": "Identifier",
            "start": 476,
            "end": 480,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 467,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 540,
      "end": 617,
      "body": {
        "type": "TSInterfaceBody",
        "start": 569,
        "end": 617,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 575,
            "end": 591,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 578,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 578,
              "end": 590,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 580,
                "end": 590,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 587,
                  "end": 590,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 588,
                      "end": 589,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 589,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 587,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 564,
          "end": 568,
          "expression": {
            "type": "Identifier",
            "start": 564,
            "end": 568,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 552,
        "decorators": [],
        "name": "E3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 552,
        "end": 555,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 553,
            "end": 554,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 641,
      "end": 707,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 655,
        "end": 707,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 661,
            "end": 705,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 669,
              "end": 675,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 700,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 677,
                "end": 700,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 684,
                  "end": 691,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 690,
                    "end": 691,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 680,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": true,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 695,
                  "end": 699,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 697,
                    "end": 698,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 698,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 695,
                    "end": 696,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 695,
                      "end": 696,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "value": {
              "type": "ObjectExpression",
              "start": 703,
              "end": 705,
              "properties": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 651,
        "decorators": [],
        "name": "Form",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 651,
        "end": 654,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 652,
            "end": 653,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 652,
              "end": 653,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
