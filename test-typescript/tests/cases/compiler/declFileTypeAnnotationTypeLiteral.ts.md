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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
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
      "start": 12,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 26,
        "body": []
      },
      "decorators": [],
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
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 57,
                "end": 64,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
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
      "type": "VariableDeclaration",
      "start": 102,
      "end": 454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 453,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 453,
            "name": "x",
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
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 140,
                          "end": 148,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 142,
                            "end": 148
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "c",
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
                    "start": 158,
                    "end": 181,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 168,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 160,
                          "end": 168,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 162,
                            "end": 168
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 221,
                          "end": 229,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 223,
                            "end": 229
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 245,
                          "end": 253,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 247,
                            "end": 253
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 259,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 284,
                          "end": 292,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 286,
                            "end": 292
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "c",
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
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 304,
                          "end": 312,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 306,
                            "end": 312
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "c",
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "c",
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
                    "start": 351,
                    "end": 364,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 351,
                      "end": 352,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "name": "m1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "name": "m2",
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
                        "start": 409,
                        "end": 418,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 410,
                          "end": 418,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 412,
                            "end": 418
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 420,
                        "end": 430,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 422,
                          "end": 430,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 424,
                            "end": 430
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "RestElement",
                        "start": 432,
                        "end": 441,
                        "argument": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 436,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
                                "name": "c",
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
      "start": 474,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 502,
            "name": "y",
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
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 483,
                      "end": 491,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 485,
                        "end": 491
                      }
                    },
                    "decorators": [],
                    "optional": false
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
      "start": 525,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 554,
            "name": "z",
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
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 538,
                      "end": 546,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 540,
                        "end": 546
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
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
