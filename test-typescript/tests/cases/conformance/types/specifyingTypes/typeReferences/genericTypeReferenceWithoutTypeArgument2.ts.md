__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 631,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 105,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
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
        "start": 107,
        "end": 122,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
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
      "type": "VariableDeclaration",
      "start": 124,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 132,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 150,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 142,
                "end": 150,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 144,
                    "end": 148,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 147,
                        "end": 148,
                        "typeName": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
                          "name": "I",
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
      "start": 152,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 172,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 172,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 159,
                "end": 172,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 161,
                    "end": 170,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 163,
                          "end": 166,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 166,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "name": "I",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 169,
                        "end": 170,
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 194,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 181,
                "end": 194,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 183,
                    "end": 192,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 184,
                        "end": 188,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 185,
                          "end": 188,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 187,
                            "end": 188,
                            "typeName": {
                              "type": "Identifier",
                              "start": 187,
                              "end": 188,
                              "name": "I",
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 189,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 191,
                        "end": 192,
                        "typeName": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 238,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 205,
            "end": 238,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 206,
                "end": 210,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 210,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 209,
                    "end": 210,
                    "typeName": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "name": "I",
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
              "start": 215,
              "end": 238,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 217,
                  "end": 226,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 221,
                      "end": 225,
                      "id": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 225,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 222,
                          "end": 225,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 224,
                            "end": 225,
                            "typeName": {
                              "type": "Identifier",
                              "start": 224,
                              "end": 225,
                              "name": "I",
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
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 227,
                  "end": 236,
                  "argument": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 240,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 250,
        "name": "f",
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
          "start": 251,
          "end": 255,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 255,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 254,
              "end": 255,
              "typeName": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "name": "I",
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
        "start": 260,
        "end": 283,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 262,
            "end": 271,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 266,
                "end": 270,
                "id": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 270,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "name": "I",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 272,
            "end": 281,
            "argument": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 256,
        "end": 259,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 258,
          "end": 259,
          "typeName": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 293,
            "end": 336,
            "id": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "name": "f",
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
                "start": 304,
                "end": 308,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 305,
                  "end": 308,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 307,
                    "end": 308,
                    "typeName": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 308,
                      "name": "I",
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
              "start": 313,
              "end": 336,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 315,
                  "end": 324,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 319,
                      "end": 323,
                      "id": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 323,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 320,
                          "end": 323,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 322,
                            "end": 323,
                            "typeName": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 323,
                              "name": "I",
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
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 325,
                  "end": 334,
                  "argument": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 312,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 311,
                "end": 312,
                "typeName": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 338,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 345,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 354,
        "end": 355,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 359,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 361,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 372,
        "name": "U",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 381,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "name": "I",
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
        "start": 383,
        "end": 385,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 387,
      "end": 436,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 395,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 396,
        "end": 436,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 402,
            "end": 434,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 409,
              "end": 434,
              "id": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 420,
                "end": 423,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 421,
                    "end": 422,
                    "name": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 422,
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
                "start": 424,
                "end": 434,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 426,
                    "end": 432,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 429,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 429,
                      "end": 432,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 431,
                        "end": 432,
                        "typeName": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 432,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 438,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 446,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 455,
        "end": 458,
        "object": {
          "type": "Identifier",
          "start": 455,
          "end": 456,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 457,
          "end": 458,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 459,
        "end": 462,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 463,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 475,
        "name": "D3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 475,
        "end": 490,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 476,
            "end": 489,
            "name": {
              "type": "Identifier",
              "start": 476,
              "end": 477,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 486,
              "end": 489,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 486,
                "end": 489,
                "left": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 487,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 489,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 491,
        "end": 494,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 495,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 505,
        "end": 507,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 516,
          "end": 519,
          "expression": {
            "type": "MemberExpression",
            "start": 516,
            "end": 519,
            "object": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 520,
        "end": 523,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 525,
      "end": 558,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 535,
        "name": "h",
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
          "start": 549,
          "end": 553,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 550,
            "end": 553,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 552,
              "end": 553,
              "typeName": {
                "type": "Identifier",
                "start": 552,
                "end": 553,
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
        "start": 555,
        "end": 558,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 535,
        "end": 548,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 536,
            "end": 547,
            "name": {
              "type": "Identifier",
              "start": 536,
              "end": 537,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 546,
              "end": 547,
              "typeName": {
                "type": "Identifier",
                "start": 546,
                "end": 547,
                "name": "I",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 559,
      "end": 594,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 569,
        "name": "i",
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
          "start": 585,
          "end": 589,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 586,
            "end": 589,
            "typeAnnotation": {
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 591,
        "end": 594,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 569,
        "end": 584,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 570,
            "end": 583,
            "name": {
              "type": "Identifier",
              "start": 570,
              "end": 571,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 580,
              "end": 583,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 580,
                "end": 583,
                "left": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 581,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 583,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 596,
      "end": 612,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 600,
          "end": 611,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 601,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 604,
            "end": 611,
            "expression": {
              "type": "Literal",
              "start": 607,
              "end": 611,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 605,
              "end": 606,
              "typeName": {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "name": "C",
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
      "start": 613,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 621,
            "end": 630,
            "expression": {
              "type": "Literal",
              "start": 626,
              "end": 630,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 622,
              "end": 625,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 622,
                "end": 625,
                "left": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 623,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 625,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
