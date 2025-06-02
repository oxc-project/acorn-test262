__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1103,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "TextChannel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 84,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 50,
                "end": 56,
                "literal": {
                  "type": "Literal",
                  "start": 50,
                  "end": 56,
                  "value": "text",
                  "raw": "'text'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 62,
            "end": 82,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 73,
              "decorators": [],
              "name": "phoneNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
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
      "start": 86,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 108,
        "decorators": [],
        "name": "EmailChannel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 109,
        "end": 167,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 115,
            "end": 126,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 117,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 145,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 144,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 137,
                "end": 144,
                "literal": {
                  "type": "Literal",
                  "start": 137,
                  "end": 144,
                  "value": "email",
                  "raw": "'email'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 165,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 156,
              "decorators": [],
              "name": "addres",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
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
      "type": "TSTypeAliasDeclaration",
      "start": 169,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 181,
        "decorators": [],
        "name": "Channel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 184,
        "end": 210,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 184,
            "end": 195,
            "typeName": {
              "type": "Identifier",
              "start": 184,
              "end": 195,
              "decorators": [],
              "name": "TextChannel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 198,
            "end": 210,
            "typeName": {
              "type": "Identifier",
              "start": 198,
              "end": 210,
              "decorators": [],
              "name": "EmailChannel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 213,
      "end": 285,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 220,
        "end": 285,
        "id": {
          "type": "Identifier",
          "start": 225,
          "end": 236,
          "decorators": [],
          "name": "ChannelType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 239,
          "end": 284,
          "checkType": {
            "type": "TSTypeReference",
            "start": 239,
            "end": 246,
            "typeName": {
              "type": "Identifier",
              "start": 239,
              "end": 246,
              "decorators": [],
              "name": "Channel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 255,
            "end": 272,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 257,
                "end": 270,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 261,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 261,
                  "end": 270,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 263,
                    "end": 270,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 269,
                      "end": 270,
                      "name": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 275,
            "end": 276,
            "typeName": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 279,
            "end": 284
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 287,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 296,
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 296,
        "end": 318,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 297,
            "end": 298,
            "name": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "T",
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
            "start": 300,
            "end": 317,
            "name": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 310,
              "end": 317,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 321,
        "end": 419,
        "typeName": {
          "type": "Identifier",
          "start": 321,
          "end": 325,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 325,
          "end": 419,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 331,
              "end": 332,
              "typeName": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSIndexedAccessType",
              "start": 338,
              "end": 417,
              "objectType": {
                "type": "TSIntersectionType",
                "start": 339,
                "end": 407,
                "types": [
                  {
                    "type": "TSMappedType",
                    "start": 339,
                    "end": 360,
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 347,
                      "end": 354,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 353,
                        "end": 354,
                        "typeName": {
                          "type": "Identifier",
                          "start": 353,
                          "end": 354,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 357,
                      "end": 358,
                      "typeName": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "optional": false,
                    "readonly": null
                  },
                  {
                    "type": "TSMappedType",
                    "start": 363,
                    "end": 382,
                    "key": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 371,
                      "end": 372,
                      "typeName": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 375,
                      "end": 380
                    },
                    "optional": false,
                    "readonly": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 385,
                    "end": 407,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 387,
                        "end": 405,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 388,
                            "end": 397,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 389,
                              "end": 397,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 391,
                                "end": 397
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 398,
                          "end": 405,
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 400,
                            "end": 405
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              },
              "indexType": {
                "type": "TSTypeOperator",
                "start": 409,
                "end": 416,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 415,
                  "end": 416,
                  "typeName": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 422,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 440,
        "decorators": [],
        "name": "ChannelOfType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 440,
        "end": 476,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 441,
            "end": 462,
            "name": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 451,
              "end": 462,
              "typeName": {
                "type": "Identifier",
                "start": 451,
                "end": 462,
                "decorators": [],
                "name": "ChannelType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 464,
            "end": 475,
            "name": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 468,
              "end": 475,
              "typeName": {
                "type": "Identifier",
                "start": 468,
                "end": 475,
                "decorators": [],
                "name": "Channel",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 479,
        "end": 520,
        "checkType": {
          "type": "TSTypeReference",
          "start": 479,
          "end": 480,
          "typeName": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 489,
          "end": 500,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 491,
              "end": 498,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 491,
                "end": 495,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 495,
                "end": 498,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 497,
                  "end": 498,
                  "typeName": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 507,
          "end": 508,
          "typeName": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 515,
          "end": 520
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 524,
      "end": 651,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 531,
        "end": 651,
        "id": {
          "type": "Identifier",
          "start": 536,
          "end": 546,
          "decorators": [],
          "name": "NewChannel",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 546,
          "end": 565,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 547,
              "end": 564,
              "name": {
                "type": "Identifier",
                "start": 547,
                "end": 548,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 557,
                "end": 564,
                "typeName": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 564,
                  "decorators": [],
                  "name": "Channel",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 568,
          "end": 650,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 568,
              "end": 583,
              "typeName": {
                "type": "Identifier",
                "start": 568,
                "end": 572,
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 572,
                "end": 583,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 573,
                    "end": 574,
                    "typeName": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 574,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 576,
                    "end": 582,
                    "literal": {
                      "type": "Literal",
                      "start": 576,
                      "end": 582,
                      "value": "type",
                      "raw": "'type'"
                    }
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 590,
              "end": 621,
              "typeName": {
                "type": "Identifier",
                "start": 590,
                "end": 597,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 597,
                "end": 621,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 598,
                    "end": 620,
                    "typeName": {
                      "type": "Identifier",
                      "start": 598,
                      "end": 602,
                      "decorators": [],
                      "name": "Omit",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 602,
                      "end": 620,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 603,
                          "end": 604,
                          "typeName": {
                            "type": "Identifier",
                            "start": 603,
                            "end": 604,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUnionType",
                          "start": 606,
                          "end": 619,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 606,
                              "end": 612,
                              "literal": {
                                "type": "Literal",
                                "start": 606,
                                "end": 612,
                                "value": "type",
                                "raw": "'type'"
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 615,
                              "end": 619,
                              "literal": {
                                "type": "Literal",
                                "start": 615,
                                "end": 619,
                                "value": "id",
                                "raw": "'id'"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 624,
              "end": 650,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 626,
                  "end": 648,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 640,
                    "decorators": [],
                    "name": "localChannelId",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 640,
                    "end": 648,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 642,
                      "end": 648
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
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
      "start": 654,
      "end": 830,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 661,
        "end": 830,
        "id": {
          "type": "Identifier",
          "start": 670,
          "end": 684,
          "decorators": [],
          "name": "makeNewChannel",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 684,
          "end": 707,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 685,
              "end": 706,
              "name": {
                "type": "Identifier",
                "start": 685,
                "end": 686,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 695,
                "end": 706,
                "typeName": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 706,
                  "decorators": [],
                  "name": "ChannelType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 708,
            "end": 715,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 712,
              "end": 715,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 714,
                "end": 715,
                "typeName": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 715,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 716,
          "end": 746,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 718,
            "end": 746,
            "typeName": {
              "type": "Identifier",
              "start": 718,
              "end": 728,
              "decorators": [],
              "name": "NewChannel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 728,
              "end": 746,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 729,
                  "end": 745,
                  "typeName": {
                    "type": "Identifier",
                    "start": 729,
                    "end": 742,
                    "decorators": [],
                    "name": "ChannelOfType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 742,
                    "end": 745,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 743,
                        "end": 744,
                        "typeName": {
                          "type": "Identifier",
                          "start": 743,
                          "end": 744,
                          "decorators": [],
                          "name": "T",
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
        },
        "body": {
          "type": "BlockStatement",
          "start": 747,
          "end": 830,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 753,
              "end": 791,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 759,
                  "end": 790,
                  "id": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 773,
                    "decorators": [],
                    "name": "localChannelId",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "TemplateLiteral",
                    "start": 776,
                    "end": 790,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 776,
                        "end": 790,
                        "value": {
                          "raw": "blahblahblah",
                          "cooked": "blahblahblah"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 796,
              "end": 828,
              "argument": {
                "type": "ObjectExpression",
                "start": 803,
                "end": 827,
                "properties": [
                  {
                    "type": "Property",
                    "start": 805,
                    "end": 809,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 809,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 809,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 811,
                    "end": 825,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 825,
                      "decorators": [],
                      "name": "localChannelId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 825,
                      "decorators": [],
                      "name": "localChannelId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 832,
      "end": 878,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 877,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 852,
            "decorators": [],
            "name": "newTextChannel",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 855,
            "end": 877,
            "callee": {
              "type": "Identifier",
              "start": 855,
              "end": 869,
              "decorators": [],
              "name": "makeNewChannel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 870,
                "end": 876,
                "value": "text",
                "raw": "'text'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 899,
      "end": 943,
      "expression": {
        "type": "AssignmentExpression",
        "start": 899,
        "end": 942,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 899,
          "end": 925,
          "object": {
            "type": "Identifier",
            "start": 899,
            "end": 913,
            "decorators": [],
            "name": "newTextChannel",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 914,
            "end": 925,
            "decorators": [],
            "name": "phoneNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 928,
          "end": 942,
          "value": "613-555-1234",
          "raw": "'613-555-1234'"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 945,
      "end": 1018,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 951,
          "end": 1017,
          "id": {
            "type": "Identifier",
            "start": 951,
            "end": 992,
            "decorators": [],
            "name": "newTextChannel2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 967,
              "end": 992,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 969,
                "end": 992,
                "typeName": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 979,
                  "decorators": [],
                  "name": "NewChannel",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 979,
                  "end": 992,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 980,
                      "end": 991,
                      "typeName": {
                        "type": "Identifier",
                        "start": 980,
                        "end": 991,
                        "decorators": [],
                        "name": "TextChannel",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 995,
            "end": 1017,
            "callee": {
              "type": "Identifier",
              "start": 995,
              "end": 1009,
              "decorators": [],
              "name": "makeNewChannel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1010,
                "end": 1016,
                "value": "text",
                "raw": "'text'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1058,
      "end": 1103,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1058,
        "end": 1102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1058,
          "end": 1085,
          "object": {
            "type": "Identifier",
            "start": 1058,
            "end": 1073,
            "decorators": [],
            "name": "newTextChannel2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1074,
            "end": 1085,
            "decorators": [],
            "name": "phoneNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1088,
          "end": 1102,
          "value": "613-555-1234",
          "raw": "'613-555-1234'"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
