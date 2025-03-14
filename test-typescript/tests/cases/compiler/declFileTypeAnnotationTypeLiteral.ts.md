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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 26,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 66,
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 66,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 64,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 49,
              "end": 64,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 57,
                "end": 64,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 158,
                    "end": 181,
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
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "decorators": [],
                          "name": "g",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 215,
                    "end": 234,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 239,
                    "end": 260,
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
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 259,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          }
                        }
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
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    }
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
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 341,
                    "end": 346,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 351,
                    "end": 364,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 351,
                      "end": 352,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 352,
                      "end": 363,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 354,
                        "end": 363,
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
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 355,
                          "decorators": [],
                          "name": "g",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 385,
                    "end": 401,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 387,
                      "decorators": [],
                      "name": "m1",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 400,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 391,
                        "end": 400,
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
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 392,
                          "decorators": [],
                          "name": "g",
                          "optional": false
                        }
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 406,
                    "end": 451,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 408,
                      "decorators": [],
                      "name": "m2",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
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
                        "argument": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 436,
                          "decorators": [],
                          "name": "c",
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
                                "decorators": [],
                                "name": "c",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
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
      "start": 474,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 502,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
