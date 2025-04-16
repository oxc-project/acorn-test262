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
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 118,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 128,
            "name": "c",
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
                  "name": "C",
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
      "start": 131,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 146,
            "name": "a",
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "C",
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
      "start": 148,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 168,
            "name": "b",
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
                        "name": "x",
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
                              "name": "C",
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
                          "name": "C",
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
      "start": 170,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 190,
            "name": "d",
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
                        "name": "x",
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
                              "name": "C",
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
                          "name": "C",
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
      "start": 193,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 201,
            "end": 234,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "name": "x",
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
                      "name": "C",
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
              "start": 211,
              "end": 234,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 213,
                  "end": 222,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 217,
                      "end": 221,
                      "id": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 221,
                        "name": "y",
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
                              "name": "C",
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
                  "start": 223,
                  "end": 232,
                  "argument": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 231,
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
      "start": 236,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
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
          "start": 247,
          "end": 251,
          "name": "x",
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
                "name": "C",
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
        "start": 256,
        "end": 279,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 258,
            "end": 267,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 262,
                "end": 266,
                "id": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "name": "y",
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
                        "name": "C",
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
            "start": 268,
            "end": 277,
            "argument": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
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
            "name": "C",
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
      "start": 281,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 289,
            "end": 332,
            "id": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
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
                "start": 300,
                "end": 304,
                "name": "x",
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
                      "name": "C",
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
              "start": 309,
              "end": 332,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 311,
                  "end": 320,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 315,
                      "end": 319,
                      "id": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 319,
                        "name": "y",
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
                              "name": "C",
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
                  "start": 321,
                  "end": 330,
                  "argument": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 329,
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
                  "name": "C",
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
      "start": 334,
      "end": 355,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 341,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 350,
        "end": 351,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 352,
        "end": 355,
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
      "start": 357,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 368,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 377,
          "end": 378,
          "expression": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "name": "C",
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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 416,
                "end": 426,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 418,
                    "end": 424,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 421,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 438,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 447,
        "end": 450,
        "object": {
          "type": "Identifier",
          "start": 447,
          "end": 448,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 449,
          "end": 450,
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 451,
        "end": 454,
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
      "type": "ClassDeclaration",
      "start": 455,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 463,
        "name": "D3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 479,
        "end": 482,
        "body": []
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 483,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 495,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "name": "E",
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
          "start": 537,
          "end": 541,
          "name": "x",
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
        "start": 543,
        "end": 546,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 534,
              "end": 535,
              "typeName": {
                "type": "Identifier",
                "start": 534,
                "end": 535,
                "name": "C",
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
      "start": 547,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 557,
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
          "start": 573,
          "end": 577,
          "name": "x",
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
        "start": 579,
        "end": 582,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 571,
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
      "start": 584,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 592,
            "end": 599,
            "expression": {
              "type": "Literal",
              "start": 595,
              "end": 599,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 593,
              "end": 594,
              "typeName": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
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
      "start": 601,
      "end": 619,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 605,
          "end": 618,
          "id": {
            "type": "Identifier",
            "start": 605,
            "end": 606,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 609,
            "end": 618,
            "expression": {
              "type": "Literal",
              "start": 614,
              "end": 618,
              "value": null,
              "raw": "null"
            },
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
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 613,
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
