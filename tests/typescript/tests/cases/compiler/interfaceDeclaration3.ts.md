__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1035,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 29,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 27,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
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
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 448,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 448,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 47,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 59,
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 60,
              "end": 76,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 62,
                  "end": 74,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 66,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 67,
                      "end": 73
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
            "start": 83,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 96,
              "end": 112,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 98,
                  "end": 110,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 103,
                      "end": 109
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
            "start": 120,
            "end": 178,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 128,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 140,
                "end": 142,
                "expression": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 142,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 143,
              "end": 178,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 153,
                  "end": 172,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 164,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 165,
                      "end": 171
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 183,
            "end": 241,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 189,
              "end": 191,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 203,
                "end": 205,
                "expression": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 205,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 206,
              "end": 241,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 216,
                  "end": 235,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 227,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 228,
                      "end": 234
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 246,
            "end": 304,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 252,
              "end": 254,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 266,
                "end": 268,
                "expression": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 268,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 269,
              "end": 304,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 279,
                  "end": 298,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 290,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 291,
                      "end": 297
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 314,
            "end": 376,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 320,
              "end": 322,
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 334,
                "end": 339,
                "expression": {
                  "type": "MemberExpression",
                  "start": 334,
                  "end": 339,
                  "object": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 336,
                    "decorators": [],
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 339,
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 340,
              "end": 376,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 351,
                  "end": 370,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 362,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 369,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 363,
                      "end": 369
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 382,
            "end": 446,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 388,
              "end": 390,
              "decorators": [],
              "name": "C5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 402,
                "end": 410,
                "expression": {
                  "type": "MemberExpression",
                  "start": 402,
                  "end": 410,
                  "object": {
                    "type": "MemberExpression",
                    "start": 402,
                    "end": 407,
                    "object": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 404,
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 407,
                      "decorators": [],
                      "name": "M3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 410,
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 411,
              "end": 446,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 421,
                  "end": 440,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 432,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 439,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 433,
                      "end": 439
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
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
      "start": 450,
      "end": 827,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 457,
        "end": 827,
        "id": {
          "type": "Identifier",
          "start": 464,
          "end": 466,
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 467,
          "end": 827,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 473,
              "end": 509,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 480,
                "end": 509,
                "id": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 492,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 493,
                  "end": 509,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 495,
                      "end": 507,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 499,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 499,
                        "end": 506,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 500,
                          "end": 506
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 514,
              "end": 550,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 521,
                "end": 550,
                "id": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 533,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 534,
                  "end": 550,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 536,
                      "end": 548,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 540,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 540,
                        "end": 547,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 541,
                          "end": 547
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 555,
              "end": 624,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 562,
                "end": 624,
                "id": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 571,
                  "decorators": [],
                  "name": "M3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 572,
                  "end": 624,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 582,
                      "end": 618,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 589,
                        "end": 618,
                        "id": {
                          "type": "Identifier",
                          "start": 599,
                          "end": 601,
                          "decorators": [],
                          "name": "I1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 602,
                          "end": 618,
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "start": 604,
                              "end": 616,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 604,
                                "end": 608,
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 608,
                                "end": 615,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 609,
                                  "end": 615
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": []
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ClassDeclaration",
              "start": 629,
              "end": 691,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 635,
                "end": 637,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 649,
                  "end": 651,
                  "expression": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 651,
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 652,
                "end": 691,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 662,
                    "end": 681,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 669,
                      "end": 673,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 673,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 674,
                        "end": 680
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 696,
              "end": 758,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 702,
                "end": 704,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 716,
                  "end": 718,
                  "expression": {
                    "type": "Identifier",
                    "start": 716,
                    "end": 718,
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 719,
                "end": 758,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 729,
                    "end": 748,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 736,
                      "end": 740,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 740,
                      "end": 747,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 741,
                        "end": 747
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 763,
              "end": 825,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 769,
                "end": 771,
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 783,
                  "end": 785,
                  "expression": {
                    "type": "Identifier",
                    "start": 783,
                    "end": 785,
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 786,
                "end": 825,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 796,
                    "end": 815,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 803,
                      "end": 807,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 807,
                      "end": 814,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 808,
                        "end": 814
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 829,
      "end": 879,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 835,
        "end": 837,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 849,
          "end": 851,
          "expression": {
            "type": "Identifier",
            "start": 849,
            "end": 851,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 852,
        "end": 879,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 858,
            "end": 877,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 865,
              "end": 869,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 869,
              "end": 876,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 870,
                "end": 876
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 881,
      "end": 935,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 887,
        "end": 889,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 901,
          "end": 906,
          "expression": {
            "type": "MemberExpression",
            "start": 901,
            "end": 906,
            "object": {
              "type": "Identifier",
              "start": 901,
              "end": 903,
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 904,
              "end": 906,
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 907,
        "end": 935,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 914,
            "end": 933,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 921,
              "end": 925,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 925,
              "end": 932,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 926,
                "end": 932
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 937,
      "end": 993,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 943,
        "end": 945,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 957,
          "end": 965,
          "expression": {
            "type": "MemberExpression",
            "start": 957,
            "end": 965,
            "object": {
              "type": "MemberExpression",
              "start": 957,
              "end": 962,
              "object": {
                "type": "Identifier",
                "start": 957,
                "end": 959,
                "decorators": [],
                "name": "M2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 960,
                "end": 962,
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 963,
              "end": 965,
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 966,
        "end": 993,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 972,
            "end": 991,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 979,
              "end": 983,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 983,
              "end": 990,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 984,
                "end": 990
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 995,
      "end": 1035,
      "id": {
        "type": "Identifier",
        "start": 1005,
        "end": 1007,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1016,
          "end": 1018,
          "expression": {
            "type": "Identifier",
            "start": 1016,
            "end": 1018,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1019,
        "end": 1035,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1021,
            "end": 1033,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1021,
              "end": 1025,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1025,
              "end": 1032,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1026,
                "end": 1032
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
