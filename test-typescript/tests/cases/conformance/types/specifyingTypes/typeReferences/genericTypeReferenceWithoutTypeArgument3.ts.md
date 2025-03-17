__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 497,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
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
              "start": 120,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
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
        "start": 107,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 109,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 144,
            "name": "c",
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 170,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 162,
                "end": 170,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 164,
                    "end": 168,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 165,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 168,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 168,
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 200,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 187,
                "end": 200,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 189,
                    "end": 198,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 190,
                        "end": 194,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 191,
                          "end": 194,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 193,
                            "end": 194,
                            "typeName": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 194,
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
                      "start": 195,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 197,
                        "end": 198,
                        "typeName": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 198,
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 230,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 217,
                "end": 230,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 219,
                    "end": 228,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 220,
                        "end": 224,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 221,
                          "end": 224,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 223,
                            "end": 224,
                            "typeName": {
                              "type": "Identifier",
                              "start": 223,
                              "end": 224,
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
                      "start": 225,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 227,
                        "end": 228,
                        "typeName": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 228,
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
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 233,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
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
          "start": 252,
          "end": 256,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 253,
            "end": 256,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 255,
              "end": 256,
              "typeName": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
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
      "type": "ClassDeclaration",
      "start": 263,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 291,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 293,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 309,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 310,
        "end": 346,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 316,
            "end": 344,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 323,
              "end": 344,
              "id": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 334,
                "end": 344,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 336,
                    "end": 342,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 339,
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
                      "start": 339,
                      "end": 342,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 341,
                        "end": 342,
                        "typeName": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 342,
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
                "start": 330,
                "end": 333,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 331,
                    "end": 332,
                    "name": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 332,
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
      "declare": true,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 364,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 373,
        "end": 376,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 375,
          "end": 376,
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
        "start": 377,
        "end": 380,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 381,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 397,
        "name": "D3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 413,
        "end": 416,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 397,
        "end": 412,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 398,
            "end": 411,
            "name": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 408,
              "end": 411,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 408,
                "end": 411,
                "left": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 418,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 436,
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
          "start": 450,
          "end": 454,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 451,
            "end": 454,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 453,
              "end": 454,
              "typeName": {
                "type": "Identifier",
                "start": 453,
                "end": 454,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 436,
        "end": 449,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 437,
            "end": 448,
            "name": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 447,
              "end": 448,
              "typeName": {
                "type": "Identifier",
                "start": 447,
                "end": 448,
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
      "type": "TSDeclareFunction",
      "start": 457,
      "end": 497,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 475,
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
          "start": 491,
          "end": 495,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 492,
            "end": 495,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 494,
              "end": 495,
              "typeName": {
                "type": "Identifier",
                "start": 494,
                "end": 495,
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
      "body": null,
      "declare": true,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
