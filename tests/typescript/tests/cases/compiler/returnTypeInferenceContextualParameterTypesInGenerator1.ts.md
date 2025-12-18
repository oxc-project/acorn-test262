__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 17,
            "end": 22
          }
        ],
        "start": 16,
        "end": 23
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "typeArguments": null,
                "start": 41,
                "end": 42
              },
              "start": 39,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 43
          }
        ],
        "start": 24,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Eff",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 71
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 86
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 87,
                    "end": 90
                  }
                ],
                "start": 86,
                "end": 91
              },
              "start": 80,
              "end": 91
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 91
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 97
          }
        ],
        "start": 67,
        "end": 98
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 120
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 124
                        },
                        "typeArguments": null,
                        "start": 121,
                        "end": 124
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 126,
                        "end": 130
                      }
                    ],
                    "start": 120,
                    "end": 131
                  },
                  "start": 111,
                  "end": 131
                },
                "start": 108,
                "end": 131
              },
              "start": 105,
              "end": 131
            },
            "start": 103,
            "end": 131
          },
          "start": 102,
          "end": 131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Effect",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 141
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AEff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 146
                },
                "typeArguments": null,
                "start": 142,
                "end": 146
              }
            ],
            "start": 141,
            "end": 147
          },
          "start": 135,
          "end": 147
        },
        "start": 133,
        "end": 147
      },
      "body": null,
      "expression": false,
      "start": 47,
      "end": 148
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rpc",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 163
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 186,
              "end": 192
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 167,
            "end": 192
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 207
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 210,
              "end": 217
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 196,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Success",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 232
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 235,
              "end": 242
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 221,
            "end": 242
          }
        ],
        "start": 163,
        "end": 244
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 267
                },
                "typeArguments": null,
                "start": 264,
                "end": 267
              },
              "start": 262,
              "end": 267
            },
            "accessibility": null,
            "static": false,
            "start": 249,
            "end": 268
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "payloadSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 293
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 302
                },
                "typeArguments": null,
                "start": 295,
                "end": 302
              },
              "start": 293,
              "end": 302
            },
            "accessibility": null,
            "static": false,
            "start": 271,
            "end": 303
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "successSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 328
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Success",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 337
                },
                "typeArguments": null,
                "start": 330,
                "end": 337
              },
              "start": 328,
              "end": 337
            },
            "accessibility": null,
            "static": false,
            "start": 306,
            "end": 338
          }
        ],
        "start": 245,
        "end": 340
      },
      "declare": false,
      "start": 150,
      "end": 340
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RpcAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 358
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              },
              "start": 376,
              "end": 384
            },
            "accessibility": null,
            "static": false,
            "start": 363,
            "end": 385
          }
        ],
        "start": 359,
        "end": 387
      },
      "declare": false,
      "start": 342,
      "end": 387
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Payload",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 401
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 402,
            "end": 403
          }
        ],
        "start": 401,
        "end": 404
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 408
          },
          "typeArguments": null,
          "start": 407,
          "end": 408
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 431
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 427,
                  "end": 431
                },
                "start": 421,
                "end": 431
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 447
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 439,
                  "end": 447
                },
                "start": 433,
                "end": 447
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Success",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 463
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 455,
                  "end": 463
                },
                "start": 449,
                "end": 463
              }
            ],
            "start": 420,
            "end": 464
          },
          "start": 417,
          "end": 464
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Payload",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 477
          },
          "typeArguments": null,
          "start": 469,
          "end": 477
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 482,
          "end": 487
        },
        "start": 407,
        "end": 487
      },
      "declare": false,
      "start": 389,
      "end": 488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResultFrom",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 505
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 507
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 522
              },
              "typeArguments": null,
              "start": 516,
              "end": 522
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 506,
            "end": 522
          }
        ],
        "start": 505,
        "end": 523
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 527
          },
          "typeArguments": null,
          "start": 526,
          "end": 527
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 539
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 553
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 549,
                  "end": 553
                },
                "start": 543,
                "end": 553
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 571
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 563,
                  "end": 571
                },
                "start": 557,
                "end": 571
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_Success",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 589
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 581,
                  "end": 589
                },
                "start": 575,
                "end": 589
              }
            ],
            "start": 539,
            "end": 591
          },
          "start": 536,
          "end": 591
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Success",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 604
          },
          "typeArguments": null,
          "start": 596,
          "end": 604
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 609,
          "end": 614
        },
        "start": 526,
        "end": 614
      },
      "declare": false,
      "start": 490,
      "end": 615
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToHandlerFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 633
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Current",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 641
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 656
              },
              "typeArguments": null,
              "start": 650,
              "end": 656
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 634,
            "end": 656
          }
        ],
        "start": 633,
        "end": 657
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "payload",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 680
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Current",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 681,
                        "end": 688
                      },
                      "typeArguments": null,
                      "start": 681,
                      "end": 688
                    }
                  ],
                  "start": 680,
                  "end": 689
                },
                "start": 673,
                "end": 689
              },
              "start": 671,
              "end": 689
            },
            "start": 664,
            "end": 689
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResultFrom",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 705
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Current",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 713
                  },
                  "typeArguments": null,
                  "start": 706,
                  "end": 713
                }
              ],
              "start": 705,
              "end": 714
            },
            "start": 695,
            "end": 714
          },
          "start": 692,
          "end": 714
        },
        "start": 660,
        "end": 714
      },
      "declare": false,
      "start": 617,
      "end": 715
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandlersFrom",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 734
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rpc",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 738
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 753
              },
              "typeArguments": null,
              "start": 747,
              "end": 753
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 735,
            "end": 753
          }
        ],
        "start": 734,
        "end": 754
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Current",
          "optional": false,
          "typeAnnotation": null,
          "start": 771,
          "end": 778
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 785
          },
          "typeArguments": null,
          "start": 782,
          "end": 785
        },
        "nameType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Current",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 796
            },
            "typeArguments": null,
            "start": 789,
            "end": 796
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "_tag",
              "raw": "\"_tag\"",
              "start": 797,
              "end": 803
            },
            "start": 797,
            "end": 803
          },
          "start": 789,
          "end": 804
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ToHandlerFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 818
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Current",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 826
                },
                "typeArguments": null,
                "start": 819,
                "end": 826
              }
            ],
            "start": 818,
            "end": 827
          },
          "start": 807,
          "end": 827
        },
        "optional": false,
        "readonly": true,
        "start": 757,
        "end": 830
      },
      "declare": false,
      "start": 717,
      "end": 831
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RpcGroup",
        "optional": false,
        "typeAnnotation": null,
        "start": 843,
        "end": 851
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 860
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RpcAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 875
              },
              "typeArguments": null,
              "start": 869,
              "end": 875
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 852,
            "end": 875
          }
        ],
        "start": 851,
        "end": 876
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLayer",
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 888
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Handlers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 897
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HandlersFrom",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 918
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 919,
                            "end": 920
                          },
                          "typeArguments": null,
                          "start": 919,
                          "end": 920
                        }
                      ],
                      "start": 918,
                      "end": 921
                    },
                    "start": 906,
                    "end": 921
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 889,
                  "end": 921
                }
              ],
              "start": 888,
              "end": 922
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "build",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Effect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 930,
                      "end": 936
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Handlers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 937,
                            "end": 945
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 945
                        }
                      ],
                      "start": 936,
                      "end": 946
                    },
                    "start": 930,
                    "end": 946
                  },
                  "start": 928,
                  "end": 946
                },
                "start": 923,
                "end": 946
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 949,
                "end": 956
              },
              "start": 947,
              "end": 956
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 881,
            "end": 957
          }
        ],
        "start": 877,
        "end": 959
      },
      "declare": false,
      "start": 833,
      "end": 959
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rpcs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RpcGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 981,
                  "end": 989
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rpc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 993
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "Register",
                              "raw": "\"Register\"",
                              "start": 994,
                              "end": 1004
                            },
                            "start": 994,
                            "end": 1004
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1006,
                            "end": 1012
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1014,
                            "end": 1020
                          }
                        ],
                        "start": 993,
                        "end": 1021
                      },
                      "start": 990,
                      "end": 1021
                    }
                  ],
                  "start": 989,
                  "end": 1022
                },
                "start": 981,
                "end": 1022
              },
              "start": 979,
              "end": 1022
            },
            "start": 975,
            "end": 1022
          },
          "init": null,
          "definite": false,
          "start": 975,
          "end": 1022
        }
      ],
      "declare": true,
      "start": 961,
      "end": 1023
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "layerServerHandlers",
              "optional": false,
              "typeAnnotation": null,
              "start": 1038,
              "end": 1057
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rpcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1060,
                  "end": 1064
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLayer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1072
                },
                "optional": false,
                "computed": false,
                "start": 1060,
                "end": 1072
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "gen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1079
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": true,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Register",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1114,
                                    "end": 1122
                                  },
                                  "value": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "id",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1125,
                                        "end": 1127
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "String",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1132,
                                        "end": 1138
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "id",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1139,
                                          "end": 1141
                                        }
                                      ],
                                      "optional": false,
                                      "start": 1132,
                                      "end": 1142
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1124,
                                    "end": 1142
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1114,
                                  "end": 1142
                                }
                              ],
                              "start": 1106,
                              "end": 1149
                            },
                            "start": 1099,
                            "end": 1150
                          }
                        ],
                        "start": 1093,
                        "end": 1154
                      },
                      "expression": false,
                      "start": 1080,
                      "end": 1154
                    }
                  ],
                  "optional": false,
                  "start": 1076,
                  "end": 1155
                }
              ],
              "optional": false,
              "start": 1060,
              "end": 1157
            },
            "definite": false,
            "start": 1038,
            "end": 1157
          }
        ],
        "declare": false,
        "start": 1032,
        "end": 1158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1025,
      "end": 1158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1158
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 10,
    "end": 16,
    "range": [
      10,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 28,
    "end": 36,
    "range": [
      28,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 37,
    "end": 39,
    "range": [
      37,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63,
    "range": [
      55,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 64,
    "end": 67,
    "range": [
      64,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 93,
    "end": 97,
    "range": [
      93,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 111,
    "end": 120,
    "range": [
      111,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 126,
    "end": 130,
    "range": [
      126,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 150,
    "end": 159,
    "range": [
      150,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 178,
    "end": 185,
    "range": [
      178,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 200,
    "end": 207,
    "range": [
      200,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 210,
    "end": 217,
    "range": [
      210,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 221,
    "end": 224,
    "range": [
      221,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 225,
    "end": 232,
    "range": [
      225,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 235,
    "end": 242,
    "range": [
      235,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 249,
    "end": 257,
    "range": [
      249,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 258,
    "end": 262,
    "range": [
      258,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 264,
    "end": 267,
    "range": [
      264,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 271,
    "end": 279,
    "range": [
      271,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "payloadSchema",
    "start": 280,
    "end": 293,
    "range": [
      280,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 295,
    "end": 302,
    "range": [
      295,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 306,
    "end": 314,
    "range": [
      306,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "successSchema",
    "start": 315,
    "end": 328,
    "range": [
      315,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 330,
    "end": 337,
    "range": [
      330,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 342,
    "end": 351,
    "range": [
      342,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 363,
    "end": 371,
    "range": [
      363,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 372,
    "end": 376,
    "range": [
      372,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 389,
    "end": 393,
    "range": [
      389,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 394,
    "end": 401,
    "range": [
      394,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 409,
    "end": 416,
    "range": [
      409,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 421,
    "end": 426,
    "range": [
      421,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "_Tag",
    "start": 427,
    "end": 431,
    "range": [
      427,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 433,
    "end": 438,
    "range": [
      433,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "_Payload",
    "start": 439,
    "end": 447,
    "range": [
      439,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 449,
    "end": 454,
    "range": [
      449,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "_Success",
    "start": 455,
    "end": 463,
    "range": [
      455,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "_Payload",
    "start": 469,
    "end": 477,
    "range": [
      469,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 482,
    "end": 487,
    "range": [
      482,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 490,
    "end": 494,
    "range": [
      490,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultFrom",
    "start": 495,
    "end": 505,
    "range": [
      495,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 508,
    "end": 515,
    "range": [
      508,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 516,
    "end": 522,
    "range": [
      516,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 528,
    "end": 535,
    "range": [
      528,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 536,
    "end": 539,
    "range": [
      536,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 543,
    "end": 548,
    "range": [
      543,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "_Tag",
    "start": 549,
    "end": 553,
    "range": [
      549,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 557,
    "end": 562,
    "range": [
      557,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "_Payload",
    "start": 563,
    "end": 571,
    "range": [
      563,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 575,
    "end": 580,
    "range": [
      575,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "_Success",
    "start": 581,
    "end": 589,
    "range": [
      581,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "_Success",
    "start": 596,
    "end": 604,
    "range": [
      596,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 609,
    "end": 614,
    "range": [
      609,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621,
    "range": [
      617,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "ToHandlerFn",
    "start": 622,
    "end": 633,
    "range": [
      622,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 634,
    "end": 641,
    "range": [
      634,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 642,
    "end": 649,
    "range": [
      642,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 650,
    "end": 656,
    "range": [
      650,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 664,
    "end": 671,
    "range": [
      664,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 673,
    "end": 680,
    "range": [
      673,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 681,
    "end": 688,
    "range": [
      681,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 692,
    "end": 694,
    "range": [
      692,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultFrom",
    "start": 695,
    "end": 705,
    "range": [
      695,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 706,
    "end": 713,
    "range": [
      706,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 717,
    "end": 721,
    "range": [
      717,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlersFrom",
    "start": 722,
    "end": 734,
    "range": [
      722,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 739,
    "end": 746,
    "range": [
      739,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 761,
    "end": 769,
    "range": [
      761,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 771,
    "end": 778,
    "range": [
      771,
      778
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 779,
    "end": 781,
    "range": [
      779,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 782,
    "end": 785,
    "range": [
      782,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 786,
    "end": 788,
    "range": [
      786,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 789,
    "end": 796,
    "range": [
      789,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "String",
    "value": "\"_tag\"",
    "start": 797,
    "end": 803,
    "range": [
      797,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "ToHandlerFn",
    "start": 807,
    "end": 818,
    "range": [
      807,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "Current",
    "start": 819,
    "end": 826,
    "range": [
      819,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 833,
    "end": 842,
    "range": [
      833,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "RpcGroup",
    "start": 843,
    "end": 851,
    "range": [
      843,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 852,
    "end": 854,
    "range": [
      852,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 855,
    "end": 858,
    "range": [
      855,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 861,
    "end": 868,
    "range": [
      861,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "RpcAny",
    "start": 869,
    "end": 875,
    "range": [
      869,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "toLayer",
    "start": 881,
    "end": 888,
    "range": [
      881,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "Handlers",
    "start": 889,
    "end": 897,
    "range": [
      889,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 898,
    "end": 905,
    "range": [
      898,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlersFrom",
    "start": 906,
    "end": 918,
    "range": [
      906,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "build",
    "start": 923,
    "end": 928,
    "range": [
      923,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 930,
    "end": 936,
    "range": [
      930,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "Handlers",
    "start": 937,
    "end": 945,
    "range": [
      937,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 949,
    "end": 956,
    "range": [
      949,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 961,
    "end": 968,
    "range": [
      961,
      968
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 969,
    "end": 974,
    "range": [
      969,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpcs",
    "start": 975,
    "end": 979,
    "range": [
      975,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "RpcGroup",
    "start": 981,
    "end": 989,
    "range": [
      981,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpc",
    "start": 990,
    "end": 993,
    "range": [
      990,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "String",
    "value": "\"Register\"",
    "start": 994,
    "end": 1004,
    "range": [
      994,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1006,
    "end": 1012,
    "range": [
      1006,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1014,
    "end": 1020,
    "range": [
      1014,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1025,
    "end": 1031,
    "range": [
      1025,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1032,
    "end": 1037,
    "range": [
      1032,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "layerServerHandlers",
    "start": 1038,
    "end": 1057,
    "range": [
      1038,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "Rpcs",
    "start": 1060,
    "end": 1064,
    "range": [
      1060,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "toLayer",
    "start": 1065,
    "end": 1072,
    "range": [
      1065,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 1076,
    "end": 1079,
    "range": [
      1076,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1080,
    "end": 1088,
    "range": [
      1080,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1099,
    "end": 1105,
    "range": [
      1099,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "Register",
    "start": 1114,
    "end": 1122,
    "range": [
      1114,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1125,
    "end": 1127,
    "range": [
      1125,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1129,
    "end": 1131,
    "range": [
      1129,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1132,
    "end": 1138,
    "range": [
      1132,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1139,
    "end": 1141,
    "range": [
      1139,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  }
]
```
