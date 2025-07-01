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
        "name": "Lifecycle",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 32
          }
        ],
        "start": 19,
        "end": 33
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
              "name": "oninit",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 43
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 57
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 58,
                            "end": 63
                          },
                          "typeArguments": null,
                          "start": 58,
                          "end": 63
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 65,
                            "end": 70
                          },
                          "typeArguments": null,
                          "start": 65,
                          "end": 70
                        }
                      ],
                      "start": 57,
                      "end": 71
                    },
                    "start": 52,
                    "end": 71
                  },
                  "start": 50,
                  "end": 71
                },
                "start": 45,
                "end": 71
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 37,
            "end": 81
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 87,
                    "end": 93
                  },
                  "start": 85,
                  "end": 93
                },
                "start": 84,
                "end": 93
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              },
              "start": 94,
              "end": 99
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 83,
            "end": 100
          }
        ],
        "start": 34,
        "end": 102
      },
      "declare": false,
      "start": 0,
      "end": 102
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Vnode",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 119
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 120,
            "end": 125
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 132
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 150
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 156
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 156
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 163
                    },
                    "typeArguments": null,
                    "start": 158,
                    "end": 163
                  }
                ],
                "start": 150,
                "end": 164
              },
              "start": 141,
              "end": 164
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 176
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 182
                    },
                    "typeArguments": null,
                    "start": 177,
                    "end": 182
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 189
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 189
                  }
                ],
                "start": 176,
                "end": 190
              },
              "start": 167,
              "end": 190
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 190
          }
        ],
        "start": 119,
        "end": 191
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 209
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attrs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 215
                      },
                      "typeArguments": null,
                      "start": 210,
                      "end": 215
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 222
                      },
                      "typeArguments": null,
                      "start": 217,
                      "end": 222
                    }
                  ],
                  "start": 209,
                  "end": 223
                },
                "start": 200,
                "end": 223
              },
              "start": 198,
              "end": 223
            },
            "accessibility": null,
            "static": false,
            "start": 195,
            "end": 224
          }
        ],
        "start": 192,
        "end": 226
      },
      "declare": false,
      "start": 104,
      "end": 226
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 247
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 253
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 248,
            "end": 253
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 260
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 260
          }
        ],
        "start": 247,
        "end": 261
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
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 269
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 281
                    },
                    "typeArguments": null,
                    "start": 276,
                    "end": 281
                  },
                  "start": 274,
                  "end": 281
                },
                "start": 270,
                "end": 281
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 295
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 301
                          },
                          "typeArguments": null,
                          "start": 296,
                          "end": 301
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 308
                          },
                          "typeArguments": null,
                          "start": 303,
                          "end": 308
                        }
                      ],
                      "start": 295,
                      "end": 309
                    },
                    "start": 290,
                    "end": 309
                  },
                  "start": 288,
                  "end": 309
                },
                "start": 283,
                "end": 309
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 312,
                "end": 318
              },
              "start": 310,
              "end": 318
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 265,
            "end": 319
          }
        ],
        "start": 262,
        "end": 321
      },
      "declare": false,
      "start": 228,
      "end": 321
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 347
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
              "start": 348,
              "end": 349
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 348,
            "end": 349
          }
        ],
        "start": 347,
        "end": 350
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lifecycle",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 368
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 370
                },
                "typeArguments": null,
                "start": 369,
                "end": 370
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 386
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 388
                      },
                      "typeArguments": null,
                      "start": 387,
                      "end": 388
                    }
                  ],
                  "start": 386,
                  "end": 389
                },
                "start": 372,
                "end": 389
              }
            ],
            "start": 368,
            "end": 390
          },
          "start": 359,
          "end": 390
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "oninit",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 400
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 414
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 415,
                            "end": 416
                          },
                          "typeArguments": null,
                          "start": 415,
                          "end": 416
                        },
                        {
                          "type": "TSThisType",
                          "start": 418,
                          "end": 422
                        }
                      ],
                      "start": 414,
                      "end": 423
                    },
                    "start": 409,
                    "end": 423
                  },
                  "start": 407,
                  "end": 423
                },
                "start": 402,
                "end": 423
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 426,
                "end": 432
              },
              "start": 424,
              "end": 432
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 394,
            "end": 433
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 439
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 452
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 453,
                            "end": 454
                          },
                          "typeArguments": null,
                          "start": 453,
                          "end": 454
                        },
                        {
                          "type": "TSThisType",
                          "start": 456,
                          "end": 460
                        }
                      ],
                      "start": 452,
                      "end": 461
                    },
                    "start": 447,
                    "end": 461
                  },
                  "start": 445,
                  "end": 461
                },
                "start": 440,
                "end": 461
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 435,
            "end": 471
          }
        ],
        "start": 391,
        "end": 473
      },
      "declare": false,
      "start": 323,
      "end": 473
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyAttrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 492
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 499,
                "end": 505
              },
              "start": 497,
              "end": 505
            },
            "accessibility": null,
            "static": false,
            "start": 495,
            "end": 505
          }
        ],
        "start": 493,
        "end": 507
      },
      "declare": false,
      "start": 475,
      "end": 507
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 515
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 541
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyAttrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 549
                },
                "typeArguments": null,
                "start": 542,
                "end": 549
              }
            ],
            "start": 541,
            "end": 550
          },
          "start": 527,
          "end": 550
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 558
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vnode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 562,
                        "end": 567
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyAttrs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 575
                            },
                            "typeArguments": null,
                            "start": 568,
                            "end": 575
                          }
                        ],
                        "start": 567,
                        "end": 576
                      },
                      "start": 562,
                      "end": 576
                    },
                    "start": 560,
                    "end": 576
                  },
                  "start": 559,
                  "end": 576
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 587,
                      "end": 588
                    },
                    "start": 580,
                    "end": 589
                  }
                ],
                "start": 578,
                "end": 591
              },
              "expression": false,
              "start": 558,
              "end": 591
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 554,
            "end": 591
          }
        ],
        "start": 551,
        "end": 593
      },
      "abstract": false,
      "declare": false,
      "start": 508,
      "end": 593
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
            "name": "test8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 622
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 623,
                      "end": 626
                    }
                  ],
                  "start": 622,
                  "end": 627
                },
                "start": 608,
                "end": 627
              },
              "start": 606,
              "end": 627
            },
            "start": 601,
            "end": 627
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 635
            },
            "typeArguments": null,
            "arguments": [],
            "start": 630,
            "end": 637
          },
          "definite": false,
          "start": 601,
          "end": 637
        }
      ],
      "declare": false,
      "start": 595,
      "end": 638
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 638
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test9",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 46
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [],
            "start": 49,
            "end": 56
          },
          "definite": false,
          "start": 41,
          "end": 56
        }
      ],
      "declare": false,
      "start": 35,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 57
}
```
