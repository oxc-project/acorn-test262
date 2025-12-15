__ESTREE_TEST__:PASS:
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
