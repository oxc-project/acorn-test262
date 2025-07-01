__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 201
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 203
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 202,
              "end": 203
            }
          ],
          "start": 201,
          "end": 204
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 216
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 219
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 219
                },
                "start": 216,
                "end": 219
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 211,
              "end": 220
            }
          ],
          "start": 205,
          "end": 222
        },
        "abstract": false,
        "declare": false,
        "start": 194,
        "end": 222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 187,
      "end": 222
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 238
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 239,
              "end": 240
            }
          ],
          "start": 238,
          "end": 241
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 251
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 253
              },
              "typeArguments": null,
              "start": 252,
              "end": 253
            }
          ],
          "start": 251,
          "end": 254
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 266
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "typeArguments": null,
                  "start": 268,
                  "end": 269
                },
                "start": 266,
                "end": 269
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 261,
              "end": 270
            }
          ],
          "start": 255,
          "end": 272
        },
        "abstract": false,
        "declare": false,
        "start": 231,
        "end": 272
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 224,
      "end": 272
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 288
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 301,
                      "end": 307
                    },
                    "start": 299,
                    "end": 307
                  },
                  "start": 296,
                  "end": 307
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 310,
                  "end": 316
                },
                "start": 308,
                "end": 316
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 295,
              "end": 317
            }
          ],
          "start": 289,
          "end": 319
        },
        "abstract": false,
        "declare": false,
        "start": 281,
        "end": 319
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 274,
      "end": 319
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 335
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 345
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 346,
          "end": 348
        },
        "abstract": false,
        "declare": false,
        "start": 328,
        "end": 348
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 321,
      "end": 348
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 364
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 374
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 387,
                      "end": 393
                    },
                    "start": 385,
                    "end": 393
                  },
                  "start": 382,
                  "end": 393
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 396,
                    "end": 400
                  },
                  "start": 396,
                  "end": 400
                },
                "start": 394,
                "end": 400
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 381,
              "end": 401
            }
          ],
          "start": 375,
          "end": 403
        },
        "abstract": false,
        "declare": false,
        "start": 357,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 350,
      "end": 403
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 419
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 429
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 442,
                      "end": 448
                    },
                    "start": 440,
                    "end": 448
                  },
                  "start": 437,
                  "end": 448
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 451,
                    "end": 455
                  },
                  "start": 451,
                  "end": 455
                },
                "start": 449,
                "end": 455
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 436,
              "end": 456
            }
          ],
          "start": 430,
          "end": 458
        },
        "abstract": false,
        "declare": false,
        "start": 412,
        "end": 458
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 405,
      "end": 458
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null,
          "start": 473,
          "end": 474
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 483,
          "end": 484
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 497,
                      "end": 503
                    },
                    "start": 495,
                    "end": 503
                  },
                  "start": 492,
                  "end": 503
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 506,
                    "end": 510
                  },
                  "start": 506,
                  "end": 510
                },
                "start": 504,
                "end": 510
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 491,
              "end": 511
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 522,
                      "end": 528
                    },
                    "start": 520,
                    "end": 528
                  },
                  "start": 517,
                  "end": 528
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 531,
                  "end": 536
                },
                "start": 529,
                "end": 536
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 516,
              "end": 537
            }
          ],
          "start": 485,
          "end": 539
        },
        "abstract": false,
        "declare": false,
        "start": 467,
        "end": 539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 460,
      "end": 539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 555
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 568,
                      "end": 574
                    },
                    "start": 566,
                    "end": 574
                  },
                  "start": 563,
                  "end": 574
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 577,
                  "end": 583
                },
                "start": 575,
                "end": 583
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 562,
              "end": 584
            }
          ],
          "start": 556,
          "end": 586
        },
        "abstract": false,
        "declare": false,
        "start": 548,
        "end": 586
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 541,
      "end": 586
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 602
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 611,
          "end": 612
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 613,
          "end": 615
        },
        "abstract": false,
        "declare": false,
        "start": 595,
        "end": 615
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 588,
      "end": 615
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 632
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 641,
          "end": 642
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 655,
                      "end": 661
                    },
                    "start": 653,
                    "end": 661
                  },
                  "start": 650,
                  "end": 661
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 664,
                  "end": 670
                },
                "start": 662,
                "end": 670
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 649,
              "end": 671
            }
          ],
          "start": 643,
          "end": 673
        },
        "abstract": false,
        "declare": false,
        "start": 625,
        "end": 673
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 618,
      "end": 673
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "W",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 689
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 699
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    },
                    "start": 710,
                    "end": 718
                  },
                  "start": 707,
                  "end": 718
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 721,
                    "end": 725
                  },
                  "start": 721,
                  "end": 725
                },
                "start": 719,
                "end": 725
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 706,
              "end": 726
            }
          ],
          "start": 700,
          "end": 728
        },
        "abstract": false,
        "declare": false,
        "start": 682,
        "end": 728
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 675,
      "end": 728
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 743,
          "end": 744
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 753,
          "end": 754
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 767,
                      "end": 773
                    },
                    "start": 765,
                    "end": 773
                  },
                  "start": 762,
                  "end": 773
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 776,
                  "end": 782
                },
                "start": 774,
                "end": 782
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 761,
              "end": 783
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 794,
                      "end": 800
                    },
                    "start": 792,
                    "end": 800
                  },
                  "start": 789,
                  "end": 800
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 803,
                    "end": 807
                  },
                  "start": 803,
                  "end": 807
                },
                "start": 801,
                "end": 807
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 788,
              "end": 808
            }
          ],
          "start": 755,
          "end": 810
        },
        "abstract": false,
        "declare": false,
        "start": 737,
        "end": 810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 730,
      "end": 810
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 825,
          "end": 826
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 839,
                      "end": 845
                    },
                    "start": 837,
                    "end": 845
                  },
                  "start": 834,
                  "end": 845
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 850
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 852,
                          "end": 858
                        },
                        "start": 850,
                        "end": 858
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 849,
                      "end": 858
                    }
                  ],
                  "start": 848,
                  "end": 859
                },
                "start": 846,
                "end": 859
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 833,
              "end": 860
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 871,
                      "end": 877
                    },
                    "start": 869,
                    "end": 877
                  },
                  "start": 866,
                  "end": 877
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 881,
                        "end": 882
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 884,
                          "end": 890
                        },
                        "start": 882,
                        "end": 890
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 881,
                      "end": 891
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 892,
                        "end": 893
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 895,
                          "end": 901
                        },
                        "start": 893,
                        "end": 901
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 892,
                      "end": 901
                    }
                  ],
                  "start": 880,
                  "end": 902
                },
                "start": 878,
                "end": 902
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 865,
              "end": 903
            }
          ],
          "start": 827,
          "end": 905
        },
        "abstract": false,
        "declare": false,
        "start": 819,
        "end": 905
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 812,
      "end": 905
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 920,
          "end": 921
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 930,
          "end": 931
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 932,
          "end": 934
        },
        "abstract": false,
        "declare": false,
        "start": 914,
        "end": 934
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 907,
      "end": 934
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 951
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 961
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 974,
                      "end": 980
                    },
                    "start": 972,
                    "end": 980
                  },
                  "start": 969,
                  "end": 980
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 984,
                        "end": 985
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 987,
                          "end": 993
                        },
                        "start": 985,
                        "end": 993
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 984,
                      "end": 994
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 995,
                        "end": 996
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 998,
                          "end": 1004
                        },
                        "start": 996,
                        "end": 1004
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 995,
                      "end": 1004
                    }
                  ],
                  "start": 983,
                  "end": 1005
                },
                "start": 981,
                "end": 1005
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 968,
              "end": 1006
            }
          ],
          "start": 962,
          "end": 1008
        },
        "abstract": false,
        "declare": false,
        "start": 943,
        "end": 1008
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 936,
      "end": 1008
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1023,
          "end": 1025
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1034,
          "end": 1035
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1048,
                      "end": 1054
                    },
                    "start": 1046,
                    "end": 1054
                  },
                  "start": 1043,
                  "end": 1054
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1058,
                        "end": 1059
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1061,
                            "end": 1062
                          },
                          "start": 1061,
                          "end": 1062
                        },
                        "start": 1059,
                        "end": 1062
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1058,
                      "end": 1063
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1064,
                        "end": 1065
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1067,
                            "end": 1068
                          },
                          "start": 1067,
                          "end": 1068
                        },
                        "start": 1065,
                        "end": 1068
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1064,
                      "end": 1068
                    }
                  ],
                  "start": 1057,
                  "end": 1069
                },
                "start": 1055,
                "end": 1069
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1042,
              "end": 1070
            }
          ],
          "start": 1036,
          "end": 1072
        },
        "abstract": false,
        "declare": false,
        "start": 1017,
        "end": 1072
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1010,
      "end": 1072
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CC",
          "optional": false,
          "typeAnnotation": null,
          "start": 1087,
          "end": 1089
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1098,
          "end": 1099
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1112,
                      "end": 1118
                    },
                    "start": 1110,
                    "end": 1118
                  },
                  "start": 1107,
                  "end": 1118
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1122,
                        "end": 1123
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1125,
                          "end": 1131
                        },
                        "start": 1123,
                        "end": 1131
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1122,
                      "end": 1132
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1133,
                        "end": 1134
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1136,
                          "end": 1142
                        },
                        "start": 1134,
                        "end": 1142
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1133,
                      "end": 1142
                    }
                  ],
                  "start": 1121,
                  "end": 1143
                },
                "start": 1119,
                "end": 1143
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1106,
              "end": 1144
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1155,
                      "end": 1161
                    },
                    "start": 1153,
                    "end": 1161
                  },
                  "start": 1150,
                  "end": 1161
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1165,
                        "end": 1166
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1168,
                            "end": 1169
                          },
                          "start": 1168,
                          "end": 1169
                        },
                        "start": 1166,
                        "end": 1169
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1165,
                      "end": 1170
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1171,
                        "end": 1172
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1174,
                            "end": 1175
                          },
                          "start": 1174,
                          "end": 1175
                        },
                        "start": 1172,
                        "end": 1175
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1171,
                      "end": 1175
                    }
                  ],
                  "start": 1164,
                  "end": 1176
                },
                "start": 1162,
                "end": 1176
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1149,
              "end": 1177
            }
          ],
          "start": 1100,
          "end": 1179
        },
        "abstract": false,
        "declare": false,
        "start": 1081,
        "end": 1179
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1074,
      "end": 1179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 187,
  "end": 1179
}
```
