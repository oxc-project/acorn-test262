__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 123,
  "end": 1579,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 181,
      "body": {
        "type": "TSInterfaceBody",
        "start": 141,
        "end": 181,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 145,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 149,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 178,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 160,
                  "end": 178,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 161,
                      "end": 177,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 162,
                          "end": 168,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 165,
                            "end": 168,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 167,
                              "end": 168,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 167,
                                "end": 168,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 170,
                        "end": 177,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 173,
                          "end": 177
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 160,
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 133,
        "end": 137,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 137,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 139,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 214,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 214,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 206,
                  "end": 214,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 207,
                      "end": 213
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 206,
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 236,
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 236,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 231,
                  "end": 236,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 232,
                      "end": 235,
                      "literal": {
                        "type": "Literal",
                        "start": 232,
                        "end": 235,
                        "raw": "'a'",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 231,
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 239,
            "end": 242,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 268,
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 255,
                "end": 268,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 259,
                  "end": 268,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 260,
                      "end": 267
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 259,
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 271,
            "end": 274,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 339,
      "end": 425,
      "body": {
        "type": "TSInterfaceBody",
        "start": 357,
        "end": 425,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 361,
            "end": 366,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 365,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 364,
                "end": 365,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 369,
            "end": 423,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 423,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 372,
                "end": 423,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 374,
                    "end": 394,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 375,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 375,
                      "end": 393,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 377,
                        "end": 393,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 378,
                            "end": 384,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 381,
                              "end": 384,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 383,
                                "end": 384,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 383,
                                  "end": 384,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 386,
                          "end": 393,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 389,
                            "end": 393
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 395,
                    "end": 421,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 396,
                      "end": 420,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 398,
                        "end": 420,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 402,
                          "end": 420,
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "start": 403,
                              "end": 419,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 404,
                                  "end": 410,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 407,
                                    "end": 410,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 409,
                                      "end": 410,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 409,
                                        "end": 410,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 412,
                                "end": 419,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 415,
                                  "end": 419
                                }
                              },
                              "typeParameters": null
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 402,
                          "decorators": [],
                          "name": "Foo2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 353,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 353,
        "end": 356,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 354,
            "end": 355,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 458,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 458,
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 458,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 446,
                "end": 458,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 450,
                  "end": 458,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 451,
                      "end": 457
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 450,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 486,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 480,
            "decorators": [],
            "name": "f21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 471,
                "end": 480,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 475,
                  "end": 480,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 476,
                      "end": 479,
                      "literal": {
                        "type": "Literal",
                        "start": 476,
                        "end": 479,
                        "raw": "'a'",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 475,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 483,
            "end": 486,
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 518,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 512,
            "decorators": [],
            "name": "f22",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 512,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 499,
                "end": 512,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 503,
                  "end": 512,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 504,
                      "end": 511
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 503,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 515,
            "end": 518,
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 644,
      "end": 699,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 653,
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 659,
        "end": 699,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 663,
            "end": 668,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 664,
              "end": 667,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 666,
                "end": 667,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 667,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 671,
            "end": 697,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 672,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 672,
              "end": 696,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 674,
                "end": 696,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 678,
                  "end": 696,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 679,
                      "end": 695,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 680,
                          "end": 686,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 683,
                            "end": 686,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 685,
                              "end": 686,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 685,
                                "end": 686,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 688,
                        "end": 695,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 691,
                          "end": 695
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 678,
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 653,
        "end": 656,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 654,
            "end": 655,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 654,
              "end": 655,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 715,
          "end": 732,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 715,
            "end": 732,
            "decorators": [],
            "name": "f30",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 718,
              "end": 732,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 720,
                "end": 732,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 724,
                  "end": 732,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 725,
                      "end": 731
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 724,
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 734,
      "end": 761,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 740,
          "end": 760,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 754,
            "decorators": [],
            "name": "f31",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 743,
              "end": 754,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 745,
                "end": 754,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 749,
                  "end": 754,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 750,
                      "end": 753,
                      "literal": {
                        "type": "Literal",
                        "start": 750,
                        "end": 753,
                        "raw": "'a'",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 749,
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 757,
            "end": 760,
            "decorators": [],
            "name": "f30",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 762,
      "end": 793,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 768,
          "end": 792,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 768,
            "end": 786,
            "decorators": [],
            "name": "f32",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 771,
              "end": 786,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 773,
                "end": 786,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 777,
                  "end": 786,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 778,
                      "end": 785
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 777,
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 789,
            "end": 792,
            "decorators": [],
            "name": "f30",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 857,
      "end": 940,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 862,
        "end": 866,
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 872,
        "end": 940,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 876,
            "end": 881,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 876,
              "end": 877,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 877,
              "end": 880,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 879,
                "end": 880,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 880,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 884,
            "end": 938,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 885,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 885,
              "end": 938,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 887,
                "end": 938,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 889,
                    "end": 909,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 889,
                      "end": 890,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 890,
                      "end": 908,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 892,
                        "end": 908,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 893,
                            "end": 899,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 896,
                              "end": 899,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 898,
                                "end": 899,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 898,
                                  "end": 899,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 901,
                          "end": 908,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 904,
                            "end": 908
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 910,
                    "end": 936,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 910,
                      "end": 911,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 911,
                      "end": 935,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 913,
                        "end": 935,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 917,
                          "end": 935,
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "start": 918,
                              "end": 934,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 919,
                                  "end": 925,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 922,
                                    "end": 925,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 924,
                                      "end": 925,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 924,
                                        "end": 925,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 927,
                                "end": 934,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 930,
                                  "end": 934
                                }
                              },
                              "typeParameters": null
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 913,
                          "end": 917,
                          "decorators": [],
                          "name": "Foo4",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 866,
        "end": 869,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 867,
            "end": 868,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 942,
      "end": 974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 956,
          "end": 973,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 956,
            "end": 973,
            "decorators": [],
            "name": "f40",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 959,
              "end": 973,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 961,
                "end": 973,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 965,
                  "end": 973,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 966,
                      "end": 972
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 965,
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 975,
      "end": 1002,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 981,
          "end": 1001,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 981,
            "end": 995,
            "decorators": [],
            "name": "f41",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 984,
              "end": 995,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 986,
                "end": 995,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 990,
                  "end": 995,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 991,
                      "end": 994,
                      "literal": {
                        "type": "Literal",
                        "start": 991,
                        "end": 994,
                        "raw": "'a'",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 986,
                  "end": 990,
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 998,
            "end": 1001,
            "decorators": [],
            "name": "f40",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1003,
      "end": 1034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1009,
          "end": 1033,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1009,
            "end": 1027,
            "decorators": [],
            "name": "f42",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1012,
              "end": 1027,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1014,
                "end": 1027,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1018,
                  "end": 1027,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1019,
                      "end": 1026
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1018,
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1030,
            "end": 1033,
            "decorators": [],
            "name": "f40",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1057,
      "end": 1129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1076,
        "end": 1129,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1080,
            "end": 1090,
            "params": [
              {
                "type": "Identifier",
                "start": 1081,
                "end": 1085,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1082,
                  "end": 1085,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1084,
                    "end": 1085,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1084,
                      "end": 1085,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1086,
              "end": 1089,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1088,
                "end": 1089,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1089,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1093,
            "end": 1127,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1093,
              "end": 1097,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1101,
                "end": 1115,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1105,
                  "end": 1115,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1107,
                    "end": 1115,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1109,
                      "end": 1115,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1110,
                          "end": 1111,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1111,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1113,
                          "end": 1114,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1113,
                            "end": 1114,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1107,
                      "end": 1109,
                      "decorators": [],
                      "name": "Fn",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1116,
              "end": 1126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1118,
                "end": 1126,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1120,
                  "end": 1126,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1121,
                      "end": 1122,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1121,
                        "end": 1122,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1124,
                      "end": 1125,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1124,
                        "end": 1125,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1120,
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1097,
              "end": 1100,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1098,
                  "end": 1099,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1099,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1067,
        "end": 1069,
        "decorators": [],
        "name": "Fn",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1069,
        "end": 1075,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1070,
            "end": 1071,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1070,
              "end": 1071,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1073,
            "end": 1074,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1073,
              "end": 1074,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1131,
      "end": 1168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1145,
          "end": 1167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1145,
            "end": 1167,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1147,
              "end": 1167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1149,
                "end": 1167,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1151,
                  "end": 1167,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1152,
                      "end": 1158
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1160,
                      "end": 1166
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1149,
                  "end": 1151,
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1192,
      "end": 1228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1198,
          "end": 1227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1198,
            "end": 1222,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1201,
              "end": 1222,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1203,
                "end": 1222,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1205,
                  "end": 1222,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1206,
                      "end": 1213
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1215,
                      "end": 1221
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1203,
                  "end": 1205,
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1225,
            "end": 1227,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1239,
      "end": 1271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1245,
          "end": 1270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1245,
            "end": 1265,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1248,
              "end": 1265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1250,
                "end": 1265,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1252,
                  "end": 1265,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 1253,
                      "end": 1256,
                      "literal": {
                        "type": "Literal",
                        "start": 1253,
                        "end": 1256,
                        "raw": "'a'",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1258,
                      "end": 1264
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1250,
                  "end": 1252,
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1268,
            "end": 1270,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1291,
      "end": 1327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1297,
          "end": 1326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1297,
            "end": 1321,
            "decorators": [],
            "name": "fn3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1300,
              "end": 1321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1302,
                "end": 1321,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1304,
                  "end": 1321,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1305,
                      "end": 1311
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1313,
                      "end": 1320
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1304,
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1324,
            "end": 1326,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1328,
      "end": 1358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1334,
          "end": 1357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1334,
            "end": 1352,
            "decorators": [],
            "name": "fn4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1337,
              "end": 1352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1339,
                "end": 1352,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1341,
                  "end": 1352,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1342,
                      "end": 1348
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 1350,
                      "end": 1351,
                      "literal": {
                        "type": "Literal",
                        "start": 1350,
                        "end": 1351,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1341,
                  "decorators": [],
                  "name": "Fn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1355,
            "end": 1357,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1392,
      "end": 1435,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1414,
        "end": 1435,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1418,
            "end": 1433,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1418,
              "end": 1419,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1419,
              "end": 1432,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1421,
                "end": 1432,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1422,
                  "end": 1432,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1423,
                      "end": 1428,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1423,
                        "end": 1428,
                        "decorators": [],
                        "name": "Dummy",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1430,
                      "end": 1431,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1430,
                        "end": 1431,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1422,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1402,
        "end": 1403,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1403,
        "end": 1413,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1404,
            "end": 1409,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1404,
              "end": 1409,
              "decorators": [],
              "name": "Dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1411,
            "end": 1412,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1411,
              "end": 1412,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1437,
      "end": 1511,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1455,
        "end": 1511,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1459,
            "end": 1484,
            "accessibility": null,
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1467,
              "end": 1470,
              "decorators": [],
              "name": "sub",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1470,
              "end": 1483,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1472,
                "end": 1483,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1473,
                  "end": 1483,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1474,
                      "end": 1479,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1474,
                        "end": 1479,
                        "decorators": [],
                        "name": "Dummy",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1481,
                      "end": 1482,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1481,
                        "end": 1482,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1473,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1487,
            "end": 1509,
            "accessibility": null,
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1495,
              "end": 1505,
              "decorators": [],
              "name": "covariance",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1505,
              "end": 1508,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1507,
                "end": 1508,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1508,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1443,
        "end": 1444,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1444,
        "end": 1454,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1445,
            "end": 1450,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1445,
              "end": 1450,
              "decorators": [],
              "name": "Dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1452,
            "end": 1453,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1452,
              "end": 1453,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1513,
      "end": 1569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1519,
          "end": 1568,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1519,
            "end": 1541,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1521,
              "end": 1541,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1523,
                "end": 1541,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1524,
                  "end": 1541,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1525,
                      "end": 1532
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 1534,
                      "end": 1540
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1523,
                  "end": 1524,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 1544,
            "end": 1568,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1548,
              "end": 1549,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1549,
              "end": 1566,
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 1550,
                  "end": 1557
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1559,
                  "end": 1565
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
