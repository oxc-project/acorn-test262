__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 573,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 19,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 32,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
      "type": "ClassDeclaration",
      "start": 33,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 64,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 62,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 52,
              "name": "p1",
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
              "start": 52,
              "end": 61,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 54,
                "end": 61,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 61,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 42,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
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
      "start": 65,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 81,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 81,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 73,
                  "end": 81,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 74,
                      "end": 80
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 84,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 92,
        "name": "X2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 102,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 104,
              "name": "p2",
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
              "start": 104,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 106,
                "end": 127,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 108,
                    "end": 125,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 109,
                        "end": 120,
                        "name": "idx",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 120,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 121,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 123,
                        "end": 125,
                        "typeName": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 125,
                          "name": "X2",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 92,
        "end": 95,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 94,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
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
      "start": 131,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 149,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 149,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 141,
                  "name": "X2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 141,
                  "end": 149,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 142,
                      "end": 148
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 152,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "name": "X3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 164,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 170,
            "end": 178,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 172,
              "name": "p3",
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
              "start": 172,
              "end": 178,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 174,
                "end": 178,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 176,
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 176,
                    "name": "X3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 160,
        "end": 163,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 161,
            "end": 162,
            "name": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
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
      "start": 181,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 199,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 191,
                  "name": "X3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 191,
                  "end": 199,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 192,
                      "end": 198
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 202,
      "end": 231,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 210,
        "name": "X4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 231,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 220,
            "end": 229,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 222,
              "name": "p4",
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
              "start": 222,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 224,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 225,
                  "end": 229,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 226,
                      "end": 228,
                      "typeName": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 228,
                        "name": "X4",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 210,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 211,
            "end": 212,
            "name": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
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
      "start": 232,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 250,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 250,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 250,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 250,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "name": "X4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 242,
                  "end": 250,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 243,
                      "end": 249
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 253,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 261,
        "name": "X5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 265,
        "end": 279,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 271,
            "end": 277,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 273,
              "name": "p5",
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
              "start": 273,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 277,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 277,
                  "name": "X5",
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
        "start": 261,
        "end": 264,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 262,
            "end": 263,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
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
      "start": 280,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 298,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 288,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 290,
                  "name": "X5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 290,
                  "end": 298,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 291,
                      "end": 297
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 301,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 309,
        "name": "X6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 313,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 319,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 321,
              "name": "p6",
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
              "start": 321,
              "end": 330,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 323,
                "end": 330,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 326,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 329,
                    "end": 330,
                    "typeName": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 330,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
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
      "start": 334,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 352,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 352,
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 344,
                  "name": "X6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 344,
                  "end": 352,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 345,
                      "end": 351
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 355,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "name": "X7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 367,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 397,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 375,
              "name": "p7",
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
              "start": 375,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 377,
                "end": 397,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 379,
                    "end": 395,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 380,
                        "end": 391,
                        "name": "idx",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 383,
                          "end": 391,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 385,
                            "end": 391
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 392,
                      "end": 395,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 394,
                        "end": 395,
                        "typeName": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 395,
                          "name": "Y",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 363,
        "end": 366,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 364,
            "end": 365,
            "name": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
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
      "start": 401,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 419,
            "name": "a7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 419,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 409,
                "end": 419,
                "typeName": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 411,
                  "name": "X7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 411,
                  "end": 419,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 412,
                      "end": 418
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 422,
      "end": 449,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 430,
        "name": "X8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 434,
        "end": 449,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 440,
            "end": 447,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 440,
              "end": 442,
              "name": "p8",
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
              "start": 442,
              "end": 447,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 444,
                "end": 447,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 444,
                  "end": 445,
                  "typeName": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "name": "Y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 430,
        "end": 433,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 431,
            "end": 432,
            "name": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
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
      "start": 450,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 468,
            "name": "a8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 458,
                "end": 468,
                "typeName": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 460,
                  "name": "X8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 460,
                  "end": 468,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 461,
                      "end": 467
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 471,
      "end": 499,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 479,
        "name": "X9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 483,
        "end": 499,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 489,
            "end": 497,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 489,
              "end": 491,
              "name": "p9",
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
              "start": 491,
              "end": 497,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 497,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 494,
                  "end": 497,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 495,
                      "end": 496,
                      "typeName": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 496,
                        "name": "Y",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 479,
        "end": 482,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 480,
            "end": 481,
            "name": {
              "type": "Identifier",
              "start": 480,
              "end": 481,
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
      "start": 500,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 518,
            "name": "a9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 506,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 508,
                "end": 518,
                "typeName": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 510,
                  "name": "X9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 510,
                  "end": 518,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 511,
                      "end": 517
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 521,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 530,
        "name": "X10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 534,
        "end": 547,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 540,
            "end": 545,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 542,
              "name": "pa",
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
              "start": 542,
              "end": 545,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 544,
                "end": 545,
                "typeName": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 545,
                  "name": "Y",
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
        "start": 530,
        "end": 533,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 531,
            "end": 532,
            "name": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
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
      "start": 548,
      "end": 569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 552,
          "end": 568,
          "id": {
            "type": "Identifier",
            "start": 552,
            "end": 568,
            "name": "a10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 555,
              "end": 568,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 557,
                "end": 568,
                "typeName": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 560,
                  "name": "X10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 560,
                  "end": 568,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 561,
                      "end": 567
                    }
                  ]
                }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
