__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1421,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 44,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 43,
              "decorators": [],
              "name": "nominalTypeHack",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 30,
                  "end": 43,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 37,
                    "end": 43
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 169,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 53,
        "end": 169,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 68,
          "decorators": [],
          "name": "IsOptional",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 68,
          "end": 71,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 69,
              "end": 70,
              "name": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
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
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 74,
          "end": 168,
          "checkType": {
            "type": "TSUnionType",
            "start": 74,
            "end": 90,
            "types": [
              {
                "type": "TSUndefinedKeyword",
                "start": 74,
                "end": 83
              },
              {
                "type": "TSNullKeyword",
                "start": 86,
                "end": 90
              }
            ]
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 99,
            "end": 100,
            "typeName": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 103,
            "end": 107,
            "literal": {
              "type": "Literal",
              "start": 103,
              "end": 107,
              "value": true,
              "raw": "true"
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 110,
            "end": 168,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 110,
              "end": 119
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 132,
              "end": 136,
              "literal": {
                "type": "Literal",
                "start": 132,
                "end": 136,
                "value": true,
                "raw": "true"
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 139,
              "end": 168,
              "checkType": {
                "type": "TSNullKeyword",
                "start": 139,
                "end": 143
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 153,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 156,
                "end": 160,
                "literal": {
                  "type": "Literal",
                  "start": 156,
                  "end": 160,
                  "value": true,
                  "raw": "true"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 163,
                "end": 168,
                "literal": {
                  "type": "Literal",
                  "start": 163,
                  "end": 168,
                  "value": false,
                  "raw": "false"
                }
              }
            }
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
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 333,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 178,
        "end": 333,
        "id": {
          "type": "Identifier",
          "start": 183,
          "end": 195,
          "decorators": [],
          "name": "RequiredKeys",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 195,
          "end": 198,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 196,
              "end": 197,
              "name": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "V",
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
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 201,
          "end": 332,
          "objectType": {
            "type": "TSMappedType",
            "start": 201,
            "end": 323,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 209,
              "end": 216,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 216,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 221,
              "end": 321,
              "checkType": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 228,
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 228,
                  "end": 245,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 229,
                      "end": 233,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 229,
                        "end": 230,
                        "typeName": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 230,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 231,
                        "end": 232,
                        "typeName": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 235,
                      "end": 244
                    }
                  ]
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 254,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 263,
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 263,
                  "end": 272,
                  "params": [
                    {
                      "type": "TSInferType",
                      "start": 264,
                      "end": 271,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 270,
                        "end": 271,
                        "name": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 271,
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
                      }
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "start": 275,
                "end": 313,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 275,
                  "end": 288,
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 285,
                    "decorators": [],
                    "name": "IsOptional",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 285,
                    "end": 288,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 286,
                        "end": 287,
                        "typeName": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "start": 297,
                  "end": 301,
                  "literal": {
                    "type": "Literal",
                    "start": 297,
                    "end": 301,
                    "value": true,
                    "raw": "true"
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 304,
                  "end": 309
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 312,
                  "end": 313,
                  "typeName": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 313,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 316,
                "end": 321
              }
            },
            "optional": "-",
            "readonly": null
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 324,
            "end": 331,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 330,
              "end": 331,
              "typeName": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
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
      "type": "ExportNamedDeclaration",
      "start": 334,
      "end": 398,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 341,
        "end": 398,
        "id": {
          "type": "Identifier",
          "start": 346,
          "end": 358,
          "decorators": [],
          "name": "OptionalKeys",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 358,
          "end": 361,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 359,
              "end": 360,
              "name": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "decorators": [],
                "name": "V",
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
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 364,
          "end": 397,
          "typeName": {
            "type": "Identifier",
            "start": 364,
            "end": 371,
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 371,
            "end": 397,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 372,
                "end": 379,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 378,
                  "end": 379,
                  "typeName": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 379,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 381,
                "end": 396,
                "typeName": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 393,
                  "decorators": [],
                  "name": "RequiredKeys",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 393,
                  "end": 396,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 395,
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 395,
                        "decorators": [],
                        "name": "V",
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
      "start": 399,
      "end": 471,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 406,
        "end": 471,
        "id": {
          "type": "Identifier",
          "start": 411,
          "end": 426,
          "decorators": [],
          "name": "InferPropsInner",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 426,
          "end": 429,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 427,
              "end": 428,
              "name": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "decorators": [],
                "name": "V",
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
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 432,
          "end": 470,
          "key": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 440,
            "end": 447,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 446,
              "end": 447,
              "typeName": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 452,
            "end": 467,
            "typeName": {
              "type": "Identifier",
              "start": 452,
              "end": 461,
              "decorators": [],
              "name": "InferType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 461,
              "end": 467,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 462,
                  "end": 466,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 462,
                    "end": 463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 463,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 464,
                    "end": 465,
                    "typeName": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": "-",
          "readonly": null
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
      "start": 473,
      "end": 649,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 480,
        "end": 649,
        "id": {
          "type": "Identifier",
          "start": 490,
          "end": 499,
          "decorators": [],
          "name": "Validator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 499,
          "end": 502,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 500,
              "end": 501,
              "name": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
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
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 503,
          "end": 649,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 509,
              "end": 620,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 510,
                  "end": 523,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 515,
                    "end": 523,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 517,
                      "end": 523
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 525,
                  "end": 541,
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 533,
                    "end": 541,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 535,
                      "end": 541
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 543,
                  "end": 564,
                  "decorators": [],
                  "name": "componentName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 556,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 558,
                      "end": 564
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 582,
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 582,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 576,
                      "end": 582
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 584,
                  "end": 604,
                  "decorators": [],
                  "name": "propFullName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 596,
                    "end": 604,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 598,
                      "end": 604
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 605,
                "end": 619,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 607,
                  "end": 619,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 607,
                      "end": 612,
                      "typeName": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 612,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 615,
                      "end": 619
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 625,
              "end": 647,
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 626,
                "end": 641,
                "decorators": [],
                "name": "nominalTypeHack",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 643,
                "end": 646,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 645,
                  "end": 646,
                  "typeName": {
                    "type": "Identifier",
                    "start": 645,
                    "end": 646,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 651,
      "end": 750,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 658,
        "end": 750,
        "id": {
          "type": "Identifier",
          "start": 668,
          "end": 679,
          "decorators": [],
          "name": "Requireable",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 679,
          "end": 682,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 680,
              "end": 681,
              "name": {
                "type": "Identifier",
                "start": 680,
                "end": 681,
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
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 691,
            "end": 703,
            "expression": {
              "type": "Identifier",
              "start": 691,
              "end": 700,
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 700,
              "end": 703,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 701,
                  "end": 702,
                  "typeName": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 702,
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
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 704,
          "end": 750,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 710,
              "end": 748,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 710,
                "end": 720,
                "decorators": [],
                "name": "isRequired",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 720,
                "end": 747,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 722,
                  "end": 747,
                  "typeName": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 731,
                    "decorators": [],
                    "name": "Validator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 731,
                    "end": 747,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 732,
                        "end": 746,
                        "typeName": {
                          "type": "Identifier",
                          "start": 732,
                          "end": 743,
                          "decorators": [],
                          "name": "NonNullable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 743,
                          "end": 746,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 744,
                              "end": 745,
                              "typeName": {
                                "type": "Identifier",
                                "start": 744,
                                "end": 745,
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
      "start": 752,
      "end": 820,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 759,
        "end": 820,
        "id": {
          "type": "Identifier",
          "start": 764,
          "end": 777,
          "decorators": [],
          "name": "ValidationMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 777,
          "end": 780,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 778,
              "end": 779,
              "name": {
                "type": "Identifier",
                "start": 778,
                "end": 779,
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
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 783,
          "end": 819,
          "key": {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 791,
            "end": 798,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 797,
              "end": 798,
              "typeName": {
                "type": "Identifier",
                "start": 797,
                "end": 798,
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
            "start": 802,
            "end": 817,
            "typeName": {
              "type": "Identifier",
              "start": 802,
              "end": 811,
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 811,
              "end": 817,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 812,
                  "end": 816,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 812,
                    "end": 813,
                    "typeName": {
                      "type": "Identifier",
                      "start": 812,
                      "end": 813,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 814,
                    "end": 815,
                    "typeName": {
                      "type": "Identifier",
                      "start": 814,
                      "end": 815,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": true,
          "readonly": null
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
      "start": 822,
      "end": 888,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 829,
        "end": 888,
        "id": {
          "type": "Identifier",
          "start": 834,
          "end": 843,
          "decorators": [],
          "name": "InferType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 843,
          "end": 846,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 844,
              "end": 845,
              "name": {
                "type": "Identifier",
                "start": 844,
                "end": 845,
                "decorators": [],
                "name": "V",
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
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 849,
          "end": 887,
          "checkType": {
            "type": "TSTypeReference",
            "start": 849,
            "end": 850,
            "typeName": {
              "type": "Identifier",
              "start": 849,
              "end": 850,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 859,
            "end": 877,
            "typeName": {
              "type": "Identifier",
              "start": 859,
              "end": 868,
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 868,
              "end": 877,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 869,
                  "end": 876,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 875,
                    "end": 876,
                    "name": {
                      "type": "Identifier",
                      "start": 875,
                      "end": 876,
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
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 880,
            "end": 881,
            "typeName": {
              "type": "Identifier",
              "start": 880,
              "end": 881,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSAnyKeyword",
            "start": 884,
            "end": 887
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
      "type": "ExportNamedDeclaration",
      "start": 889,
      "end": 1022,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 896,
        "end": 1022,
        "id": {
          "type": "Identifier",
          "start": 901,
          "end": 911,
          "decorators": [],
          "name": "InferProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 911,
          "end": 914,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 912,
              "end": 913,
              "name": {
                "type": "Identifier",
                "start": 912,
                "end": 913,
                "decorators": [],
                "name": "V",
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
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 921,
          "end": 1021,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 923,
              "end": 964,
              "typeName": {
                "type": "Identifier",
                "start": 923,
                "end": 938,
                "decorators": [],
                "name": "InferPropsInner",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 938,
                "end": 964,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 939,
                    "end": 963,
                    "typeName": {
                      "type": "Identifier",
                      "start": 939,
                      "end": 943,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 943,
                      "end": 963,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 944,
                          "end": 945,
                          "typeName": {
                            "type": "Identifier",
                            "start": 944,
                            "end": 945,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 947,
                          "end": 962,
                          "typeName": {
                            "type": "Identifier",
                            "start": 947,
                            "end": 959,
                            "decorators": [],
                            "name": "RequiredKeys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 959,
                            "end": 962,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 960,
                                "end": 961,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 960,
                                  "end": 961,
                                  "decorators": [],
                                  "name": "V",
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
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 971,
              "end": 1021,
              "typeName": {
                "type": "Identifier",
                "start": 971,
                "end": 978,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 978,
                "end": 1021,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 979,
                    "end": 1020,
                    "typeName": {
                      "type": "Identifier",
                      "start": 979,
                      "end": 994,
                      "decorators": [],
                      "name": "InferPropsInner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 994,
                      "end": 1020,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 995,
                          "end": 1019,
                          "typeName": {
                            "type": "Identifier",
                            "start": 995,
                            "end": 999,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 999,
                            "end": 1019,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1000,
                                "end": 1001,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1000,
                                  "end": 1001,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1003,
                                "end": 1018,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1003,
                                  "end": 1015,
                                  "decorators": [],
                                  "name": "OptionalKeys",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 1015,
                                  "end": 1018,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1016,
                                      "end": 1017,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1016,
                                        "end": 1017,
                                        "decorators": [],
                                        "name": "V",
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
                      ]
                    }
                  }
                ]
              }
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
      "start": 1024,
      "end": 1059,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1031,
        "end": 1059,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1037,
            "end": 1058,
            "id": {
              "type": "Identifier",
              "start": 1037,
              "end": 1058,
              "decorators": [],
              "name": "any",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1040,
                "end": 1058,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1042,
                  "end": 1058,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1042,
                    "end": 1053,
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1053,
                    "end": 1058,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1054,
                        "end": 1057
                      }
                    ]
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1060,
      "end": 1099,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1067,
        "end": 1099,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1073,
            "end": 1098,
            "id": {
              "type": "Identifier",
              "start": 1073,
              "end": 1098,
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1078,
                "end": 1098,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1080,
                  "end": 1098,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1080,
                    "end": 1091,
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1091,
                    "end": 1098,
                    "params": [
                      {
                        "type": "TSArrayType",
                        "start": 1092,
                        "end": 1097,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1092,
                          "end": 1095
                        }
                      }
                    ]
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1100,
      "end": 1140,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1107,
        "end": 1140,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1113,
            "end": 1139,
            "id": {
              "type": "Identifier",
              "start": 1113,
              "end": 1139,
              "decorators": [],
              "name": "bool",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1117,
                "end": 1139,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1119,
                  "end": 1139,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1130,
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1130,
                    "end": 1139,
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 1131,
                        "end": 1138
                      }
                    ]
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1141,
      "end": 1182,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1148,
        "end": 1182,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1154,
            "end": 1181,
            "id": {
              "type": "Identifier",
              "start": 1154,
              "end": 1181,
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1160,
                "end": 1181,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1162,
                  "end": 1181,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1173,
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1173,
                    "end": 1181,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1174,
                        "end": 1180
                      }
                    ]
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1183,
      "end": 1224,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1190,
        "end": 1224,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1196,
            "end": 1223,
            "id": {
              "type": "Identifier",
              "start": 1196,
              "end": 1223,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1202,
                "end": 1223,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1204,
                  "end": 1223,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1215,
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1215,
                    "end": 1223,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1216,
                        "end": 1222
                      }
                    ]
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1225,
      "end": 1314,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 1232,
        "end": 1314,
        "id": {
          "type": "Identifier",
          "start": 1241,
          "end": 1246,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1246,
          "end": 1276,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1247,
              "end": 1275,
              "name": {
                "type": "Identifier",
                "start": 1247,
                "end": 1248,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1257,
                "end": 1275,
                "typeName": {
                  "type": "Identifier",
                  "start": 1257,
                  "end": 1270,
                  "decorators": [],
                  "name": "ValidationMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1270,
                  "end": 1275,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1271,
                      "end": 1274
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
        "params": [
          {
            "type": "Identifier",
            "start": 1277,
            "end": 1284,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1281,
              "end": 1284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1283,
                "end": 1284,
                "typeName": {
                  "type": "Identifier",
                  "start": 1283,
                  "end": 1284,
                  "decorators": [],
                  "name": "P",
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
          "start": 1285,
          "end": 1313,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1287,
            "end": 1313,
            "typeName": {
              "type": "Identifier",
              "start": 1287,
              "end": 1298,
              "decorators": [],
              "name": "Requireable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1298,
              "end": 1313,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1299,
                  "end": 1312,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1309,
                    "decorators": [],
                    "name": "InferProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1309,
                    "end": 1312,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1310,
                        "end": 1311,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1311,
                          "decorators": [],
                          "name": "P",
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
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1315,
      "end": 1419,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 1322,
        "end": 1419,
        "id": {
          "type": "Identifier",
          "start": 1331,
          "end": 1340,
          "decorators": [],
          "name": "oneOfType",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1340,
          "end": 1366,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1341,
              "end": 1365,
              "name": {
                "type": "Identifier",
                "start": 1341,
                "end": 1342,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1351,
                "end": 1365,
                "typeName": {
                  "type": "Identifier",
                  "start": 1351,
                  "end": 1360,
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1360,
                  "end": 1365,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1361,
                      "end": 1364
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
        "params": [
          {
            "type": "Identifier",
            "start": 1367,
            "end": 1377,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1372,
              "end": 1377,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1374,
                "end": 1377,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1374,
                  "end": 1375,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1374,
                    "end": 1375,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1378,
          "end": 1418,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1380,
            "end": 1418,
            "typeName": {
              "type": "Identifier",
              "start": 1380,
              "end": 1391,
              "decorators": [],
              "name": "Requireable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1391,
              "end": 1418,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1392,
                  "end": 1417,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1392,
                    "end": 1403,
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1403,
                    "end": 1417,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1404,
                        "end": 1416,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1404,
                          "end": 1413,
                          "decorators": [],
                          "name": "InferType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1413,
                          "end": 1416,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1414,
                              "end": 1415,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1414,
                                "end": 1415,
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
              ]
            }
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "start": 0,
  "end": 1433,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 39,
        "value": "prop-types",
        "raw": "\"prop-types\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 283,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 73,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "any",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 72,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 69,
                "end": 72
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 94,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 93,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 85,
                "end": 93,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 85,
                  "end": 91
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 99,
            "end": 113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 103,
              "decorators": [],
              "name": "bool",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 112,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 105,
                "end": 112
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 118,
            "end": 195,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
              "decorators": [],
              "name": "shape",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 125,
                "end": 194,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 135,
                    "end": 147,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 138,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 146,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 140,
                        "end": 146
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 156,
                    "end": 170,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 159,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 169,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 162,
                        "end": 169
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 179,
                    "end": 188,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 182,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 183,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 185,
                        "end": 188
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 200,
            "end": 281,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 209,
              "decorators": [],
              "name": "oneOfType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 280,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 211,
                "end": 280,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 211,
                    "end": 217
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 220,
                    "end": 227
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 230,
                    "end": 280,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 240,
                        "end": 253,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 243,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 244,
                          "end": 252,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 246,
                            "end": 252
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 262,
                        "end": 274,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 262,
                          "end": 265,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 273,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 267,
                            "end": 273
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
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
      "start": 285,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 302,
        "decorators": [],
        "name": "PropTypesMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 305,
        "end": 335,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 305,
          "end": 328,
          "left": {
            "type": "Identifier",
            "start": 305,
            "end": 314,
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 315,
            "end": 328,
            "decorators": [],
            "name": "ValidationMap",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 328,
          "end": 335,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 329,
              "end": 334,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 334,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 447,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 354,
            "decorators": [],
            "name": "innerProps",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 357,
            "end": 446,
            "properties": [
              {
                "type": "Property",
                "start": 363,
                "end": 395,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 366,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 368,
                  "end": 395,
                  "object": {
                    "type": "MemberExpression",
                    "start": 368,
                    "end": 384,
                    "object": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 377,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 384,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 395,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 401,
                "end": 420,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 404,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 406,
                  "end": 420,
                  "object": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 415,
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 420,
                    "decorators": [],
                    "name": "bool",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 426,
                "end": 444,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 429,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 431,
                  "end": 444,
                  "object": {
                    "type": "Identifier",
                    "start": 431,
                    "end": 440,
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 444,
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 591,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 467,
            "decorators": [],
            "name": "arrayOfTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 470,
            "end": 590,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 471,
                "end": 487,
                "object": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 480,
                  "decorators": [],
                  "name": "PropTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 487,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 489,
                "end": 503,
                "object": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 498,
                  "decorators": [],
                  "name": "PropTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 503,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "CallExpression",
                "start": 505,
                "end": 589,
                "callee": {
                  "type": "MemberExpression",
                  "start": 505,
                  "end": 520,
                  "object": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 514,
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 520,
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 521,
                    "end": 588,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 527,
                        "end": 548,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 530,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 532,
                          "end": 548,
                          "object": {
                            "type": "Identifier",
                            "start": 532,
                            "end": 541,
                            "decorators": [],
                            "name": "PropTypes",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 548,
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 554,
                        "end": 586,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 554,
                          "end": 557,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 559,
                          "end": 586,
                          "object": {
                            "type": "MemberExpression",
                            "start": 559,
                            "end": 575,
                            "object": {
                              "type": "Identifier",
                              "start": 559,
                              "end": 568,
                              "decorators": [],
                              "name": "PropTypes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 569,
                              "end": 575,
                              "decorators": [],
                              "name": "number",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 576,
                            "end": 586,
                            "decorators": [],
                            "name": "isRequired",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 608,
      "end": 856,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 855,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 637,
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 637,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 625,
                "end": 637,
                "typeName": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 637,
                  "decorators": [],
                  "name": "PropTypesMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 640,
            "end": 855,
            "properties": [
              {
                "type": "Property",
                "start": 646,
                "end": 664,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 646,
                  "end": 649,
                  "decorators": [],
                  "name": "any",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 651,
                  "end": 664,
                  "object": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 660,
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 664,
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 670,
                "end": 703,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 675,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 677,
                  "end": 703,
                  "object": {
                    "type": "MemberExpression",
                    "start": 677,
                    "end": 692,
                    "object": {
                      "type": "Identifier",
                      "start": 677,
                      "end": 686,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 687,
                      "end": 692,
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 703,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 709,
                "end": 740,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 713,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 715,
                  "end": 740,
                  "object": {
                    "type": "MemberExpression",
                    "start": 715,
                    "end": 729,
                    "object": {
                      "type": "Identifier",
                      "start": 715,
                      "end": 724,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 729,
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 740,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 746,
                "end": 791,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 751,
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 753,
                  "end": 791,
                  "object": {
                    "type": "CallExpression",
                    "start": 753,
                    "end": 780,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 753,
                      "end": 768,
                      "object": {
                        "type": "Identifier",
                        "start": 753,
                        "end": 762,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 768,
                        "decorators": [],
                        "name": "shape",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 769,
                        "end": 779,
                        "decorators": [],
                        "name": "innerProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 781,
                    "end": 791,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 797,
                "end": 852,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 797,
                  "end": 806,
                  "decorators": [],
                  "name": "oneOfType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 808,
                  "end": 852,
                  "object": {
                    "type": "CallExpression",
                    "start": 808,
                    "end": 841,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 808,
                      "end": 827,
                      "object": {
                        "type": "Identifier",
                        "start": 808,
                        "end": 817,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 818,
                        "end": 827,
                        "decorators": [],
                        "name": "oneOfType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 828,
                        "end": 840,
                        "decorators": [],
                        "name": "arrayOfTypes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 852,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 873,
      "end": 1124,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 879,
          "end": 1123,
          "id": {
            "type": "Identifier",
            "start": 879,
            "end": 905,
            "decorators": [],
            "name": "propTypesWithoutAnnotation",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 908,
            "end": 1123,
            "properties": [
              {
                "type": "Property",
                "start": 914,
                "end": 932,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 914,
                  "end": 917,
                  "decorators": [],
                  "name": "any",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 919,
                  "end": 932,
                  "object": {
                    "type": "Identifier",
                    "start": 919,
                    "end": 928,
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 932,
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 938,
                "end": 971,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 938,
                  "end": 943,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 945,
                  "end": 971,
                  "object": {
                    "type": "MemberExpression",
                    "start": 945,
                    "end": 960,
                    "object": {
                      "type": "Identifier",
                      "start": 945,
                      "end": 954,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 960,
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 961,
                    "end": 971,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 977,
                "end": 1008,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 981,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 983,
                  "end": 1008,
                  "object": {
                    "type": "MemberExpression",
                    "start": 983,
                    "end": 997,
                    "object": {
                      "type": "Identifier",
                      "start": 983,
                      "end": 992,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 993,
                      "end": 997,
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 1008,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1014,
                "end": 1059,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1019,
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 1021,
                  "end": 1059,
                  "object": {
                    "type": "CallExpression",
                    "start": 1021,
                    "end": 1048,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1021,
                      "end": 1036,
                      "object": {
                        "type": "Identifier",
                        "start": 1021,
                        "end": 1030,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1036,
                        "decorators": [],
                        "name": "shape",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1037,
                        "end": 1047,
                        "decorators": [],
                        "name": "innerProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1049,
                    "end": 1059,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1065,
                "end": 1120,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1074,
                  "decorators": [],
                  "name": "oneOfType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 1076,
                  "end": 1120,
                  "object": {
                    "type": "CallExpression",
                    "start": 1076,
                    "end": 1109,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1076,
                      "end": 1095,
                      "object": {
                        "type": "Identifier",
                        "start": 1076,
                        "end": 1085,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1086,
                        "end": 1095,
                        "decorators": [],
                        "name": "oneOfType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1096,
                        "end": 1108,
                        "decorators": [],
                        "name": "arrayOfTypes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1110,
                    "end": 1120,
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1126,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 1131,
        "end": 1145,
        "decorators": [],
        "name": "ExtractedProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1148,
        "end": 1186,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 1148,
          "end": 1168,
          "left": {
            "type": "Identifier",
            "start": 1148,
            "end": 1157,
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 1158,
            "end": 1168,
            "decorators": [],
            "name": "InferProps",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1168,
          "end": 1186,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 1169,
              "end": 1185,
              "exprName": {
                "type": "Identifier",
                "start": 1176,
                "end": 1185,
                "decorators": [],
                "name": "propTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1189,
      "end": 1284,
      "id": {
        "type": "Identifier",
        "start": 1194,
        "end": 1225,
        "decorators": [],
        "name": "ExtractedPropsWithoutAnnotation",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1228,
        "end": 1283,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 1228,
          "end": 1248,
          "left": {
            "type": "Identifier",
            "start": 1228,
            "end": 1237,
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 1238,
            "end": 1248,
            "decorators": [],
            "name": "InferProps",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1248,
          "end": 1283,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 1249,
              "end": 1282,
              "exprName": {
                "type": "Identifier",
                "start": 1256,
                "end": 1282,
                "decorators": [],
                "name": "propTypesWithoutAnnotation",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1286,
      "end": 1381,
      "id": {
        "type": "Identifier",
        "start": 1291,
        "end": 1308,
        "decorators": [],
        "name": "ExtractPropsMatch",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1311,
        "end": 1380,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1311,
          "end": 1325,
          "typeName": {
            "type": "Identifier",
            "start": 1311,
            "end": 1325,
            "decorators": [],
            "name": "ExtractedProps",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1334,
          "end": 1365,
          "typeName": {
            "type": "Identifier",
            "start": 1334,
            "end": 1365,
            "decorators": [],
            "name": "ExtractedPropsWithoutAnnotation",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 1368,
          "end": 1372,
          "literal": {
            "type": "Literal",
            "start": 1368,
            "end": 1372,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1375,
          "end": 1380,
          "literal": {
            "type": "Literal",
            "start": 1375,
            "end": 1380,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1382,
      "end": 1433,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1388,
          "end": 1432,
          "id": {
            "type": "Identifier",
            "start": 1388,
            "end": 1395,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1389,
              "end": 1395,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1391,
                "end": 1395,
                "literal": {
                  "type": "Literal",
                  "start": 1391,
                  "end": 1395,
                  "value": true,
                  "raw": "true"
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1399,
            "end": 1431,
            "expression": {
              "type": "TSAsExpression",
              "start": 1399,
              "end": 1410,
              "expression": {
                "type": "Literal",
                "start": 1399,
                "end": 1403,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1407,
                "end": 1410
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1414,
              "end": 1431,
              "typeName": {
                "type": "Identifier",
                "start": 1414,
                "end": 1431,
                "decorators": [],
                "name": "ExtractPropsMatch",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
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
