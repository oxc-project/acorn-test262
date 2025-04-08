__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3143,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "a",
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
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": "public"
          }
        ]
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
      "start": 38,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 51,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "b",
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
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 118,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 100,
                "end": 118,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 102,
                    "end": 116,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 104,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 104,
                      "end": 107,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 105,
                          "end": 106,
                          "name": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 108,
                        "end": 112,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 109,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 111,
                            "end": 112,
                            "typeName": {
                              "type": "Identifier",
                              "start": 111,
                              "end": 112,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 113,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 115,
                        "end": 116,
                        "typeName": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 120,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 153,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 128,
                "end": 153,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 130,
                    "end": 151,
                    "key": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 132,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 133,
                        "end": 142,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 134,
                          "end": 142,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 136,
                            "end": 142
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 145,
                        "end": 151
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 156,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 182,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 164,
                "end": 182,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 166,
                    "end": 180,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 168,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 168,
                      "end": 171,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 169,
                          "end": 170,
                          "name": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 170,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 172,
                        "end": 176,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 173,
                          "end": 176,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 175,
                            "end": 176,
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 177,
                      "end": 180,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 179,
                        "end": 180,
                        "typeName": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 180,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 184,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 228,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 192,
                "end": 228,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 194,
                    "end": 226,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 196,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 197,
                        "end": 206,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 198,
                          "end": 206,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 200,
                            "end": 206
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 208,
                        "end": 217,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 209,
                          "end": 217,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 211,
                            "end": 217
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 220,
                        "end": 226
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 231,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 266,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 239,
                "end": 266,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 241,
                    "end": 264,
                    "key": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 243,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 243,
                      "end": 249,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 244,
                          "end": 245,
                          "name": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 245,
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
                          "start": 247,
                          "end": 248,
                          "name": {
                            "type": "Identifier",
                            "start": 247,
                            "end": 248,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 250,
                        "end": 254,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 251,
                          "end": 254,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 253,
                            "end": 254,
                            "typeName": {
                              "type": "Identifier",
                              "start": 253,
                              "end": 254,
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
                        "start": 256,
                        "end": 260,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 257,
                          "end": 260,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 259,
                            "end": 260,
                            "typeName": {
                              "type": "Identifier",
                              "start": 259,
                              "end": 260,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 261,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 263,
                        "end": 264,
                        "typeName": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 268,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 312,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 312,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 276,
                "end": 312,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 278,
                    "end": 310,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 280,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 281,
                        "end": 290,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 282,
                          "end": 290,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 284,
                            "end": 290
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 292,
                        "end": 301,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 293,
                          "end": 301,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 295,
                            "end": 301
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 302,
                      "end": 310,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 315,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 342,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 323,
                "end": 342,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 325,
                    "end": 340,
                    "key": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 327,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 327,
                      "end": 330,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 328,
                          "end": 329,
                          "name": {
                            "type": "Identifier",
                            "start": 328,
                            "end": 329,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 331,
                        "end": 336,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 333,
                          "end": 336,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 335,
                            "end": 336,
                            "typeName": {
                              "type": "Identifier",
                              "start": 335,
                              "end": 336,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 337,
                      "end": 340,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 339,
                        "end": 340,
                        "typeName": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 340,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 344,
      "end": 379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 378,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 378,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 352,
                "end": 378,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 354,
                    "end": 376,
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 356,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 357,
                        "end": 367,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 359,
                          "end": 367,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 361,
                            "end": 367
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 368,
                      "end": 376,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 370,
                        "end": 376
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 381,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 412,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 412,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 389,
                "end": 412,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 391,
                    "end": 410,
                    "key": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 393,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 393,
                      "end": 396,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 394,
                          "end": 395,
                          "name": {
                            "type": "Identifier",
                            "start": 394,
                            "end": 395,
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
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 397,
                        "end": 406,
                        "argument": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 401,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 406,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 403,
                            "end": 406,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 403,
                              "end": 404,
                              "typeName": {
                                "type": "Identifier",
                                "start": 403,
                                "end": 404,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 407,
                      "end": 410,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 409,
                        "end": 410,
                        "typeName": {
                          "type": "Identifier",
                          "start": 409,
                          "end": 410,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 414,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 418,
            "end": 452,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 420,
              "end": 452,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 422,
                "end": 452,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 424,
                    "end": 450,
                    "key": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 426,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 427,
                        "end": 441,
                        "argument": {
                          "type": "Identifier",
                          "start": 430,
                          "end": 431,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 431,
                          "end": 441,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 433,
                            "end": 441,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 433,
                              "end": 439
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 442,
                      "end": 450,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 444,
                        "end": 450
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 455,
      "end": 488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 487,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 487,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 461,
              "end": 487,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 463,
                "end": 487,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 465,
                    "end": 485,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 467,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 467,
                      "end": 470,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 468,
                          "end": 469,
                          "name": {
                            "type": "Identifier",
                            "start": 468,
                            "end": 469,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 471,
                        "end": 475,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 472,
                          "end": 475,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 474,
                            "end": 475,
                            "typeName": {
                              "type": "Identifier",
                              "start": 474,
                              "end": 475,
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
                        "start": 477,
                        "end": 481,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 478,
                          "end": 481,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 480,
                            "end": 481,
                            "typeName": {
                              "type": "Identifier",
                              "start": 480,
                              "end": 481,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 482,
                      "end": 485,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 484,
                        "end": 485,
                        "typeName": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 485,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 489,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 529,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 529,
            "name": "b6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 529,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 497,
                "end": 529,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 499,
                    "end": 527,
                    "key": {
                      "type": "Identifier",
                      "start": 499,
                      "end": 501,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 502,
                        "end": 511,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 503,
                          "end": 511,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 505,
                            "end": 511
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 513,
                        "end": 522,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 514,
                          "end": 522,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 516,
                            "end": 522
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 523,
                      "end": 527,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 525,
                        "end": 527,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 581,
      "end": 623,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 622,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 622,
            "name": "b7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 622,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 589,
                "end": 622,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 591,
                    "end": 620,
                    "key": {
                      "type": "Identifier",
                      "start": 591,
                      "end": 593,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 594,
                        "end": 601,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 595,
                          "end": 601,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 597,
                            "end": 601,
                            "typeName": {
                              "type": "Identifier",
                              "start": 597,
                              "end": 601,
                              "name": "Base",
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
                        "start": 603,
                        "end": 613,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 604,
                          "end": 613,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 606,
                            "end": 613,
                            "typeName": {
                              "type": "Identifier",
                              "start": 606,
                              "end": 613,
                              "name": "Derived",
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
                      "start": 614,
                      "end": 620,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 616,
                        "end": 620,
                        "typeName": {
                          "type": "Identifier",
                          "start": 616,
                          "end": 620,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 639,
      "end": 658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 657,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 647,
            "name": "r1a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 650,
            "end": 657,
            "left": {
              "type": "Identifier",
              "start": 650,
              "end": 652,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 655,
              "end": 657,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 659,
      "end": 678,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 663,
          "end": 677,
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 667,
            "name": "r1a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 670,
            "end": 677,
            "left": {
              "type": "Identifier",
              "start": 670,
              "end": 672,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 675,
              "end": 677,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 679,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 683,
          "end": 697,
          "id": {
            "type": "Identifier",
            "start": 683,
            "end": 687,
            "name": "r1a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 690,
            "end": 697,
            "left": {
              "type": "Identifier",
              "start": 690,
              "end": 692,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 695,
              "end": 697,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 699,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 703,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 703,
            "end": 707,
            "name": "r1a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 710,
            "end": 717,
            "left": {
              "type": "Identifier",
              "start": 710,
              "end": 712,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 715,
              "end": 717,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 719,
      "end": 738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 723,
            "end": 727,
            "name": "r1a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 730,
            "end": 737,
            "left": {
              "type": "Identifier",
              "start": 730,
              "end": 732,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 735,
              "end": 737,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 739,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 743,
          "end": 757,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 747,
            "name": "r1a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 750,
            "end": 757,
            "left": {
              "type": "Identifier",
              "start": 750,
              "end": 752,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 755,
              "end": 757,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 782,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 800,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 790,
            "name": "r1b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 793,
            "end": 800,
            "left": {
              "type": "Identifier",
              "start": 793,
              "end": 795,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 798,
              "end": 800,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 802,
      "end": 821,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 806,
          "end": 820,
          "id": {
            "type": "Identifier",
            "start": 806,
            "end": 810,
            "name": "r1b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 813,
            "end": 820,
            "left": {
              "type": "Identifier",
              "start": 813,
              "end": 815,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 818,
              "end": 820,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 822,
      "end": 841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 826,
          "end": 840,
          "id": {
            "type": "Identifier",
            "start": 826,
            "end": 830,
            "name": "r1b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 833,
            "end": 840,
            "left": {
              "type": "Identifier",
              "start": 833,
              "end": 835,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 838,
              "end": 840,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 842,
      "end": 861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 846,
          "end": 860,
          "id": {
            "type": "Identifier",
            "start": 846,
            "end": 850,
            "name": "r1b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 853,
            "end": 860,
            "left": {
              "type": "Identifier",
              "start": 853,
              "end": 855,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 858,
              "end": 860,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 862,
      "end": 881,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 866,
          "end": 880,
          "id": {
            "type": "Identifier",
            "start": 866,
            "end": 870,
            "name": "r1b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 873,
            "end": 880,
            "left": {
              "type": "Identifier",
              "start": 873,
              "end": 875,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 878,
              "end": 880,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 882,
      "end": 901,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 886,
          "end": 900,
          "id": {
            "type": "Identifier",
            "start": 886,
            "end": 890,
            "name": "r1b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 893,
            "end": 900,
            "left": {
              "type": "Identifier",
              "start": 893,
              "end": 895,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 898,
              "end": 900,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 939,
      "end": 958,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 943,
          "end": 957,
          "id": {
            "type": "Identifier",
            "start": 943,
            "end": 947,
            "name": "r2a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 950,
            "end": 957,
            "left": {
              "type": "Identifier",
              "start": 950,
              "end": 952,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 955,
              "end": 957,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 959,
      "end": 978,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 977,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 967,
            "name": "r2a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 970,
            "end": 977,
            "left": {
              "type": "Identifier",
              "start": 970,
              "end": 972,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 975,
              "end": 977,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 979,
      "end": 998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 983,
          "end": 997,
          "id": {
            "type": "Identifier",
            "start": 983,
            "end": 987,
            "name": "r2a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 990,
            "end": 997,
            "left": {
              "type": "Identifier",
              "start": 990,
              "end": 992,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 995,
              "end": 997,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 999,
      "end": 1018,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1003,
          "end": 1017,
          "id": {
            "type": "Identifier",
            "start": 1003,
            "end": 1007,
            "name": "r2a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1010,
            "end": 1017,
            "left": {
              "type": "Identifier",
              "start": 1010,
              "end": 1012,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1015,
              "end": 1017,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1019,
      "end": 1038,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1037,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1027,
            "name": "r2a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1030,
            "end": 1037,
            "left": {
              "type": "Identifier",
              "start": 1030,
              "end": 1032,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1035,
              "end": 1037,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1039,
      "end": 1058,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1043,
          "end": 1057,
          "id": {
            "type": "Identifier",
            "start": 1043,
            "end": 1047,
            "name": "r2a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1050,
            "end": 1057,
            "left": {
              "type": "Identifier",
              "start": 1050,
              "end": 1052,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1055,
              "end": 1057,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1082,
      "end": 1101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1086,
          "end": 1100,
          "id": {
            "type": "Identifier",
            "start": 1086,
            "end": 1090,
            "name": "r2b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1093,
            "end": 1100,
            "left": {
              "type": "Identifier",
              "start": 1093,
              "end": 1095,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1098,
              "end": 1100,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1102,
      "end": 1121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1106,
          "end": 1120,
          "id": {
            "type": "Identifier",
            "start": 1106,
            "end": 1110,
            "name": "r2b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1113,
            "end": 1120,
            "left": {
              "type": "Identifier",
              "start": 1113,
              "end": 1115,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1118,
              "end": 1120,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1122,
      "end": 1141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1126,
          "end": 1140,
          "id": {
            "type": "Identifier",
            "start": 1126,
            "end": 1130,
            "name": "r2b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1133,
            "end": 1140,
            "left": {
              "type": "Identifier",
              "start": 1133,
              "end": 1135,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1138,
              "end": 1140,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1142,
      "end": 1161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1146,
          "end": 1160,
          "id": {
            "type": "Identifier",
            "start": 1146,
            "end": 1150,
            "name": "r2b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1153,
            "end": 1160,
            "left": {
              "type": "Identifier",
              "start": 1153,
              "end": 1155,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1158,
              "end": 1160,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1162,
      "end": 1181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1166,
          "end": 1180,
          "id": {
            "type": "Identifier",
            "start": 1166,
            "end": 1170,
            "name": "r2b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1173,
            "end": 1180,
            "left": {
              "type": "Identifier",
              "start": 1173,
              "end": 1175,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1178,
              "end": 1180,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1182,
      "end": 1201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1186,
          "end": 1200,
          "id": {
            "type": "Identifier",
            "start": 1186,
            "end": 1190,
            "name": "r2b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1193,
            "end": 1200,
            "left": {
              "type": "Identifier",
              "start": 1193,
              "end": 1195,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1198,
              "end": 1200,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1240,
      "end": 1260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1244,
          "end": 1259,
          "id": {
            "type": "Identifier",
            "start": 1244,
            "end": 1248,
            "name": "r3a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1251,
            "end": 1259,
            "left": {
              "type": "Identifier",
              "start": 1251,
              "end": 1253,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1257,
              "end": 1259,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1261,
      "end": 1281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1265,
          "end": 1280,
          "id": {
            "type": "Identifier",
            "start": 1265,
            "end": 1269,
            "name": "r3a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1272,
            "end": 1280,
            "left": {
              "type": "Identifier",
              "start": 1272,
              "end": 1274,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1278,
              "end": 1280,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1282,
      "end": 1302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1286,
          "end": 1301,
          "id": {
            "type": "Identifier",
            "start": 1286,
            "end": 1290,
            "name": "r3a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1293,
            "end": 1301,
            "left": {
              "type": "Identifier",
              "start": 1293,
              "end": 1295,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1299,
              "end": 1301,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1303,
      "end": 1323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1307,
          "end": 1322,
          "id": {
            "type": "Identifier",
            "start": 1307,
            "end": 1311,
            "name": "r3a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1314,
            "end": 1322,
            "left": {
              "type": "Identifier",
              "start": 1314,
              "end": 1316,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1320,
              "end": 1322,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1324,
      "end": 1344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1328,
          "end": 1343,
          "id": {
            "type": "Identifier",
            "start": 1328,
            "end": 1332,
            "name": "r3a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1335,
            "end": 1343,
            "left": {
              "type": "Identifier",
              "start": 1335,
              "end": 1337,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1341,
              "end": 1343,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1345,
      "end": 1365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1349,
          "end": 1364,
          "id": {
            "type": "Identifier",
            "start": 1349,
            "end": 1353,
            "name": "r3a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1356,
            "end": 1364,
            "left": {
              "type": "Identifier",
              "start": 1356,
              "end": 1358,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1362,
              "end": 1364,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1390,
      "end": 1410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1394,
          "end": 1409,
          "id": {
            "type": "Identifier",
            "start": 1394,
            "end": 1398,
            "name": "r3b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1401,
            "end": 1409,
            "left": {
              "type": "Identifier",
              "start": 1401,
              "end": 1403,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1407,
              "end": 1409,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1411,
      "end": 1431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1415,
          "end": 1430,
          "id": {
            "type": "Identifier",
            "start": 1415,
            "end": 1419,
            "name": "r3b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1422,
            "end": 1430,
            "left": {
              "type": "Identifier",
              "start": 1422,
              "end": 1424,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1428,
              "end": 1430,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1432,
      "end": 1452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1436,
          "end": 1451,
          "id": {
            "type": "Identifier",
            "start": 1436,
            "end": 1440,
            "name": "r3b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1443,
            "end": 1451,
            "left": {
              "type": "Identifier",
              "start": 1443,
              "end": 1445,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1449,
              "end": 1451,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1453,
      "end": 1473,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1457,
          "end": 1472,
          "id": {
            "type": "Identifier",
            "start": 1457,
            "end": 1461,
            "name": "r3b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1464,
            "end": 1472,
            "left": {
              "type": "Identifier",
              "start": 1464,
              "end": 1466,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1470,
              "end": 1472,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1474,
      "end": 1494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1478,
          "end": 1493,
          "id": {
            "type": "Identifier",
            "start": 1478,
            "end": 1482,
            "name": "r3b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1485,
            "end": 1493,
            "left": {
              "type": "Identifier",
              "start": 1485,
              "end": 1487,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1491,
              "end": 1493,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1495,
      "end": 1515,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1499,
          "end": 1514,
          "id": {
            "type": "Identifier",
            "start": 1499,
            "end": 1503,
            "name": "r3b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1506,
            "end": 1514,
            "left": {
              "type": "Identifier",
              "start": 1506,
              "end": 1508,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1512,
              "end": 1514,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1555,
      "end": 1575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1559,
          "end": 1574,
          "id": {
            "type": "Identifier",
            "start": 1559,
            "end": 1563,
            "name": "r4a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1566,
            "end": 1574,
            "left": {
              "type": "Identifier",
              "start": 1566,
              "end": 1568,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1572,
              "end": 1574,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1576,
      "end": 1596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1580,
          "end": 1595,
          "id": {
            "type": "Identifier",
            "start": 1580,
            "end": 1584,
            "name": "r4a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1587,
            "end": 1595,
            "left": {
              "type": "Identifier",
              "start": 1587,
              "end": 1589,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1593,
              "end": 1595,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1597,
      "end": 1617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1601,
          "end": 1616,
          "id": {
            "type": "Identifier",
            "start": 1601,
            "end": 1605,
            "name": "r4a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1608,
            "end": 1616,
            "left": {
              "type": "Identifier",
              "start": 1608,
              "end": 1610,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1614,
              "end": 1616,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1618,
      "end": 1638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1622,
          "end": 1637,
          "id": {
            "type": "Identifier",
            "start": 1622,
            "end": 1626,
            "name": "r4a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1629,
            "end": 1637,
            "left": {
              "type": "Identifier",
              "start": 1629,
              "end": 1631,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1635,
              "end": 1637,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1639,
      "end": 1659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1643,
          "end": 1658,
          "id": {
            "type": "Identifier",
            "start": 1643,
            "end": 1647,
            "name": "r4a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1650,
            "end": 1658,
            "left": {
              "type": "Identifier",
              "start": 1650,
              "end": 1652,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1656,
              "end": 1658,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1660,
      "end": 1680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1664,
          "end": 1679,
          "id": {
            "type": "Identifier",
            "start": 1664,
            "end": 1668,
            "name": "r4a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1671,
            "end": 1679,
            "left": {
              "type": "Identifier",
              "start": 1671,
              "end": 1673,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1677,
              "end": 1679,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1705,
      "end": 1725,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1709,
          "end": 1724,
          "id": {
            "type": "Identifier",
            "start": 1709,
            "end": 1713,
            "name": "r4b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1716,
            "end": 1724,
            "left": {
              "type": "Identifier",
              "start": 1716,
              "end": 1718,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1722,
              "end": 1724,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1726,
      "end": 1746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1730,
          "end": 1745,
          "id": {
            "type": "Identifier",
            "start": 1730,
            "end": 1734,
            "name": "r4b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1737,
            "end": 1745,
            "left": {
              "type": "Identifier",
              "start": 1737,
              "end": 1739,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1743,
              "end": 1745,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1747,
      "end": 1767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1751,
          "end": 1766,
          "id": {
            "type": "Identifier",
            "start": 1751,
            "end": 1755,
            "name": "r4b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1758,
            "end": 1766,
            "left": {
              "type": "Identifier",
              "start": 1758,
              "end": 1760,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1764,
              "end": 1766,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1768,
      "end": 1788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1772,
          "end": 1787,
          "id": {
            "type": "Identifier",
            "start": 1772,
            "end": 1776,
            "name": "r4b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1779,
            "end": 1787,
            "left": {
              "type": "Identifier",
              "start": 1779,
              "end": 1781,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1785,
              "end": 1787,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1789,
      "end": 1809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1793,
          "end": 1808,
          "id": {
            "type": "Identifier",
            "start": 1793,
            "end": 1797,
            "name": "r4b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1800,
            "end": 1808,
            "left": {
              "type": "Identifier",
              "start": 1800,
              "end": 1802,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1806,
              "end": 1808,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1810,
      "end": 1830,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1814,
          "end": 1829,
          "id": {
            "type": "Identifier",
            "start": 1814,
            "end": 1818,
            "name": "r4b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1821,
            "end": 1829,
            "left": {
              "type": "Identifier",
              "start": 1821,
              "end": 1823,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1827,
              "end": 1829,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1870,
      "end": 1890,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1874,
          "end": 1889,
          "id": {
            "type": "Identifier",
            "start": 1874,
            "end": 1878,
            "name": "r5a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1881,
            "end": 1889,
            "left": {
              "type": "Identifier",
              "start": 1881,
              "end": 1883,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1887,
              "end": 1889,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1891,
      "end": 1911,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1895,
          "end": 1910,
          "id": {
            "type": "Identifier",
            "start": 1895,
            "end": 1899,
            "name": "r5a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1902,
            "end": 1910,
            "left": {
              "type": "Identifier",
              "start": 1902,
              "end": 1904,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1908,
              "end": 1910,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1912,
      "end": 1932,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1916,
          "end": 1931,
          "id": {
            "type": "Identifier",
            "start": 1916,
            "end": 1920,
            "name": "r5a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1923,
            "end": 1931,
            "left": {
              "type": "Identifier",
              "start": 1923,
              "end": 1925,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1929,
              "end": 1931,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1933,
      "end": 1953,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1937,
          "end": 1952,
          "id": {
            "type": "Identifier",
            "start": 1937,
            "end": 1941,
            "name": "r5a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1944,
            "end": 1952,
            "left": {
              "type": "Identifier",
              "start": 1944,
              "end": 1946,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1950,
              "end": 1952,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1954,
      "end": 1974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1958,
          "end": 1973,
          "id": {
            "type": "Identifier",
            "start": 1958,
            "end": 1962,
            "name": "r5a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1965,
            "end": 1973,
            "left": {
              "type": "Identifier",
              "start": 1965,
              "end": 1967,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1971,
              "end": 1973,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 1975,
      "end": 1995,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1979,
          "end": 1994,
          "id": {
            "type": "Identifier",
            "start": 1979,
            "end": 1983,
            "name": "r5a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1986,
            "end": 1994,
            "left": {
              "type": "Identifier",
              "start": 1986,
              "end": 1988,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1992,
              "end": 1994,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2020,
      "end": 2040,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2024,
          "end": 2039,
          "id": {
            "type": "Identifier",
            "start": 2024,
            "end": 2028,
            "name": "r5b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2031,
            "end": 2039,
            "left": {
              "type": "Identifier",
              "start": 2031,
              "end": 2033,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2037,
              "end": 2039,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2041,
      "end": 2061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2045,
          "end": 2060,
          "id": {
            "type": "Identifier",
            "start": 2045,
            "end": 2049,
            "name": "r5b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2052,
            "end": 2060,
            "left": {
              "type": "Identifier",
              "start": 2052,
              "end": 2054,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2058,
              "end": 2060,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2062,
      "end": 2082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2066,
          "end": 2081,
          "id": {
            "type": "Identifier",
            "start": 2066,
            "end": 2070,
            "name": "r5b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2073,
            "end": 2081,
            "left": {
              "type": "Identifier",
              "start": 2073,
              "end": 2075,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2079,
              "end": 2081,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2083,
      "end": 2103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2087,
          "end": 2102,
          "id": {
            "type": "Identifier",
            "start": 2087,
            "end": 2091,
            "name": "r5b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2094,
            "end": 2102,
            "left": {
              "type": "Identifier",
              "start": 2094,
              "end": 2096,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2100,
              "end": 2102,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2104,
      "end": 2124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2108,
          "end": 2123,
          "id": {
            "type": "Identifier",
            "start": 2108,
            "end": 2112,
            "name": "r5b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2115,
            "end": 2123,
            "left": {
              "type": "Identifier",
              "start": 2115,
              "end": 2117,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2121,
              "end": 2123,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2125,
      "end": 2145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2129,
          "end": 2144,
          "id": {
            "type": "Identifier",
            "start": 2129,
            "end": 2133,
            "name": "r5b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2136,
            "end": 2144,
            "left": {
              "type": "Identifier",
              "start": 2136,
              "end": 2138,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2142,
              "end": 2144,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2185,
      "end": 2205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2189,
          "end": 2204,
          "id": {
            "type": "Identifier",
            "start": 2189,
            "end": 2193,
            "name": "r6a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2196,
            "end": 2204,
            "left": {
              "type": "Identifier",
              "start": 2196,
              "end": 2198,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2202,
              "end": 2204,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2206,
      "end": 2226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2210,
          "end": 2225,
          "id": {
            "type": "Identifier",
            "start": 2210,
            "end": 2214,
            "name": "r6a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2217,
            "end": 2225,
            "left": {
              "type": "Identifier",
              "start": 2217,
              "end": 2219,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2223,
              "end": 2225,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2227,
      "end": 2247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2231,
          "end": 2246,
          "id": {
            "type": "Identifier",
            "start": 2231,
            "end": 2235,
            "name": "r6a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2238,
            "end": 2246,
            "left": {
              "type": "Identifier",
              "start": 2238,
              "end": 2240,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2244,
              "end": 2246,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2248,
      "end": 2268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2252,
          "end": 2267,
          "id": {
            "type": "Identifier",
            "start": 2252,
            "end": 2256,
            "name": "r6a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2259,
            "end": 2267,
            "left": {
              "type": "Identifier",
              "start": 2259,
              "end": 2261,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2265,
              "end": 2267,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2269,
      "end": 2289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2273,
          "end": 2288,
          "id": {
            "type": "Identifier",
            "start": 2273,
            "end": 2277,
            "name": "r6a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2280,
            "end": 2288,
            "left": {
              "type": "Identifier",
              "start": 2280,
              "end": 2282,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2286,
              "end": 2288,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2290,
      "end": 2310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2294,
          "end": 2309,
          "id": {
            "type": "Identifier",
            "start": 2294,
            "end": 2298,
            "name": "r6a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2301,
            "end": 2309,
            "left": {
              "type": "Identifier",
              "start": 2301,
              "end": 2303,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2307,
              "end": 2309,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2335,
      "end": 2355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2339,
          "end": 2354,
          "id": {
            "type": "Identifier",
            "start": 2339,
            "end": 2343,
            "name": "r6b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2346,
            "end": 2354,
            "left": {
              "type": "Identifier",
              "start": 2346,
              "end": 2348,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2352,
              "end": 2354,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2356,
      "end": 2376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2360,
          "end": 2375,
          "id": {
            "type": "Identifier",
            "start": 2360,
            "end": 2364,
            "name": "r6b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2367,
            "end": 2375,
            "left": {
              "type": "Identifier",
              "start": 2367,
              "end": 2369,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2373,
              "end": 2375,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2377,
      "end": 2397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2381,
          "end": 2396,
          "id": {
            "type": "Identifier",
            "start": 2381,
            "end": 2385,
            "name": "r6b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2388,
            "end": 2396,
            "left": {
              "type": "Identifier",
              "start": 2388,
              "end": 2390,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2394,
              "end": 2396,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2398,
      "end": 2418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2402,
          "end": 2417,
          "id": {
            "type": "Identifier",
            "start": 2402,
            "end": 2406,
            "name": "r6b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2409,
            "end": 2417,
            "left": {
              "type": "Identifier",
              "start": 2409,
              "end": 2411,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2415,
              "end": 2417,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2419,
      "end": 2439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2423,
          "end": 2438,
          "id": {
            "type": "Identifier",
            "start": 2423,
            "end": 2427,
            "name": "r6b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2430,
            "end": 2438,
            "left": {
              "type": "Identifier",
              "start": 2430,
              "end": 2432,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2436,
              "end": 2438,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2440,
      "end": 2460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2444,
          "end": 2459,
          "id": {
            "type": "Identifier",
            "start": 2444,
            "end": 2448,
            "name": "r6b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2451,
            "end": 2459,
            "left": {
              "type": "Identifier",
              "start": 2451,
              "end": 2453,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2457,
              "end": 2459,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2501,
      "end": 2522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2505,
          "end": 2521,
          "id": {
            "type": "Identifier",
            "start": 2505,
            "end": 2509,
            "name": "r7a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2512,
            "end": 2521,
            "left": {
              "type": "Identifier",
              "start": 2512,
              "end": 2514,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2519,
              "end": 2521,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2523,
      "end": 2544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2527,
          "end": 2543,
          "id": {
            "type": "Identifier",
            "start": 2527,
            "end": 2531,
            "name": "r7a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2534,
            "end": 2543,
            "left": {
              "type": "Identifier",
              "start": 2534,
              "end": 2536,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2541,
              "end": 2543,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2545,
      "end": 2566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2549,
          "end": 2565,
          "id": {
            "type": "Identifier",
            "start": 2549,
            "end": 2553,
            "name": "r7a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2556,
            "end": 2565,
            "left": {
              "type": "Identifier",
              "start": 2556,
              "end": 2558,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2563,
              "end": 2565,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2567,
      "end": 2588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2571,
          "end": 2587,
          "id": {
            "type": "Identifier",
            "start": 2571,
            "end": 2575,
            "name": "r7a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2578,
            "end": 2587,
            "left": {
              "type": "Identifier",
              "start": 2578,
              "end": 2580,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2585,
              "end": 2587,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2589,
      "end": 2610,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2593,
          "end": 2609,
          "id": {
            "type": "Identifier",
            "start": 2593,
            "end": 2597,
            "name": "r7a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2600,
            "end": 2609,
            "left": {
              "type": "Identifier",
              "start": 2600,
              "end": 2602,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2607,
              "end": 2609,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2611,
      "end": 2632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2615,
          "end": 2631,
          "id": {
            "type": "Identifier",
            "start": 2615,
            "end": 2619,
            "name": "r7a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2622,
            "end": 2631,
            "left": {
              "type": "Identifier",
              "start": 2622,
              "end": 2624,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2629,
              "end": 2631,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2658,
      "end": 2679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2662,
          "end": 2678,
          "id": {
            "type": "Identifier",
            "start": 2662,
            "end": 2666,
            "name": "r7b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2669,
            "end": 2678,
            "left": {
              "type": "Identifier",
              "start": 2669,
              "end": 2671,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2676,
              "end": 2678,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2680,
      "end": 2701,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2684,
          "end": 2700,
          "id": {
            "type": "Identifier",
            "start": 2684,
            "end": 2688,
            "name": "r7b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2691,
            "end": 2700,
            "left": {
              "type": "Identifier",
              "start": 2691,
              "end": 2693,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2698,
              "end": 2700,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2702,
      "end": 2723,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2706,
          "end": 2722,
          "id": {
            "type": "Identifier",
            "start": 2706,
            "end": 2710,
            "name": "r7b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2713,
            "end": 2722,
            "left": {
              "type": "Identifier",
              "start": 2713,
              "end": 2715,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2720,
              "end": 2722,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2724,
      "end": 2745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2728,
          "end": 2744,
          "id": {
            "type": "Identifier",
            "start": 2728,
            "end": 2732,
            "name": "r7b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2735,
            "end": 2744,
            "left": {
              "type": "Identifier",
              "start": 2735,
              "end": 2737,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2742,
              "end": 2744,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2746,
      "end": 2767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2750,
          "end": 2766,
          "id": {
            "type": "Identifier",
            "start": 2750,
            "end": 2754,
            "name": "r7b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2757,
            "end": 2766,
            "left": {
              "type": "Identifier",
              "start": 2757,
              "end": 2759,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2764,
              "end": 2766,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2768,
      "end": 2789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2772,
          "end": 2788,
          "id": {
            "type": "Identifier",
            "start": 2772,
            "end": 2776,
            "name": "r7b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2779,
            "end": 2788,
            "left": {
              "type": "Identifier",
              "start": 2779,
              "end": 2781,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2786,
              "end": 2788,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2831,
      "end": 2852,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2835,
          "end": 2851,
          "id": {
            "type": "Identifier",
            "start": 2835,
            "end": 2839,
            "name": "r8a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2842,
            "end": 2851,
            "left": {
              "type": "Identifier",
              "start": 2842,
              "end": 2844,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2849,
              "end": 2851,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2853,
      "end": 2874,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2857,
          "end": 2873,
          "id": {
            "type": "Identifier",
            "start": 2857,
            "end": 2861,
            "name": "r8a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2864,
            "end": 2873,
            "left": {
              "type": "Identifier",
              "start": 2864,
              "end": 2866,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2871,
              "end": 2873,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2875,
      "end": 2896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2879,
          "end": 2895,
          "id": {
            "type": "Identifier",
            "start": 2879,
            "end": 2883,
            "name": "r8a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2886,
            "end": 2895,
            "left": {
              "type": "Identifier",
              "start": 2886,
              "end": 2888,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2893,
              "end": 2895,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2897,
      "end": 2918,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2901,
          "end": 2917,
          "id": {
            "type": "Identifier",
            "start": 2901,
            "end": 2905,
            "name": "r8a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2908,
            "end": 2917,
            "left": {
              "type": "Identifier",
              "start": 2908,
              "end": 2910,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2915,
              "end": 2917,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2919,
      "end": 2940,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2923,
          "end": 2939,
          "id": {
            "type": "Identifier",
            "start": 2923,
            "end": 2927,
            "name": "r8a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2930,
            "end": 2939,
            "left": {
              "type": "Identifier",
              "start": 2930,
              "end": 2932,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2937,
              "end": 2939,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2941,
      "end": 2962,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2945,
          "end": 2961,
          "id": {
            "type": "Identifier",
            "start": 2945,
            "end": 2949,
            "name": "r8a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2952,
            "end": 2961,
            "left": {
              "type": "Identifier",
              "start": 2952,
              "end": 2954,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2959,
              "end": 2961,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 2988,
      "end": 3009,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2992,
          "end": 3008,
          "id": {
            "type": "Identifier",
            "start": 2992,
            "end": 2996,
            "name": "r8b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2999,
            "end": 3008,
            "left": {
              "type": "Identifier",
              "start": 2999,
              "end": 3001,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3006,
              "end": 3008,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 3010,
      "end": 3031,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3014,
          "end": 3030,
          "id": {
            "type": "Identifier",
            "start": 3014,
            "end": 3018,
            "name": "r8b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3021,
            "end": 3030,
            "left": {
              "type": "Identifier",
              "start": 3021,
              "end": 3023,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3028,
              "end": 3030,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 3032,
      "end": 3053,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3036,
          "end": 3052,
          "id": {
            "type": "Identifier",
            "start": 3036,
            "end": 3040,
            "name": "r8b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3043,
            "end": 3052,
            "left": {
              "type": "Identifier",
              "start": 3043,
              "end": 3045,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3050,
              "end": 3052,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 3054,
      "end": 3075,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3058,
          "end": 3074,
          "id": {
            "type": "Identifier",
            "start": 3058,
            "end": 3062,
            "name": "r8b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3065,
            "end": 3074,
            "left": {
              "type": "Identifier",
              "start": 3065,
              "end": 3067,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3072,
              "end": 3074,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 3076,
      "end": 3097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3080,
          "end": 3096,
          "id": {
            "type": "Identifier",
            "start": 3080,
            "end": 3084,
            "name": "r8b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3087,
            "end": 3096,
            "left": {
              "type": "Identifier",
              "start": 3087,
              "end": 3089,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3094,
              "end": 3096,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 3098,
      "end": 3119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3102,
          "end": 3118,
          "id": {
            "type": "Identifier",
            "start": 3102,
            "end": 3106,
            "name": "r8b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3109,
            "end": 3118,
            "left": {
              "type": "Identifier",
              "start": 3109,
              "end": 3111,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3116,
              "end": 3118,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
