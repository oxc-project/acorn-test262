__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 6344,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 102,
      "end": 2236,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 123,
        "name": "ClassTypeParam",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 124,
        "end": 2236,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 130,
            "end": 311,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 144,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 144,
              "end": 147,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 145,
                  "end": 146,
                  "name": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
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
              "start": 148,
              "end": 311,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 158,
                  "end": 173,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 159,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 161,
                      "end": 172,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 168,
                        "end": 172,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 171,
                          "end": 172,
                          "typeName": {
                            "type": "Identifier",
                            "start": 171,
                            "end": 172,
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
                  "start": 182,
                  "end": 203,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 184,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 202,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 186,
                      "end": 202,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 191,
                          "end": 196,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 193,
                            "end": 196,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 195,
                              "end": 196,
                              "typeName": {
                                "type": "Identifier",
                                "start": 195,
                                "end": 196,
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
                        "start": 198,
                        "end": 202,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 201,
                          "end": 202,
                          "typeName": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 202,
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
                  "start": 212,
                  "end": 232,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 214,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 216,
                      "end": 231,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 221,
                          "end": 225,
                          "name": "x",
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
                        "start": 227,
                        "end": 231,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 230,
                          "end": 231,
                          "typeName": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
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
                  "start": 241,
                  "end": 268,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 243,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 245,
                      "end": 267,
                      "abstract": false,
                      "typeParameters": null,
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
                          "end": 261,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 258,
                            "end": 261,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 260,
                              "end": 261,
                              "typeName": {
                                "type": "Identifier",
                                "start": 260,
                                "end": 261,
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
                        "start": 263,
                        "end": 267,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 266,
                          "end": 267,
                          "typeName": {
                            "type": "Identifier",
                            "start": 266,
                            "end": 267,
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
                  "start": 277,
                  "end": 305,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 279,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 279,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 281,
                      "end": 304,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 286,
                          "end": 291,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 288,
                            "end": 291,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 290,
                              "end": 291,
                              "typeName": {
                                "type": "Identifier",
                                "start": 290,
                                "end": 291,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 293,
                          "end": 298,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 295,
                            "end": 298,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 297,
                              "end": 298,
                              "typeName": {
                                "type": "Identifier",
                                "start": 297,
                                "end": 298,
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
                        "start": 300,
                        "end": 304,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 303,
                          "end": 304,
                          "typeName": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 304,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 317,
            "end": 413,
            "id": {
              "type": "Identifier",
              "start": 327,
              "end": 329,
              "name": "I1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 341,
                "end": 348,
                "expression": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 345,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 345,
                  "end": 348,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 346,
                      "end": 347,
                      "typeName": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 347,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 329,
              "end": 332,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 330,
                  "end": 331,
                  "name": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
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
              "start": 349,
              "end": 413,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 359,
                  "end": 374,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 360,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 360,
                    "end": 373,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 362,
                      "end": 373,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 369,
                        "end": 373,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 372,
                          "end": 373,
                          "typeName": {
                            "type": "Identifier",
                            "start": 372,
                            "end": 373,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 419,
            "end": 520,
            "id": {
              "type": "Identifier",
              "start": 429,
              "end": 431,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 443,
                "end": 450,
                "expression": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 447,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 447,
                  "end": 450,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 448,
                      "end": 449,
                      "typeName": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 449,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 431,
              "end": 434,
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
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 451,
              "end": 520,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 461,
                  "end": 481,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 462,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 464,
                      "end": 480,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 469,
                          "end": 474,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 471,
                            "end": 474,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 473,
                              "end": 474,
                              "typeName": {
                                "type": "Identifier",
                                "start": 473,
                                "end": 474,
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
                        "start": 476,
                        "end": 480,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 479,
                          "end": 480,
                          "typeName": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 480,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 526,
            "end": 628,
            "id": {
              "type": "Identifier",
              "start": 536,
              "end": 538,
              "name": "I3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 550,
                "end": 557,
                "expression": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 554,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 554,
                  "end": 557,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 555,
                      "end": 556,
                      "typeName": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 556,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 538,
              "end": 541,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 539,
                  "end": 540,
                  "name": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 540,
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
              "start": 558,
              "end": 628,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 568,
                  "end": 587,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 569,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 569,
                    "end": 586,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 571,
                      "end": 586,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 576,
                          "end": 580,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 577,
                            "end": 580,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 579,
                              "end": 580,
                              "typeName": {
                                "type": "Identifier",
                                "start": 579,
                                "end": 580,
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
                        "start": 582,
                        "end": 586,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 585,
                          "end": 586,
                          "typeName": {
                            "type": "Identifier",
                            "start": 585,
                            "end": 586,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 635,
            "end": 732,
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "name": "I4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 659,
                "end": 666,
                "expression": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 663,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 663,
                  "end": 666,
                  "params": [
                    {
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
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 647,
              "end": 650,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 648,
                  "end": 649,
                  "name": {
                    "type": "Identifier",
                    "start": 648,
                    "end": 649,
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
              "start": 667,
              "end": 732,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 677,
                  "end": 693,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 677,
                    "end": 679,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 679,
                    "end": 692,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 681,
                      "end": 692,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 688,
                        "end": 692,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 691,
                          "end": 692,
                          "typeName": {
                            "type": "Identifier",
                            "start": 691,
                            "end": 692,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 738,
            "end": 840,
            "id": {
              "type": "Identifier",
              "start": 748,
              "end": 750,
              "name": "I5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 762,
                "end": 769,
                "expression": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 766,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 766,
                  "end": 769,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 767,
                      "end": 768,
                      "typeName": {
                        "type": "Identifier",
                        "start": 767,
                        "end": 768,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 750,
              "end": 753,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 751,
                  "end": 752,
                  "name": {
                    "type": "Identifier",
                    "start": 751,
                    "end": 752,
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
              "start": 770,
              "end": 840,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 780,
                  "end": 801,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 782,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 782,
                    "end": 800,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 784,
                      "end": 800,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 789,
                          "end": 794,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 791,
                            "end": 794,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 793,
                              "end": 794,
                              "typeName": {
                                "type": "Identifier",
                                "start": 793,
                                "end": 794,
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
                        "start": 796,
                        "end": 800,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 799,
                          "end": 800,
                          "typeName": {
                            "type": "Identifier",
                            "start": 799,
                            "end": 800,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 846,
            "end": 943,
            "id": {
              "type": "Identifier",
              "start": 856,
              "end": 858,
              "name": "I6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 870,
                "end": 877,
                "expression": {
                  "type": "Identifier",
                  "start": 870,
                  "end": 874,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 874,
                  "end": 877,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 875,
                      "end": 876,
                      "typeName": {
                        "type": "Identifier",
                        "start": 875,
                        "end": 876,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 858,
              "end": 861,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 859,
                  "end": 860,
                  "name": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 860,
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
              "start": 878,
              "end": 943,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 888,
                  "end": 908,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 888,
                    "end": 890,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 890,
                    "end": 907,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 892,
                      "end": 907,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 897,
                          "end": 901,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 898,
                            "end": 901,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 900,
                              "end": 901,
                              "typeName": {
                                "type": "Identifier",
                                "start": 900,
                                "end": 901,
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
                        "start": 903,
                        "end": 907,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 906,
                          "end": 907,
                          "typeName": {
                            "type": "Identifier",
                            "start": 906,
                            "end": 907,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 950,
            "end": 1043,
            "id": {
              "type": "Identifier",
              "start": 960,
              "end": 962,
              "name": "I7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 974,
                "end": 981,
                "expression": {
                  "type": "Identifier",
                  "start": 974,
                  "end": 978,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 978,
                  "end": 981,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 979,
                      "end": 980,
                      "typeName": {
                        "type": "Identifier",
                        "start": 979,
                        "end": 980,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 962,
              "end": 965,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 963,
                  "end": 964,
                  "name": {
                    "type": "Identifier",
                    "start": 963,
                    "end": 964,
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
              "start": 982,
              "end": 1043,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 992,
                  "end": 1008,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 994,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 994,
                    "end": 1007,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 996,
                      "end": 1007,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1003,
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
                      }
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
            "end": 1147,
            "id": {
              "type": "Identifier",
              "start": 1059,
              "end": 1061,
              "name": "I8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1073,
                "end": 1080,
                "expression": {
                  "type": "Identifier",
                  "start": 1073,
                  "end": 1077,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1077,
                  "end": 1080,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1078,
                      "end": 1079,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1078,
                        "end": 1079,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1061,
              "end": 1064,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1062,
                  "end": 1063,
                  "name": {
                    "type": "Identifier",
                    "start": 1062,
                    "end": 1063,
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
              "start": 1081,
              "end": 1147,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1091,
                  "end": 1112,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1091,
                    "end": 1093,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1093,
                    "end": 1111,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1095,
                      "end": 1111,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1100,
                          "end": 1105,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1102,
                            "end": 1105,
                            "typeAnnotation": {
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
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1107,
                        "end": 1111,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1110,
                          "end": 1111,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1111,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1153,
            "end": 1254,
            "id": {
              "type": "Identifier",
              "start": 1163,
              "end": 1165,
              "name": "I9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1177,
                "end": 1184,
                "expression": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1181,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1181,
                  "end": 1184,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1182,
                      "end": 1183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1182,
                        "end": 1183,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1165,
              "end": 1168,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1166,
                  "end": 1167,
                  "name": {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1167,
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
              "start": 1185,
              "end": 1254,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1195,
                  "end": 1215,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1197,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1197,
                    "end": 1214,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1199,
                      "end": 1214,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1204,
                          "end": 1208,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1205,
                            "end": 1208,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1207,
                              "end": 1208,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1207,
                                "end": 1208,
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
                        "start": 1210,
                        "end": 1214,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1213,
                          "end": 1214,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1213,
                            "end": 1214,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1260,
            "end": 1371,
            "id": {
              "type": "Identifier",
              "start": 1270,
              "end": 1273,
              "name": "I10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1285,
                "end": 1292,
                "expression": {
                  "type": "Identifier",
                  "start": 1285,
                  "end": 1289,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1289,
                  "end": 1292,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1290,
                      "end": 1291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1290,
                        "end": 1291,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1273,
              "end": 1276,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1274,
                  "end": 1275,
                  "name": {
                    "type": "Identifier",
                    "start": 1274,
                    "end": 1275,
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
              "start": 1293,
              "end": 1371,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1303,
                  "end": 1329,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1303,
                    "end": 1305,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1305,
                    "end": 1328,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1307,
                      "end": 1328,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1312,
                          "end": 1316,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1313,
                            "end": 1316,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1315,
                              "end": 1316,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1315,
                                "end": 1316,
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
                          "start": 1318,
                          "end": 1322,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1319,
                            "end": 1322,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1321,
                              "end": 1322,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1321,
                                "end": 1322,
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
                        "start": 1324,
                        "end": 1328,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1327,
                          "end": 1328,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1327,
                            "end": 1328,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1378,
            "end": 1472,
            "id": {
              "type": "Identifier",
              "start": 1388,
              "end": 1391,
              "name": "I11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1403,
                "end": 1410,
                "expression": {
                  "type": "Identifier",
                  "start": 1403,
                  "end": 1407,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1407,
                  "end": 1410,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1408,
                      "end": 1409,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1409,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1391,
              "end": 1394,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1392,
                  "end": 1393,
                  "name": {
                    "type": "Identifier",
                    "start": 1392,
                    "end": 1393,
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
              "start": 1411,
              "end": 1472,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1421,
                  "end": 1437,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1421,
                    "end": 1423,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1423,
                    "end": 1436,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1425,
                      "end": 1436,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1432,
                        "end": 1436,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1435,
                          "end": 1436,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1435,
                            "end": 1436,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1478,
            "end": 1584,
            "id": {
              "type": "Identifier",
              "start": 1488,
              "end": 1491,
              "name": "I12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1503,
                "end": 1510,
                "expression": {
                  "type": "Identifier",
                  "start": 1503,
                  "end": 1507,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1507,
                  "end": 1510,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1508,
                      "end": 1509,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1508,
                        "end": 1509,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1491,
              "end": 1494,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1492,
                  "end": 1493,
                  "name": {
                    "type": "Identifier",
                    "start": 1492,
                    "end": 1493,
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
              "start": 1511,
              "end": 1584,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1521,
                  "end": 1549,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1521,
                    "end": 1523,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1523,
                    "end": 1548,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1525,
                      "end": 1548,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1530,
                          "end": 1535,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1532,
                            "end": 1535,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1534,
                              "end": 1535,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1534,
                                "end": 1535,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1537,
                          "end": 1542,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1539,
                            "end": 1542,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1541,
                              "end": 1542,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1541,
                                "end": 1542,
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
                        "start": 1544,
                        "end": 1548,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1547,
                          "end": 1548,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1547,
                            "end": 1548,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1590,
            "end": 1692,
            "id": {
              "type": "Identifier",
              "start": 1600,
              "end": 1603,
              "name": "I13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1615,
                "end": 1622,
                "expression": {
                  "type": "Identifier",
                  "start": 1615,
                  "end": 1619,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1619,
                  "end": 1622,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1620,
                      "end": 1621,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1620,
                        "end": 1621,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1603,
              "end": 1606,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1604,
                  "end": 1605,
                  "name": {
                    "type": "Identifier",
                    "start": 1604,
                    "end": 1605,
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
              "start": 1623,
              "end": 1692,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1633,
                  "end": 1653,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1633,
                    "end": 1635,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1635,
                    "end": 1652,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1637,
                      "end": 1652,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1642,
                          "end": 1646,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1643,
                            "end": 1646,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1645,
                              "end": 1646,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1645,
                                "end": 1646,
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
                        "start": 1648,
                        "end": 1652,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1651,
                          "end": 1652,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1651,
                            "end": 1652,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1698,
            "end": 1803,
            "id": {
              "type": "Identifier",
              "start": 1708,
              "end": 1711,
              "name": "I14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1723,
                "end": 1730,
                "expression": {
                  "type": "Identifier",
                  "start": 1723,
                  "end": 1727,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1727,
                  "end": 1730,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1728,
                      "end": 1729,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1728,
                        "end": 1729,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1711,
              "end": 1714,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1712,
                  "end": 1713,
                  "name": {
                    "type": "Identifier",
                    "start": 1712,
                    "end": 1713,
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
              "start": 1731,
              "end": 1803,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1741,
                  "end": 1767,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1741,
                    "end": 1743,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1743,
                    "end": 1766,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1745,
                      "end": 1766,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1750,
                          "end": 1754,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1751,
                            "end": 1754,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1753,
                              "end": 1754,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1753,
                                "end": 1754,
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
                          "start": 1756,
                          "end": 1760,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1757,
                            "end": 1760,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1759,
                              "end": 1760,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1759,
                                "end": 1760,
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
                        "start": 1762,
                        "end": 1766,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1765,
                          "end": 1766,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1765,
                            "end": 1766,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1810,
            "end": 1904,
            "id": {
              "type": "Identifier",
              "start": 1820,
              "end": 1823,
              "name": "I15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1835,
                "end": 1842,
                "expression": {
                  "type": "Identifier",
                  "start": 1835,
                  "end": 1839,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1839,
                  "end": 1842,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1840,
                      "end": 1841,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1840,
                        "end": 1841,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1823,
              "end": 1826,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1824,
                  "end": 1825,
                  "name": {
                    "type": "Identifier",
                    "start": 1824,
                    "end": 1825,
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
              "start": 1843,
              "end": 1904,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1853,
                  "end": 1869,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1853,
                    "end": 1855,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1855,
                    "end": 1868,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1857,
                      "end": 1868,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1864,
                        "end": 1868,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1867,
                          "end": 1868,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1867,
                            "end": 1868,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1910,
            "end": 2016,
            "id": {
              "type": "Identifier",
              "start": 1920,
              "end": 1923,
              "name": "I16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1935,
                "end": 1942,
                "expression": {
                  "type": "Identifier",
                  "start": 1935,
                  "end": 1939,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1939,
                  "end": 1942,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1940,
                      "end": 1941,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1940,
                        "end": 1941,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1923,
              "end": 1926,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1924,
                  "end": 1925,
                  "name": {
                    "type": "Identifier",
                    "start": 1924,
                    "end": 1925,
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
              "start": 1943,
              "end": 2016,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1953,
                  "end": 1981,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1953,
                    "end": 1955,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1955,
                    "end": 1980,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1957,
                      "end": 1980,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1962,
                          "end": 1967,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1964,
                            "end": 1967,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1966,
                              "end": 1967,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1966,
                                "end": 1967,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 1969,
                          "end": 1974,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1971,
                            "end": 1974,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1973,
                              "end": 1974,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1973,
                                "end": 1974,
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
                        "start": 1976,
                        "end": 1980,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1979,
                          "end": 1980,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1979,
                            "end": 1980,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2022,
            "end": 2123,
            "id": {
              "type": "Identifier",
              "start": 2032,
              "end": 2035,
              "name": "I17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2047,
                "end": 2054,
                "expression": {
                  "type": "Identifier",
                  "start": 2047,
                  "end": 2051,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2051,
                  "end": 2054,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2052,
                      "end": 2053,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2052,
                        "end": 2053,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2035,
              "end": 2038,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2036,
                  "end": 2037,
                  "name": {
                    "type": "Identifier",
                    "start": 2036,
                    "end": 2037,
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
              "start": 2055,
              "end": 2123,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2065,
                  "end": 2085,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2065,
                    "end": 2067,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2067,
                    "end": 2084,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2069,
                      "end": 2084,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2074,
                          "end": 2078,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2075,
                            "end": 2078,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2077,
                              "end": 2078,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2077,
                                "end": 2078,
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
                        "start": 2080,
                        "end": 2084,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2083,
                          "end": 2084,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2083,
                            "end": 2084,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2129,
            "end": 2234,
            "id": {
              "type": "Identifier",
              "start": 2139,
              "end": 2142,
              "name": "I18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2154,
                "end": 2161,
                "expression": {
                  "type": "Identifier",
                  "start": 2154,
                  "end": 2158,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2158,
                  "end": 2161,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2159,
                      "end": 2160,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2159,
                        "end": 2160,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2142,
              "end": 2145,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2143,
                  "end": 2144,
                  "name": {
                    "type": "Identifier",
                    "start": 2143,
                    "end": 2144,
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
              "start": 2162,
              "end": 2234,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2172,
                  "end": 2198,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2172,
                    "end": 2174,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2174,
                    "end": 2197,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2176,
                      "end": 2197,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2181,
                          "end": 2185,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2182,
                            "end": 2185,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2184,
                              "end": 2185,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2184,
                                "end": 2185,
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
                          "start": 2187,
                          "end": 2191,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2188,
                            "end": 2191,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2190,
                              "end": 2191,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2190,
                                "end": 2191,
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
                        "start": 2193,
                        "end": 2197,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2196,
                          "end": 2197,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2196,
                            "end": 2197,
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
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2238,
      "end": 3840,
      "id": {
        "type": "Identifier",
        "start": 2245,
        "end": 2269,
        "name": "GenericSignaturesInvalid",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2270,
        "end": 3840,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 2308,
            "end": 2502,
            "id": {
              "type": "Identifier",
              "start": 2318,
              "end": 2323,
              "name": "Base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 2324,
              "end": 2502,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2334,
                  "end": 2352,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2334,
                    "end": 2335,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2335,
                    "end": 2351,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2337,
                      "end": 2351,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2341,
                        "end": 2344,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2342,
                            "end": 2343,
                            "name": {
                              "type": "Identifier",
                              "start": 2342,
                              "end": 2343,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2347,
                        "end": 2351,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2350,
                          "end": 2351,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2350,
                            "end": 2351,
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
                  "start": 2361,
                  "end": 2385,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2361,
                    "end": 2363,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2363,
                    "end": 2384,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2365,
                      "end": 2384,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2369,
                        "end": 2372,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2370,
                            "end": 2371,
                            "name": {
                              "type": "Identifier",
                              "start": 2370,
                              "end": 2371,
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
                          "start": 2373,
                          "end": 2378,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2375,
                            "end": 2378,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2377,
                              "end": 2378,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2377,
                                "end": 2378,
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
                        "start": 2380,
                        "end": 2384,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2383,
                          "end": 2384,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2383,
                            "end": 2384,
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
                  "start": 2394,
                  "end": 2417,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2394,
                    "end": 2396,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2396,
                    "end": 2416,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2398,
                      "end": 2416,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2402,
                        "end": 2405,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2403,
                            "end": 2404,
                            "name": {
                              "type": "Identifier",
                              "start": 2403,
                              "end": 2404,
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
                          "start": 2406,
                          "end": 2410,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2407,
                            "end": 2410,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2409,
                              "end": 2410,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2409,
                                "end": 2410,
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
                        "start": 2412,
                        "end": 2416,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2415,
                          "end": 2416,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2415,
                            "end": 2416,
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
                  "start": 2426,
                  "end": 2456,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2426,
                    "end": 2428,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2428,
                    "end": 2455,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2430,
                      "end": 2455,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2434,
                        "end": 2437,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2435,
                            "end": 2436,
                            "name": {
                              "type": "Identifier",
                              "start": 2435,
                              "end": 2436,
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
                          "start": 2438,
                          "end": 2442,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2439,
                            "end": 2442,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2441,
                              "end": 2442,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2441,
                                "end": 2442,
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
                          "start": 2444,
                          "end": 2449,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2446,
                            "end": 2449,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2448,
                              "end": 2449,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2448,
                                "end": 2449,
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
                        "start": 2451,
                        "end": 2455,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2454,
                          "end": 2455,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2454,
                            "end": 2455,
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
                  "start": 2465,
                  "end": 2496,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2465,
                    "end": 2467,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2467,
                    "end": 2495,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2469,
                      "end": 2495,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2473,
                        "end": 2476,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2474,
                            "end": 2475,
                            "name": {
                              "type": "Identifier",
                              "start": 2474,
                              "end": 2475,
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
                          "start": 2477,
                          "end": 2482,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2479,
                            "end": 2482,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2481,
                              "end": 2482,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2481,
                                "end": 2482,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 2484,
                          "end": 2489,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2486,
                            "end": 2489,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2488,
                              "end": 2489,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2488,
                                "end": 2489,
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
                        "start": 2491,
                        "end": 2495,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2494,
                          "end": 2495,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2494,
                            "end": 2495,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2508,
            "end": 2570,
            "id": {
              "type": "Identifier",
              "start": 2518,
              "end": 2520,
              "name": "I1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2532,
                "end": 2537,
                "expression": {
                  "type": "Identifier",
                  "start": 2532,
                  "end": 2537,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2520,
              "end": 2523,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2521,
                  "end": 2522,
                  "name": {
                    "type": "Identifier",
                    "start": 2521,
                    "end": 2522,
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
              "start": 2538,
              "end": 2570,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2548,
                  "end": 2563,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2548,
                    "end": 2549,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2549,
                    "end": 2562,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2551,
                      "end": 2562,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2558,
                        "end": 2562,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2561,
                          "end": 2562,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2561,
                            "end": 2562,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2576,
            "end": 2642,
            "id": {
              "type": "Identifier",
              "start": 2586,
              "end": 2588,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2600,
                "end": 2605,
                "expression": {
                  "type": "Identifier",
                  "start": 2600,
                  "end": 2605,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2588,
              "end": 2591,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2589,
                  "end": 2590,
                  "name": {
                    "type": "Identifier",
                    "start": 2589,
                    "end": 2590,
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
              "start": 2606,
              "end": 2642,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2616,
                  "end": 2636,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2616,
                    "end": 2617,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2617,
                    "end": 2635,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2619,
                      "end": 2635,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2624,
                          "end": 2629,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2626,
                            "end": 2629,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2628,
                              "end": 2629,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2628,
                                "end": 2629,
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
                        "start": 2631,
                        "end": 2635,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2634,
                          "end": 2635,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2634,
                            "end": 2635,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2648,
            "end": 2714,
            "id": {
              "type": "Identifier",
              "start": 2658,
              "end": 2660,
              "name": "I3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2672,
                "end": 2677,
                "expression": {
                  "type": "Identifier",
                  "start": 2672,
                  "end": 2677,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2660,
              "end": 2663,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2661,
                  "end": 2662,
                  "name": {
                    "type": "Identifier",
                    "start": 2661,
                    "end": 2662,
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
              "start": 2678,
              "end": 2714,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2688,
                  "end": 2707,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2688,
                    "end": 2689,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2689,
                    "end": 2706,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2691,
                      "end": 2706,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2696,
                          "end": 2700,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2697,
                            "end": 2700,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2699,
                              "end": 2700,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2699,
                                "end": 2700,
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
                        "start": 2702,
                        "end": 2706,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2705,
                          "end": 2706,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2705,
                            "end": 2706,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2721,
            "end": 2784,
            "id": {
              "type": "Identifier",
              "start": 2731,
              "end": 2733,
              "name": "I4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2745,
                "end": 2750,
                "expression": {
                  "type": "Identifier",
                  "start": 2745,
                  "end": 2750,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2733,
              "end": 2736,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2734,
                  "end": 2735,
                  "name": {
                    "type": "Identifier",
                    "start": 2734,
                    "end": 2735,
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
              "start": 2751,
              "end": 2784,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2761,
                  "end": 2777,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2761,
                    "end": 2763,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2763,
                    "end": 2776,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2765,
                      "end": 2776,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2772,
                        "end": 2776,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2775,
                          "end": 2776,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2775,
                            "end": 2776,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2790,
            "end": 2856,
            "id": {
              "type": "Identifier",
              "start": 2800,
              "end": 2802,
              "name": "I5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2814,
                "end": 2819,
                "expression": {
                  "type": "Identifier",
                  "start": 2814,
                  "end": 2819,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2802,
              "end": 2805,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2803,
                  "end": 2804,
                  "name": {
                    "type": "Identifier",
                    "start": 2803,
                    "end": 2804,
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
              "start": 2820,
              "end": 2856,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2830,
                  "end": 2850,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2830,
                    "end": 2832,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2832,
                    "end": 2850,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2834,
                      "end": 2850,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2839,
                          "end": 2844,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2841,
                            "end": 2844,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2843,
                              "end": 2844,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2843,
                                "end": 2844,
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
                        "start": 2846,
                        "end": 2850,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2849,
                          "end": 2850,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2849,
                            "end": 2850,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2862,
            "end": 2928,
            "id": {
              "type": "Identifier",
              "start": 2872,
              "end": 2874,
              "name": "I6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2886,
                "end": 2891,
                "expression": {
                  "type": "Identifier",
                  "start": 2886,
                  "end": 2891,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2874,
              "end": 2877,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2875,
                  "end": 2876,
                  "name": {
                    "type": "Identifier",
                    "start": 2875,
                    "end": 2876,
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
              "start": 2892,
              "end": 2928,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2902,
                  "end": 2922,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2902,
                    "end": 2904,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2904,
                    "end": 2921,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2906,
                      "end": 2921,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2911,
                          "end": 2915,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2912,
                            "end": 2915,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2914,
                              "end": 2915,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2914,
                                "end": 2915,
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
                        "start": 2917,
                        "end": 2921,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2920,
                          "end": 2921,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2920,
                            "end": 2921,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 2935,
            "end": 2997,
            "id": {
              "type": "Identifier",
              "start": 2945,
              "end": 2947,
              "name": "I7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 2959,
                "end": 2964,
                "expression": {
                  "type": "Identifier",
                  "start": 2959,
                  "end": 2964,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2947,
              "end": 2950,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2948,
                  "end": 2949,
                  "name": {
                    "type": "Identifier",
                    "start": 2948,
                    "end": 2949,
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
              "start": 2965,
              "end": 2997,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 2975,
                  "end": 2991,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2975,
                    "end": 2977,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2977,
                    "end": 2990,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 2979,
                      "end": 2990,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2986,
                        "end": 2990,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2989,
                          "end": 2990,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2989,
                            "end": 2990,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3003,
            "end": 3071,
            "id": {
              "type": "Identifier",
              "start": 3013,
              "end": 3015,
              "name": "I8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3027,
                "end": 3032,
                "expression": {
                  "type": "Identifier",
                  "start": 3027,
                  "end": 3032,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3015,
              "end": 3018,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3016,
                  "end": 3017,
                  "name": {
                    "type": "Identifier",
                    "start": 3016,
                    "end": 3017,
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
              "start": 3033,
              "end": 3071,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3043,
                  "end": 3064,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3043,
                    "end": 3045,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3045,
                    "end": 3063,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3047,
                      "end": 3063,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3052,
                          "end": 3057,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3054,
                            "end": 3057,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3056,
                              "end": 3057,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3056,
                                "end": 3057,
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
                        "start": 3059,
                        "end": 3063,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3062,
                          "end": 3063,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3062,
                            "end": 3063,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3077,
            "end": 3144,
            "id": {
              "type": "Identifier",
              "start": 3087,
              "end": 3089,
              "name": "I9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3101,
                "end": 3106,
                "expression": {
                  "type": "Identifier",
                  "start": 3101,
                  "end": 3106,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3089,
              "end": 3092,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3090,
                  "end": 3091,
                  "name": {
                    "type": "Identifier",
                    "start": 3090,
                    "end": 3091,
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
              "start": 3107,
              "end": 3144,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3117,
                  "end": 3137,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3117,
                    "end": 3119,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3119,
                    "end": 3136,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3121,
                      "end": 3136,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3126,
                          "end": 3130,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3127,
                            "end": 3130,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3129,
                              "end": 3130,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3129,
                                "end": 3130,
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
                        "start": 3132,
                        "end": 3136,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3135,
                          "end": 3136,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3135,
                            "end": 3136,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3150,
            "end": 3225,
            "id": {
              "type": "Identifier",
              "start": 3160,
              "end": 3163,
              "name": "I10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3175,
                "end": 3180,
                "expression": {
                  "type": "Identifier",
                  "start": 3175,
                  "end": 3180,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3163,
              "end": 3166,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3164,
                  "end": 3165,
                  "name": {
                    "type": "Identifier",
                    "start": 3164,
                    "end": 3165,
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
              "start": 3181,
              "end": 3225,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3191,
                  "end": 3217,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3191,
                    "end": 3193,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3193,
                    "end": 3216,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3195,
                      "end": 3216,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3200,
                          "end": 3204,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3201,
                            "end": 3204,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3203,
                              "end": 3204,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3203,
                                "end": 3204,
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
                          "start": 3206,
                          "end": 3210,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3207,
                            "end": 3210,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3209,
                              "end": 3210,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3209,
                                "end": 3210,
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
                        "start": 3212,
                        "end": 3216,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3215,
                          "end": 3216,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3215,
                            "end": 3216,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3232,
            "end": 3296,
            "id": {
              "type": "Identifier",
              "start": 3242,
              "end": 3245,
              "name": "I11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3257,
                "end": 3262,
                "expression": {
                  "type": "Identifier",
                  "start": 3257,
                  "end": 3262,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3245,
              "end": 3248,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3246,
                  "end": 3247,
                  "name": {
                    "type": "Identifier",
                    "start": 3246,
                    "end": 3247,
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
              "start": 3263,
              "end": 3296,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3273,
                  "end": 3289,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3273,
                    "end": 3275,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3275,
                    "end": 3288,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3277,
                      "end": 3288,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3284,
                        "end": 3288,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3287,
                          "end": 3288,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3287,
                            "end": 3288,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3302,
            "end": 3378,
            "id": {
              "type": "Identifier",
              "start": 3312,
              "end": 3315,
              "name": "I12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3327,
                "end": 3332,
                "expression": {
                  "type": "Identifier",
                  "start": 3327,
                  "end": 3332,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3315,
              "end": 3318,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3316,
                  "end": 3317,
                  "name": {
                    "type": "Identifier",
                    "start": 3316,
                    "end": 3317,
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
              "start": 3333,
              "end": 3378,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3343,
                  "end": 3371,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3343,
                    "end": 3345,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3345,
                    "end": 3370,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3347,
                      "end": 3370,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3352,
                          "end": 3357,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3354,
                            "end": 3357,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3356,
                              "end": 3357,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3356,
                                "end": 3357,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 3359,
                          "end": 3364,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3361,
                            "end": 3364,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3363,
                              "end": 3364,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3363,
                                "end": 3364,
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
                        "start": 3366,
                        "end": 3370,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3369,
                          "end": 3370,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3369,
                            "end": 3370,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3384,
            "end": 3452,
            "id": {
              "type": "Identifier",
              "start": 3394,
              "end": 3397,
              "name": "I13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3409,
                "end": 3414,
                "expression": {
                  "type": "Identifier",
                  "start": 3409,
                  "end": 3414,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3397,
              "end": 3400,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3398,
                  "end": 3399,
                  "name": {
                    "type": "Identifier",
                    "start": 3398,
                    "end": 3399,
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
              "start": 3415,
              "end": 3452,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3425,
                  "end": 3445,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3425,
                    "end": 3427,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3427,
                    "end": 3444,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3429,
                      "end": 3444,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3434,
                          "end": 3438,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3435,
                            "end": 3438,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3437,
                              "end": 3438,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3437,
                                "end": 3438,
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
                        "start": 3440,
                        "end": 3444,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3443,
                          "end": 3444,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3443,
                            "end": 3444,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3458,
            "end": 3532,
            "id": {
              "type": "Identifier",
              "start": 3468,
              "end": 3471,
              "name": "I14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3483,
                "end": 3488,
                "expression": {
                  "type": "Identifier",
                  "start": 3483,
                  "end": 3488,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3471,
              "end": 3474,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3472,
                  "end": 3473,
                  "name": {
                    "type": "Identifier",
                    "start": 3472,
                    "end": 3473,
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
              "start": 3489,
              "end": 3532,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3499,
                  "end": 3525,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3499,
                    "end": 3501,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3501,
                    "end": 3524,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3503,
                      "end": 3524,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3508,
                          "end": 3512,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3509,
                            "end": 3512,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3511,
                              "end": 3512,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3511,
                                "end": 3512,
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
                          "start": 3514,
                          "end": 3518,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3515,
                            "end": 3518,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3517,
                              "end": 3518,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3517,
                                "end": 3518,
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
                        "start": 3520,
                        "end": 3524,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3523,
                          "end": 3524,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3523,
                            "end": 3524,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3539,
            "end": 3603,
            "id": {
              "type": "Identifier",
              "start": 3549,
              "end": 3552,
              "name": "I15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3564,
                "end": 3569,
                "expression": {
                  "type": "Identifier",
                  "start": 3564,
                  "end": 3569,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3552,
              "end": 3555,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3553,
                  "end": 3554,
                  "name": {
                    "type": "Identifier",
                    "start": 3553,
                    "end": 3554,
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
              "start": 3570,
              "end": 3603,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3580,
                  "end": 3596,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3580,
                    "end": 3582,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3582,
                    "end": 3595,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3584,
                      "end": 3595,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3591,
                        "end": 3595,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3594,
                          "end": 3595,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3594,
                            "end": 3595,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3609,
            "end": 3685,
            "id": {
              "type": "Identifier",
              "start": 3619,
              "end": 3622,
              "name": "I16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3634,
                "end": 3639,
                "expression": {
                  "type": "Identifier",
                  "start": 3634,
                  "end": 3639,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3622,
              "end": 3625,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3623,
                  "end": 3624,
                  "name": {
                    "type": "Identifier",
                    "start": 3623,
                    "end": 3624,
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
              "start": 3640,
              "end": 3685,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3650,
                  "end": 3678,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3650,
                    "end": 3652,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3652,
                    "end": 3677,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3654,
                      "end": 3677,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3659,
                          "end": 3664,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3661,
                            "end": 3664,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3663,
                              "end": 3664,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3663,
                                "end": 3664,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 3666,
                          "end": 3671,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3668,
                            "end": 3671,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3670,
                              "end": 3671,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3670,
                                "end": 3671,
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
                        "start": 3673,
                        "end": 3677,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3676,
                          "end": 3677,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3676,
                            "end": 3677,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3691,
            "end": 3758,
            "id": {
              "type": "Identifier",
              "start": 3701,
              "end": 3704,
              "name": "I17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3716,
                "end": 3721,
                "expression": {
                  "type": "Identifier",
                  "start": 3716,
                  "end": 3721,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3704,
              "end": 3707,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3705,
                  "end": 3706,
                  "name": {
                    "type": "Identifier",
                    "start": 3705,
                    "end": 3706,
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
              "start": 3722,
              "end": 3758,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3732,
                  "end": 3752,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3732,
                    "end": 3734,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3734,
                    "end": 3751,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3736,
                      "end": 3751,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3741,
                          "end": 3745,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3742,
                            "end": 3745,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3744,
                              "end": 3745,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3744,
                                "end": 3745,
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
                        "start": 3747,
                        "end": 3751,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3750,
                          "end": 3751,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3750,
                            "end": 3751,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 3764,
            "end": 3838,
            "id": {
              "type": "Identifier",
              "start": 3774,
              "end": 3777,
              "name": "I18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 3789,
                "end": 3794,
                "expression": {
                  "type": "Identifier",
                  "start": 3789,
                  "end": 3794,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3777,
              "end": 3780,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3778,
                  "end": 3779,
                  "name": {
                    "type": "Identifier",
                    "start": 3778,
                    "end": 3779,
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
              "start": 3795,
              "end": 3838,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3805,
                  "end": 3831,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3805,
                    "end": 3807,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3807,
                    "end": 3830,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3809,
                      "end": 3830,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3814,
                          "end": 3818,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3815,
                            "end": 3818,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3817,
                              "end": 3818,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3817,
                                "end": 3818,
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
                          "start": 3820,
                          "end": 3824,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3821,
                            "end": 3824,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3823,
                              "end": 3824,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3823,
                                "end": 3824,
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
                        "start": 3826,
                        "end": 3830,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3829,
                          "end": 3830,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3829,
                            "end": 3830,
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
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3842,
      "end": 6344,
      "id": {
        "type": "Identifier",
        "start": 3849,
        "end": 3871,
        "name": "GenericSignaturesValid",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3872,
        "end": 6344,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 3879,
            "end": 4073,
            "id": {
              "type": "Identifier",
              "start": 3889,
              "end": 3894,
              "name": "Base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 3895,
              "end": 4073,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 3905,
                  "end": 3923,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3905,
                    "end": 3906,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3906,
                    "end": 3922,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3908,
                      "end": 3922,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3912,
                        "end": 3915,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3913,
                            "end": 3914,
                            "name": {
                              "type": "Identifier",
                              "start": 3913,
                              "end": 3914,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3918,
                        "end": 3922,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3921,
                          "end": 3922,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3921,
                            "end": 3922,
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
                  "start": 3932,
                  "end": 3956,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3932,
                    "end": 3934,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3934,
                    "end": 3955,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3936,
                      "end": 3955,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3940,
                        "end": 3943,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3941,
                            "end": 3942,
                            "name": {
                              "type": "Identifier",
                              "start": 3941,
                              "end": 3942,
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
                          "start": 3944,
                          "end": 3949,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3946,
                            "end": 3949,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3948,
                              "end": 3949,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3948,
                                "end": 3949,
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
                        "start": 3951,
                        "end": 3955,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3954,
                          "end": 3955,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3954,
                            "end": 3955,
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
                  "start": 3965,
                  "end": 3988,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3965,
                    "end": 3967,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3967,
                    "end": 3987,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 3969,
                      "end": 3987,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3973,
                        "end": 3976,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3974,
                            "end": 3975,
                            "name": {
                              "type": "Identifier",
                              "start": 3974,
                              "end": 3975,
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
                          "start": 3977,
                          "end": 3981,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3978,
                            "end": 3981,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3980,
                              "end": 3981,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3980,
                                "end": 3981,
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
                        "start": 3983,
                        "end": 3987,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3986,
                          "end": 3987,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3986,
                            "end": 3987,
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
                  "start": 3997,
                  "end": 4027,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3997,
                    "end": 3999,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3999,
                    "end": 4026,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4001,
                      "end": 4026,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4005,
                        "end": 4008,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4006,
                            "end": 4007,
                            "name": {
                              "type": "Identifier",
                              "start": 4006,
                              "end": 4007,
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
                          "start": 4009,
                          "end": 4013,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4010,
                            "end": 4013,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4012,
                              "end": 4013,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4012,
                                "end": 4013,
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
                          "start": 4015,
                          "end": 4020,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4017,
                            "end": 4020,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4019,
                              "end": 4020,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4019,
                                "end": 4020,
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
                        "start": 4022,
                        "end": 4026,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4025,
                          "end": 4026,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4025,
                            "end": 4026,
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
                  "start": 4036,
                  "end": 4067,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4036,
                    "end": 4038,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4038,
                    "end": 4066,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4040,
                      "end": 4066,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4044,
                        "end": 4047,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4045,
                            "end": 4046,
                            "name": {
                              "type": "Identifier",
                              "start": 4045,
                              "end": 4046,
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
                          "start": 4048,
                          "end": 4053,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4050,
                            "end": 4053,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4052,
                              "end": 4053,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4052,
                                "end": 4053,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 4055,
                          "end": 4060,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4057,
                            "end": 4060,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4059,
                              "end": 4060,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4059,
                                "end": 4060,
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
                        "start": 4062,
                        "end": 4066,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4065,
                          "end": 4066,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4065,
                            "end": 4066,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4097,
            "end": 4196,
            "id": {
              "type": "Identifier",
              "start": 4107,
              "end": 4109,
              "name": "I1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4118,
                "end": 4123,
                "expression": {
                  "type": "Identifier",
                  "start": 4118,
                  "end": 4123,
                  "name": "Base2",
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
              "start": 4124,
              "end": 4196,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4134,
                  "end": 4152,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4134,
                    "end": 4135,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4135,
                    "end": 4151,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4137,
                      "end": 4151,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4141,
                        "end": 4144,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4142,
                            "end": 4143,
                            "name": {
                              "type": "Identifier",
                              "start": 4142,
                              "end": 4143,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4147,
                        "end": 4151,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4150,
                          "end": 4151,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4150,
                            "end": 4151,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4202,
            "end": 4363,
            "id": {
              "type": "Identifier",
              "start": 4212,
              "end": 4214,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4223,
                "end": 4228,
                "expression": {
                  "type": "Identifier",
                  "start": 4223,
                  "end": 4228,
                  "name": "Base2",
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
              "start": 4229,
              "end": 4363,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4239,
                  "end": 4262,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4239,
                    "end": 4240,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4240,
                    "end": 4261,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4242,
                      "end": 4261,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4246,
                        "end": 4249,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4247,
                            "end": 4248,
                            "name": {
                              "type": "Identifier",
                              "start": 4247,
                              "end": 4248,
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
                          "start": 4250,
                          "end": 4255,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4252,
                            "end": 4255,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4254,
                              "end": 4255,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4254,
                                "end": 4255,
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
                        "start": 4257,
                        "end": 4261,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4260,
                          "end": 4261,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4260,
                            "end": 4261,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4369,
            "end": 4529,
            "id": {
              "type": "Identifier",
              "start": 4379,
              "end": 4381,
              "name": "I3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4390,
                "end": 4395,
                "expression": {
                  "type": "Identifier",
                  "start": 4390,
                  "end": 4395,
                  "name": "Base2",
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
              "start": 4396,
              "end": 4529,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4406,
                  "end": 4428,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4406,
                    "end": 4407,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4407,
                    "end": 4427,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4409,
                      "end": 4427,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4413,
                        "end": 4416,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4414,
                            "end": 4415,
                            "name": {
                              "type": "Identifier",
                              "start": 4414,
                              "end": 4415,
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
                          "start": 4417,
                          "end": 4421,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4418,
                            "end": 4421,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4420,
                              "end": 4421,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4420,
                                "end": 4421,
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
                        "start": 4423,
                        "end": 4427,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4426,
                          "end": 4427,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4426,
                            "end": 4427,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4536,
            "end": 4693,
            "id": {
              "type": "Identifier",
              "start": 4546,
              "end": 4548,
              "name": "I4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4557,
                "end": 4562,
                "expression": {
                  "type": "Identifier",
                  "start": 4557,
                  "end": 4562,
                  "name": "Base2",
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
              "start": 4563,
              "end": 4693,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4573,
                  "end": 4592,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4573,
                    "end": 4575,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4575,
                    "end": 4591,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4577,
                      "end": 4591,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4581,
                        "end": 4584,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4582,
                            "end": 4583,
                            "name": {
                              "type": "Identifier",
                              "start": 4582,
                              "end": 4583,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4587,
                        "end": 4591,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4590,
                          "end": 4591,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4590,
                            "end": 4591,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4699,
            "end": 4783,
            "id": {
              "type": "Identifier",
              "start": 4709,
              "end": 4711,
              "name": "I5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4720,
                "end": 4725,
                "expression": {
                  "type": "Identifier",
                  "start": 4720,
                  "end": 4725,
                  "name": "Base2",
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
              "start": 4726,
              "end": 4783,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4736,
                  "end": 4760,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4736,
                    "end": 4738,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4738,
                    "end": 4759,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4740,
                      "end": 4759,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4744,
                        "end": 4747,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4745,
                            "end": 4746,
                            "name": {
                              "type": "Identifier",
                              "start": 4745,
                              "end": 4746,
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
                          "start": 4748,
                          "end": 4753,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4750,
                            "end": 4753,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4752,
                              "end": 4753,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4752,
                                "end": 4753,
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
                        "start": 4755,
                        "end": 4759,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4758,
                          "end": 4759,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4758,
                            "end": 4759,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4789,
            "end": 4884,
            "id": {
              "type": "Identifier",
              "start": 4799,
              "end": 4801,
              "name": "I6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4810,
                "end": 4815,
                "expression": {
                  "type": "Identifier",
                  "start": 4810,
                  "end": 4815,
                  "name": "Base2",
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
              "start": 4816,
              "end": 4884,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4826,
                  "end": 4849,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4826,
                    "end": 4828,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4828,
                    "end": 4848,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4830,
                      "end": 4848,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4834,
                        "end": 4837,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4835,
                            "end": 4836,
                            "name": {
                              "type": "Identifier",
                              "start": 4835,
                              "end": 4836,
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
                          "start": 4838,
                          "end": 4842,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4839,
                            "end": 4842,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4841,
                              "end": 4842,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4841,
                                "end": 4842,
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
                        "start": 4844,
                        "end": 4848,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4847,
                          "end": 4848,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4847,
                            "end": 4848,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4891,
            "end": 4982,
            "id": {
              "type": "Identifier",
              "start": 4901,
              "end": 4903,
              "name": "I7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4912,
                "end": 4917,
                "expression": {
                  "type": "Identifier",
                  "start": 4912,
                  "end": 4917,
                  "name": "Base2",
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
              "start": 4918,
              "end": 4982,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4928,
                  "end": 4947,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4928,
                    "end": 4930,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4930,
                    "end": 4946,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 4932,
                      "end": 4946,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4936,
                        "end": 4939,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4937,
                            "end": 4938,
                            "name": {
                              "type": "Identifier",
                              "start": 4937,
                              "end": 4938,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4942,
                        "end": 4946,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4945,
                          "end": 4946,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4945,
                            "end": 4946,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4988,
            "end": 5127,
            "id": {
              "type": "Identifier",
              "start": 4998,
              "end": 5000,
              "name": "I8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5009,
                "end": 5014,
                "expression": {
                  "type": "Identifier",
                  "start": 5009,
                  "end": 5014,
                  "name": "Base2",
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
              "start": 5015,
              "end": 5127,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5025,
                  "end": 5049,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5025,
                    "end": 5027,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5027,
                    "end": 5048,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5029,
                      "end": 5048,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5033,
                        "end": 5036,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5034,
                            "end": 5035,
                            "name": {
                              "type": "Identifier",
                              "start": 5034,
                              "end": 5035,
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
                          "start": 5037,
                          "end": 5042,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5039,
                            "end": 5042,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5041,
                              "end": 5042,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5041,
                                "end": 5042,
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
                        "start": 5044,
                        "end": 5048,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5047,
                          "end": 5048,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5047,
                            "end": 5048,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 5133,
            "end": 5248,
            "id": {
              "type": "Identifier",
              "start": 5143,
              "end": 5145,
              "name": "I9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5154,
                "end": 5159,
                "expression": {
                  "type": "Identifier",
                  "start": 5154,
                  "end": 5159,
                  "name": "Base2",
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
              "start": 5160,
              "end": 5248,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5170,
                  "end": 5193,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5170,
                    "end": 5172,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5172,
                    "end": 5192,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5174,
                      "end": 5192,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5178,
                        "end": 5181,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5179,
                            "end": 5180,
                            "name": {
                              "type": "Identifier",
                              "start": 5179,
                              "end": 5180,
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
                          "start": 5182,
                          "end": 5186,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5183,
                            "end": 5186,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5185,
                              "end": 5186,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5185,
                                "end": 5186,
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
                        "start": 5188,
                        "end": 5192,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5191,
                          "end": 5192,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5191,
                            "end": 5192,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 5254,
            "end": 5363,
            "id": {
              "type": "Identifier",
              "start": 5264,
              "end": 5267,
              "name": "I10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5276,
                "end": 5281,
                "expression": {
                  "type": "Identifier",
                  "start": 5276,
                  "end": 5281,
                  "name": "Base2",
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
              "start": 5282,
              "end": 5363,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5292,
                  "end": 5321,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5292,
                    "end": 5294,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5294,
                    "end": 5320,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5296,
                      "end": 5320,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5300,
                        "end": 5303,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5301,
                            "end": 5302,
                            "name": {
                              "type": "Identifier",
                              "start": 5301,
                              "end": 5302,
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
                          "start": 5304,
                          "end": 5308,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5305,
                            "end": 5308,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5307,
                              "end": 5308,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5307,
                                "end": 5308,
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
                          "start": 5310,
                          "end": 5314,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5311,
                            "end": 5314,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5313,
                              "end": 5314,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5313,
                                "end": 5314,
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
                        "start": 5316,
                        "end": 5320,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5319,
                          "end": 5320,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5319,
                            "end": 5320,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 5370,
            "end": 5528,
            "id": {
              "type": "Identifier",
              "start": 5380,
              "end": 5383,
              "name": "I11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5392,
                "end": 5397,
                "expression": {
                  "type": "Identifier",
                  "start": 5392,
                  "end": 5397,
                  "name": "Base2",
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
              "start": 5398,
              "end": 5528,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5408,
                  "end": 5427,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5408,
                    "end": 5410,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5410,
                    "end": 5426,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5412,
                      "end": 5426,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5416,
                        "end": 5419,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5417,
                            "end": 5418,
                            "name": {
                              "type": "Identifier",
                              "start": 5417,
                              "end": 5418,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5422,
                        "end": 5426,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5425,
                          "end": 5426,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5425,
                            "end": 5426,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 5534,
            "end": 5638,
            "id": {
              "type": "Identifier",
              "start": 5544,
              "end": 5547,
              "name": "I12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5556,
                "end": 5561,
                "expression": {
                  "type": "Identifier",
                  "start": 5556,
                  "end": 5561,
                  "name": "Base2",
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
              "start": 5562,
              "end": 5638,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5572,
                  "end": 5603,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5572,
                    "end": 5574,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5574,
                    "end": 5602,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5576,
                      "end": 5602,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5580,
                        "end": 5583,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5581,
                            "end": 5582,
                            "name": {
                              "type": "Identifier",
                              "start": 5581,
                              "end": 5582,
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
                          "start": 5584,
                          "end": 5589,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5586,
                            "end": 5589,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5588,
                              "end": 5589,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5588,
                                "end": 5589,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 5591,
                          "end": 5596,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5593,
                            "end": 5596,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5595,
                              "end": 5596,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5595,
                                "end": 5596,
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
                        "start": 5598,
                        "end": 5602,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5601,
                          "end": 5602,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5601,
                            "end": 5602,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 5644,
            "end": 5744,
            "id": {
              "type": "Identifier",
              "start": 5654,
              "end": 5657,
              "name": "I13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5666,
                "end": 5671,
                "expression": {
                  "type": "Identifier",
                  "start": 5666,
                  "end": 5671,
                  "name": "Base2",
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
              "start": 5672,
              "end": 5744,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5682,
                  "end": 5705,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5682,
                    "end": 5684,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5684,
                    "end": 5704,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5686,
                      "end": 5704,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5690,
                        "end": 5693,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5691,
                            "end": 5692,
                            "name": {
                              "type": "Identifier",
                              "start": 5691,
                              "end": 5692,
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
                          "start": 5694,
                          "end": 5698,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5695,
                            "end": 5698,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5697,
                              "end": 5698,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5697,
                                "end": 5698,
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
                        "start": 5700,
                        "end": 5704,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5703,
                          "end": 5704,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5703,
                            "end": 5704,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 5750,
            "end": 5853,
            "id": {
              "type": "Identifier",
              "start": 5760,
              "end": 5763,
              "name": "I14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5772,
                "end": 5777,
                "expression": {
                  "type": "Identifier",
                  "start": 5772,
                  "end": 5777,
                  "name": "Base2",
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
              "start": 5778,
              "end": 5853,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5788,
                  "end": 5817,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5788,
                    "end": 5790,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5790,
                    "end": 5816,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5792,
                      "end": 5816,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5796,
                        "end": 5799,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5797,
                            "end": 5798,
                            "name": {
                              "type": "Identifier",
                              "start": 5797,
                              "end": 5798,
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
                          "start": 5800,
                          "end": 5804,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5801,
                            "end": 5804,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5803,
                              "end": 5804,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5803,
                                "end": 5804,
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
                          "start": 5806,
                          "end": 5810,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5807,
                            "end": 5810,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5809,
                              "end": 5810,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5809,
                                "end": 5810,
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
                        "start": 5812,
                        "end": 5816,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5815,
                          "end": 5816,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5815,
                            "end": 5816,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 5860,
            "end": 6018,
            "id": {
              "type": "Identifier",
              "start": 5870,
              "end": 5873,
              "name": "I15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 5882,
                "end": 5887,
                "expression": {
                  "type": "Identifier",
                  "start": 5882,
                  "end": 5887,
                  "name": "Base2",
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
              "start": 5888,
              "end": 6018,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 5898,
                  "end": 5917,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5898,
                    "end": 5900,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5900,
                    "end": 5916,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 5902,
                      "end": 5916,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5906,
                        "end": 5909,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5907,
                            "end": 5908,
                            "name": {
                              "type": "Identifier",
                              "start": 5907,
                              "end": 5908,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5912,
                        "end": 5916,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5915,
                          "end": 5916,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5915,
                            "end": 5916,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 6024,
            "end": 6128,
            "id": {
              "type": "Identifier",
              "start": 6034,
              "end": 6037,
              "name": "I16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 6046,
                "end": 6051,
                "expression": {
                  "type": "Identifier",
                  "start": 6046,
                  "end": 6051,
                  "name": "Base2",
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
              "start": 6052,
              "end": 6128,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 6062,
                  "end": 6093,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6062,
                    "end": 6064,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6064,
                    "end": 6092,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 6066,
                      "end": 6092,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6070,
                        "end": 6073,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6071,
                            "end": 6072,
                            "name": {
                              "type": "Identifier",
                              "start": 6071,
                              "end": 6072,
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
                          "start": 6074,
                          "end": 6079,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6076,
                            "end": 6079,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6078,
                              "end": 6079,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6078,
                                "end": 6079,
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
                        },
                        {
                          "type": "Identifier",
                          "start": 6081,
                          "end": 6086,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6083,
                            "end": 6086,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6085,
                              "end": 6086,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6085,
                                "end": 6086,
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
                        "start": 6088,
                        "end": 6092,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6091,
                          "end": 6092,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6091,
                            "end": 6092,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 6134,
            "end": 6233,
            "id": {
              "type": "Identifier",
              "start": 6144,
              "end": 6147,
              "name": "I17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 6156,
                "end": 6161,
                "expression": {
                  "type": "Identifier",
                  "start": 6156,
                  "end": 6161,
                  "name": "Base2",
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
              "start": 6162,
              "end": 6233,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 6172,
                  "end": 6195,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6172,
                    "end": 6174,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6174,
                    "end": 6194,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 6176,
                      "end": 6194,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6180,
                        "end": 6183,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6181,
                            "end": 6182,
                            "name": {
                              "type": "Identifier",
                              "start": 6181,
                              "end": 6182,
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
                          "start": 6184,
                          "end": 6188,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6185,
                            "end": 6188,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6187,
                              "end": 6188,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6187,
                                "end": 6188,
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
                        "start": 6190,
                        "end": 6194,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6193,
                          "end": 6194,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6193,
                            "end": 6194,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 6239,
            "end": 6342,
            "id": {
              "type": "Identifier",
              "start": 6249,
              "end": 6252,
              "name": "I18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 6261,
                "end": 6266,
                "expression": {
                  "type": "Identifier",
                  "start": 6261,
                  "end": 6266,
                  "name": "Base2",
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
              "start": 6267,
              "end": 6342,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 6277,
                  "end": 6306,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6277,
                    "end": 6279,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6279,
                    "end": 6305,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 6281,
                      "end": 6305,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6285,
                        "end": 6288,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6286,
                            "end": 6287,
                            "name": {
                              "type": "Identifier",
                              "start": 6286,
                              "end": 6287,
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
                          "start": 6289,
                          "end": 6293,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6290,
                            "end": 6293,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6292,
                              "end": 6293,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6292,
                                "end": 6293,
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
                          "start": 6295,
                          "end": 6299,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6296,
                            "end": 6299,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6298,
                              "end": 6299,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6298,
                                "end": 6299,
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
                        "start": 6301,
                        "end": 6305,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6304,
                          "end": 6305,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6304,
                            "end": 6305,
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
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
