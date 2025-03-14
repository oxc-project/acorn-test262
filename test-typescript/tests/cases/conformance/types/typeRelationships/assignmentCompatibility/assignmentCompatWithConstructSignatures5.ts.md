assignmentCompatWithConstructSignatures5.ts
```json
{
  "type": "Program",
  "start": 61,
  "end": 1872,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 88,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 86,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
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
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
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
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 130,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 129,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 123,
                "end": 129
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
        "start": 95,
        "end": 102,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 111,
        "end": 115,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 164,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 166,
            "end": 178,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 177,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 171,
                "end": 177
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
        "start": 139,
        "end": 147,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 163,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 230,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 213,
        "end": 230,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 228,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 219,
              "decorators": [],
              "name": "bing",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
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
        "start": 187,
        "end": 199,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 208,
        "end": 212,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 259,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 259,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 239,
                "end": 259,
                "abstract": false,
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
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 253,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 256,
                    "end": 259,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 256,
                      "end": 257,
                      "typeName": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 257,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 243,
                  "end": 246,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 244,
                      "end": 245,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 245,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 261,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 294,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 294,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 269,
                "end": 294,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 277,
                    "end": 281,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 278,
                      "end": 281,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 280,
                        "end": 281,
                        "typeName": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 281,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 283,
                  "end": 294,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 286,
                    "end": 294,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 286,
                      "end": 292
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 273,
                  "end": 276,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 274,
                      "end": 275,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 296,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 325,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 325,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 304,
                "end": 325,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 312,
                    "end": 316,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 316,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 315,
                        "end": 316,
                        "typeName": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 316,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 318,
                  "end": 325,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 321,
                    "end": 325
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 308,
                  "end": 311,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 309,
                      "end": 310,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 310,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 327,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 367,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 367,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 335,
                "end": 367,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 346,
                    "end": 350,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 347,
                      "end": 350,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 349,
                        "end": 350,
                        "typeName": {
                          "type": "Identifier",
                          "start": 349,
                          "end": 350,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 352,
                    "end": 356,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 353,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 355,
                        "end": 356,
                        "typeName": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 356,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 358,
                  "end": 367,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 361,
                    "end": 367
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 339,
                  "end": 345,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 340,
                      "end": 341,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 341,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 343,
                      "end": 344,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 344,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 369,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 414,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 414,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 414,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 377,
                "end": 414,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 388,
                    "end": 408,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 391,
                        "end": 408,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 396,
                            "end": 402,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 399,
                              "end": 402,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 401,
                                "end": 402,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 401,
                                  "end": 402,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 404,
                          "end": 408,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 407,
                            "end": 408,
                            "typeName": {
                              "type": "Identifier",
                              "start": 407,
                              "end": 408,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 410,
                  "end": 414,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 413,
                    "end": 414,
                    "typeName": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 381,
                  "end": 387,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 382,
                      "end": 383,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 383,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 385,
                      "end": 386,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 386,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 416,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 477,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 477,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 477,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 424,
                "end": 477,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 445,
                    "end": 471,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 471,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 448,
                        "end": 471,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 453,
                            "end": 459,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 456,
                              "end": 459,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 458,
                                "end": 459,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 459,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 461,
                          "end": 471,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 464,
                            "end": 471,
                            "typeName": {
                              "type": "Identifier",
                              "start": 464,
                              "end": 471,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 473,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 476,
                    "end": 477,
                    "typeName": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 428,
                  "end": 444,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 429,
                      "end": 443,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 439,
                        "end": 443,
                        "typeName": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 443,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 479,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 541,
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 486,
              "end": 541,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 488,
                "end": 541,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 496,
                    "end": 509,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 509,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 499,
                        "end": 509,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 501,
                            "end": 507,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 501,
                              "end": 504,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 504,
                              "end": 507,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 506,
                                "end": 507,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 506,
                                  "end": 507,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 511,
                    "end": 532,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 512,
                      "end": 532,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 514,
                        "end": 532,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 516,
                            "end": 523,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 516,
                              "end": 519,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 519,
                              "end": 522,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 521,
                                "end": 522,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 521,
                                  "end": 522,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 524,
                            "end": 530,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 527,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 527,
                              "end": 530,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 529,
                                "end": 530,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 529,
                                  "end": 530,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 534,
                  "end": 541,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 537,
                    "end": 541,
                    "typeName": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 541,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 492,
                  "end": 495,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 493,
                      "end": 494,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 493,
                        "end": 494,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 543,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 585,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 585,
            "decorators": [],
            "name": "a15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 550,
              "end": 585,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 552,
                "end": 585,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 560,
                    "end": 577,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 561,
                      "end": 577,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 563,
                        "end": 577,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 565,
                            "end": 570,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 565,
                              "end": 566,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 566,
                              "end": 569,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 568,
                                "end": 569,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 568,
                                  "end": 569,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 571,
                            "end": 575,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 571,
                              "end": 572,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 572,
                              "end": 575,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 574,
                                "end": 575,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 574,
                                  "end": 575,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 579,
                  "end": 585,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 582,
                    "end": 585,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 582,
                      "end": 583,
                      "typeName": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 556,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 557,
                      "end": 558,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 558,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 587,
      "end": 643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 642,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 642,
            "decorators": [],
            "name": "a16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 642,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 596,
                "end": 642,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 617,
                    "end": 634,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 618,
                      "end": 634,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 620,
                        "end": 634,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 622,
                            "end": 627,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 622,
                              "end": 623,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 623,
                              "end": 626,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 625,
                                "end": 626,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 625,
                                  "end": 626,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 628,
                            "end": 632,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 628,
                              "end": 629,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 629,
                              "end": 632,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 631,
                                "end": 632,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 631,
                                  "end": 632,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 636,
                  "end": 642,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 639,
                    "end": 642,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 639,
                      "end": 640,
                      "typeName": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 640,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 600,
                  "end": 616,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 601,
                      "end": 615,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 611,
                        "end": 615,
                        "typeName": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 615,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 601,
                        "end": 602,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "start": 644,
      "end": 770,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 648,
          "end": 769,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 648,
            "end": 769,
            "decorators": [],
            "name": "a17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 651,
              "end": 769,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 653,
                "end": 769,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 659,
                    "end": 708,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 683,
                        "end": 701,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 684,
                          "end": 701,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 686,
                            "end": 701,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 691,
                                "end": 695,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 692,
                                  "end": 695,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 694,
                                    "end": 695,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 694,
                                      "end": 695,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 697,
                              "end": 701,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 700,
                                "end": 701,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 700,
                                  "end": 701,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 702,
                      "end": 707,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 704,
                        "end": 707,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 704,
                          "end": 705,
                          "typeName": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 705,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 663,
                      "end": 682,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 664,
                          "end": 681,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 674,
                            "end": 681,
                            "typeName": {
                              "type": "Identifier",
                              "start": 674,
                              "end": 681,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 664,
                            "end": 665,
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 713,
                    "end": 759,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 734,
                        "end": 752,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 735,
                          "end": 752,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 737,
                            "end": 752,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 742,
                                "end": 746,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 743,
                                  "end": 746,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 745,
                                    "end": 746,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 745,
                                      "end": 746,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 748,
                              "end": 752,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 751,
                                "end": 752,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 751,
                                  "end": 752,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 753,
                      "end": 758,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 755,
                        "end": 758,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 755,
                          "end": 756,
                          "typeName": {
                            "type": "Identifier",
                            "start": 755,
                            "end": 756,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 717,
                      "end": 733,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 718,
                          "end": 732,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 728,
                            "end": 732,
                            "typeName": {
                              "type": "Identifier",
                              "start": 728,
                              "end": 732,
                              "decorators": [],
                              "name": "Base",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 719,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
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
      "start": 771,
      "end": 1005,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 1004,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 1004,
            "decorators": [],
            "name": "a18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 778,
              "end": 1004,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 780,
                "end": 1004,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 786,
                    "end": 891,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 791,
                        "end": 882,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 792,
                          "end": 882,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 794,
                            "end": 882,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 804,
                                "end": 837,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 828,
                                    "end": 832,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 829,
                                      "end": 832,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 831,
                                        "end": 832,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 831,
                                          "end": 832,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 833,
                                  "end": 836,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 835,
                                    "end": 836,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 835,
                                      "end": 836,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 808,
                                  "end": 827,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 809,
                                      "end": 826,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 819,
                                        "end": 826,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 819,
                                          "end": 826,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      },
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 809,
                                        "end": 810,
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
                                "type": "TSConstructSignatureDeclaration",
                                "start": 846,
                                "end": 876,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 867,
                                    "end": 871,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 868,
                                      "end": 871,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 870,
                                        "end": 871,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 870,
                                          "end": 871,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 872,
                                  "end": 875,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 874,
                                    "end": 875,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 874,
                                      "end": 875,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 850,
                                  "end": 866,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 851,
                                      "end": 865,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 861,
                                        "end": 865,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 861,
                                          "end": 865,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false
                                        }
                                      },
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 851,
                                        "end": 852,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      },
                                      "out": false
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 883,
                      "end": 890,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 885,
                        "end": 890,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 885,
                          "end": 888
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 896,
                    "end": 1002,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 901,
                        "end": 993,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 902,
                          "end": 993,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 904,
                            "end": 993,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 914,
                                "end": 948,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 939,
                                    "end": 943,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 940,
                                      "end": 943,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 942,
                                        "end": 943,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 942,
                                          "end": 943,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 944,
                                  "end": 947,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 946,
                                    "end": 947,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 946,
                                      "end": 947,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 918,
                                  "end": 938,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 919,
                                      "end": 937,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 929,
                                        "end": 937,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 929,
                                          "end": 937,
                                          "decorators": [],
                                          "name": "Derived2",
                                          "optional": false
                                        }
                                      },
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 919,
                                        "end": 920,
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
                                "type": "TSConstructSignatureDeclaration",
                                "start": 957,
                                "end": 987,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 978,
                                    "end": 982,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 979,
                                      "end": 982,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 981,
                                        "end": 982,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 981,
                                          "end": 982,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 983,
                                  "end": 986,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 985,
                                    "end": 986,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 985,
                                      "end": 986,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 961,
                                  "end": 977,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 962,
                                      "end": 976,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 972,
                                        "end": 976,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 972,
                                          "end": 976,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false
                                        }
                                      },
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 962,
                                        "end": 963,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      },
                                      "out": false
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 994,
                      "end": 1001,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 996,
                        "end": 1001,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 996,
                          "end": 999
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
      "start": 1007,
      "end": 1035,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1011,
          "end": 1034,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1011,
            "end": 1034,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1012,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1014,
                "end": 1034,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1022,
                    "end": 1026,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1023,
                      "end": 1026,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1025,
                        "end": 1026,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1025,
                          "end": 1026,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1028,
                  "end": 1034,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1031,
                    "end": 1034,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1031,
                      "end": 1032,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1032,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1018,
                  "end": 1021,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1019,
                      "end": 1020,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1020,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1037,
      "end": 1043,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1037,
        "end": 1042,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1037,
          "end": 1038,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1041,
          "end": 1042,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1050,
      "end": 1056,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1050,
        "end": 1055,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1050,
          "end": 1051,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1054,
          "end": 1055,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1063,
      "end": 1097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1067,
          "end": 1096,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1067,
            "end": 1096,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1069,
              "end": 1096,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1071,
                "end": 1096,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1083,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1080,
                      "end": 1083,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1082,
                        "end": 1083,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1082,
                          "end": 1083,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1085,
                  "end": 1096,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1088,
                    "end": 1096,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1088,
                      "end": 1094
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1075,
                  "end": 1078,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1076,
                      "end": 1077,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1076,
                        "end": 1077,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1099,
      "end": 1107,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1099,
        "end": 1106,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1099,
          "end": 1101,
          "decorators": [],
          "name": "a2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1104,
          "end": 1106,
          "decorators": [],
          "name": "b2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1114,
      "end": 1122,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1114,
        "end": 1121,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1114,
          "end": 1116,
          "decorators": [],
          "name": "b2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1119,
          "end": 1121,
          "decorators": [],
          "name": "a2",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1129,
      "end": 1156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1133,
          "end": 1155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1133,
            "end": 1155,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1135,
              "end": 1155,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1137,
                "end": 1155,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1145,
                    "end": 1149,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1146,
                      "end": 1149,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1148,
                        "end": 1149,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1148,
                          "end": 1149,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1151,
                  "end": 1155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1154,
                    "end": 1155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1154,
                      "end": 1155,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1141,
                  "end": 1144,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1142,
                      "end": 1143,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1142,
                        "end": 1143,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1158,
      "end": 1166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1158,
        "end": 1165,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1158,
          "end": 1160,
          "decorators": [],
          "name": "a3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1163,
          "end": 1165,
          "decorators": [],
          "name": "b3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1173,
      "end": 1181,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1173,
        "end": 1180,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1173,
          "end": 1175,
          "decorators": [],
          "name": "b3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1178,
          "end": 1180,
          "decorators": [],
          "name": "a3",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1188,
      "end": 1229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1192,
          "end": 1228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1192,
            "end": 1228,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1194,
              "end": 1228,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1196,
                "end": 1228,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1207,
                    "end": 1211,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1208,
                      "end": 1211,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1210,
                        "end": 1211,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1210,
                          "end": 1211,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1217,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1214,
                      "end": 1217,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1216,
                        "end": 1217,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1216,
                          "end": 1217,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1219,
                  "end": 1228,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1222,
                    "end": 1228
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1200,
                  "end": 1206,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1201,
                      "end": 1202,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1202,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1204,
                      "end": 1205,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1204,
                        "end": 1205,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1231,
      "end": 1239,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1231,
        "end": 1238,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1231,
          "end": 1233,
          "decorators": [],
          "name": "a4",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1236,
          "end": 1238,
          "decorators": [],
          "name": "b4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1246,
      "end": 1254,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1246,
        "end": 1253,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1246,
          "end": 1248,
          "decorators": [],
          "name": "b4",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1251,
          "end": 1253,
          "decorators": [],
          "name": "a4",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1261,
      "end": 1307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1265,
          "end": 1306,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1265,
            "end": 1306,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1267,
              "end": 1306,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1269,
                "end": 1306,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1280,
                    "end": 1300,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1281,
                      "end": 1300,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1283,
                        "end": 1300,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1288,
                            "end": 1294,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1291,
                              "end": 1294,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1293,
                                "end": 1294,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1293,
                                  "end": 1294,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1296,
                          "end": 1300,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1299,
                            "end": 1300,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1299,
                              "end": 1300,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1302,
                  "end": 1306,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1305,
                    "end": 1306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1305,
                      "end": 1306,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1273,
                  "end": 1279,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1274,
                      "end": 1275,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1274,
                        "end": 1275,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1277,
                      "end": 1278,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1277,
                        "end": 1278,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1309,
      "end": 1317,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1309,
        "end": 1316,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1309,
          "end": 1311,
          "decorators": [],
          "name": "a5",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1314,
          "end": 1316,
          "decorators": [],
          "name": "b5",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1324,
      "end": 1332,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1324,
        "end": 1331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1324,
          "end": 1326,
          "decorators": [],
          "name": "b5",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1329,
          "end": 1331,
          "decorators": [],
          "name": "a5",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1339,
      "end": 1414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1343,
          "end": 1413,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1343,
            "end": 1413,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1345,
              "end": 1413,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1347,
                "end": 1413,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1387,
                    "end": 1407,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1388,
                      "end": 1407,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1390,
                        "end": 1407,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1395,
                            "end": 1401,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1398,
                              "end": 1401,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1400,
                                "end": 1401,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1400,
                                  "end": 1401,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1403,
                          "end": 1407,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1406,
                            "end": 1407,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1406,
                              "end": 1407,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1409,
                  "end": 1413,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1412,
                    "end": 1413,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1412,
                      "end": 1413,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1351,
                  "end": 1386,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1352,
                      "end": 1366,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1362,
                        "end": 1366,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1362,
                          "end": 1366,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1352,
                        "end": 1353,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1368,
                      "end": 1385,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1378,
                        "end": 1385,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1378,
                          "end": 1385,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1368,
                        "end": 1369,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1416,
      "end": 1424,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1416,
        "end": 1423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1416,
          "end": 1418,
          "decorators": [],
          "name": "a6",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1421,
          "end": 1423,
          "decorators": [],
          "name": "b6",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1431,
      "end": 1439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1431,
        "end": 1438,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1431,
          "end": 1433,
          "decorators": [],
          "name": "b6",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1436,
          "end": 1438,
          "decorators": [],
          "name": "a6",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1446,
      "end": 1512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1450,
          "end": 1511,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1450,
            "end": 1511,
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1453,
              "end": 1511,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1455,
                "end": 1511,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1466,
                    "end": 1479,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1467,
                      "end": 1479,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1469,
                        "end": 1479,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1471,
                            "end": 1477,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1471,
                              "end": 1474,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1474,
                              "end": 1477,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1476,
                                "end": 1477,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1476,
                                  "end": 1477,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1481,
                    "end": 1502,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1482,
                      "end": 1502,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1484,
                        "end": 1502,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1486,
                            "end": 1493,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1486,
                              "end": 1489,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1489,
                              "end": 1492,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1491,
                                "end": 1492,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1491,
                                  "end": 1492,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1494,
                            "end": 1500,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1494,
                              "end": 1497,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1497,
                              "end": 1500,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1499,
                                "end": 1500,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1499,
                                  "end": 1500,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1504,
                  "end": 1511,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1507,
                    "end": 1511,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1507,
                      "end": 1511,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1459,
                  "end": 1465,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1460,
                      "end": 1461,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1460,
                        "end": 1461,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1463,
                      "end": 1464,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1463,
                        "end": 1464,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1514,
      "end": 1524,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1514,
        "end": 1523,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1514,
          "end": 1517,
          "decorators": [],
          "name": "a11",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1520,
          "end": 1523,
          "decorators": [],
          "name": "b11",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1531,
      "end": 1541,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1531,
        "end": 1540,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1531,
          "end": 1534,
          "decorators": [],
          "name": "b11",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1537,
          "end": 1540,
          "decorators": [],
          "name": "a11",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1548,
      "end": 1595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1552,
          "end": 1594,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1552,
            "end": 1594,
            "decorators": [],
            "name": "b15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1555,
              "end": 1594,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1557,
                "end": 1594,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1568,
                    "end": 1586,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1569,
                      "end": 1586,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1571,
                        "end": 1586,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1573,
                            "end": 1578,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1573,
                              "end": 1574,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1574,
                              "end": 1577,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1576,
                                "end": 1577,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1576,
                                  "end": 1577,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1579,
                            "end": 1584,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1579,
                              "end": 1580,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1580,
                              "end": 1583,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1582,
                                "end": 1583,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1582,
                                  "end": 1583,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1588,
                  "end": 1594,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1591,
                    "end": 1594,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1591,
                      "end": 1592,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1591,
                        "end": 1592,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1561,
                  "end": 1567,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1562,
                      "end": 1563,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1562,
                        "end": 1563,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1565,
                      "end": 1566,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1565,
                        "end": 1566,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1597,
      "end": 1607,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1597,
        "end": 1606,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1597,
          "end": 1600,
          "decorators": [],
          "name": "a15",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1603,
          "end": 1606,
          "decorators": [],
          "name": "b15",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1614,
      "end": 1624,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1614,
        "end": 1623,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1614,
          "end": 1617,
          "decorators": [],
          "name": "b15",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1620,
          "end": 1623,
          "decorators": [],
          "name": "a15",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1631,
      "end": 1674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1635,
          "end": 1673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1635,
            "end": 1673,
            "decorators": [],
            "name": "b16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1638,
              "end": 1673,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1640,
                "end": 1673,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1648,
                    "end": 1665,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1649,
                      "end": 1665,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1651,
                        "end": 1665,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1653,
                            "end": 1658,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1653,
                              "end": 1654,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1654,
                              "end": 1657,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1656,
                                "end": 1657,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1656,
                                  "end": 1657,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1659,
                            "end": 1663,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1659,
                              "end": 1660,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1660,
                              "end": 1663,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1662,
                                "end": 1663,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1662,
                                  "end": 1663,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1667,
                  "end": 1673,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1670,
                    "end": 1673,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1670,
                      "end": 1671,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1670,
                        "end": 1671,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1644,
                  "end": 1647,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1645,
                      "end": 1646,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1645,
                        "end": 1646,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1676,
      "end": 1686,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1676,
        "end": 1685,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1676,
          "end": 1679,
          "decorators": [],
          "name": "a15",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1682,
          "end": 1685,
          "decorators": [],
          "name": "b16",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1693,
      "end": 1703,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1693,
        "end": 1702,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1693,
          "end": 1696,
          "decorators": [],
          "name": "b15",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1699,
          "end": 1702,
          "decorators": [],
          "name": "a16",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1710,
      "end": 1754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1714,
          "end": 1753,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1714,
            "end": 1753,
            "decorators": [],
            "name": "b17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1717,
              "end": 1753,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1719,
                "end": 1753,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1727,
                    "end": 1745,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1728,
                      "end": 1745,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1730,
                        "end": 1745,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1735,
                            "end": 1739,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1736,
                              "end": 1739,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1738,
                                "end": 1739,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1738,
                                  "end": 1739,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1741,
                          "end": 1745,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1744,
                            "end": 1745,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1744,
                              "end": 1745,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1747,
                  "end": 1753,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1750,
                    "end": 1753,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1750,
                      "end": 1751,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1750,
                        "end": 1751,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1723,
                  "end": 1726,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1724,
                      "end": 1725,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1724,
                        "end": 1725,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 1756,
      "end": 1766,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1756,
        "end": 1765,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1756,
          "end": 1759,
          "decorators": [],
          "name": "a17",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1762,
          "end": 1765,
          "decorators": [],
          "name": "b17",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1773,
      "end": 1783,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1773,
        "end": 1782,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1773,
          "end": 1776,
          "decorators": [],
          "name": "b17",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1779,
          "end": 1782,
          "decorators": [],
          "name": "a17",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1790,
      "end": 1836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1794,
          "end": 1835,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1794,
            "end": 1835,
            "decorators": [],
            "name": "b18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1797,
              "end": 1835,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1799,
                "end": 1835,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1804,
                    "end": 1825,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1805,
                      "end": 1825,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1807,
                        "end": 1825,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1815,
                            "end": 1819,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1816,
                              "end": 1819,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1818,
                                "end": 1819,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1818,
                                  "end": 1819,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1821,
                          "end": 1825,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1824,
                            "end": 1825,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1824,
                              "end": 1825,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 1811,
                          "end": 1814,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 1812,
                              "end": 1813,
                              "const": false,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 1812,
                                "end": 1813,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              },
                              "out": false
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1827,
                  "end": 1835,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1830,
                    "end": 1835,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1830,
                      "end": 1833
                    }
                  }
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
      "type": "ExpressionStatement",
      "start": 1838,
      "end": 1848,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1838,
        "end": 1847,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1838,
          "end": 1841,
          "decorators": [],
          "name": "a18",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1844,
          "end": 1847,
          "decorators": [],
          "name": "b18",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1855,
      "end": 1865,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1855,
        "end": 1864,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1855,
          "end": 1858,
          "decorators": [],
          "name": "b18",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1861,
          "end": 1864,
          "decorators": [],
          "name": "a18",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
