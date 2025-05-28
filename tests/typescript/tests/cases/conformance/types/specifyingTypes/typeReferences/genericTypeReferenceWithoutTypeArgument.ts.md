__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 619,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 118,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 118,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 116,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 128,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 128,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 131,
      "end": 147,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 146,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 138,
                "end": 146,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 140,
                    "end": 144,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 141,
                      "end": 144,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 143,
                        "end": 144,
                        "typeName": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 148,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 168,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 155,
                "end": 168,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 157,
                    "end": 166,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 158,
                        "end": 162,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 159,
                          "end": 162,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 161,
                            "end": 162,
                            "typeName": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 162,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
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
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
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
      "start": 170,
      "end": 191,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 190,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 177,
                "end": 190,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 179,
                    "end": 188,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 180,
                        "end": 184,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 184,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 183,
                            "end": 184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 184,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
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
      "start": 193,
      "end": 234,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 201,
            "end": 234,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 203,
                  "end": 206,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 205,
                    "end": 206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "decorators": [],
                      "name": "C",
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
              "start": 211,
              "end": 234,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 213,
                  "end": 222,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 217,
                      "end": 221,
                      "id": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 221,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 218,
                          "end": 221,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 220,
                            "end": 221,
                            "typeName": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 221,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
                  "type": "ReturnStatement",
                  "start": 223,
                  "end": 232,
                  "argument": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 231,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 251,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 251,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 279,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 258,
            "end": 267,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 262,
                "end": 266,
                "id": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 266,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "type": "ReturnStatement",
            "start": 268,
            "end": 277,
            "argument": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 289,
            "end": 332,
            "id": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 300,
                "end": 304,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 301,
                  "end": 304,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 303,
                    "end": 304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 309,
              "end": 332,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 311,
                  "end": 320,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 315,
                      "end": 319,
                      "id": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 319,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 316,
                          "end": 319,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 318,
                            "end": 319,
                            "typeName": {
                              "type": "Identifier",
                              "start": 318,
                              "end": 319,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
                  "type": "ReturnStatement",
                  "start": 321,
                  "end": 330,
                  "argument": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 329,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 334,
      "end": 355,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 341,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 350,
        "end": 351,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 352,
        "end": 355,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 357,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 368,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 377,
          "end": 378,
          "expression": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 379,
        "end": 381,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 383,
      "end": 428,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 391,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 392,
        "end": 428,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 398,
            "end": 426,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 405,
              "end": 426,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 412,
                "end": 415,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 413,
                    "end": 414,
                    "name": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
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
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 416,
                "end": 426,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 418,
                    "end": 424,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 421,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 421,
                      "end": 424,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 423,
                        "end": 424,
                        "typeName": {
                          "type": "Identifier",
                          "start": 423,
                          "end": 424,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 430,
      "end": 454,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 438,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 447,
        "end": 450,
        "object": {
          "type": "Identifier",
          "start": 447,
          "end": 448,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 449,
          "end": 450,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 451,
        "end": 454,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 455,
      "end": 482,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 463,
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 463,
        "end": 478,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 464,
            "end": 477,
            "name": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 474,
              "end": 477,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 474,
                "end": 477,
                "left": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 475,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 479,
        "end": 482,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 483,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 495,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 504,
          "end": 507,
          "expression": {
            "type": "MemberExpression",
            "start": 504,
            "end": 507,
            "object": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 508,
        "end": 511,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 513,
      "end": 546,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 523,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 523,
        "end": 536,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 524,
            "end": 535,
            "name": {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 534,
              "end": 535,
              "typeName": {
                "type": "Identifier",
                "start": 534,
                "end": 535,
                "decorators": [],
                "name": "C",
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
      "params": [
        {
          "type": "Identifier",
          "start": 537,
          "end": 541,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 538,
            "end": 541,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 540,
              "end": 541,
              "typeName": {
                "type": "Identifier",
                "start": 540,
                "end": 541,
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
        "start": 543,
        "end": 546,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 547,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 557,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 557,
        "end": 572,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 558,
            "end": 571,
            "name": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 568,
              "end": 571,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 568,
                "end": 571,
                "left": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 571,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 573,
          "end": 577,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 577,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 576,
              "end": 577,
              "typeName": {
                "type": "Identifier",
                "start": 576,
                "end": 577,
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
        "start": 579,
        "end": 582,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 600,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 592,
            "end": 599,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 593,
              "end": 594,
              "typeName": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Literal",
              "start": 595,
              "end": 599,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 601,
      "end": 619,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 605,
          "end": 618,
          "id": {
            "type": "Identifier",
            "start": 605,
            "end": 606,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 609,
            "end": 618,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 610,
              "end": 613,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 610,
                "end": 613,
                "left": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 611,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 613,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Literal",
              "start": 614,
              "end": 618,
              "value": null,
              "raw": "null"
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
