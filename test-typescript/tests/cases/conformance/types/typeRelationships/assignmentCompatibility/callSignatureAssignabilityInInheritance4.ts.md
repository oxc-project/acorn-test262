__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 1880,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
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
              "start": 118,
              "end": 126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              }
            },
            "accessibility": null
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
      "start": 130,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 143,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "name": "bar",
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
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            },
            "accessibility": null
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
      "start": 174,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 188,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "name": "baz",
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
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              }
            },
            "accessibility": null
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
      "start": 222,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 240,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
              "name": "bing",
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
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            },
            "accessibility": null
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
      "type": "TSInterfaceDeclaration",
      "start": 273,
      "end": 1040,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 284,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 285,
        "end": 1040,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 327,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 326,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 310,
                "end": 326,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 310,
                  "end": 313,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 311,
                      "end": 312,
                      "name": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 312,
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
                    "start": 314,
                    "end": 318,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 315,
                      "end": 318,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 317,
                        "end": 318,
                        "typeName": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
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
                  "start": 320,
                  "end": 326,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 323,
                    "end": 326,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 323,
                      "end": 324,
                      "typeName": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 332,
            "end": 358,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 334,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 357,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 336,
                "end": 357,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 336,
                  "end": 339,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 337,
                      "end": 338,
                      "name": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
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
                    "start": 340,
                    "end": 344,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 341,
                      "end": 344,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 343,
                        "end": 344,
                        "typeName": {
                          "type": "Identifier",
                          "start": 343,
                          "end": 344,
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
                  "start": 346,
                  "end": 357,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 349,
                    "end": 357,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 363,
            "end": 385,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 384,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 367,
                "end": 384,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 367,
                  "end": 370,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 368,
                      "end": 369,
                      "name": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 369,
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
                    "start": 371,
                    "end": 375,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 372,
                      "end": 375,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 374,
                        "end": 375,
                        "typeName": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 375,
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
                  "start": 377,
                  "end": 384,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 380,
                    "end": 384
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 390,
            "end": 422,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 390,
              "end": 392,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 421,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 394,
                "end": 421,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 394,
                  "end": 399,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 395,
                      "end": 396,
                      "name": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
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
                      "start": 397,
                      "end": 398,
                      "name": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
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
                    "start": 400,
                    "end": 404,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 401,
                      "end": 404,
                      "typeAnnotation": {
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
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 406,
                    "end": 410,
                    "name": "y",
                    "typeAnnotation": {
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
                  "start": 412,
                  "end": 421,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 427,
            "end": 460,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 429,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 429,
              "end": 459,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 431,
                "end": 459,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 431,
                  "end": 436,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 432,
                      "end": 433,
                      "name": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 433,
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
                      "start": 434,
                      "end": 435,
                      "name": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 435,
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
                    "start": 437,
                    "end": 453,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 438,
                      "end": 453,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 440,
                        "end": 453,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 441,
                            "end": 447,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 444,
                              "end": 447,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 446,
                                "end": 447,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 446,
                                  "end": 447,
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
                          "start": 449,
                          "end": 453,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 452,
                            "end": 453,
                            "typeName": {
                              "type": "Identifier",
                              "start": 452,
                              "end": 453,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 455,
                  "end": 459,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 458,
                    "end": 459,
                    "typeName": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 465,
            "end": 515,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 465,
              "end": 467,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 467,
              "end": 514,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 469,
                "end": 514,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 469,
                  "end": 485,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 470,
                      "end": 484,
                      "name": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 471,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 480,
                        "end": 484,
                        "typeName": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 484,
                          "name": "Base",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 486,
                    "end": 508,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 487,
                      "end": 508,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 489,
                        "end": 508,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 490,
                            "end": 496,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 493,
                              "end": 496,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 495,
                                "end": 496,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 495,
                                  "end": 496,
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
                          "start": 498,
                          "end": 508,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 501,
                            "end": 508,
                            "typeName": {
                              "type": "Identifier",
                              "start": 501,
                              "end": 508,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 510,
                  "end": 514,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 513,
                    "end": 514,
                    "typeName": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 514,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 520,
            "end": 575,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 520,
              "end": 523,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 523,
              "end": 574,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 525,
                "end": 574,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 525,
                  "end": 528,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 526,
                      "end": 527,
                      "name": {
                        "type": "Identifier",
                        "start": 526,
                        "end": 527,
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
                    "start": 529,
                    "end": 542,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 530,
                      "end": 542,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 532,
                        "end": 542,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 534,
                            "end": 540,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 534,
                              "end": 537,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 537,
                              "end": 540,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 539,
                                "end": 540,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 539,
                                  "end": 540,
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 544,
                    "end": 565,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 545,
                      "end": 565,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 547,
                        "end": 565,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 549,
                            "end": 556,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 549,
                              "end": 552,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 552,
                              "end": 555,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 554,
                                "end": 555,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 554,
                                  "end": 555,
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
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 557,
                            "end": 563,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 557,
                              "end": 560,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 560,
                              "end": 563,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 562,
                                "end": 563,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 562,
                                  "end": 563,
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 567,
                  "end": 574,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 570,
                    "end": 574,
                    "typeName": {
                      "type": "Identifier",
                      "start": 570,
                      "end": 574,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 580,
            "end": 615,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 580,
              "end": 583,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 583,
              "end": 614,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 585,
                "end": 614,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 585,
                  "end": 588,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 586,
                      "end": 587,
                      "name": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 587,
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
                    "start": 589,
                    "end": 606,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 590,
                      "end": 606,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 592,
                        "end": 606,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 594,
                            "end": 599,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 594,
                              "end": 595,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 595,
                              "end": 598,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 597,
                                "end": 598,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 597,
                                  "end": 598,
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
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 600,
                            "end": 604,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 600,
                              "end": 601,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 601,
                              "end": 604,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 603,
                                "end": 604,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 603,
                                  "end": 604,
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 608,
                  "end": 614,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 611,
                    "end": 614,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 611,
                      "end": 612,
                      "typeName": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 612,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 620,
            "end": 668,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 620,
              "end": 623,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 667,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 625,
                "end": 667,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 625,
                  "end": 641,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 626,
                      "end": 640,
                      "name": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 627,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 636,
                        "end": 640,
                        "typeName": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 640,
                          "name": "Base",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 642,
                    "end": 659,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 643,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 645,
                        "end": 659,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 647,
                            "end": 652,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 647,
                              "end": 648,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 648,
                              "end": 651,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 650,
                                "end": 651,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 650,
                                  "end": 651,
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
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 653,
                            "end": 657,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 653,
                              "end": 654,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 654,
                              "end": 657,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 656,
                                "end": 657,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 656,
                                  "end": 657,
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 661,
                  "end": 667,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 664,
                    "end": 667,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 664,
                      "end": 665,
                      "typeName": {
                        "type": "Identifier",
                        "start": 664,
                        "end": 665,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 673,
            "end": 791,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 673,
              "end": 676,
              "name": "a17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 790,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 678,
                "end": 790,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 688,
                    "end": 729,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 688,
                      "end": 707,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 689,
                          "end": 706,
                          "name": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 690,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 699,
                            "end": 706,
                            "typeName": {
                              "type": "Identifier",
                              "start": 699,
                              "end": 706,
                              "name": "Derived",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 708,
                        "end": 722,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 709,
                          "end": 722,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 711,
                            "end": 722,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 712,
                                "end": 716,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 713,
                                  "end": 716,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 715,
                                    "end": 716,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 715,
                                      "end": 716,
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
                              "start": 718,
                              "end": 722,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 721,
                                "end": 722,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 721,
                                  "end": 722,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 723,
                      "end": 728,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 725,
                        "end": 728,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 725,
                          "end": 726,
                          "typeName": {
                            "type": "Identifier",
                            "start": 725,
                            "end": 726,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 738,
                    "end": 776,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 738,
                      "end": 754,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 739,
                          "end": 753,
                          "name": {
                            "type": "Identifier",
                            "start": 739,
                            "end": 740,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 749,
                            "end": 753,
                            "typeName": {
                              "type": "Identifier",
                              "start": 749,
                              "end": 753,
                              "name": "Base",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 755,
                        "end": 769,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 756,
                          "end": 769,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 758,
                            "end": 769,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 759,
                                "end": 763,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 760,
                                  "end": 763,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 762,
                                    "end": 763,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 762,
                                      "end": 763,
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
                              "start": 765,
                              "end": 769,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 768,
                                "end": 769,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 768,
                                  "end": 769,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 770,
                      "end": 775,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 772,
                        "end": 775,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 772,
                          "end": 773,
                          "typeName": {
                            "type": "Identifier",
                            "start": 772,
                            "end": 773,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 796,
            "end": 1038,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 796,
              "end": 799,
              "name": "a18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 799,
              "end": 1037,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 801,
                "end": 1037,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 811,
                    "end": 916,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 812,
                        "end": 907,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 813,
                          "end": 907,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 815,
                            "end": 907,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 829,
                                "end": 858,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 829,
                                  "end": 848,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 830,
                                      "end": 847,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 830,
                                        "end": 831,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 840,
                                        "end": 847,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 840,
                                          "end": 847,
                                          "name": "Derived",
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 849,
                                    "end": 853,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 850,
                                      "end": 853,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 852,
                                        "end": 853,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 852,
                                          "end": 853,
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
                                  "start": 854,
                                  "end": 857,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 856,
                                    "end": 857,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 856,
                                      "end": 857,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 871,
                                "end": 897,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 871,
                                  "end": 887,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 872,
                                      "end": 886,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 872,
                                        "end": 873,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 882,
                                        "end": 886,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 882,
                                          "end": 886,
                                          "name": "Base",
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 888,
                                    "end": 892,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 889,
                                      "end": 892,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 891,
                                        "end": 892,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 891,
                                          "end": 892,
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
                                  "start": 893,
                                  "end": 896,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 895,
                                    "end": 896,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 895,
                                      "end": 896,
                                      "name": "T",
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 908,
                      "end": 915,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 910,
                        "end": 915,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 910,
                          "end": 913
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 925,
                    "end": 1031,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 926,
                        "end": 1022,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 927,
                          "end": 1022,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 929,
                            "end": 1022,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 943,
                                "end": 973,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 943,
                                  "end": 963,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 944,
                                      "end": 962,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 944,
                                        "end": 945,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 954,
                                        "end": 962,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 954,
                                          "end": 962,
                                          "name": "Derived2",
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 964,
                                    "end": 968,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 965,
                                      "end": 968,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 967,
                                        "end": 968,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 967,
                                          "end": 968,
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
                                  "start": 969,
                                  "end": 972,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 971,
                                    "end": 972,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 971,
                                      "end": 972,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 986,
                                "end": 1012,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 986,
                                  "end": 1002,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 987,
                                      "end": 1001,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 987,
                                        "end": 988,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 997,
                                        "end": 1001,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 997,
                                          "end": 1001,
                                          "name": "Base",
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1003,
                                    "end": 1007,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1004,
                                      "end": 1007,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1006,
                                        "end": 1007,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1006,
                                          "end": 1007,
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
                                  "start": 1008,
                                  "end": 1011,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1010,
                                    "end": 1011,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1010,
                                      "end": 1011,
                                      "name": "T",
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1023,
                      "end": 1030,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1025,
                        "end": 1030,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1025,
                          "end": 1028
                        }
                      }
                    }
                  }
                ]
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
      "start": 1049,
      "end": 1880,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1060,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1069,
          "end": 1070,
          "expression": {
            "type": "Identifier",
            "start": 1069,
            "end": 1070,
            "name": "A",
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
        "start": 1071,
        "end": 1880,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1088,
            "end": 1108,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1088,
              "end": 1089,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1089,
              "end": 1107,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1091,
                "end": 1107,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1091,
                  "end": 1094,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1092,
                      "end": 1093,
                      "name": {
                        "type": "Identifier",
                        "start": 1092,
                        "end": 1093,
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
                    "start": 1095,
                    "end": 1099,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1096,
                      "end": 1099,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1098,
                        "end": 1099,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1098,
                          "end": 1099,
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
                  "start": 1101,
                  "end": 1107,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1104,
                    "end": 1107,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1104,
                      "end": 1105,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1104,
                        "end": 1105,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1170,
            "end": 1196,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1170,
              "end": 1172,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1172,
              "end": 1195,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1174,
                "end": 1195,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1174,
                  "end": 1177,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1175,
                      "end": 1176,
                      "name": {
                        "type": "Identifier",
                        "start": 1175,
                        "end": 1176,
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
                    "start": 1178,
                    "end": 1182,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1179,
                      "end": 1182,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1181,
                        "end": 1182,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1181,
                          "end": 1182,
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
                  "start": 1184,
                  "end": 1195,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1187,
                    "end": 1195,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1187,
                      "end": 1193
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1207,
            "end": 1226,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1207,
              "end": 1209,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1209,
              "end": 1225,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1211,
                "end": 1225,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1211,
                  "end": 1214,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1212,
                      "end": 1213,
                      "name": {
                        "type": "Identifier",
                        "start": 1212,
                        "end": 1213,
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
                    "start": 1215,
                    "end": 1219,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1216,
                      "end": 1219,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1218,
                        "end": 1219,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1218,
                          "end": 1219,
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
                  "start": 1221,
                  "end": 1225,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1224,
                    "end": 1225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1224,
                      "end": 1225,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1261,
            "end": 1294,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1261,
              "end": 1263,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1263,
              "end": 1293,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1265,
                "end": 1293,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1265,
                  "end": 1271,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1266,
                      "end": 1267,
                      "name": {
                        "type": "Identifier",
                        "start": 1266,
                        "end": 1267,
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
                      "start": 1269,
                      "end": 1270,
                      "name": {
                        "type": "Identifier",
                        "start": 1269,
                        "end": 1270,
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
                    "start": 1272,
                    "end": 1276,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1273,
                      "end": 1276,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1275,
                        "end": 1276,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1275,
                          "end": 1276,
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
                    "start": 1278,
                    "end": 1282,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1279,
                      "end": 1282,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1281,
                        "end": 1282,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1281,
                          "end": 1282,
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
                  "start": 1284,
                  "end": 1293,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1287,
                    "end": 1293
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1369,
            "end": 1403,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1369,
              "end": 1371,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1371,
              "end": 1402,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1373,
                "end": 1402,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1373,
                  "end": 1379,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1374,
                      "end": 1375,
                      "name": {
                        "type": "Identifier",
                        "start": 1374,
                        "end": 1375,
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
                      "start": 1377,
                      "end": 1378,
                      "name": {
                        "type": "Identifier",
                        "start": 1377,
                        "end": 1378,
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
                    "start": 1380,
                    "end": 1396,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1381,
                      "end": 1396,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1383,
                        "end": 1396,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1384,
                            "end": 1390,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1387,
                              "end": 1390,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1389,
                                "end": 1390,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1389,
                                  "end": 1390,
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
                          "start": 1392,
                          "end": 1396,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1395,
                            "end": 1396,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1395,
                              "end": 1396,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1398,
                  "end": 1402,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1401,
                    "end": 1402,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1401,
                      "end": 1402,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1470,
            "end": 1533,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1470,
              "end": 1472,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1472,
              "end": 1532,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1474,
                "end": 1532,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1474,
                  "end": 1509,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1475,
                      "end": 1489,
                      "name": {
                        "type": "Identifier",
                        "start": 1475,
                        "end": 1476,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1485,
                        "end": 1489,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1485,
                          "end": 1489,
                          "name": "Base",
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1491,
                      "end": 1508,
                      "name": {
                        "type": "Identifier",
                        "start": 1491,
                        "end": 1492,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1501,
                        "end": 1508,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1501,
                          "end": 1508,
                          "name": "Derived",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1510,
                    "end": 1526,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1511,
                      "end": 1526,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1513,
                        "end": 1526,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1514,
                            "end": 1520,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1517,
                              "end": 1520,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1519,
                                "end": 1520,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1519,
                                  "end": 1520,
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
                          "start": 1522,
                          "end": 1526,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1525,
                            "end": 1526,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1525,
                              "end": 1526,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1528,
                  "end": 1532,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1531,
                    "end": 1532,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1531,
                      "end": 1532,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1587,
            "end": 1645,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1587,
              "end": 1590,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1590,
              "end": 1644,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1592,
                "end": 1644,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1592,
                  "end": 1598,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1593,
                      "end": 1594,
                      "name": {
                        "type": "Identifier",
                        "start": 1593,
                        "end": 1594,
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
                      "start": 1596,
                      "end": 1597,
                      "name": {
                        "type": "Identifier",
                        "start": 1596,
                        "end": 1597,
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
                    "start": 1599,
                    "end": 1612,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1600,
                      "end": 1612,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1602,
                        "end": 1612,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1604,
                            "end": 1610,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1604,
                              "end": 1607,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1607,
                              "end": 1610,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1609,
                                "end": 1610,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1609,
                                  "end": 1610,
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1614,
                    "end": 1635,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1615,
                      "end": 1635,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1617,
                        "end": 1635,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1619,
                            "end": 1626,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1619,
                              "end": 1622,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1622,
                              "end": 1625,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1624,
                                "end": 1625,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1624,
                                  "end": 1625,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1627,
                            "end": 1633,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1627,
                              "end": 1630,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1630,
                              "end": 1633,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1632,
                                "end": 1633,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1632,
                                  "end": 1633,
                                  "name": "U",
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1637,
                  "end": 1644,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1640,
                    "end": 1644,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1640,
                      "end": 1644,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1656,
            "end": 1695,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1656,
              "end": 1659,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1659,
              "end": 1694,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1661,
                "end": 1694,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1661,
                  "end": 1667,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1662,
                      "end": 1663,
                      "name": {
                        "type": "Identifier",
                        "start": 1662,
                        "end": 1663,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1665,
                      "end": 1666,
                      "name": {
                        "type": "Identifier",
                        "start": 1665,
                        "end": 1666,
                        "name": "V",
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
                    "start": 1668,
                    "end": 1686,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1669,
                      "end": 1686,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1671,
                        "end": 1686,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1673,
                            "end": 1678,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1673,
                              "end": 1674,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1674,
                              "end": 1677,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1676,
                                "end": 1677,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1676,
                                  "end": 1677,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1679,
                            "end": 1684,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1679,
                              "end": 1680,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1680,
                              "end": 1683,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1682,
                                "end": 1683,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1682,
                                  "end": 1683,
                                  "name": "V",
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1688,
                  "end": 1694,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1691,
                    "end": 1694,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1691,
                      "end": 1692,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1691,
                        "end": 1692,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1720,
            "end": 1755,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1720,
              "end": 1723,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1723,
              "end": 1754,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1725,
                "end": 1754,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1725,
                  "end": 1728,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1726,
                      "end": 1727,
                      "name": {
                        "type": "Identifier",
                        "start": 1726,
                        "end": 1727,
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
                    "start": 1729,
                    "end": 1746,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1730,
                      "end": 1746,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1732,
                        "end": 1746,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1734,
                            "end": 1739,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1734,
                              "end": 1735,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1735,
                              "end": 1738,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1737,
                                "end": 1738,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1737,
                                  "end": 1738,
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
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1740,
                            "end": 1744,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1740,
                              "end": 1741,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1741,
                              "end": 1744,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1743,
                                "end": 1744,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1743,
                                  "end": 1744,
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1748,
                  "end": 1754,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1751,
                    "end": 1754,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1751,
                      "end": 1752,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1751,
                        "end": 1752,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1795,
            "end": 1827,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1795,
              "end": 1798,
              "name": "a17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1798,
              "end": 1826,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1800,
                "end": 1826,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1800,
                  "end": 1803,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1801,
                      "end": 1802,
                      "name": {
                        "type": "Identifier",
                        "start": 1801,
                        "end": 1802,
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
                    "start": 1804,
                    "end": 1818,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1805,
                      "end": 1818,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1807,
                        "end": 1818,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1808,
                            "end": 1812,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1809,
                              "end": 1812,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1811,
                                "end": 1812,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1811,
                                  "end": 1812,
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
                          "start": 1814,
                          "end": 1818,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1817,
                            "end": 1818,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1817,
                              "end": 1818,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1820,
                  "end": 1826,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1823,
                    "end": 1826,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1823,
                      "end": 1824,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1823,
                        "end": 1824,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1838,
            "end": 1872,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1838,
              "end": 1841,
              "name": "a18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1841,
              "end": 1871,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1843,
                "end": 1871,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1844,
                    "end": 1861,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1845,
                      "end": 1861,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1847,
                        "end": 1861,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 1847,
                          "end": 1850,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 1848,
                              "end": 1849,
                              "name": {
                                "type": "Identifier",
                                "start": 1848,
                                "end": 1849,
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
                            "start": 1851,
                            "end": 1855,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1852,
                              "end": 1855,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1854,
                                "end": 1855,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1854,
                                  "end": 1855,
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
                          "start": 1857,
                          "end": 1861,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1860,
                            "end": 1861,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1860,
                              "end": 1861,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1863,
                  "end": 1871,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1866,
                    "end": 1871,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1866,
                      "end": 1869
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
