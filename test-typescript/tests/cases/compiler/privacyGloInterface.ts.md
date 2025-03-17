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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 1188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "name": "C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 49,
                    "end": 73,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 59,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 59,
                      "end": 73,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 86,
            "end": 110,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 102,
              "name": "C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 103,
              "end": 110,
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
            "type": "ExportNamedDeclaration",
            "start": 116,
            "end": 651,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 123,
              "end": 651,
              "id": {
                "type": "Identifier",
                "start": 133,
                "end": 142,
                "name": "C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 143,
                "end": 651,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 153,
                    "end": 169,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 154,
                        "end": 167,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 156,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 158,
                            "end": 167,
                            "typeName": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 167,
                              "name": "C1_public",
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
                    "returnType": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 178,
                    "end": 195,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 179,
                        "end": 193,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 193,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 183,
                            "end": 193,
                            "typeName": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 193,
                              "name": "C2_private",
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
                    "returnType": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 204,
                    "end": 218,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 208,
                        "end": 217,
                        "typeName": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 217,
                          "name": "C1_public",
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
                    "start": 227,
                    "end": 252,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 228,
                        "end": 238,
                        "name": "c2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 230,
                          "end": 238,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 232,
                            "end": 238
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 251,
                          "name": "C2_private",
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
                    "start": 262,
                    "end": 282,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 267,
                        "end": 280,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 269,
                          "end": 280,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 271,
                            "end": 280,
                            "typeName": {
                              "type": "Identifier",
                              "start": 271,
                              "end": 280,
                              "name": "C1_public",
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
                    "returnType": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 291,
                    "end": 312,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 296,
                        "end": 310,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 298,
                          "end": 310,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 300,
                            "end": 310,
                            "typeName": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 310,
                              "name": "C2_private",
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
                    "returnType": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 321,
                    "end": 339,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 327,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 329,
                        "end": 338,
                        "typeName": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 338,
                          "name": "C1_public",
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
                    "start": 348,
                    "end": 377,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 353,
                        "end": 363,
                        "name": "c2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 355,
                          "end": 363,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 357,
                            "end": 363
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 376,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 387,
                    "end": 410,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 388,
                        "end": 397,
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 389,
                          "end": 397,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 391,
                            "end": 397
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 409,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 400,
                        "end": 409,
                        "typeName": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 409,
                          "name": "C1_public",
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
                    "start": 419,
                    "end": 443,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 420,
                        "end": 429,
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 421,
                          "end": 429,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 423,
                            "end": 429
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 430,
                      "end": 442,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 432,
                        "end": 442,
                        "typeName": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 442,
                          "name": "C2_private",
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
                    "start": 453,
                    "end": 466,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 454,
                      "end": 465,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 456,
                        "end": 465,
                        "typeName": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 465,
                          "name": "C1_public",
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
                    "start": 475,
                    "end": 489,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 476,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 476,
                      "end": 488,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 478,
                        "end": 488,
                        "typeName": {
                          "type": "Identifier",
                          "start": 478,
                          "end": 488,
                          "name": "C2_private",
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
                    "start": 499,
                    "end": 513,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 499,
                      "end": 500,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 501,
                      "end": 512,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 503,
                        "end": 512,
                        "typeName": {
                          "type": "Identifier",
                          "start": 503,
                          "end": 512,
                          "name": "C1_public",
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
                    "start": 522,
                    "end": 537,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 522,
                      "end": 523,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 524,
                      "end": 536,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 526,
                        "end": 536,
                        "typeName": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 536,
                          "name": "C2_private",
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
                    "type": "TSMethodSignature",
                    "start": 547,
                    "end": 565,
                    "key": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 549,
                      "name": "f1",
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
                        "start": 550,
                        "end": 563,
                        "name": "a1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 552,
                          "end": 563,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 554,
                            "end": 563,
                            "typeName": {
                              "type": "Identifier",
                              "start": 554,
                              "end": 563,
                              "name": "C1_public",
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
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 574,
                    "end": 593,
                    "key": {
                      "type": "Identifier",
                      "start": 574,
                      "end": 576,
                      "name": "f2",
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
                        "start": 577,
                        "end": 591,
                        "name": "a1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 579,
                          "end": 591,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 581,
                            "end": 591,
                            "typeName": {
                              "type": "Identifier",
                              "start": 581,
                              "end": 591,
                              "name": "C2_private",
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
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 602,
                    "end": 618,
                    "key": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 604,
                      "name": "f3",
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
                      "start": 606,
                      "end": 617,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 608,
                        "end": 617,
                        "typeName": {
                          "type": "Identifier",
                          "start": 608,
                          "end": 617,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 627,
                    "end": 644,
                    "key": {
                      "type": "Identifier",
                      "start": 627,
                      "end": 629,
                      "name": "f4",
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
                      "start": 631,
                      "end": 643,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 633,
                        "end": 643,
                        "typeName": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 643,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 657,
            "end": 1186,
            "id": {
              "type": "Identifier",
              "start": 667,
              "end": 677,
              "name": "C4_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 678,
              "end": 1186,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 688,
                  "end": 704,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 689,
                      "end": 702,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 691,
                        "end": 702,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 693,
                          "end": 702,
                          "typeName": {
                            "type": "Identifier",
                            "start": 693,
                            "end": 702,
                            "name": "C1_public",
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
                  "returnType": null
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 713,
                  "end": 730,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 714,
                      "end": 728,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 716,
                        "end": 728,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 718,
                          "end": 728,
                          "typeName": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 728,
                            "name": "C2_private",
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
                  "returnType": null
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 739,
                  "end": 753,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 752,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 743,
                      "end": 752,
                      "typeName": {
                        "type": "Identifier",
                        "start": 743,
                        "end": 752,
                        "name": "C1_public",
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
                  "start": 762,
                  "end": 787,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 773,
                      "name": "c2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 765,
                        "end": 773,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 767,
                          "end": 773
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 776,
                        "end": 786,
                        "name": "C2_private",
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
                  "start": 797,
                  "end": 817,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 802,
                      "end": 815,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 804,
                        "end": 815,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 806,
                          "end": 815,
                          "typeName": {
                            "type": "Identifier",
                            "start": 806,
                            "end": 815,
                            "name": "C1_public",
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
                  "returnType": null
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 826,
                  "end": 847,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 831,
                      "end": 845,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 833,
                        "end": 845,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 835,
                          "end": 845,
                          "typeName": {
                            "type": "Identifier",
                            "start": 835,
                            "end": 845,
                            "name": "C2_private",
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
                  "returnType": null
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 856,
                  "end": 874,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 862,
                    "end": 873,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 864,
                      "end": 873,
                      "typeName": {
                        "type": "Identifier",
                        "start": 864,
                        "end": 873,
                        "name": "C1_public",
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
                  "start": 883,
                  "end": 912,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 888,
                      "end": 898,
                      "name": "c2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 890,
                        "end": 898,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 892,
                          "end": 898
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 901,
                        "end": 911,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "start": 922,
                  "end": 945,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 923,
                      "end": 932,
                      "name": "c",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 924,
                        "end": 932,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 926,
                          "end": 932
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 944,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 935,
                      "end": 944,
                      "typeName": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 944,
                        "name": "C1_public",
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
                  "start": 954,
                  "end": 978,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 955,
                      "end": 964,
                      "name": "c",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 956,
                        "end": 964,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 958,
                          "end": 964
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 965,
                    "end": 977,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 967,
                      "end": 977,
                      "typeName": {
                        "type": "Identifier",
                        "start": 967,
                        "end": 977,
                        "name": "C2_private",
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
                  "start": 988,
                  "end": 1001,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 988,
                    "end": 989,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 989,
                    "end": 1000,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 991,
                      "end": 1000,
                      "typeName": {
                        "type": "Identifier",
                        "start": 991,
                        "end": 1000,
                        "name": "C1_public",
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
                  "start": 1010,
                  "end": 1024,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1011,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1011,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1013,
                      "end": 1023,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1013,
                        "end": 1023,
                        "name": "C2_private",
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
                  "start": 1034,
                  "end": 1048,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1034,
                    "end": 1035,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1036,
                    "end": 1047,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1038,
                      "end": 1047,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1038,
                        "end": 1047,
                        "name": "C1_public",
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
                  "start": 1057,
                  "end": 1072,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1059,
                    "end": 1071,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1061,
                      "end": 1071,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1061,
                        "end": 1071,
                        "name": "C2_private",
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
                  "type": "TSMethodSignature",
                  "start": 1082,
                  "end": 1100,
                  "key": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1084,
                    "name": "f1",
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
                      "start": 1085,
                      "end": 1098,
                      "name": "a1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1087,
                        "end": 1098,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1089,
                          "end": 1098,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1089,
                            "end": 1098,
                            "name": "C1_public",
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
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1109,
                  "end": 1128,
                  "key": {
                    "type": "Identifier",
                    "start": 1109,
                    "end": 1111,
                    "name": "f2",
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
                      "start": 1112,
                      "end": 1126,
                      "name": "a1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1114,
                        "end": 1126,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1116,
                          "end": 1126,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1116,
                            "end": 1126,
                            "name": "C2_private",
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
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1137,
                  "end": 1153,
                  "key": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1139,
                    "name": "f3",
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
                    "start": 1141,
                    "end": 1152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1143,
                      "end": 1152,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1143,
                        "end": 1152,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1162,
                  "end": 1179,
                  "key": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1164,
                    "name": "f4",
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
                    "start": 1166,
                    "end": 1178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1168,
                      "end": 1178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1168,
                        "end": 1178,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
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
      "type": "ClassDeclaration",
      "start": 1190,
      "end": 1234,
      "id": {
        "type": "Identifier",
        "start": 1196,
        "end": 1205,
        "name": "C5_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1206,
        "end": 1234,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1212,
            "end": 1232,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1220,
              "end": 1222,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1222,
              "end": 1232,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1225,
                "end": 1232,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
      "start": 1237,
      "end": 1462,
      "id": {
        "type": "Identifier",
        "start": 1247,
        "end": 1256,
        "name": "C7_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1257,
        "end": 1462,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1263,
            "end": 1279,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1264,
                "end": 1277,
                "name": "c1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1266,
                  "end": 1277,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1268,
                    "end": 1277,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1268,
                      "end": 1277,
                      "name": "C5_public",
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
            "returnType": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1284,
            "end": 1298,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1286,
              "end": 1297,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1288,
                "end": 1297,
                "typeName": {
                  "type": "Identifier",
                  "start": 1288,
                  "end": 1297,
                  "name": "C5_public",
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
            "start": 1304,
            "end": 1324,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1309,
                "end": 1322,
                "name": "c1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1311,
                  "end": 1322,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1313,
                    "end": 1322,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1313,
                      "end": 1322,
                      "name": "C5_public",
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
            "returnType": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1329,
            "end": 1347,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1335,
              "end": 1346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1337,
                "end": 1346,
                "typeName": {
                  "type": "Identifier",
                  "start": 1337,
                  "end": 1346,
                  "name": "C5_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 1353,
            "end": 1376,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1354,
                "end": 1363,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1355,
                  "end": 1363,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1357,
                    "end": 1363
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1364,
              "end": 1375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1366,
                "end": 1375,
                "typeName": {
                  "type": "Identifier",
                  "start": 1366,
                  "end": 1375,
                  "name": "C5_public",
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
            "start": 1382,
            "end": 1395,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1382,
              "end": 1383,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1383,
              "end": 1394,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1385,
                "end": 1394,
                "typeName": {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1394,
                  "name": "C5_public",
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
            "start": 1401,
            "end": 1415,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1401,
              "end": 1402,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1403,
              "end": 1414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1405,
                "end": 1414,
                "typeName": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1414,
                  "name": "C5_public",
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
            "type": "TSMethodSignature",
            "start": 1421,
            "end": 1439,
            "key": {
              "type": "Identifier",
              "start": 1421,
              "end": 1423,
              "name": "f1",
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
                "start": 1424,
                "end": 1437,
                "name": "a1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1426,
                  "end": 1437,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1428,
                    "end": 1437,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1428,
                      "end": 1437,
                      "name": "C5_public",
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
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1444,
            "end": 1460,
            "key": {
              "type": "Identifier",
              "start": 1444,
              "end": 1446,
              "name": "f3",
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
              "start": 1448,
              "end": 1459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1450,
                "end": 1459,
                "typeName": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1459,
                  "name": "C5_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1464,
      "end": 1985,
      "id": {
        "type": "Identifier",
        "start": 1471,
        "end": 1473,
        "name": "m3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1474,
        "end": 1985,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1480,
            "end": 1538,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1487,
              "end": 1538,
              "id": {
                "type": "Identifier",
                "start": 1497,
                "end": 1508,
                "name": "m3_i_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1509,
                "end": 1538,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1519,
                    "end": 1532,
                    "key": {
                      "type": "Identifier",
                      "start": 1519,
                      "end": 1521,
                      "name": "f1",
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
                      "start": 1523,
                      "end": 1531,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1525,
                        "end": 1531
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1544,
            "end": 1596,
            "id": {
              "type": "Identifier",
              "start": 1554,
              "end": 1566,
              "name": "m3_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1567,
              "end": 1596,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1577,
                  "end": 1590,
                  "key": {
                    "type": "Identifier",
                    "start": 1577,
                    "end": 1579,
                    "name": "f2",
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
                    "start": 1581,
                    "end": 1589,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1583,
                      "end": 1589
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1602,
            "end": 1653,
            "id": {
              "type": "Identifier",
              "start": 1612,
              "end": 1625,
              "name": "m3_C1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1634,
                "end": 1645,
                "expression": {
                  "type": "Identifier",
                  "start": 1634,
                  "end": 1645,
                  "name": "m3_i_public",
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
              "start": 1646,
              "end": 1653,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1658,
            "end": 1710,
            "id": {
              "type": "Identifier",
              "start": 1668,
              "end": 1681,
              "name": "m3_C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1690,
                "end": 1702,
                "expression": {
                  "type": "Identifier",
                  "start": 1690,
                  "end": 1702,
                  "name": "m3_i_private",
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
              "start": 1703,
              "end": 1710,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1715,
            "end": 1772,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1722,
              "end": 1772,
              "id": {
                "type": "Identifier",
                "start": 1732,
                "end": 1744,
                "name": "m3_C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1753,
                  "end": 1764,
                  "expression": {
                    "type": "Identifier",
                    "start": 1753,
                    "end": 1764,
                    "name": "m3_i_public",
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
                "start": 1765,
                "end": 1772,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1777,
            "end": 1835,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1784,
              "end": 1835,
              "id": {
                "type": "Identifier",
                "start": 1794,
                "end": 1806,
                "name": "m3_C4_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1815,
                  "end": 1827,
                  "expression": {
                    "type": "Identifier",
                    "start": 1815,
                    "end": 1827,
                    "name": "m3_i_private",
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
                "start": 1828,
                "end": 1835,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1841,
            "end": 1906,
            "id": {
              "type": "Identifier",
              "start": 1851,
              "end": 1864,
              "name": "m3_C5_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1873,
                "end": 1885,
                "expression": {
                  "type": "Identifier",
                  "start": 1873,
                  "end": 1885,
                  "name": "m3_i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "m3_i_public",
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
              "start": 1899,
              "end": 1906,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1911,
            "end": 1983,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1918,
              "end": 1983,
              "id": {
                "type": "Identifier",
                "start": 1928,
                "end": 1940,
                "name": "m3_C6_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1950,
                  "end": 1962,
                  "expression": {
                    "type": "Identifier",
                    "start": 1950,
                    "end": 1962,
                    "name": "m3_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "m3_i_public",
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
                "start": 1976,
                "end": 1983,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1987,
      "end": 2031,
      "id": {
        "type": "Identifier",
        "start": 1997,
        "end": 2009,
        "name": "glo_i_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2010,
        "end": 2031,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2016,
            "end": 2029,
            "key": {
              "type": "Identifier",
              "start": 2016,
              "end": 2018,
              "name": "f1",
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
              "start": 2020,
              "end": 2028,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2022,
                "end": 2028
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2033,
      "end": 2081,
      "id": {
        "type": "Identifier",
        "start": 2043,
        "end": 2056,
        "name": "glo_C3_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2065,
          "end": 2077,
          "expression": {
            "type": "Identifier",
            "start": 2065,
            "end": 2077,
            "name": "glo_i_public",
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
        "start": 2078,
        "end": 2081,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
