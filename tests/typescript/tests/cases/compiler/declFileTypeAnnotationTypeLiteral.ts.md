__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 555,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 26,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
        "start": 23,
        "end": 26,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 66,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 64,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 49,
              "end": 64,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 57,
                "end": 64,
                "body": []
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
      "type": "VariableDeclaration",
      "start": 102,
      "end": 454,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 453,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 453,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 453,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 109,
                "end": 453,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 138,
                    "end": 153,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 139,
                        "end": 148,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 140,
                          "end": 148,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 142,
                            "end": 148
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 152,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 151,
                        "end": 152,
                        "typeName": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 158,
                    "end": 181,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 168,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 160,
                          "end": 168,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 162,
                            "end": 168
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 180,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 180,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 172,
                          "end": 180,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 173,
                              "end": 179
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 215,
                    "end": 234,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 220,
                        "end": 229,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 221,
                          "end": 229,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 223,
                            "end": 229
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 230,
                      "end": 233,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 232,
                        "end": 233,
                        "typeName": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 239,
                    "end": 260,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 244,
                        "end": 253,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 245,
                          "end": 253,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 247,
                            "end": 253
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 254,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 256,
                        "end": 259,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 256,
                          "end": 259,
                          "left": {
                            "type": "Identifier",
                            "start": 256,
                            "end": 257,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 259,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 282,
                    "end": 297,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 283,
                        "end": 292,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 284,
                          "end": 292,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 286,
                            "end": 292
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 293,
                      "end": 296,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 295,
                        "end": 296,
                        "typeName": {
                          "type": "Identifier",
                          "start": 295,
                          "end": 296,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 302,
                    "end": 317,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 303,
                        "end": 312,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 304,
                          "end": 312,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 306,
                            "end": 312
                          }
                        }
                      }
                    ],
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 341,
                    "end": 346,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 342,
                      "end": 345,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 344,
                        "end": 345,
                        "typeName": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 351,
                    "end": 364,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 351,
                      "end": 352,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 352,
                      "end": 363,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 354,
                        "end": 363,
                        "typeName": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 355,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 355,
                          "end": 363,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 356,
                              "end": 362
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 385,
                    "end": 401,
                    "key": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 387,
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 400,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 391,
                        "end": 400,
                        "typeName": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 392,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 392,
                          "end": 400,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 393,
                              "end": 399
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 406,
                    "end": 451,
                    "key": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 408,
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 409,
                        "end": 418,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 410,
                          "end": 418,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 412,
                            "end": 418
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 420,
                        "end": 430,
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 422,
                          "end": 430,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 424,
                            "end": 430
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 432,
                        "end": 441,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 436,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 436,
                          "end": 441,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 438,
                            "end": 441,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 438,
                              "end": 439,
                              "typeName": {
                                "type": "Identifier",
                                "start": 438,
                                "end": 439,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
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
      "start": 474,
      "end": 503,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 502,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 479,
              "end": 502,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 481,
                "end": 502,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 482,
                    "end": 491,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 483,
                      "end": 491,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 485,
                        "end": 491
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 493,
                  "end": 502,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 496,
                    "end": 502
                  }
                }
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
      "start": 525,
      "end": 555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 554,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 530,
              "end": 554,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 532,
                "end": 554,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 537,
                    "end": 546,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 538,
                      "end": 546,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 540,
                        "end": 546
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 548,
                  "end": 554,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 551,
                    "end": 554,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 551,
                      "end": 554,
                      "left": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 552,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
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
