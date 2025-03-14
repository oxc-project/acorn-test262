genericTypeReferenceWithoutTypeArgument3.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 124,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 109,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
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
      "start": 128,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 144,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 170,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "C",
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
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 200,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 190,
                        "end": 194,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            }
                          }
                        }
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
                          "decorators": [],
                          "name": "C",
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
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 230,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "C",
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
                          "decorators": [],
                          "name": "C",
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
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 233,
      "end": 261,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 252,
          "end": 256,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 263,
      "end": 291,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 291,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 293,
      "end": 346,
      "body": {
        "type": "TSModuleBlock",
        "start": 310,
        "end": 346,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 316,
            "end": 344,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 323,
              "end": 344,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 334,
                "end": 344,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 336,
                    "end": 342,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 339,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 330,
                "end": 333,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 331,
                    "end": 332,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 332,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 309,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 380,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 377,
        "end": 380,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 364,
        "decorators": [],
        "name": "D2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 373,
        "end": 376,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 375,
          "end": 376,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 381,
      "end": 416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 413,
        "end": 416,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 397,
        "decorators": [],
        "name": "D3",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 397,
        "end": 412,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 398,
            "end": 411,
            "const": false,
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
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
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
      "type": "TSDeclareFunction",
      "start": 418,
      "end": 456,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 436,
        "decorators": [],
        "name": "h",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 450,
          "end": 454,
          "decorators": [],
          "name": "x",
          "optional": false,
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
        "start": 436,
        "end": 449,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 437,
            "end": 448,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 447,
              "end": 448,
              "typeName": {
                "type": "Identifier",
                "start": 447,
                "end": 448,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
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
      "type": "TSDeclareFunction",
      "start": 457,
      "end": 497,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 475,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 491,
          "end": 495,
          "decorators": [],
          "name": "x",
          "optional": false,
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
    }
  ],
  "sourceType": "script"
}
```
