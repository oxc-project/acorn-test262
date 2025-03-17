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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 43,
              "name": "nominalTypeHack",
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "IsOptional",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "RequiredKeys",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "V",
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
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 204,
              "end": 216,
              "name": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "V",
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
                  "name": "Exclude",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                  "name": "Validator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "IsOptional",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "readonly": null,
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
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
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
          "name": "OptionalKeys",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "V",
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
            "name": "Exclude",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "name": "RequiredKeys",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "V",
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
          "name": "InferPropsInner",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "V",
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
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 432,
          "end": 470,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 435,
            "end": 447,
            "name": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "V",
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
            "start": 452,
            "end": 467,
            "typeName": {
              "type": "Identifier",
              "start": 452,
              "end": 461,
              "name": "InferType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": "-",
          "readonly": null,
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
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "Validator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
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
            }
          ]
        },
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
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 515,
                    "end": 523,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 517,
                      "end": 523
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 525,
                  "end": 541,
                  "name": "propName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 533,
                    "end": 541,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 535,
                      "end": 541
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 543,
                  "end": 564,
                  "name": "componentName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 556,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 558,
                      "end": 564
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 582,
                  "name": "location",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 582,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 576,
                      "end": 582
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 584,
                  "end": 604,
                  "name": "propFullName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 596,
                    "end": 604,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 598,
                      "end": 604
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "nominalTypeHack",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "Requireable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "Validator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        ],
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
            }
          ]
        },
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
                "name": "isRequired",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "Validator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "NonNullable",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "ValidationMap",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 783,
          "end": 819,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 786,
            "end": 798,
            "name": {
              "type": "Identifier",
              "start": 786,
              "end": 787,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "start": 802,
            "end": 817,
            "typeName": {
              "type": "Identifier",
              "start": 802,
              "end": 811,
              "name": "Validator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": true,
          "readonly": null,
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
            "start": 786,
            "end": 787,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "InferType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "V",
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
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Validator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "InferProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "V",
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
                "name": "InferPropsInner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Pick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "V",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "RequiredKeys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "V",
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
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "InferPropsInner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "Pick",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "V",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                  "name": "OptionalKeys",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                        "name": "V",
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1024,
      "end": 1059,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1031,
        "end": 1059,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1037,
            "end": 1058,
            "id": {
              "type": "Identifier",
              "start": 1037,
              "end": 1058,
              "name": "any",
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
                    "name": "Requireable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1060,
      "end": 1099,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1067,
        "end": 1099,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1073,
            "end": 1098,
            "id": {
              "type": "Identifier",
              "start": 1073,
              "end": 1098,
              "name": "array",
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
                    "name": "Requireable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1100,
      "end": 1140,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1107,
        "end": 1140,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1113,
            "end": 1139,
            "id": {
              "type": "Identifier",
              "start": 1113,
              "end": 1139,
              "name": "bool",
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
                    "name": "Requireable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1141,
      "end": 1182,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1148,
        "end": 1182,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1154,
            "end": 1181,
            "id": {
              "type": "Identifier",
              "start": 1154,
              "end": 1181,
              "name": "string",
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
                    "name": "Requireable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1183,
      "end": 1224,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1190,
        "end": 1224,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1196,
            "end": 1223,
            "id": {
              "type": "Identifier",
              "start": 1196,
              "end": 1223,
              "name": "number",
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
                    "name": "Requireable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "shape",
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
            "start": 1277,
            "end": 1284,
            "name": "type",
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
                  "name": "P",
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
        "body": null,
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
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1257,
                "end": 1275,
                "typeName": {
                  "type": "Identifier",
                  "start": 1257,
                  "end": 1270,
                  "name": "ValidationMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "Requireable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "InferProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "P",
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
          "name": "oneOfType",
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
            "start": 1367,
            "end": 1377,
            "name": "types",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1351,
                "end": 1365,
                "typeName": {
                  "type": "Identifier",
                  "start": 1351,
                  "end": 1360,
                  "name": "Validator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "Requireable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "NonNullable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "InferType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "PropTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "any",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "bool",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "shape",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "oneOfType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
        "name": "PropTypesMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "PropTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 315,
            "end": 328,
            "name": "ValidationMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 354,
            "name": "innerProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 366,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "PropTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 384,
                      "name": "string",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 395,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 401,
                "end": 420,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 404,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 406,
                  "end": 420,
                  "object": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 415,
                    "name": "PropTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 420,
                    "name": "bool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 426,
                "end": 444,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 429,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 431,
                  "end": 444,
                  "object": {
                    "type": "Identifier",
                    "start": 431,
                    "end": 440,
                    "name": "PropTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 444,
                    "name": "any",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 449,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 467,
            "name": "arrayOfTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "PropTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 487,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 489,
                "end": 503,
                "object": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 498,
                  "name": "PropTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 503,
                  "name": "bool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "PropTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 520,
                    "name": "shape",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 530,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 532,
                          "end": 548,
                          "object": {
                            "type": "Identifier",
                            "start": 532,
                            "end": 541,
                            "name": "PropTypes",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 548,
                            "name": "string",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 554,
                        "end": 586,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 554,
                          "end": 557,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "PropTypes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 569,
                              "end": 575,
                              "name": "number",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 576,
                            "end": 586,
                            "name": "isRequired",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 608,
      "end": 856,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 855,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 637,
            "name": "propTypes",
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
                  "name": "PropTypesMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 646,
                  "end": 649,
                  "name": "any",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 651,
                  "end": 664,
                  "object": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 660,
                    "name": "PropTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 664,
                    "name": "any",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 670,
                "end": 703,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 675,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "PropTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 687,
                      "end": 692,
                      "name": "array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 703,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 709,
                "end": 740,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 713,
                  "name": "bool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "PropTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 729,
                      "name": "bool",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 740,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 746,
                "end": 791,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 751,
                  "name": "shape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "PropTypes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 768,
                        "name": "shape",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 769,
                        "end": 779,
                        "name": "innerProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 781,
                    "end": 791,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 797,
                "end": 852,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 797,
                  "end": 806,
                  "name": "oneOfType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "PropTypes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 818,
                        "end": 827,
                        "name": "oneOfType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 828,
                        "end": 840,
                        "name": "arrayOfTypes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 852,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 873,
      "end": 1124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 879,
          "end": 1123,
          "id": {
            "type": "Identifier",
            "start": 879,
            "end": 905,
            "name": "propTypesWithoutAnnotation",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 914,
                  "end": 917,
                  "name": "any",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 919,
                  "end": 932,
                  "object": {
                    "type": "Identifier",
                    "start": 919,
                    "end": 928,
                    "name": "PropTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 932,
                    "name": "any",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 938,
                "end": 971,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 938,
                  "end": 943,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "PropTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 960,
                      "name": "array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 961,
                    "end": 971,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 977,
                "end": 1008,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 981,
                  "name": "bool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "PropTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 993,
                      "end": 997,
                      "name": "bool",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 1008,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1014,
                "end": 1059,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1019,
                  "name": "shape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "PropTypes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1036,
                        "name": "shape",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1037,
                        "end": 1047,
                        "name": "innerProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1049,
                    "end": 1059,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1065,
                "end": 1120,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1074,
                  "name": "oneOfType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "PropTypes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1086,
                        "end": 1095,
                        "name": "oneOfType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1096,
                        "end": 1108,
                        "name": "arrayOfTypes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1110,
                    "end": 1120,
                    "name": "isRequired",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 1126,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 1131,
        "end": 1145,
        "name": "ExtractedProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "PropTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1158,
            "end": 1168,
            "name": "InferProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "propTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "ExtractedPropsWithoutAnnotation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "PropTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1238,
            "end": 1248,
            "name": "InferProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "propTypesWithoutAnnotation",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "ExtractPropsMatch",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "ExtractedProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "ExtractedPropsWithoutAnnotation",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1388,
          "end": 1432,
          "id": {
            "type": "Identifier",
            "start": 1388,
            "end": 1395,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
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
                "name": "ExtractPropsMatch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
