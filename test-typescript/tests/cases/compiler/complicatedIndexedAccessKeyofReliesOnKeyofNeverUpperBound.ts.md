__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1104,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "TextChannel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "phoneNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "EmailChannel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "addres",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Channel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TextChannel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "EmailChannel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "name": "ChannelType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "Channel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "R",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 287,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 296,
        "name": "Omit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 342,
                      "end": 354,
                      "name": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 343,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
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
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "optional": null,
                    "readonly": null,
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  {
                    "type": "TSMappedType",
                    "start": 363,
                    "end": 382,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 366,
                      "end": 372,
                      "name": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 371,
                        "end": 372,
                        "typeName": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 372,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 375,
                      "end": 380
                    },
                    "optional": null,
                    "readonly": null,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 371,
                      "end": 372,
                      "typeName": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 389,
                              "end": 397,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "name": "ChannelOfType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 451,
              "end": 462,
              "typeName": {
                "type": "Identifier",
                "start": 451,
                "end": 462,
                "name": "ChannelType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "Channel",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "NewChannel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 557,
                "end": 564,
                "typeName": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 564,
                  "name": "Channel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Omit",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                    "name": "localChannelId",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "makeNewChannel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 708,
            "end": 715,
            "name": "type",
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
                  "name": "T",
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
        "body": {
          "type": "BlockStatement",
          "start": 747,
          "end": 830,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 753,
              "end": 791,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 759,
                  "end": 790,
                  "id": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 773,
                    "name": "localChannelId",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "TemplateLiteral",
                    "start": 776,
                    "end": 790,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 776,
                        "end": 790,
                        "value": {
                          "cooked": "blahblahblah",
                          "raw": "blahblahblah"
                        },
                        "tail": true
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "const",
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
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 809,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 809,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 811,
                    "end": 825,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 825,
                      "name": "localChannelId",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 825,
                      "name": "localChannelId",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 695,
                "end": 706,
                "typeName": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 706,
                  "name": "ChannelType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "NewChannel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "ChannelOfType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 832,
      "end": 878,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 877,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 852,
            "name": "newTextChannel",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 855,
            "end": 877,
            "callee": {
              "type": "Identifier",
              "start": 855,
              "end": 869,
              "name": "makeNewChannel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 870,
                "end": 876,
                "value": "text",
                "raw": "'text'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "newTextChannel",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 914,
            "end": 925,
            "name": "phoneNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 951,
          "end": 1017,
          "id": {
            "type": "Identifier",
            "start": 951,
            "end": 992,
            "name": "newTextChannel2",
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
                  "name": "NewChannel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "TextChannel",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 995,
            "end": 1017,
            "callee": {
              "type": "Identifier",
              "start": 995,
              "end": 1009,
              "name": "makeNewChannel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1010,
                "end": 1016,
                "value": "text",
                "raw": "'text'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "newTextChannel2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1074,
            "end": 1085,
            "name": "phoneNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
