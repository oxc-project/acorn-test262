__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4885,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 1195,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 1195,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 1195,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 23,
              "end": 86,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 30,
                "end": 86,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 45,
                  "name": "C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 46,
                  "end": 86,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 56,
                      "end": 80,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 66,
                        "name": "f1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 66,
                        "end": 80,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 69,
                          "end": 80,
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
              "start": 93,
              "end": 117,
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 109,
                "name": "C2_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 110,
                "end": 117,
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
              "start": 123,
              "end": 658,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 130,
                "end": 658,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 149,
                  "name": "C3_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 150,
                  "end": 658,
                  "body": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 160,
                      "end": 176,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 161,
                          "end": 174,
                          "name": "c1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 163,
                            "end": 174,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 165,
                              "end": 174,
                              "typeName": {
                                "type": "Identifier",
                                "start": 165,
                                "end": 174,
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
                      "start": 185,
                      "end": 202,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 186,
                          "end": 200,
                          "name": "c1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 188,
                            "end": 200,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 190,
                              "end": 200,
                              "typeName": {
                                "type": "Identifier",
                                "start": 190,
                                "end": 200,
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
                      "start": 211,
                      "end": 225,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 213,
                        "end": 224,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 215,
                          "end": 224,
                          "typeName": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 224,
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
                      "start": 234,
                      "end": 259,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 235,
                          "end": 245,
                          "name": "c2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 237,
                            "end": 245,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 239,
                              "end": 245
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 246,
                        "end": 258,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 248,
                          "end": 258,
                          "typeName": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 258,
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
                      "start": 269,
                      "end": 289,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 274,
                          "end": 287,
                          "name": "c1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 276,
                            "end": 287,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 278,
                              "end": 287,
                              "typeName": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 287,
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
                      "start": 298,
                      "end": 319,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 303,
                          "end": 317,
                          "name": "c1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 305,
                            "end": 317,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 307,
                              "end": 317,
                              "typeName": {
                                "type": "Identifier",
                                "start": 307,
                                "end": 317,
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
                      "start": 328,
                      "end": 346,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 334,
                        "end": 345,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 336,
                          "end": 345,
                          "typeName": {
                            "type": "Identifier",
                            "start": 336,
                            "end": 345,
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
                      "start": 355,
                      "end": 384,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 360,
                          "end": 370,
                          "name": "c2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 362,
                            "end": 370,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 364,
                              "end": 370
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 371,
                        "end": 383,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 373,
                          "end": 383,
                          "typeName": {
                            "type": "Identifier",
                            "start": 373,
                            "end": 383,
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
                      "start": 394,
                      "end": 417,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 395,
                          "end": 404,
                          "name": "c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 396,
                            "end": 404,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 398,
                              "end": 404
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 405,
                        "end": 416,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 407,
                          "end": 416,
                          "typeName": {
                            "type": "Identifier",
                            "start": 407,
                            "end": 416,
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
                      "start": 426,
                      "end": 450,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 427,
                          "end": 436,
                          "name": "c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 428,
                            "end": 436,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 430,
                              "end": 436
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 437,
                        "end": 449,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 439,
                          "end": 449,
                          "typeName": {
                            "type": "Identifier",
                            "start": 439,
                            "end": 449,
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
                      "start": 460,
                      "end": 473,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 461,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 461,
                        "end": 472,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 463,
                          "end": 472,
                          "typeName": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 472,
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
                      "start": 482,
                      "end": 496,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 483,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 483,
                        "end": 495,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 485,
                          "end": 495,
                          "typeName": {
                            "type": "Identifier",
                            "start": 485,
                            "end": 495,
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
                      "start": 506,
                      "end": 520,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 507,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 508,
                        "end": 519,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 510,
                          "end": 519,
                          "typeName": {
                            "type": "Identifier",
                            "start": 510,
                            "end": 519,
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
                      "start": 529,
                      "end": 544,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 529,
                        "end": 530,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 531,
                        "end": 543,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 533,
                          "end": 543,
                          "typeName": {
                            "type": "Identifier",
                            "start": 533,
                            "end": 543,
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
                      "start": 554,
                      "end": 572,
                      "key": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 556,
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
                          "start": 557,
                          "end": 570,
                          "name": "a1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 559,
                            "end": 570,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 561,
                              "end": 570,
                              "typeName": {
                                "type": "Identifier",
                                "start": 561,
                                "end": 570,
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
                      "start": 581,
                      "end": 600,
                      "key": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 583,
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
                          "start": 584,
                          "end": 598,
                          "name": "a1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 586,
                            "end": 598,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 588,
                              "end": 598,
                              "typeName": {
                                "type": "Identifier",
                                "start": 588,
                                "end": 598,
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
                      "start": 609,
                      "end": 625,
                      "key": {
                        "type": "Identifier",
                        "start": 609,
                        "end": 611,
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
                        "start": 613,
                        "end": 624,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 615,
                          "end": 624,
                          "typeName": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 624,
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
                      "start": 634,
                      "end": 651,
                      "key": {
                        "type": "Identifier",
                        "start": 634,
                        "end": 636,
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
                        "start": 638,
                        "end": 650,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 640,
                          "end": 650,
                          "typeName": {
                            "type": "Identifier",
                            "start": 640,
                            "end": 650,
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
              "start": 664,
              "end": 1193,
              "id": {
                "type": "Identifier",
                "start": 674,
                "end": 684,
                "name": "C4_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 685,
                "end": 1193,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 695,
                    "end": 711,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 696,
                        "end": 709,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 698,
                          "end": 709,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 700,
                            "end": 709,
                            "typeName": {
                              "type": "Identifier",
                              "start": 700,
                              "end": 709,
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
                    "start": 720,
                    "end": 737,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 721,
                        "end": 735,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 723,
                          "end": 735,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 725,
                            "end": 735,
                            "typeName": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 735,
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
                    "start": 746,
                    "end": 760,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 748,
                      "end": 759,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 750,
                        "end": 759,
                        "typeName": {
                          "type": "Identifier",
                          "start": 750,
                          "end": 759,
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
                    "start": 769,
                    "end": 794,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 770,
                        "end": 780,
                        "name": "c2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 772,
                          "end": 780,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 774,
                            "end": 780
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 781,
                      "end": 793,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 783,
                        "end": 793,
                        "typeName": {
                          "type": "Identifier",
                          "start": 783,
                          "end": 793,
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
                    "start": 804,
                    "end": 824,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 809,
                        "end": 822,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 811,
                          "end": 822,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 813,
                            "end": 822,
                            "typeName": {
                              "type": "Identifier",
                              "start": 813,
                              "end": 822,
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
                    "start": 833,
                    "end": 854,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 838,
                        "end": 852,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 840,
                          "end": 852,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 842,
                            "end": 852,
                            "typeName": {
                              "type": "Identifier",
                              "start": 842,
                              "end": 852,
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
                    "start": 863,
                    "end": 881,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 869,
                      "end": 880,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 871,
                        "end": 880,
                        "typeName": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 880,
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
                    "start": 890,
                    "end": 919,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 895,
                        "end": 905,
                        "name": "c2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 897,
                          "end": 905,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 899,
                            "end": 905
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 906,
                      "end": 918,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 908,
                        "end": 918,
                        "typeName": {
                          "type": "Identifier",
                          "start": 908,
                          "end": 918,
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
                    "start": 929,
                    "end": 952,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 930,
                        "end": 939,
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 931,
                          "end": 939,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 933,
                            "end": 939
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 940,
                      "end": 951,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 942,
                        "end": 951,
                        "typeName": {
                          "type": "Identifier",
                          "start": 942,
                          "end": 951,
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
                    "start": 961,
                    "end": 985,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 962,
                        "end": 971,
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 963,
                          "end": 971,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 965,
                            "end": 971
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 972,
                      "end": 984,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 974,
                        "end": 984,
                        "typeName": {
                          "type": "Identifier",
                          "start": 974,
                          "end": 984,
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
                    "start": 995,
                    "end": 1008,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 995,
                      "end": 996,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 996,
                      "end": 1007,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 998,
                        "end": 1007,
                        "typeName": {
                          "type": "Identifier",
                          "start": 998,
                          "end": 1007,
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
                    "start": 1017,
                    "end": 1031,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1017,
                      "end": 1018,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1018,
                      "end": 1030,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1020,
                        "end": 1030,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1020,
                          "end": 1030,
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
                    "start": 1041,
                    "end": 1055,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1041,
                      "end": 1042,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1043,
                      "end": 1054,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1045,
                        "end": 1054,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1045,
                          "end": 1054,
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
                    "start": 1064,
                    "end": 1079,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1065,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1066,
                      "end": 1078,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1068,
                        "end": 1078,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1068,
                          "end": 1078,
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
                    "start": 1089,
                    "end": 1107,
                    "key": {
                      "type": "Identifier",
                      "start": 1089,
                      "end": 1091,
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
                        "start": 1092,
                        "end": 1105,
                        "name": "a1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1094,
                          "end": 1105,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1096,
                            "end": 1105,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1096,
                              "end": 1105,
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
                    "start": 1116,
                    "end": 1135,
                    "key": {
                      "type": "Identifier",
                      "start": 1116,
                      "end": 1118,
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
                        "start": 1119,
                        "end": 1133,
                        "name": "a1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1121,
                          "end": 1133,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1123,
                            "end": 1133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1123,
                              "end": 1133,
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
                    "start": 1144,
                    "end": 1160,
                    "key": {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1146,
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
                      "start": 1148,
                      "end": 1159,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1150,
                        "end": 1159,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1150,
                          "end": 1159,
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
                    "start": 1169,
                    "end": 1186,
                    "key": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1171,
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
                      "start": 1173,
                      "end": 1185,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1175,
                        "end": 1185,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1175,
                          "end": 1185,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1198,
      "end": 2386,
      "id": {
        "type": "Identifier",
        "start": 1205,
        "end": 1207,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1208,
        "end": 2386,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1214,
            "end": 1277,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1221,
              "end": 1277,
              "id": {
                "type": "Identifier",
                "start": 1227,
                "end": 1236,
                "name": "C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1237,
                "end": 1277,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1247,
                    "end": 1271,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1255,
                      "end": 1257,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1257,
                      "end": 1271,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1260,
                        "end": 1271,
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
            "start": 1284,
            "end": 1308,
            "id": {
              "type": "Identifier",
              "start": 1290,
              "end": 1300,
              "name": "C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1301,
              "end": 1308,
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
            "start": 1314,
            "end": 1849,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1321,
              "end": 1849,
              "id": {
                "type": "Identifier",
                "start": 1331,
                "end": 1340,
                "name": "C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1341,
                "end": 1849,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1351,
                    "end": 1367,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1352,
                        "end": 1365,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1354,
                          "end": 1365,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1356,
                            "end": 1365,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1356,
                              "end": 1365,
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
                    "start": 1376,
                    "end": 1393,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1377,
                        "end": 1391,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1379,
                          "end": 1391,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1381,
                            "end": 1391,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1381,
                              "end": 1391,
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
                    "start": 1402,
                    "end": 1416,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1404,
                      "end": 1415,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1406,
                        "end": 1415,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1406,
                          "end": 1415,
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
                    "start": 1425,
                    "end": 1450,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1426,
                        "end": 1436,
                        "name": "c2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1428,
                          "end": 1436,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1430,
                            "end": 1436
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1437,
                      "end": 1449,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1439,
                        "end": 1449,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1439,
                          "end": 1449,
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
                    "start": 1460,
                    "end": 1480,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1465,
                        "end": 1478,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1467,
                          "end": 1478,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1469,
                            "end": 1478,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1469,
                              "end": 1478,
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
                    "start": 1489,
                    "end": 1510,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1494,
                        "end": 1508,
                        "name": "c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1496,
                          "end": 1508,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1498,
                            "end": 1508,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1498,
                              "end": 1508,
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
                    "start": 1519,
                    "end": 1537,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1525,
                      "end": 1536,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1527,
                        "end": 1536,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1527,
                          "end": 1536,
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
                    "start": 1546,
                    "end": 1575,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1561,
                        "name": "c2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1553,
                          "end": 1561,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1555,
                            "end": 1561
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1562,
                      "end": 1574,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1564,
                        "end": 1574,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1564,
                          "end": 1574,
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
                    "start": 1585,
                    "end": 1608,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1586,
                        "end": 1595,
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1587,
                          "end": 1595,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1589,
                            "end": 1595
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1596,
                      "end": 1607,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1598,
                        "end": 1607,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1598,
                          "end": 1607,
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
                    "start": 1617,
                    "end": 1641,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1618,
                        "end": 1627,
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1619,
                          "end": 1627,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1621,
                            "end": 1627
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1628,
                      "end": 1640,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1630,
                        "end": 1640,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1630,
                          "end": 1640,
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
                    "start": 1651,
                    "end": 1664,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1651,
                      "end": 1652,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1652,
                      "end": 1663,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1654,
                        "end": 1663,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1654,
                          "end": 1663,
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
                    "start": 1673,
                    "end": 1687,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1673,
                      "end": 1674,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1674,
                      "end": 1686,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1676,
                        "end": 1686,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1676,
                          "end": 1686,
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
                    "start": 1697,
                    "end": 1711,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1697,
                      "end": 1698,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1699,
                      "end": 1710,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1701,
                        "end": 1710,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1701,
                          "end": 1710,
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
                    "start": 1720,
                    "end": 1735,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1720,
                      "end": 1721,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1722,
                      "end": 1734,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1724,
                        "end": 1734,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1724,
                          "end": 1734,
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
                    "start": 1745,
                    "end": 1763,
                    "key": {
                      "type": "Identifier",
                      "start": 1745,
                      "end": 1747,
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
                        "start": 1748,
                        "end": 1761,
                        "name": "a1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1750,
                          "end": 1761,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1752,
                            "end": 1761,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1752,
                              "end": 1761,
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
                    "start": 1772,
                    "end": 1791,
                    "key": {
                      "type": "Identifier",
                      "start": 1772,
                      "end": 1774,
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
                        "start": 1775,
                        "end": 1789,
                        "name": "a1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1777,
                          "end": 1789,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1779,
                            "end": 1789,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1779,
                              "end": 1789,
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
                    "start": 1800,
                    "end": 1816,
                    "key": {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1802,
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
                      "start": 1804,
                      "end": 1815,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1806,
                        "end": 1815,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1806,
                          "end": 1815,
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
                    "start": 1825,
                    "end": 1842,
                    "key": {
                      "type": "Identifier",
                      "start": 1825,
                      "end": 1827,
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
                      "start": 1829,
                      "end": 1841,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1831,
                        "end": 1841,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1831,
                          "end": 1841,
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
            "start": 1855,
            "end": 2384,
            "id": {
              "type": "Identifier",
              "start": 1865,
              "end": 1875,
              "name": "C4_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1876,
              "end": 2384,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1886,
                  "end": 1902,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1887,
                      "end": 1900,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1889,
                        "end": 1900,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1891,
                          "end": 1900,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1891,
                            "end": 1900,
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
                  "start": 1911,
                  "end": 1928,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1912,
                      "end": 1926,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1914,
                        "end": 1926,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1916,
                          "end": 1926,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1916,
                            "end": 1926,
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
                  "start": 1937,
                  "end": 1951,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1939,
                    "end": 1950,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1941,
                      "end": 1950,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1941,
                        "end": 1950,
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
                  "start": 1960,
                  "end": 1985,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1961,
                      "end": 1971,
                      "name": "c2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1963,
                        "end": 1971,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1965,
                          "end": 1971
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1972,
                    "end": 1984,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1974,
                      "end": 1984,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1974,
                        "end": 1984,
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
                  "start": 1995,
                  "end": 2015,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2000,
                      "end": 2013,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2002,
                        "end": 2013,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2004,
                          "end": 2013,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2004,
                            "end": 2013,
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
                  "start": 2024,
                  "end": 2045,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2029,
                      "end": 2043,
                      "name": "c1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2031,
                        "end": 2043,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2033,
                          "end": 2043,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2033,
                            "end": 2043,
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
                  "start": 2054,
                  "end": 2072,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2060,
                    "end": 2071,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2062,
                      "end": 2071,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2062,
                        "end": 2071,
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
                  "start": 2081,
                  "end": 2110,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2086,
                      "end": 2096,
                      "name": "c2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2088,
                        "end": 2096,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2090,
                          "end": 2096
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2097,
                    "end": 2109,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2099,
                      "end": 2109,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2099,
                        "end": 2109,
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
                  "start": 2120,
                  "end": 2143,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2121,
                      "end": 2130,
                      "name": "c",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2122,
                        "end": 2130,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2124,
                          "end": 2130
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2131,
                    "end": 2142,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2133,
                      "end": 2142,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2133,
                        "end": 2142,
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
                  "start": 2152,
                  "end": 2176,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2153,
                      "end": 2162,
                      "name": "c",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2154,
                        "end": 2162,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2156,
                          "end": 2162
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2163,
                    "end": 2175,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2165,
                      "end": 2175,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2165,
                        "end": 2175,
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
                  "start": 2186,
                  "end": 2199,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2186,
                    "end": 2187,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2187,
                    "end": 2198,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2189,
                      "end": 2198,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2189,
                        "end": 2198,
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
                  "start": 2208,
                  "end": 2222,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2208,
                    "end": 2209,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2209,
                    "end": 2221,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2211,
                      "end": 2221,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2211,
                        "end": 2221,
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
                  "start": 2232,
                  "end": 2246,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2232,
                    "end": 2233,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2234,
                    "end": 2245,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2236,
                      "end": 2245,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2236,
                        "end": 2245,
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
                  "start": 2255,
                  "end": 2270,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2255,
                    "end": 2256,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2257,
                    "end": 2269,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2259,
                      "end": 2269,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2259,
                        "end": 2269,
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
                  "start": 2280,
                  "end": 2298,
                  "key": {
                    "type": "Identifier",
                    "start": 2280,
                    "end": 2282,
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
                      "start": 2283,
                      "end": 2296,
                      "name": "a1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2285,
                        "end": 2296,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2287,
                          "end": 2296,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2287,
                            "end": 2296,
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
                  "start": 2307,
                  "end": 2326,
                  "key": {
                    "type": "Identifier",
                    "start": 2307,
                    "end": 2309,
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
                      "start": 2310,
                      "end": 2324,
                      "name": "a1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2312,
                        "end": 2324,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2314,
                          "end": 2324,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2314,
                            "end": 2324,
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
                  "start": 2335,
                  "end": 2351,
                  "key": {
                    "type": "Identifier",
                    "start": 2335,
                    "end": 2337,
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
                    "start": 2339,
                    "end": 2350,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2341,
                      "end": 2350,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2341,
                        "end": 2350,
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
                  "start": 2360,
                  "end": 2377,
                  "key": {
                    "type": "Identifier",
                    "start": 2360,
                    "end": 2362,
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
                    "start": 2364,
                    "end": 2376,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2366,
                      "end": 2376,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2366,
                        "end": 2376,
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
      "type": "ExportNamedDeclaration",
      "start": 2388,
      "end": 2439,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2395,
        "end": 2439,
        "id": {
          "type": "Identifier",
          "start": 2401,
          "end": 2410,
          "name": "C5_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2411,
          "end": 2439,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 2417,
              "end": 2437,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2425,
                "end": 2427,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 2427,
                "end": 2437,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 2430,
                  "end": 2437,
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
      "start": 2442,
      "end": 2462,
      "id": {
        "type": "Identifier",
        "start": 2448,
        "end": 2458,
        "name": "C6_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2459,
        "end": 2462,
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
      "start": 2464,
      "end": 2923,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2471,
        "end": 2923,
        "id": {
          "type": "Identifier",
          "start": 2481,
          "end": 2490,
          "name": "C7_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 2491,
          "end": 2923,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 2497,
              "end": 2513,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2498,
                  "end": 2511,
                  "name": "c1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2500,
                    "end": 2511,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2502,
                      "end": 2511,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2502,
                        "end": 2511,
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
              "start": 2518,
              "end": 2535,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2519,
                  "end": 2533,
                  "name": "c1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2521,
                    "end": 2533,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2523,
                      "end": 2533,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2523,
                        "end": 2533,
                        "name": "C6_private",
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
              "start": 2540,
              "end": 2554,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2542,
                "end": 2553,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2544,
                  "end": 2553,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2544,
                    "end": 2553,
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
              "type": "TSCallSignatureDeclaration",
              "start": 2559,
              "end": 2584,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2560,
                  "end": 2570,
                  "name": "c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2562,
                    "end": 2570,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2564,
                      "end": 2570
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2571,
                "end": 2583,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2573,
                  "end": 2583,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2573,
                    "end": 2583,
                    "name": "C6_private",
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
              "start": 2590,
              "end": 2610,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2595,
                  "end": 2608,
                  "name": "c1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2597,
                    "end": 2608,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2599,
                      "end": 2608,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2599,
                        "end": 2608,
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
              "start": 2615,
              "end": 2636,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2620,
                  "end": 2634,
                  "name": "c1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2622,
                    "end": 2634,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2624,
                      "end": 2634,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2624,
                        "end": 2634,
                        "name": "C6_private",
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
              "start": 2641,
              "end": 2659,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2647,
                "end": 2658,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2649,
                  "end": 2658,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2649,
                    "end": 2658,
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
              "start": 2664,
              "end": 2693,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2669,
                  "end": 2679,
                  "name": "c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2671,
                    "end": 2679,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2673,
                      "end": 2679
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2680,
                "end": 2692,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2682,
                  "end": 2692,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2682,
                    "end": 2692,
                    "name": "C6_private",
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
              "start": 2699,
              "end": 2722,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 2700,
                  "end": 2709,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2701,
                    "end": 2709,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2703,
                      "end": 2709
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2710,
                "end": 2721,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2712,
                  "end": 2721,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2712,
                    "end": 2721,
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
              "type": "TSIndexSignature",
              "start": 2727,
              "end": 2751,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 2728,
                  "end": 2737,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2729,
                    "end": 2737,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2731,
                      "end": 2737
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2738,
                "end": 2750,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2740,
                  "end": 2750,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2740,
                    "end": 2750,
                    "name": "C6_private",
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
              "start": 2757,
              "end": 2770,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2757,
                "end": 2758,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2758,
                "end": 2769,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2760,
                  "end": 2769,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2760,
                    "end": 2769,
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
              "start": 2775,
              "end": 2789,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2775,
                "end": 2776,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2776,
                "end": 2788,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2778,
                  "end": 2788,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2778,
                    "end": 2788,
                    "name": "C6_private",
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
              "start": 2795,
              "end": 2809,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2795,
                "end": 2796,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2797,
                "end": 2808,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2799,
                  "end": 2808,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2799,
                    "end": 2808,
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
              "start": 2814,
              "end": 2829,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2814,
                "end": 2815,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2816,
                "end": 2828,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2818,
                  "end": 2828,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2818,
                    "end": 2828,
                    "name": "C6_private",
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
              "start": 2835,
              "end": 2853,
              "key": {
                "type": "Identifier",
                "start": 2835,
                "end": 2837,
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
                  "start": 2838,
                  "end": 2851,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2840,
                    "end": 2851,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2842,
                      "end": 2851,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2842,
                        "end": 2851,
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
              "start": 2858,
              "end": 2877,
              "key": {
                "type": "Identifier",
                "start": 2858,
                "end": 2860,
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
                  "start": 2861,
                  "end": 2875,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2863,
                    "end": 2875,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2865,
                      "end": 2875,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2865,
                        "end": 2875,
                        "name": "C6_private",
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
              "start": 2882,
              "end": 2898,
              "key": {
                "type": "Identifier",
                "start": 2882,
                "end": 2884,
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
                "start": 2886,
                "end": 2897,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2888,
                  "end": 2897,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2888,
                    "end": 2897,
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
            },
            {
              "type": "TSMethodSignature",
              "start": 2903,
              "end": 2920,
              "key": {
                "type": "Identifier",
                "start": 2903,
                "end": 2905,
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
                "start": 2907,
                "end": 2919,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2909,
                  "end": 2919,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2909,
                    "end": 2919,
                    "name": "C6_private",
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
      "start": 2925,
      "end": 3378,
      "id": {
        "type": "Identifier",
        "start": 2935,
        "end": 2945,
        "name": "C8_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2946,
        "end": 3378,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 2952,
            "end": 2968,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2953,
                "end": 2966,
                "name": "c1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2955,
                  "end": 2966,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2957,
                    "end": 2966,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2957,
                      "end": 2966,
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
            "start": 2973,
            "end": 2990,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2974,
                "end": 2988,
                "name": "c1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2976,
                  "end": 2988,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2978,
                    "end": 2988,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2978,
                      "end": 2988,
                      "name": "C6_private",
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
            "start": 2995,
            "end": 3009,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2997,
              "end": 3008,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2999,
                "end": 3008,
                "typeName": {
                  "type": "Identifier",
                  "start": 2999,
                  "end": 3008,
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
            "type": "TSCallSignatureDeclaration",
            "start": 3014,
            "end": 3039,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3015,
                "end": 3025,
                "name": "c2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3017,
                  "end": 3025,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3019,
                    "end": 3025
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3026,
              "end": 3038,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3028,
                "end": 3038,
                "typeName": {
                  "type": "Identifier",
                  "start": 3028,
                  "end": 3038,
                  "name": "C6_private",
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
            "start": 3045,
            "end": 3065,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3050,
                "end": 3063,
                "name": "c1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3052,
                  "end": 3063,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3054,
                    "end": 3063,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3054,
                      "end": 3063,
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
            "start": 3070,
            "end": 3091,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3075,
                "end": 3089,
                "name": "c1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3077,
                  "end": 3089,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3079,
                    "end": 3089,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3079,
                      "end": 3089,
                      "name": "C6_private",
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
            "start": 3096,
            "end": 3114,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3102,
              "end": 3113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3104,
                "end": 3113,
                "typeName": {
                  "type": "Identifier",
                  "start": 3104,
                  "end": 3113,
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
            "start": 3119,
            "end": 3148,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3124,
                "end": 3134,
                "name": "c2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3126,
                  "end": 3134,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3128,
                    "end": 3134
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3135,
              "end": 3147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3137,
                "end": 3147,
                "typeName": {
                  "type": "Identifier",
                  "start": 3137,
                  "end": 3147,
                  "name": "C6_private",
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
            "start": 3154,
            "end": 3177,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3155,
                "end": 3164,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3156,
                  "end": 3164,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3158,
                    "end": 3164
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3165,
              "end": 3176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3167,
                "end": 3176,
                "typeName": {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3176,
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
            "type": "TSIndexSignature",
            "start": 3182,
            "end": 3206,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3183,
                "end": 3192,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3184,
                  "end": 3192,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3186,
                    "end": 3192
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3193,
              "end": 3205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3195,
                "end": 3205,
                "typeName": {
                  "type": "Identifier",
                  "start": 3195,
                  "end": 3205,
                  "name": "C6_private",
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
            "start": 3212,
            "end": 3225,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3212,
              "end": 3213,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3213,
              "end": 3224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3215,
                "end": 3224,
                "typeName": {
                  "type": "Identifier",
                  "start": 3215,
                  "end": 3224,
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
            "start": 3230,
            "end": 3244,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3230,
              "end": 3231,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3231,
              "end": 3243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3233,
                "end": 3243,
                "typeName": {
                  "type": "Identifier",
                  "start": 3233,
                  "end": 3243,
                  "name": "C6_private",
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
            "start": 3250,
            "end": 3264,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3250,
              "end": 3251,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3252,
              "end": 3263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3254,
                "end": 3263,
                "typeName": {
                  "type": "Identifier",
                  "start": 3254,
                  "end": 3263,
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
            "start": 3269,
            "end": 3284,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3269,
              "end": 3270,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3271,
              "end": 3283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3273,
                "end": 3283,
                "typeName": {
                  "type": "Identifier",
                  "start": 3273,
                  "end": 3283,
                  "name": "C6_private",
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
            "start": 3290,
            "end": 3308,
            "key": {
              "type": "Identifier",
              "start": 3290,
              "end": 3292,
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
                "start": 3293,
                "end": 3306,
                "name": "a1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3295,
                  "end": 3306,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3297,
                    "end": 3306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3297,
                      "end": 3306,
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
            "start": 3313,
            "end": 3332,
            "key": {
              "type": "Identifier",
              "start": 3313,
              "end": 3315,
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
                "start": 3316,
                "end": 3330,
                "name": "a1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3318,
                  "end": 3330,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3320,
                    "end": 3330,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3320,
                      "end": 3330,
                      "name": "C6_private",
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
            "start": 3337,
            "end": 3353,
            "key": {
              "type": "Identifier",
              "start": 3337,
              "end": 3339,
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
              "start": 3341,
              "end": 3352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3343,
                "end": 3352,
                "typeName": {
                  "type": "Identifier",
                  "start": 3343,
                  "end": 3352,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 3358,
            "end": 3375,
            "key": {
              "type": "Identifier",
              "start": 3358,
              "end": 3360,
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
              "start": 3362,
              "end": 3374,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3364,
                "end": 3374,
                "typeName": {
                  "type": "Identifier",
                  "start": 3364,
                  "end": 3374,
                  "name": "C6_private",
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
      "type": "ExportNamedDeclaration",
      "start": 3380,
      "end": 3908,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 3387,
        "end": 3908,
        "id": {
          "type": "Identifier",
          "start": 3394,
          "end": 3396,
          "name": "m3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 3397,
          "end": 3908,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 3403,
              "end": 3461,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 3410,
                "end": 3461,
                "id": {
                  "type": "Identifier",
                  "start": 3420,
                  "end": 3431,
                  "name": "m3_i_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 3432,
                  "end": 3461,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 3442,
                      "end": 3455,
                      "key": {
                        "type": "Identifier",
                        "start": 3442,
                        "end": 3444,
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
                        "start": 3446,
                        "end": 3454,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3448,
                          "end": 3454
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
              "start": 3467,
              "end": 3519,
              "id": {
                "type": "Identifier",
                "start": 3477,
                "end": 3489,
                "name": "m3_i_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 3490,
                "end": 3519,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 3500,
                    "end": 3513,
                    "key": {
                      "type": "Identifier",
                      "start": 3500,
                      "end": 3502,
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
                      "start": 3504,
                      "end": 3512,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3506,
                        "end": 3512
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
              "start": 3525,
              "end": 3576,
              "id": {
                "type": "Identifier",
                "start": 3535,
                "end": 3548,
                "name": "m3_C1_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 3557,
                  "end": 3568,
                  "expression": {
                    "type": "Identifier",
                    "start": 3557,
                    "end": 3568,
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
                "start": 3569,
                "end": 3576,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 3581,
              "end": 3633,
              "id": {
                "type": "Identifier",
                "start": 3591,
                "end": 3604,
                "name": "m3_C2_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 3613,
                  "end": 3625,
                  "expression": {
                    "type": "Identifier",
                    "start": 3613,
                    "end": 3625,
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
                "start": 3626,
                "end": 3633,
                "body": []
              },
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3638,
              "end": 3695,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 3645,
                "end": 3695,
                "id": {
                  "type": "Identifier",
                  "start": 3655,
                  "end": 3667,
                  "name": "m3_C3_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 3676,
                    "end": 3687,
                    "expression": {
                      "type": "Identifier",
                      "start": 3676,
                      "end": 3687,
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
                  "start": 3688,
                  "end": 3695,
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
              "start": 3700,
              "end": 3758,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 3707,
                "end": 3758,
                "id": {
                  "type": "Identifier",
                  "start": 3717,
                  "end": 3729,
                  "name": "m3_C4_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 3738,
                    "end": 3750,
                    "expression": {
                      "type": "Identifier",
                      "start": 3738,
                      "end": 3750,
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
                  "start": 3751,
                  "end": 3758,
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
              "start": 3764,
              "end": 3829,
              "id": {
                "type": "Identifier",
                "start": 3774,
                "end": 3787,
                "name": "m3_C5_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 3796,
                  "end": 3808,
                  "expression": {
                    "type": "Identifier",
                    "start": 3796,
                    "end": 3808,
                    "name": "m3_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSInterfaceHeritage",
                  "start": 3810,
                  "end": 3821,
                  "expression": {
                    "type": "Identifier",
                    "start": 3810,
                    "end": 3821,
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
                "start": 3822,
                "end": 3829,
                "body": []
              },
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3834,
              "end": 3906,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 3841,
                "end": 3906,
                "id": {
                  "type": "Identifier",
                  "start": 3851,
                  "end": 3863,
                  "name": "m3_C6_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 3873,
                    "end": 3885,
                    "expression": {
                      "type": "Identifier",
                      "start": 3873,
                      "end": 3885,
                      "name": "m3_i_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSInterfaceHeritage",
                    "start": 3887,
                    "end": 3898,
                    "expression": {
                      "type": "Identifier",
                      "start": 3887,
                      "end": 3898,
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
                  "start": 3899,
                  "end": 3906,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3911,
      "end": 4432,
      "id": {
        "type": "Identifier",
        "start": 3918,
        "end": 3920,
        "name": "m4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3921,
        "end": 4432,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3927,
            "end": 3985,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 3934,
              "end": 3985,
              "id": {
                "type": "Identifier",
                "start": 3944,
                "end": 3955,
                "name": "m4_i_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 3956,
                "end": 3985,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 3966,
                    "end": 3979,
                    "key": {
                      "type": "Identifier",
                      "start": 3966,
                      "end": 3968,
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
                      "start": 3970,
                      "end": 3978,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3972,
                        "end": 3978
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
            "start": 3991,
            "end": 4043,
            "id": {
              "type": "Identifier",
              "start": 4001,
              "end": 4013,
              "name": "m4_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 4014,
              "end": 4043,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 4024,
                  "end": 4037,
                  "key": {
                    "type": "Identifier",
                    "start": 4024,
                    "end": 4026,
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
                    "start": 4028,
                    "end": 4036,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4030,
                      "end": 4036
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
            "start": 4049,
            "end": 4100,
            "id": {
              "type": "Identifier",
              "start": 4059,
              "end": 4072,
              "name": "m4_C1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4081,
                "end": 4092,
                "expression": {
                  "type": "Identifier",
                  "start": 4081,
                  "end": 4092,
                  "name": "m4_i_public",
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
              "start": 4093,
              "end": 4100,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4105,
            "end": 4157,
            "id": {
              "type": "Identifier",
              "start": 4115,
              "end": 4128,
              "name": "m4_C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4137,
                "end": 4149,
                "expression": {
                  "type": "Identifier",
                  "start": 4137,
                  "end": 4149,
                  "name": "m4_i_private",
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
              "start": 4150,
              "end": 4157,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4162,
            "end": 4219,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 4169,
              "end": 4219,
              "id": {
                "type": "Identifier",
                "start": 4179,
                "end": 4191,
                "name": "m4_C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 4200,
                  "end": 4211,
                  "expression": {
                    "type": "Identifier",
                    "start": 4200,
                    "end": 4211,
                    "name": "m4_i_public",
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
                "start": 4212,
                "end": 4219,
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
            "start": 4224,
            "end": 4282,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 4231,
              "end": 4282,
              "id": {
                "type": "Identifier",
                "start": 4241,
                "end": 4253,
                "name": "m4_C4_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 4262,
                  "end": 4274,
                  "expression": {
                    "type": "Identifier",
                    "start": 4262,
                    "end": 4274,
                    "name": "m4_i_private",
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
                "start": 4275,
                "end": 4282,
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
            "start": 4288,
            "end": 4353,
            "id": {
              "type": "Identifier",
              "start": 4298,
              "end": 4311,
              "name": "m4_C5_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 4320,
                "end": 4332,
                "expression": {
                  "type": "Identifier",
                  "start": 4320,
                  "end": 4332,
                  "name": "m4_i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 4334,
                "end": 4345,
                "expression": {
                  "type": "Identifier",
                  "start": 4334,
                  "end": 4345,
                  "name": "m4_i_public",
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
              "start": 4346,
              "end": 4353,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4358,
            "end": 4430,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 4365,
              "end": 4430,
              "id": {
                "type": "Identifier",
                "start": 4375,
                "end": 4387,
                "name": "m4_C6_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 4397,
                  "end": 4409,
                  "expression": {
                    "type": "Identifier",
                    "start": 4397,
                    "end": 4409,
                    "name": "m4_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSInterfaceHeritage",
                  "start": 4411,
                  "end": 4422,
                  "expression": {
                    "type": "Identifier",
                    "start": 4411,
                    "end": 4422,
                    "name": "m4_i_public",
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
                "start": 4423,
                "end": 4430,
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
      "type": "ExportNamedDeclaration",
      "start": 4434,
      "end": 4485,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 4441,
        "end": 4485,
        "id": {
          "type": "Identifier",
          "start": 4451,
          "end": 4463,
          "name": "glo_i_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 4464,
          "end": 4485,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 4470,
              "end": 4483,
              "key": {
                "type": "Identifier",
                "start": 4470,
                "end": 4472,
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
                "start": 4474,
                "end": 4482,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4476,
                  "end": 4482
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
      "start": 4487,
      "end": 4532,
      "id": {
        "type": "Identifier",
        "start": 4497,
        "end": 4510,
        "name": "glo_i_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4511,
        "end": 4532,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4517,
            "end": 4530,
            "key": {
              "type": "Identifier",
              "start": 4517,
              "end": 4519,
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
              "start": 4521,
              "end": 4529,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4523,
                "end": 4529
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
      "start": 4534,
      "end": 4583,
      "id": {
        "type": "Identifier",
        "start": 4544,
        "end": 4558,
        "name": "glo_C1_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 4567,
          "end": 4579,
          "expression": {
            "type": "Identifier",
            "start": 4567,
            "end": 4579,
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
        "start": 4580,
        "end": 4583,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4584,
      "end": 4634,
      "id": {
        "type": "Identifier",
        "start": 4594,
        "end": 4608,
        "name": "glo_C2_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 4617,
          "end": 4630,
          "expression": {
            "type": "Identifier",
            "start": 4617,
            "end": 4630,
            "name": "glo_i_private",
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
        "start": 4631,
        "end": 4634,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4635,
      "end": 4690,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 4642,
        "end": 4690,
        "id": {
          "type": "Identifier",
          "start": 4652,
          "end": 4665,
          "name": "glo_C3_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 4674,
            "end": 4686,
            "expression": {
              "type": "Identifier",
              "start": 4674,
              "end": 4686,
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
          "start": 4687,
          "end": 4690,
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
      "start": 4691,
      "end": 4747,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 4698,
        "end": 4747,
        "id": {
          "type": "Identifier",
          "start": 4708,
          "end": 4721,
          "name": "glo_C4_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 4730,
            "end": 4743,
            "expression": {
              "type": "Identifier",
              "start": 4730,
              "end": 4743,
              "name": "glo_i_private",
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
          "start": 4744,
          "end": 4747,
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
      "start": 4749,
      "end": 4813,
      "id": {
        "type": "Identifier",
        "start": 4759,
        "end": 4773,
        "name": "glo_C5_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 4782,
          "end": 4795,
          "expression": {
            "type": "Identifier",
            "start": 4782,
            "end": 4795,
            "name": "glo_i_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 4797,
          "end": 4809,
          "expression": {
            "type": "Identifier",
            "start": 4797,
            "end": 4809,
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
        "start": 4810,
        "end": 4813,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4814,
      "end": 4885,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 4821,
        "end": 4885,
        "id": {
          "type": "Identifier",
          "start": 4831,
          "end": 4844,
          "name": "glo_C6_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 4854,
            "end": 4867,
            "expression": {
              "type": "Identifier",
              "start": 4854,
              "end": 4867,
              "name": "glo_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 4869,
            "end": 4881,
            "expression": {
              "type": "Identifier",
              "start": 4869,
              "end": 4881,
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
          "start": 4882,
          "end": 4885,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
