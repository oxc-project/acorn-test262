__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2082,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1188,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 1188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 79,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 79,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 49,
                    "end": 73,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 59,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 59,
                      "end": 73,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 86,
            "end": 110,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 103,
              "end": 110,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 102,
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 116,
            "end": 651,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 123,
              "end": 651,
              "body": {
                "type": "TSInterfaceBody",
                "start": 143,
                "end": 651,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 153,
                    "end": 169,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 154,
                        "end": 167,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 156,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 158,
                            "end": 167,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 167,
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 178,
                    "end": 195,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 179,
                        "end": 193,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 193,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 183,
                            "end": 193,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 193,
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 204,
                    "end": 218,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 208,
                        "end": 217,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 217,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 227,
                    "end": 252,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 228,
                        "end": 238,
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 230,
                          "end": 238,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 232,
                            "end": 238
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 239,
                      "end": 251,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 241,
                        "end": 251,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 251,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 262,
                    "end": 282,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 267,
                        "end": 280,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 269,
                          "end": 280,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 271,
                            "end": 280,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 271,
                              "end": 280,
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 291,
                    "end": 312,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 296,
                        "end": 310,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 298,
                          "end": 310,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 300,
                            "end": 310,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 310,
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 321,
                    "end": 339,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 327,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 329,
                        "end": 338,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 338,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 348,
                    "end": 377,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 353,
                        "end": 363,
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 355,
                          "end": 363,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 357,
                            "end": 363
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 364,
                      "end": 376,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 366,
                        "end": 376,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 376,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 387,
                    "end": 410,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 388,
                        "end": 397,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 389,
                          "end": 397,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 391,
                            "end": 397
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 409,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 400,
                        "end": 409,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 409,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 419,
                    "end": 443,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 420,
                        "end": 429,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 421,
                          "end": 429,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 423,
                            "end": 429
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 430,
                      "end": 442,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 432,
                        "end": 442,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 442,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 453,
                    "end": 466,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
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
                      "start": 454,
                      "end": 465,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 456,
                        "end": 465,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 465,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 475,
                    "end": 489,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 476,
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
                      "start": 476,
                      "end": 488,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 478,
                        "end": 488,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 478,
                          "end": 488,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 499,
                    "end": 513,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 499,
                      "end": 500,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 501,
                      "end": 512,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 503,
                        "end": 512,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 503,
                          "end": 512,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 522,
                    "end": 537,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 522,
                      "end": 523,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 524,
                      "end": 536,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 526,
                        "end": 536,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 536,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 547,
                    "end": 565,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 549,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 550,
                        "end": 563,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 552,
                          "end": 563,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 554,
                            "end": 563,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 554,
                              "end": 563,
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 574,
                    "end": 593,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 574,
                      "end": 576,
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 577,
                        "end": 591,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 579,
                          "end": 591,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 581,
                            "end": 591,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 581,
                              "end": 591,
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 602,
                    "end": 618,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 604,
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 606,
                      "end": 617,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 608,
                        "end": 617,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 608,
                          "end": 617,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 627,
                    "end": 644,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 627,
                      "end": 629,
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 631,
                      "end": 643,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 633,
                        "end": 643,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 643,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 133,
                "end": 142,
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 657,
            "end": 1186,
            "body": {
              "type": "TSInterfaceBody",
              "start": 678,
              "end": 1186,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 688,
                  "end": 704,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 689,
                      "end": 702,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 691,
                        "end": 702,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 693,
                          "end": 702,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 693,
                            "end": 702,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 713,
                  "end": 730,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 714,
                      "end": 728,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 716,
                        "end": 728,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 718,
                          "end": 728,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 728,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 739,
                  "end": 753,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 752,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 743,
                      "end": 752,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 743,
                        "end": 752,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 762,
                  "end": 787,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 773,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 765,
                        "end": 773,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 767,
                          "end": 773
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 774,
                    "end": 786,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 776,
                      "end": 786,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 776,
                        "end": 786,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 797,
                  "end": 817,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 802,
                      "end": 815,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 804,
                        "end": 815,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 806,
                          "end": 815,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 806,
                            "end": 815,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 826,
                  "end": 847,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 831,
                      "end": 845,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 833,
                        "end": 845,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 835,
                          "end": 845,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 835,
                            "end": 845,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 856,
                  "end": 874,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 862,
                    "end": 873,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 864,
                      "end": 873,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 864,
                        "end": 873,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 883,
                  "end": 912,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 888,
                      "end": 898,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 890,
                        "end": 898,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 892,
                          "end": 898
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 899,
                    "end": 911,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 901,
                      "end": 911,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 901,
                        "end": 911,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSIndexSignature",
                  "start": 922,
                  "end": 945,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 923,
                      "end": 932,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 924,
                        "end": 932,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 926,
                          "end": 932
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 944,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 935,
                      "end": 944,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 944,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "start": 954,
                  "end": 978,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 955,
                      "end": 964,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 956,
                        "end": 964,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 958,
                          "end": 964
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 965,
                    "end": 977,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 967,
                      "end": 977,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 967,
                        "end": 977,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 988,
                  "end": 1001,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 988,
                    "end": 989,
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
                    "start": 989,
                    "end": 1000,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 991,
                      "end": 1000,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 991,
                        "end": 1000,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1010,
                  "end": 1024,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1011,
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
                    "start": 1011,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1013,
                      "end": 1023,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1013,
                        "end": 1023,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1034,
                  "end": 1048,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1034,
                    "end": 1035,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1036,
                    "end": 1047,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1038,
                      "end": 1047,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1038,
                        "end": 1047,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1057,
                  "end": 1072,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1059,
                    "end": 1071,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1061,
                      "end": 1071,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1061,
                        "end": 1071,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1082,
                  "end": 1100,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1084,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1085,
                      "end": 1098,
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1087,
                        "end": 1098,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1089,
                          "end": 1098,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1089,
                            "end": 1098,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": null,
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1109,
                  "end": 1128,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1109,
                    "end": 1111,
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1112,
                      "end": 1126,
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1114,
                        "end": 1126,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1116,
                          "end": 1126,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1116,
                            "end": 1126,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": null,
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1137,
                  "end": 1153,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1139,
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1141,
                    "end": 1152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1143,
                      "end": 1152,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1143,
                        "end": 1152,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1162,
                  "end": 1179,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1164,
                    "decorators": [],
                    "name": "f4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1166,
                    "end": 1178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1168,
                      "end": 1178,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1168,
                        "end": 1178,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 667,
              "end": 677,
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 1190,
      "end": 1234,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1206,
        "end": 1234,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1212,
            "end": 1232,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1220,
              "end": 1222,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1222,
              "end": 1232,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1225,
                "end": 1232,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1196,
        "end": 1205,
        "decorators": [],
        "name": "C5_public",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1237,
      "end": 1462,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1257,
        "end": 1462,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1263,
            "end": 1279,
            "params": [
              {
                "type": "Identifier",
                "start": 1264,
                "end": 1277,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1266,
                  "end": 1277,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1268,
                    "end": 1277,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1268,
                      "end": 1277,
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1284,
            "end": 1298,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1286,
              "end": 1297,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1288,
                "end": 1297,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1288,
                  "end": 1297,
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1304,
            "end": 1324,
            "params": [
              {
                "type": "Identifier",
                "start": 1309,
                "end": 1322,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1311,
                  "end": 1322,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1313,
                    "end": 1322,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1313,
                      "end": 1322,
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1329,
            "end": 1347,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1335,
              "end": 1346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1337,
                "end": 1346,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1337,
                  "end": 1346,
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1353,
            "end": 1376,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1354,
                "end": 1363,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1355,
                  "end": 1363,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1357,
                    "end": 1363
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1364,
              "end": 1375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1366,
                "end": 1375,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1366,
                  "end": 1375,
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1382,
            "end": 1395,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1382,
              "end": 1383,
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
              "start": 1383,
              "end": 1394,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1385,
                "end": 1394,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1394,
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1401,
            "end": 1415,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1401,
              "end": 1402,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1403,
              "end": 1414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1405,
                "end": 1414,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1414,
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1421,
            "end": 1439,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1421,
              "end": 1423,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1424,
                "end": 1437,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1426,
                  "end": 1437,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1428,
                    "end": 1437,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1428,
                      "end": 1437,
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1444,
            "end": 1460,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1444,
              "end": 1446,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1448,
              "end": 1459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1450,
                "end": 1459,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1459,
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1247,
        "end": 1256,
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1464,
      "end": 1985,
      "body": {
        "type": "TSModuleBlock",
        "start": 1474,
        "end": 1985,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1480,
            "end": 1538,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1487,
              "end": 1538,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1509,
                "end": 1538,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1519,
                    "end": 1532,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1519,
                      "end": 1521,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1523,
                      "end": 1531,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1525,
                        "end": 1531
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 1497,
                "end": 1508,
                "decorators": [],
                "name": "m3_i_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1544,
            "end": 1596,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1567,
              "end": 1596,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1577,
                  "end": 1590,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1577,
                    "end": 1579,
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1581,
                    "end": 1589,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1583,
                      "end": 1589
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1554,
              "end": 1566,
              "decorators": [],
              "name": "m3_i_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1602,
            "end": 1653,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1646,
              "end": 1653,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1634,
                "end": 1645,
                "expression": {
                  "type": "Identifier",
                  "start": 1634,
                  "end": 1645,
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1612,
              "end": 1625,
              "decorators": [],
              "name": "m3_C1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1658,
            "end": 1710,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1703,
              "end": 1710,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1690,
                "end": 1702,
                "expression": {
                  "type": "Identifier",
                  "start": 1690,
                  "end": 1702,
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1668,
              "end": 1681,
              "decorators": [],
              "name": "m3_C2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1715,
            "end": 1772,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1722,
              "end": 1772,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1765,
                "end": 1772,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1753,
                  "end": 1764,
                  "expression": {
                    "type": "Identifier",
                    "start": 1753,
                    "end": 1764,
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 1732,
                "end": 1744,
                "decorators": [],
                "name": "m3_C3_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1777,
            "end": 1835,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1784,
              "end": 1835,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1828,
                "end": 1835,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1815,
                  "end": 1827,
                  "expression": {
                    "type": "Identifier",
                    "start": 1815,
                    "end": 1827,
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 1794,
                "end": 1806,
                "decorators": [],
                "name": "m3_C4_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1841,
            "end": 1906,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1899,
              "end": 1906,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1873,
                "end": 1885,
                "expression": {
                  "type": "Identifier",
                  "start": 1873,
                  "end": 1885,
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 1887,
                "end": 1898,
                "expression": {
                  "type": "Identifier",
                  "start": 1887,
                  "end": 1898,
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1851,
              "end": 1864,
              "decorators": [],
              "name": "m3_C5_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1911,
            "end": 1983,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1918,
              "end": 1983,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1976,
                "end": 1983,
                "body": []
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1950,
                  "end": 1962,
                  "expression": {
                    "type": "Identifier",
                    "start": 1950,
                    "end": 1962,
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1964,
                  "end": 1975,
                  "expression": {
                    "type": "Identifier",
                    "start": 1964,
                    "end": 1975,
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 1928,
                "end": 1940,
                "decorators": [],
                "name": "m3_C6_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1471,
        "end": 1473,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1987,
      "end": 2031,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2010,
        "end": 2031,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2016,
            "end": 2029,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2016,
              "end": 2018,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2020,
              "end": 2028,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2022,
                "end": 2028
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1997,
        "end": 2009,
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2033,
      "end": 2081,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2078,
        "end": 2081,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2065,
          "end": 2077,
          "expression": {
            "type": "Identifier",
            "start": 2065,
            "end": 2077,
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2043,
        "end": 2056,
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
