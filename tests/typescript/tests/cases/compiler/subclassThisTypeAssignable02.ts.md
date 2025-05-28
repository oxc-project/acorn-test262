__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 810,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "Lifecycle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 64,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 64,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 50,
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 50,
                "end": 64,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 51,
                    "end": 56,
                    "typeName": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 56,
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 63,
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 134,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 69,
            "end": 113,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 75,
              "decorators": [],
              "name": "oninit",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 103,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 82,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 103,
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 89,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 89,
                      "end": 103,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 90,
                          "end": 95,
                          "typeName": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 95,
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 97,
                          "end": 102,
                          "typeName": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 102,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 115,
            "end": 132,
            "parameters": [
              {
                "type": "Identifier",
                "start": 116,
                "end": 125,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 117,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 119,
                    "end": 125
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 131,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 128,
                "end": 131
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 151,
        "decorators": [],
        "name": "Vnode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 157,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 157,
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 164,
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 173,
              "end": 196,
              "typeName": {
                "type": "Identifier",
                "start": 173,
                "end": 182,
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 182,
                "end": 196,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 183,
                    "end": 188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 188,
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 190,
                    "end": 195,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 195,
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 198,
        "end": 232,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 201,
            "end": 230,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 204,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 215,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 215,
                  "end": 229,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 216,
                      "end": 221,
                      "typeName": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 221,
                        "decorators": [],
                        "name": "Attrs",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 223,
                      "end": 228,
                      "typeName": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 228,
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 234,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 253,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 299,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 259,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 259,
              "decorators": [],
              "name": "Attrs",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 261,
            "end": 298,
            "name": {
              "type": "Identifier",
              "start": 261,
              "end": 266,
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 298,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 284,
                "decorators": [],
                "name": "Lifecycle",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 284,
                "end": 298,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 285,
                    "end": 290,
                    "typeName": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 290,
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 292,
                    "end": 297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 297,
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 300,
        "end": 359,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 303,
            "end": 357,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "decorators": [],
              "name": "view",
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
                "start": 308,
                "end": 319,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 312,
                  "end": 319,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 314,
                    "end": 319,
                    "typeName": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 319,
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 321,
                "end": 347,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 326,
                  "end": 347,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 328,
                    "end": 347,
                    "typeName": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 333,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 333,
                      "end": 347,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 334,
                          "end": 339,
                          "typeName": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 339,
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 341,
                          "end": 346,
                          "typeName": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 346,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 356,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 350,
                "end": 356
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
      "start": 361,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 385,
        "decorators": [],
        "name": "ClassComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 385,
        "end": 388,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 386,
            "end": 387,
            "name": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "decorators": [],
              "name": "A",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 397,
          "end": 428,
          "expression": {
            "type": "Identifier",
            "start": 397,
            "end": 406,
            "decorators": [],
            "name": "Lifecycle",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 406,
            "end": 428,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 407,
                "end": 408,
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 408,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 410,
                "end": 427,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 424,
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 424,
                  "end": 427,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 425,
                      "end": 426,
                      "typeName": {
                        "type": "Identifier",
                        "start": 425,
                        "end": 426,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 429,
        "end": 511,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 432,
            "end": 471,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 438,
              "decorators": [],
              "name": "oninit",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 440,
                "end": 461,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 445,
                  "end": 461,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 447,
                    "end": 461,
                    "typeName": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 452,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 452,
                      "end": 461,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 453,
                          "end": 454,
                          "typeName": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 454,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSThisType",
                          "start": 456,
                          "end": 460
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 470,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 464,
                "end": 470
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 473,
            "end": 509,
            "key": {
              "type": "Identifier",
              "start": 473,
              "end": 477,
              "decorators": [],
              "name": "view",
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
                "start": 478,
                "end": 499,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 483,
                  "end": 499,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 485,
                    "end": 499,
                    "typeName": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 490,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 490,
                      "end": 499,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 491,
                          "end": 492,
                          "typeName": {
                            "type": "Identifier",
                            "start": 491,
                            "end": 492,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSThisType",
                          "start": 494,
                          "end": 498
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 500,
              "end": 508,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 502,
                "end": 508
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
      "start": 513,
      "end": 545,
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 530,
        "decorators": [],
        "name": "MyAttrs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 531,
        "end": 545,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 533,
            "end": 543,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 533,
              "end": 535,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 543,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 546,
      "end": 765,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 552,
        "end": 553,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 565,
          "end": 588,
          "expression": {
            "type": "Identifier",
            "start": 565,
            "end": 579,
            "decorators": [],
            "name": "ClassComponent",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 579,
            "end": 588,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 580,
                "end": 587,
                "typeName": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 587,
                  "decorators": [],
                  "name": "MyAttrs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 589,
        "end": 765,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 592,
            "end": 632,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 592,
              "end": 596,
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 596,
              "end": 632,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 597,
                  "end": 617,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 598,
                    "end": 617,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 600,
                      "end": 617,
                      "typeName": {
                        "type": "Identifier",
                        "start": 600,
                        "end": 605,
                        "decorators": [],
                        "name": "Vnode",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 605,
                        "end": 617,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 606,
                            "end": 613,
                            "typeName": {
                              "type": "Identifier",
                              "start": 606,
                              "end": 613,
                              "decorators": [],
                              "name": "MyAttrs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 615,
                            "end": 616,
                            "typeName": {
                              "type": "Identifier",
                              "start": 615,
                              "end": 616,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 619,
                "end": 632,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 621,
                    "end": 630,
                    "argument": {
                      "type": "Literal",
                      "start": 628,
                      "end": 629,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 742,
            "end": 763,
            "parameters": [
              {
                "type": "Identifier",
                "start": 743,
                "end": 752,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 744,
                  "end": 752,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 746,
                    "end": 752
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 753,
              "end": 762,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 755,
                "end": 762
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 767,
      "end": 810,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 809,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 799,
            "decorators": [],
            "name": "test8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 778,
              "end": 799,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 780,
                "end": 799,
                "typeName": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 794,
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 794,
                  "end": 799,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 795,
                      "end": 798
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 802,
            "end": 809,
            "callee": {
              "type": "Identifier",
              "start": 806,
              "end": 807,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 57,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "decorators": [],
            "name": "test9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 49,
            "end": 56,
            "callee": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
