__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 875,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 60,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 59,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 59,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 35,
                "end": 59,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 35,
                  "end": 38,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 36,
                      "end": 37,
                      "name": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
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
                    }
                  ]
                },
                "params": [
                  {
                    "type": "RestElement",
                    "start": 39,
                    "end": 51,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 46,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 48,
                        "end": 51
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 56,
                    "end": 59
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 107,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 106,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 106,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 76,
                "end": 106,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 82,
                    "end": 106,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 82,
                      "end": 85,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 83,
                          "end": 84,
                          "name": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
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
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 86,
                        "end": 98,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 93,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 98,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 95,
                            "end": 98
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 103,
                        "end": 106
                      }
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "BlockStatement",
      "start": 109,
      "end": 127,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 111,
          "end": 125,
          "decorators": [
            {
              "type": "Decorator",
              "start": 111,
              "end": 114,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 112,
                "end": 114,
                "expression": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 123,
            "end": 125,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 129,
      "end": 149,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 131,
          "end": 147,
          "decorators": [
            {
              "type": "Decorator",
              "start": 131,
              "end": 136,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 132,
                "end": 136,
                "expression": {
                  "type": "MemberExpression",
                  "start": 132,
                  "end": 135,
                  "object": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 135,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 145,
            "end": 147,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 151,
      "end": 171,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 153,
          "end": 169,
          "decorators": [
            {
              "type": "Decorator",
              "start": 153,
              "end": 158,
              "expression": {
                "type": "MemberExpression",
                "start": 154,
                "end": 158,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 154,
                  "end": 156,
                  "expression": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 167,
            "end": 169,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 173,
      "end": 200,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 175,
          "end": 198,
          "decorators": [
            {
              "type": "Decorator",
              "start": 175,
              "end": 187,
              "expression": {
                "type": "CallExpression",
                "start": 176,
                "end": 187,
                "callee": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 177,
                  "end": 185,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 178,
                      "end": 184
                    }
                  ]
                },
                "arguments": [],
                "optional": false
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 196,
            "end": 198,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 202,
      "end": 229,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 204,
          "end": 227,
          "decorators": [
            {
              "type": "Decorator",
              "start": 204,
              "end": 216,
              "expression": {
                "type": "TSInstantiationExpression",
                "start": 206,
                "end": 215,
                "expression": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 207,
                  "end": 215,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 208,
                      "end": 214
                    }
                  ]
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 225,
            "end": 227,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 231,
      "end": 260,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 233,
          "end": 258,
          "decorators": [
            {
              "type": "Decorator",
              "start": 233,
              "end": 247,
              "expression": {
                "type": "TSInstantiationExpression",
                "start": 235,
                "end": 246,
                "expression": {
                  "type": "CallExpression",
                  "start": 235,
                  "end": 238,
                  "callee": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 238,
                  "end": 246,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  ]
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 256,
            "end": 258,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 262,
      "end": 285,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 264,
          "end": 283,
          "decorators": [
            {
              "type": "Decorator",
              "start": 264,
              "end": 272,
              "expression": {
                "type": "MemberExpression",
                "start": 266,
                "end": 271,
                "object": {
                  "type": "CallExpression",
                  "start": 266,
                  "end": 269,
                  "callee": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 267,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
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
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 281,
            "end": 283,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 287,
      "end": 312,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 289,
          "end": 310,
          "decorators": [
            {
              "type": "Decorator",
              "start": 289,
              "end": 299,
              "expression": {
                "type": "CallExpression",
                "start": 291,
                "end": 298,
                "callee": {
                  "type": "MemberExpression",
                  "start": 291,
                  "end": 296,
                  "object": {
                    "type": "CallExpression",
                    "start": 291,
                    "end": 294,
                    "callee": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
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
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 308,
            "end": 310,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 314,
      "end": 335,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 316,
          "end": 333,
          "decorators": [
            {
              "type": "Decorator",
              "start": 316,
              "end": 322,
              "expression": {
                "type": "TaggedTemplateExpression",
                "start": 318,
                "end": 321,
                "tag": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 319,
                  "end": 321,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 319,
                      "end": 321,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 331,
            "end": 333,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 337,
      "end": 360,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 339,
          "end": 358,
          "decorators": [
            {
              "type": "Decorator",
              "start": 339,
              "end": 347,
              "expression": {
                "type": "TaggedTemplateExpression",
                "start": 341,
                "end": 346,
                "tag": {
                  "type": "MemberExpression",
                  "start": 341,
                  "end": 344,
                  "object": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 344,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 344,
                  "end": 346,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 344,
                      "end": 346,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 356,
            "end": 358,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 362,
      "end": 385,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 364,
          "end": 383,
          "decorators": [
            {
              "type": "Decorator",
              "start": 364,
              "end": 372,
              "expression": {
                "type": "ChainExpression",
                "start": 366,
                "end": 371,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 366,
                  "end": 371,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 366,
                    "end": 370,
                    "object": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "computed": false
                  }
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 380,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 381,
            "end": 383,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 387,
      "end": 411,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 389,
          "end": 409,
          "decorators": [
            {
              "type": "Decorator",
              "start": 389,
              "end": 398,
              "expression": {
                "type": "MemberExpression",
                "start": 391,
                "end": 397,
                "object": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 393,
                  "end": 396,
                  "value": "y",
                  "raw": "\"y\""
                },
                "optional": false,
                "computed": true
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 407,
            "end": 409,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 413,
      "end": 439,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 415,
          "end": 437,
          "decorators": [
            {
              "type": "Decorator",
              "start": 415,
              "end": 426,
              "expression": {
                "type": "ChainExpression",
                "start": 417,
                "end": 425,
                "expression": {
                  "type": "MemberExpression",
                  "start": 417,
                  "end": 425,
                  "object": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 421,
                    "end": 424,
                    "value": "y",
                    "raw": "\"y\""
                  },
                  "optional": true,
                  "computed": true
                }
              }
            }
          ],
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 434,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 435,
            "end": 437,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 441,
      "end": 467,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 443,
          "end": 465,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 450,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 451,
            "end": 465,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 453,
                "end": 463,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 453,
                    "end": 456,
                    "expression": {
                      "type": "TSNonNullExpression",
                      "start": 454,
                      "end": 456,
                      "expression": {
                        "type": "Identifier",
                        "start": 454,
                        "end": 455,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 458,
                  "end": 463,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 461,
                    "end": 463,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 469,
      "end": 497,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 471,
          "end": 495,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 479,
            "end": 495,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 481,
                "end": 493,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 481,
                    "end": 486,
                    "expression": {
                      "type": "TSNonNullExpression",
                      "start": 482,
                      "end": 486,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 482,
                        "end": 485,
                        "object": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 483,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 485,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 488,
                  "end": 493,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 491,
                    "end": 493,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 499,
      "end": 527,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 501,
          "end": 525,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 509,
            "end": 525,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 511,
                "end": 523,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 511,
                    "end": 516,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 512,
                      "end": 516,
                      "object": {
                        "type": "TSNonNullExpression",
                        "start": 512,
                        "end": 514,
                        "expression": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 513,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 518,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 518,
                  "end": 523,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 521,
                    "end": 523,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 529,
      "end": 564,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 531,
          "end": 562,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 538,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 539,
            "end": 562,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 541,
                "end": 560,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 541,
                    "end": 553,
                    "expression": {
                      "type": "CallExpression",
                      "start": 542,
                      "end": 553,
                      "callee": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 543,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 543,
                        "end": 551,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 544,
                            "end": 550
                          }
                        ]
                      },
                      "arguments": [],
                      "optional": false
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 555,
                  "end": 560,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 558,
                    "end": 560,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 566,
      "end": 601,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 568,
          "end": 599,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 574,
            "end": 575,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 576,
            "end": 599,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 578,
                "end": 597,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 578,
                    "end": 590,
                    "expression": {
                      "type": "TSInstantiationExpression",
                      "start": 580,
                      "end": 589,
                      "expression": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 581,
                        "end": 589,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 582,
                            "end": 588
                          }
                        ]
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 592,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 592,
                  "end": 597,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 595,
                    "end": 597,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 603,
      "end": 640,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 605,
          "end": 638,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 612,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 613,
            "end": 638,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 615,
                "end": 636,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 615,
                    "end": 629,
                    "expression": {
                      "type": "TSInstantiationExpression",
                      "start": 617,
                      "end": 628,
                      "expression": {
                        "type": "CallExpression",
                        "start": 617,
                        "end": 620,
                        "callee": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 618,
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 620,
                        "end": 628,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 621,
                            "end": 627
                          }
                        ]
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 631,
                  "end": 636,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 634,
                    "end": 636,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 642,
      "end": 673,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 644,
          "end": 671,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 651,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 652,
            "end": 671,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 654,
                "end": 669,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 654,
                    "end": 662,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 656,
                      "end": 661,
                      "object": {
                        "type": "CallExpression",
                        "start": 656,
                        "end": 659,
                        "callee": {
                          "type": "Identifier",
                          "start": 656,
                          "end": 657,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 660,
                        "end": 661,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 664,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 664,
                  "end": 669,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 667,
                    "end": 669,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 675,
      "end": 708,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 677,
          "end": 706,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 683,
            "end": 684,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 685,
            "end": 706,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 687,
                "end": 704,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 687,
                    "end": 697,
                    "expression": {
                      "type": "CallExpression",
                      "start": 689,
                      "end": 696,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 689,
                        "end": 694,
                        "object": {
                          "type": "CallExpression",
                          "start": 689,
                          "end": 692,
                          "callee": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 690,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 693,
                          "end": 694,
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
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 699,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 699,
                  "end": 704,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 702,
                    "end": 704,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 710,
      "end": 739,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 712,
          "end": 737,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 719,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 720,
            "end": 737,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 722,
                "end": 735,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 722,
                    "end": 728,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 724,
                      "end": 727,
                      "tag": {
                        "type": "Identifier",
                        "start": 724,
                        "end": 725,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 725,
                        "end": 727,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 725,
                            "end": 727,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ],
                        "expressions": []
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 730,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 730,
                  "end": 735,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 733,
                    "end": 735,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 741,
      "end": 772,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 743,
          "end": 770,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 750,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 751,
            "end": 770,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 753,
                "end": 768,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 753,
                    "end": 761,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 755,
                      "end": 760,
                      "tag": {
                        "type": "MemberExpression",
                        "start": 755,
                        "end": 758,
                        "object": {
                          "type": "Identifier",
                          "start": 755,
                          "end": 756,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 757,
                          "end": 758,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 758,
                        "end": 760,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 758,
                            "end": 760,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ],
                        "expressions": []
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 763,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 763,
                  "end": 768,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 766,
                    "end": 768,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 774,
      "end": 805,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 776,
          "end": 803,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 783,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 784,
            "end": 803,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 786,
                "end": 801,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 786,
                    "end": 794,
                    "expression": {
                      "type": "ChainExpression",
                      "start": 788,
                      "end": 793,
                      "expression": {
                        "type": "TSNonNullExpression",
                        "start": 788,
                        "end": 793,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 788,
                          "end": 792,
                          "object": {
                            "type": "Identifier",
                            "start": 788,
                            "end": 789,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 791,
                            "end": 792,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "computed": false
                        }
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 796,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 796,
                  "end": 801,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 799,
                    "end": 801,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 807,
      "end": 839,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 809,
          "end": 837,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 816,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 817,
            "end": 837,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 819,
                "end": 835,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 819,
                    "end": 828,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 821,
                      "end": 827,
                      "object": {
                        "type": "Identifier",
                        "start": 821,
                        "end": 822,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 823,
                        "end": 826,
                        "value": "y",
                        "raw": "\"y\""
                      },
                      "optional": false,
                      "computed": true
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 830,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 830,
                  "end": 835,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 833,
                    "end": 835,
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
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 841,
      "end": 875,
      "body": [
        {
          "type": "ClassDeclaration",
          "start": 843,
          "end": 873,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 849,
            "end": 850,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 851,
            "end": 873,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 853,
                "end": 871,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 853,
                    "end": 864,
                    "expression": {
                      "type": "ChainExpression",
                      "start": 855,
                      "end": 863,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 855,
                        "end": 863,
                        "object": {
                          "type": "Identifier",
                          "start": 855,
                          "end": 856,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 859,
                          "end": 862,
                          "value": "y",
                          "raw": "\"y\""
                        },
                        "optional": true,
                        "computed": true
                      }
                    }
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 866,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 866,
                  "end": 871,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 869,
                    "end": 871,
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
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
