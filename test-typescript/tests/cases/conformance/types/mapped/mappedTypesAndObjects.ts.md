__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 708,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 28,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 25,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 25,
                "end": 28,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 26,
                    "end": 27,
                    "typeName": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 27,
                      "name": "T",
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
        {
          "type": "Identifier",
          "start": 30,
          "end": 44,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 44,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 33,
              "end": 44,
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 41,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 41,
                "end": 44,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "T",
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
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 63,
                  "name": "obj",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 69,
            "end": 77,
            "expression": {
              "type": "AssignmentExpression",
              "start": 69,
              "end": 76,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 72,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 90,
            "expression": {
              "type": "AssignmentExpression",
              "start": 82,
              "end": 89,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 82,
                "end": 85,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 105,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 122,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 119,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 119,
                "end": 122,
                "params": [
                  {
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
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 124,
          "end": 138,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 138,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 138,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 135,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 135,
                "end": 138,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "T",
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
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 175,
                  "name": "obj",
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
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 158,
                              "end": 167,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 159,
                                "end": 167,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 161,
                                  "end": 167
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 168,
                            "end": 173,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 170,
                              "end": 173
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 181,
            "end": 189,
            "expression": {
              "type": "AssignmentExpression",
              "start": 181,
              "end": 188,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 194,
            "end": 202,
            "expression": {
              "type": "AssignmentExpression",
              "start": 194,
              "end": 201,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 194,
                "end": 197,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 221,
          "end": 234,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 231,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 231,
                "end": 234,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 233,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "name": "T",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 236,
        "end": 251,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 242,
            "end": 249,
            "expression": {
              "type": "AssignmentExpression",
              "start": 242,
              "end": 248,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 246,
                "end": 248,
                "properties": []
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 217,
        "end": 220,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 218,
            "end": 219,
            "name": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 275,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 289,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 290,
        "end": 354,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 296,
            "end": 324,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 304,
                        "end": 315,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 307,
                          "end": 315,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 309,
                            "end": 315
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 318,
                        "end": 321
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 329,
            "end": 338,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 332,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 337,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 352,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 346,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 351,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 348,
                "end": 351
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 356,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 368,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 380,
          "end": 384,
          "expression": {
            "type": "Identifier",
            "start": 380,
            "end": 384,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 368,
        "end": 371,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 369,
            "end": 370,
            "name": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 385,
        "end": 400,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 391,
            "end": 398,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 394,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 402,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 421,
        "name": "Something",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 422,
        "end": 453,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 424,
            "end": 437,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 428,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 436,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 430,
                "end": 436
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 438,
            "end": 451,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 443,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 451,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 445,
                "end": 451
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 467,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 476,
          "end": 480,
          "expression": {
            "type": "Identifier",
            "start": 476,
            "end": 480,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 481,
        "end": 538,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 511,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 490,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 510,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 492,
                "end": 510,
                "typeName": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 499,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 499,
                  "end": 510,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 509,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 509,
                        "name": "Something",
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 540,
      "end": 617,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 552,
        "name": "E3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 564,
          "end": 568,
          "expression": {
            "type": "Identifier",
            "start": 564,
            "end": 568,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 552,
        "end": 555,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 553,
            "end": 554,
            "name": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 569,
        "end": 617,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 575,
            "end": 591,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 578,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 578,
              "end": 590,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 580,
                "end": 590,
                "typeName": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 587,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 587,
                  "end": 590,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 588,
                      "end": 589,
                      "typeName": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 589,
                        "name": "T",
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 641,
      "end": 707,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 651,
        "name": "Form",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 655,
        "end": 707,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 661,
            "end": 705,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 669,
              "end": 675,
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 703,
              "end": 705,
              "properties": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 700,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 677,
                "end": 700,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 679,
                  "end": 691,
                  "name": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 680,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 684,
                    "end": 691,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 690,
                      "end": 691,
                      "typeName": {
                        "type": "Identifier",
                        "start": 690,
                        "end": 691,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 695,
                  "end": 699,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 695,
                    "end": 696,
                    "typeName": {
                      "type": "Identifier",
                      "start": 695,
                      "end": 696,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 697,
                    "end": 698,
                    "typeName": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 698,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": true,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 684,
                  "end": 691,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 690,
                    "end": 691,
                    "typeName": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 680,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 651,
        "end": 654,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 652,
            "end": 653,
            "name": {
              "type": "Identifier",
              "start": 652,
              "end": 653,
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
          }
        ]
      },
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
