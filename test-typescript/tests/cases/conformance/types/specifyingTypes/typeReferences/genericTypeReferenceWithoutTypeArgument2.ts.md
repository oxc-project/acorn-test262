genericTypeReferenceWithoutTypeArgument2.ts
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
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 105,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 132,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 150,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
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
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 172,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "I",
                              "optional": false
                            }
                          }
                        }
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
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
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
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 194,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "I",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
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
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 205,
            "end": 238,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 225,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
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
                              "decorators": [],
                              "name": "I",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 227,
                  "end": 236,
                  "argument": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 206,
                "end": 210,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 240,
      "end": 283,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
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
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 272,
            "end": 281,
            "argument": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 250,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 251,
          "end": 255,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "I",
            "optional": false
          }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 293,
            "end": 336,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 323,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
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
                              "decorators": [],
                              "name": "I",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 325,
                  "end": 334,
                  "argument": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 304,
                "end": 308,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                }
              }
            ],
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
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 338,
      "end": 359,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 359,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 345,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 354,
        "end": 355,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 361,
      "end": 385,
      "body": {
        "type": "TSInterfaceBody",
        "start": 383,
        "end": 385,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 381,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 372,
        "decorators": [],
        "name": "U",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 387,
      "end": 436,
      "body": {
        "type": "TSModuleBlock",
        "start": 396,
        "end": 436,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 402,
            "end": 434,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 409,
              "end": 434,
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
                    "key": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 429,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 420,
                "end": 423,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 421,
                    "end": 422,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 422,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 395,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 438,
      "end": 462,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 459,
        "end": 462,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 446,
        "decorators": [],
        "name": "D2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 455,
        "end": 458,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 455,
          "end": 456,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 457,
          "end": 458,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 463,
      "end": 494,
      "body": {
        "type": "TSInterfaceBody",
        "start": 491,
        "end": 494,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 475,
        "decorators": [],
        "name": "D3",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 475,
        "end": 490,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 476,
            "end": 489,
            "const": false,
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
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 489,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 476,
              "end": 477,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 495,
      "end": 523,
      "body": {
        "type": "TSInterfaceBody",
        "start": 520,
        "end": 523,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 516,
          "end": 519,
          "expression": {
            "type": "MemberExpression",
            "start": 516,
            "end": 519,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 505,
        "end": 507,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 525,
      "end": 558,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 555,
        "end": 558,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 535,
        "decorators": [],
        "name": "h",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 549,
          "end": 553,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 535,
        "end": 548,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 536,
            "end": 547,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 546,
              "end": 547,
              "typeName": {
                "type": "Identifier",
                "start": 546,
                "end": 547,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 536,
              "end": 537,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 559,
      "end": 594,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 591,
        "end": 594,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 569,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 585,
          "end": 589,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 569,
        "end": 584,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 570,
            "end": 583,
            "const": false,
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
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 583,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 570,
              "end": 571,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 601,
            "decorators": [],
            "name": "j",
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
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 605,
              "end": 606,
              "typeName": {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "decorators": [],
            "name": "k",
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
              "raw": "null",
              "value": null
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
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 625,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
