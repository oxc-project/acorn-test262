__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4901,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "Defaultize",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 22,
              "decorators": [],
              "name": "TProps",
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
            "start": 24,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 33,
              "decorators": [],
              "name": "TDefaults",
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
        "start": 41,
        "end": 192,
        "types": [
          {
            "type": "TSMappedType",
            "start": 43,
            "end": 102,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 88,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 57,
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 57,
                "end": 88,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 58,
                    "end": 70,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 70,
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 70,
                        "decorators": [],
                        "name": "TProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 72,
                    "end": 87,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 78,
                      "end": 87,
                      "typeName": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 87,
                        "decorators": [],
                        "name": "TDefaults",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 92,
              "end": 101,
              "objectType": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 98,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 98,
                  "decorators": [],
                  "name": "TProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": true,
            "readonly": null
          },
          {
            "type": "TSMappedType",
            "start": 109,
            "end": 167,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 154,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 123,
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 123,
                "end": 154,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 124,
                    "end": 136,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 136,
                        "decorators": [],
                        "name": "TProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 138,
                    "end": 153,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 153,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 153,
                        "decorators": [],
                        "name": "TDefaults",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 157,
              "end": 166,
              "objectType": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 163,
                  "decorators": [],
                  "name": "TProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 165,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "readonly": null
          },
          {
            "type": "TSTypeReference",
            "start": 174,
            "end": 192,
            "typeName": {
              "type": "Identifier",
              "start": 174,
              "end": 181,
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 181,
              "end": 192,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 182,
                  "end": 191,
                  "typeName": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 191,
                    "decorators": [],
                    "name": "TDefaults",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 195,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 217,
        "decorators": [],
        "name": "InferredPropTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 217,
        "end": 220,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 218,
            "end": 219,
            "name": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "P",
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
        "start": 223,
        "end": 336,
        "key": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 230,
          "end": 237,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 236,
            "end": 237,
            "typeName": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 240,
          "end": 335,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 240,
            "end": 244,
            "objectType": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 243,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 253,
            "end": 286,
            "typeName": {
              "type": "Identifier",
              "start": 253,
              "end": 268,
              "decorators": [],
              "name": "PropTypeChecker",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 268,
              "end": 286,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 269,
                  "end": 276,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 275,
                    "end": 276,
                    "name": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 276,
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
                },
                {
                  "type": "TSInferType",
                  "start": 278,
                  "end": 285,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 284,
                    "end": 285,
                    "name": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "decorators": [],
                      "name": "U",
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
            "type": "TSIndexedAccessType",
            "start": 289,
            "end": 330,
            "objectType": {
              "type": "TSTypeReference",
              "start": 289,
              "end": 310,
              "typeName": {
                "type": "Identifier",
                "start": 289,
                "end": 304,
                "decorators": [],
                "name": "PropTypeChecker",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 304,
                "end": 310,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 305,
                    "end": 306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 308,
                    "end": 309,
                    "typeName": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 309,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "indexType": {
              "type": "TSTypeQuery",
              "start": 311,
              "end": 329,
              "exprName": {
                "type": "Identifier",
                "start": 318,
                "end": 329,
                "decorators": [],
                "name": "checkedType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "start": 333,
            "end": 335,
            "members": []
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 380,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 379,
            "decorators": [],
            "name": "checkedType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 366,
                "end": 379,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 373,
                  "end": 379
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 381,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 406,
        "decorators": [],
        "name": "PropTypeChecker",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 406,
        "end": 428,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 407,
            "end": 408,
            "name": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
              "decorators": [],
              "name": "U",
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
            "start": 410,
            "end": 427,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 419,
              "decorators": [],
              "name": "TRequired",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSLiteralType",
              "start": 422,
              "end": 427,
              "literal": {
                "type": "Literal",
                "start": 422,
                "end": 427,
                "value": false,
                "raw": "false"
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 429,
        "end": 649,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 435,
            "end": 535,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 446,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 441,
                  "end": 446,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 443,
                    "end": 446
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 448,
                "end": 464,
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 456,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 466,
                "end": 487,
                "decorators": [],
                "name": "componentName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 479,
                  "end": 487,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 481,
                    "end": 487
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 489,
                "end": 502,
                "decorators": [],
                "name": "location",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 497,
                  "end": 502,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 499,
                    "end": 502
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 504,
                "end": 524,
                "decorators": [],
                "name": "propFullName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 516,
                  "end": 524,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 518,
                    "end": 524
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 534,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 527,
                "end": 534
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 540,
            "end": 577,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 550,
              "decorators": [],
              "name": "isRequired",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 550,
              "end": 576,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 552,
                "end": 576,
                "typeName": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 567,
                  "decorators": [],
                  "name": "PropTypeChecker",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 567,
                  "end": 576,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 568,
                      "end": 569,
                      "typeName": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 569,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 571,
                      "end": 575,
                      "literal": {
                        "type": "Literal",
                        "start": 571,
                        "end": 575,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 582,
            "end": 647,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 583,
              "end": 594,
              "decorators": [],
              "name": "checkedType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 595,
              "end": 646,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 597,
                "end": 646,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 597,
                  "end": 606,
                  "typeName": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 606,
                    "decorators": [],
                    "name": "TRequired",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "start": 615,
                  "end": 619,
                  "literal": {
                    "type": "Literal",
                    "start": 615,
                    "end": 619,
                    "value": true,
                    "raw": "true"
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 622,
                  "end": 623,
                  "typeName": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 623,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSUnionType",
                  "start": 626,
                  "end": 646,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 626,
                      "end": 627,
                      "typeName": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 627,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 630,
                      "end": 634
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 637,
                      "end": 646
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
      "type": "TSModuleDeclaration",
      "start": 651,
      "end": 833,
      "id": {
        "type": "Identifier",
        "start": 669,
        "end": 678,
        "decorators": [],
        "name": "PropTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 679,
        "end": 833,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 685,
            "end": 730,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 692,
              "end": 730,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 698,
                  "end": 729,
                  "id": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 729,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 704,
                      "end": 729,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 706,
                        "end": 729,
                        "typeName": {
                          "type": "Identifier",
                          "start": 706,
                          "end": 721,
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 721,
                          "end": 729,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 722,
                              "end": 728
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
            "start": 735,
            "end": 780,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 742,
              "end": 780,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 748,
                  "end": 779,
                  "id": {
                    "type": "Identifier",
                    "start": 748,
                    "end": 779,
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 754,
                      "end": 779,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 756,
                        "end": 779,
                        "typeName": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 771,
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 771,
                          "end": 779,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 772,
                              "end": 778
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
            "start": 785,
            "end": 831,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 792,
              "end": 831,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 798,
                  "end": 830,
                  "id": {
                    "type": "Identifier",
                    "start": 798,
                    "end": 830,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 802,
                      "end": 830,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 804,
                        "end": 830,
                        "typeName": {
                          "type": "Identifier",
                          "start": 804,
                          "end": 819,
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 819,
                          "end": 830,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 820,
                              "end": 829,
                              "typeName": {
                                "type": "Identifier",
                                "start": 820,
                                "end": 829,
                                "decorators": [],
                                "name": "ReactNode",
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
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 835,
      "end": 893,
      "id": {
        "type": "Identifier",
        "start": 840,
        "end": 849,
        "decorators": [],
        "name": "ReactNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 852,
        "end": 892,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 852,
            "end": 858
          },
          {
            "type": "TSNumberKeyword",
            "start": 861,
            "end": 867
          },
          {
            "type": "TSTypeReference",
            "start": 870,
            "end": 892,
            "typeName": {
              "type": "Identifier",
              "start": 870,
              "end": 884,
              "decorators": [],
              "name": "ReactComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 884,
              "end": 892,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 885,
                  "end": 887,
                  "members": []
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 889,
                  "end": 891,
                  "members": []
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 895,
      "end": 1073,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 923,
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 923,
        "end": 935,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 924,
            "end": 928,
            "name": {
              "type": "Identifier",
              "start": 924,
              "end": 925,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 926,
              "end": 928,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 930,
            "end": 934,
            "name": {
              "type": "Identifier",
              "start": 930,
              "end": 931,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 932,
              "end": 934,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 936,
        "end": 1073,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 942,
            "end": 964,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 942,
              "end": 953,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 953,
              "end": 964,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 954,
                  "end": 962,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 959,
                    "end": 962,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 961,
                      "end": 962,
                      "typeName": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 962,
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
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 969,
            "end": 1014,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 969,
              "end": 974,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 974,
              "end": 1013,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 976,
                "end": 1013,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 976,
                    "end": 977,
                    "typeName": {
                      "type": "Identifier",
                      "start": 976,
                      "end": 977,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 980,
                    "end": 1013,
                    "typeName": {
                      "type": "Identifier",
                      "start": 980,
                      "end": 988,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 988,
                      "end": 1013,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 989,
                          "end": 1012,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 990,
                              "end": 1011,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 990,
                                "end": 998,
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 998,
                                "end": 1011,
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "start": 1000,
                                  "end": 1011,
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "start": 1000,
                                    "end": 1009,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1000,
                                      "end": 1009,
                                      "decorators": [],
                                      "name": "ReactNode",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1019,
            "end": 1046,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1019,
              "end": 1027,
              "decorators": [],
              "name": "setState",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1027,
              "end": 1046,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1041,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1029,
                    "end": 1041,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1031,
                      "end": 1041,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1038,
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1038,
                        "end": 1041,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1039,
                            "end": 1040,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1039,
                              "end": 1040,
                              "decorators": [],
                              "name": "S",
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
                "start": 1042,
                "end": 1045,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1044,
                  "end": 1045,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1044,
                    "end": 1045,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": null,
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
            "type": "MethodDefinition",
            "start": 1051,
            "end": 1071,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1051,
              "end": 1057,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1057,
              "end": 1071,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1059,
                "end": 1070,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1061,
                  "end": 1070,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1070,
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1075,
      "end": 1613,
      "id": {
        "type": "Identifier",
        "start": 1093,
        "end": 1096,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1097,
        "end": 1613,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 1103,
            "end": 1146,
            "id": {
              "type": "Identifier",
              "start": 1113,
              "end": 1120,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1129,
                "end": 1143,
                "expression": {
                  "type": "Identifier",
                  "start": 1129,
                  "end": 1143,
                  "decorators": [],
                  "name": "ReactComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 1144,
              "end": 1146,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1151,
            "end": 1181,
            "id": {
              "type": "Identifier",
              "start": 1161,
              "end": 1178,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 1179,
              "end": 1181,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1186,
            "end": 1611,
            "id": {
              "type": "Identifier",
              "start": 1191,
              "end": 1215,
              "decorators": [],
              "name": "LibraryManagedAttributes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1215,
              "end": 1235,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1216,
                  "end": 1226,
                  "name": {
                    "type": "Identifier",
                    "start": 1216,
                    "end": 1226,
                    "decorators": [],
                    "name": "TComponent",
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
                  "start": 1228,
                  "end": 1234,
                  "name": {
                    "type": "Identifier",
                    "start": 1228,
                    "end": 1234,
                    "decorators": [],
                    "name": "TProps",
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
              "start": 1246,
              "end": 1610,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1246,
                "end": 1256,
                "typeName": {
                  "type": "Identifier",
                  "start": 1246,
                  "end": 1256,
                  "decorators": [],
                  "name": "TComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "start": 1265,
                "end": 1311,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1267,
                    "end": 1289,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1267,
                      "end": 1279,
                      "decorators": [],
                      "name": "defaultProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1279,
                      "end": 1288,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 1281,
                        "end": 1288,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 1287,
                          "end": 1288,
                          "name": {
                            "type": "Identifier",
                            "start": 1287,
                            "end": 1288,
                            "decorators": [],
                            "name": "D",
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
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1290,
                    "end": 1309,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1290,
                      "end": 1299,
                      "decorators": [],
                      "name": "propTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1299,
                      "end": 1308,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 1301,
                        "end": 1308,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 1307,
                          "end": 1308,
                          "name": {
                            "type": "Identifier",
                            "start": 1307,
                            "end": 1308,
                            "decorators": [],
                            "name": "P",
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
                "start": 1326,
                "end": 1370,
                "typeName": {
                  "type": "Identifier",
                  "start": 1326,
                  "end": 1336,
                  "decorators": [],
                  "name": "Defaultize",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1336,
                  "end": 1370,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 1337,
                      "end": 1366,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1337,
                          "end": 1343,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1337,
                            "end": 1343,
                            "decorators": [],
                            "name": "TProps",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1346,
                          "end": 1366,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1346,
                            "end": 1363,
                            "decorators": [],
                            "name": "InferredPropTypes",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1363,
                            "end": 1366,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1364,
                                "end": 1365,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1364,
                                  "end": 1365,
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
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1368,
                      "end": 1369,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1368,
                        "end": 1369,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "falseType": {
                "type": "TSConditionalType",
                "start": 1385,
                "end": 1610,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 1385,
                  "end": 1395,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1385,
                    "end": 1395,
                    "decorators": [],
                    "name": "TComponent",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSTypeLiteral",
                  "start": 1404,
                  "end": 1429,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1406,
                      "end": 1427,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1406,
                        "end": 1418,
                        "decorators": [],
                        "name": "defaultProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1418,
                        "end": 1427,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 1420,
                          "end": 1427,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 1426,
                            "end": 1427,
                            "name": {
                              "type": "Identifier",
                              "start": 1426,
                              "end": 1427,
                              "decorators": [],
                              "name": "D",
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
                  "start": 1448,
                  "end": 1469,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1458,
                    "decorators": [],
                    "name": "Defaultize",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1458,
                    "end": 1469,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1459,
                        "end": 1465,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1459,
                          "end": 1465,
                          "decorators": [],
                          "name": "TProps",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1467,
                        "end": 1468,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1467,
                          "end": 1468,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "start": 1488,
                  "end": 1610,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 1488,
                    "end": 1498,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1488,
                      "end": 1498,
                      "decorators": [],
                      "name": "TComponent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSTypeLiteral",
                    "start": 1507,
                    "end": 1529,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1509,
                        "end": 1527,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1509,
                          "end": 1518,
                          "decorators": [],
                          "name": "propTypes",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1518,
                          "end": 1527,
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "start": 1520,
                            "end": 1527,
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "start": 1526,
                              "end": 1527,
                              "name": {
                                "type": "Identifier",
                                "start": 1526,
                                "end": 1527,
                                "decorators": [],
                                "name": "P",
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
                    "type": "TSIntersectionType",
                    "start": 1552,
                    "end": 1581,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1552,
                        "end": 1558,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1552,
                          "end": 1558,
                          "decorators": [],
                          "name": "TProps",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1561,
                        "end": 1581,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1561,
                          "end": 1578,
                          "decorators": [],
                          "name": "InferredPropTypes",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1578,
                          "end": 1581,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1579,
                              "end": 1580,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1579,
                                "end": 1580,
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
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 1604,
                    "end": 1610,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1604,
                      "end": 1610,
                      "decorators": [],
                      "name": "TProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1615,
      "end": 1842,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1621,
        "end": 1630,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1639,
        "end": 1653,
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1654,
        "end": 1842,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1660,
            "end": 1789,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1667,
              "end": 1676,
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 1679,
              "end": 1788,
              "properties": [
                {
                  "type": "Property",
                  "start": 1689,
                  "end": 1710,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1689,
                    "end": 1692,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 1694,
                    "end": 1710,
                    "object": {
                      "type": "Identifier",
                      "start": 1694,
                      "end": 1703,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1704,
                      "end": 1710,
                      "decorators": [],
                      "name": "number",
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
                  "start": 1720,
                  "end": 1739,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1720,
                    "end": 1723,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 1725,
                    "end": 1739,
                    "object": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1734,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1735,
                      "end": 1739,
                      "decorators": [],
                      "name": "node",
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
                  "start": 1749,
                  "end": 1781,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1749,
                    "end": 1752,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 1754,
                    "end": 1781,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1754,
                      "end": 1770,
                      "object": {
                        "type": "Identifier",
                        "start": 1754,
                        "end": 1763,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1764,
                        "end": 1770,
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
                      "start": 1771,
                      "end": 1781,
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
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1794,
            "end": 1840,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1801,
              "end": 1813,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 1816,
              "end": 1840,
              "properties": [
                {
                  "type": "Property",
                  "start": 1826,
                  "end": 1833,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1826,
                    "end": 1829,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1831,
                    "end": 1833,
                    "value": 42,
                    "raw": "42"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1844,
      "end": 1898,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1850,
          "end": 1897,
          "id": {
            "type": "Identifier",
            "start": 1850,
            "end": 1851,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1854,
            "end": 1897,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1854,
              "end": 1897,
              "name": {
                "type": "JSXIdentifier",
                "start": 1855,
                "end": 1864,
                "name": "Component"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1865,
                  "end": 1873,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1865,
                    "end": 1868,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1869,
                    "end": 1873,
                    "expression": {
                      "type": "Literal",
                      "start": 1870,
                      "end": 1872,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1874,
                  "end": 1883,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1874,
                    "end": 1877,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1878,
                    "end": 1883,
                    "value": "yes",
                    "raw": "\"yes\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1884,
                  "end": 1894,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1884,
                    "end": 1887,
                    "name": "baz"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1888,
                    "end": 1894,
                    "value": "yeah",
                    "raw": "\"yeah\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1899,
      "end": 1932,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1905,
          "end": 1931,
          "id": {
            "type": "Identifier",
            "start": 1905,
            "end": 1906,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1909,
            "end": 1931,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1909,
              "end": 1931,
              "name": {
                "type": "JSXIdentifier",
                "start": 1910,
                "end": 1919,
                "name": "Component"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1920,
                  "end": 1928,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1920,
                    "end": 1923,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1924,
                    "end": 1928,
                    "expression": {
                      "type": "Literal",
                      "start": 1925,
                      "end": 1927,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1969,
      "end": 2014,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1975,
          "end": 2013,
          "id": {
            "type": "Identifier",
            "start": 1975,
            "end": 1976,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1979,
            "end": 2013,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1979,
              "end": 2013,
              "name": {
                "type": "JSXIdentifier",
                "start": 1980,
                "end": 1989,
                "name": "Component"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1990,
                  "end": 1999,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1990,
                    "end": 1993,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1994,
                    "end": 1999,
                    "value": "yes",
                    "raw": "\"yes\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2000,
                  "end": 2010,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2000,
                    "end": 2003,
                    "name": "baz"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2004,
                    "end": 2010,
                    "value": "yeah",
                    "raw": "\"yeah\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2015,
      "end": 2069,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2021,
          "end": 2068,
          "id": {
            "type": "Identifier",
            "start": 2021,
            "end": 2022,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2025,
            "end": 2068,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2025,
              "end": 2068,
              "name": {
                "type": "JSXIdentifier",
                "start": 2026,
                "end": 2035,
                "name": "Component"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2036,
                  "end": 2045,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2036,
                    "end": 2039,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2040,
                    "end": 2045,
                    "value": "yes",
                    "raw": "\"yes\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2046,
                  "end": 2054,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2046,
                    "end": 2049,
                    "name": "baz"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2050,
                    "end": 2054,
                    "value": "yo",
                    "raw": "\"yo\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2055,
                  "end": 2065,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2055,
                    "end": 2058,
                    "name": "bat"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2059,
                    "end": 2065,
                    "value": "ohno",
                    "raw": "\"ohno\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2101,
      "end": 2156,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2107,
          "end": 2155,
          "id": {
            "type": "Identifier",
            "start": 2107,
            "end": 2108,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2111,
            "end": 2155,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2111,
              "end": 2155,
              "name": {
                "type": "JSXIdentifier",
                "start": 2112,
                "end": 2121,
                "name": "Component"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2122,
                  "end": 2130,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2122,
                    "end": 2125,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2126,
                    "end": 2130,
                    "expression": {
                      "type": "Literal",
                      "start": 2127,
                      "end": 2129,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2131,
                  "end": 2141,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2131,
                    "end": 2134,
                    "name": "bar"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2135,
                    "end": 2141,
                    "expression": {
                      "type": "Literal",
                      "start": 2136,
                      "end": 2140,
                      "value": null,
                      "raw": "null"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2142,
                  "end": 2152,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2142,
                    "end": 2145,
                    "name": "baz"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2146,
                    "end": 2152,
                    "value": "cool",
                    "raw": "\"cool\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2223,
      "end": 2278,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2229,
          "end": 2277,
          "id": {
            "type": "Identifier",
            "start": 2229,
            "end": 2230,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2233,
            "end": 2277,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2233,
              "end": 2277,
              "name": {
                "type": "JSXIdentifier",
                "start": 2234,
                "end": 2243,
                "name": "Component"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2244,
                  "end": 2252,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2244,
                    "end": 2247,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2248,
                    "end": 2252,
                    "expression": {
                      "type": "Literal",
                      "start": 2249,
                      "end": 2251,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2253,
                  "end": 2263,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2253,
                    "end": 2256,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2257,
                    "end": 2263,
                    "value": "yeah",
                    "raw": "\"yeah\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2264,
                  "end": 2274,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2264,
                    "end": 2267,
                    "name": "baz"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2268,
                    "end": 2274,
                    "expression": {
                      "type": "Literal",
                      "start": 2269,
                      "end": 2273,
                      "value": null,
                      "raw": "null"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2355,
      "end": 2504,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2361,
        "end": 2374,
        "decorators": [],
        "name": "JustPropTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2383,
        "end": 2397,
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2398,
        "end": 2504,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2404,
            "end": 2502,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2411,
              "end": 2420,
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 2423,
              "end": 2501,
              "properties": [
                {
                  "type": "Property",
                  "start": 2433,
                  "end": 2454,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2433,
                    "end": 2436,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 2438,
                    "end": 2454,
                    "object": {
                      "type": "Identifier",
                      "start": 2438,
                      "end": 2447,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2448,
                      "end": 2454,
                      "decorators": [],
                      "name": "number",
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
                  "start": 2464,
                  "end": 2494,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2464,
                    "end": 2467,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 2469,
                    "end": 2494,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2469,
                      "end": 2483,
                      "object": {
                        "type": "Identifier",
                        "start": 2469,
                        "end": 2478,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2479,
                        "end": 2483,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2484,
                      "end": 2494,
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
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2506,
      "end": 2552,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2512,
          "end": 2551,
          "id": {
            "type": "Identifier",
            "start": 2512,
            "end": 2513,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2516,
            "end": 2551,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2516,
              "end": 2551,
              "name": {
                "type": "JSXIdentifier",
                "start": 2517,
                "end": 2530,
                "name": "JustPropTypes"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2531,
                  "end": 2539,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2531,
                    "end": 2534,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2535,
                    "end": 2539,
                    "expression": {
                      "type": "Literal",
                      "start": 2536,
                      "end": 2538,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2540,
                  "end": 2548,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2540,
                    "end": 2543,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2544,
                    "end": 2548,
                    "value": "ok",
                    "raw": "\"ok\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2553,
      "end": 2590,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2559,
          "end": 2589,
          "id": {
            "type": "Identifier",
            "start": 2559,
            "end": 2560,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2563,
            "end": 2589,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2563,
              "end": 2589,
              "name": {
                "type": "JSXIdentifier",
                "start": 2564,
                "end": 2577,
                "name": "JustPropTypes"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2578,
                  "end": 2586,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2578,
                    "end": 2581,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2582,
                    "end": 2586,
                    "value": "no",
                    "raw": "\"no\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2612,
      "end": 2660,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2618,
          "end": 2659,
          "id": {
            "type": "Identifier",
            "start": 2618,
            "end": 2619,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2622,
            "end": 2659,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2622,
              "end": 2659,
              "name": {
                "type": "JSXIdentifier",
                "start": 2623,
                "end": 2636,
                "name": "JustPropTypes"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2637,
                  "end": 2647,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2637,
                    "end": 2640,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2641,
                    "end": 2647,
                    "expression": {
                      "type": "Literal",
                      "start": 2642,
                      "end": 2646,
                      "value": null,
                      "raw": "null"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2648,
                  "end": 2656,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2648,
                    "end": 2651,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2652,
                    "end": 2656,
                    "value": "ok",
                    "raw": "\"ok\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2661,
      "end": 2709,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2667,
          "end": 2708,
          "id": {
            "type": "Identifier",
            "start": 2667,
            "end": 2668,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2671,
            "end": 2708,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2671,
              "end": 2708,
              "name": {
                "type": "JSXIdentifier",
                "start": 2672,
                "end": 2685,
                "name": "JustPropTypes"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2686,
                  "end": 2694,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2686,
                    "end": 2689,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2690,
                    "end": 2694,
                    "expression": {
                      "type": "Literal",
                      "start": 2691,
                      "end": 2693,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2695,
                  "end": 2705,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2695,
                    "end": 2698,
                    "name": "bar"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2699,
                    "end": 2705,
                    "expression": {
                      "type": "Literal",
                      "start": 2700,
                      "end": 2704,
                      "value": null,
                      "raw": "null"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2737,
      "end": 2838,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2743,
        "end": 2759,
        "decorators": [],
        "name": "JustDefaultProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2768,
        "end": 2782,
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2783,
        "end": 2838,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2789,
            "end": 2836,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2796,
              "end": 2808,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 2811,
              "end": 2835,
              "properties": [
                {
                  "type": "Property",
                  "start": 2821,
                  "end": 2828,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2821,
                    "end": 2824,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2826,
                    "end": 2828,
                    "value": 42,
                    "raw": "42"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2840,
      "end": 2880,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2846,
          "end": 2879,
          "id": {
            "type": "Identifier",
            "start": 2846,
            "end": 2847,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2850,
            "end": 2879,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2850,
              "end": 2879,
              "name": {
                "type": "JSXIdentifier",
                "start": 2851,
                "end": 2867,
                "name": "JustDefaultProps"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2868,
                  "end": 2876,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2868,
                    "end": 2871,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2872,
                    "end": 2876,
                    "expression": {
                      "type": "Literal",
                      "start": 2873,
                      "end": 2875,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2881,
      "end": 2930,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2887,
          "end": 2929,
          "id": {
            "type": "Identifier",
            "start": 2887,
            "end": 2888,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2891,
            "end": 2929,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2891,
              "end": 2929,
              "name": {
                "type": "JSXIdentifier",
                "start": 2892,
                "end": 2908,
                "name": "JustDefaultProps"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2909,
                  "end": 2917,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2909,
                    "end": 2912,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 2913,
                    "end": 2917,
                    "expression": {
                      "type": "Literal",
                      "start": 2914,
                      "end": 2916,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 2918,
                  "end": 2926,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2918,
                    "end": 2921,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2922,
                    "end": 2926,
                    "value": "ok",
                    "raw": "\"ok\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2959,
      "end": 2999,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2965,
          "end": 2998,
          "id": {
            "type": "Identifier",
            "start": 2965,
            "end": 2966,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 2969,
            "end": 2998,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 2969,
              "end": 2998,
              "name": {
                "type": "JSXIdentifier",
                "start": 2970,
                "end": 2986,
                "name": "JustDefaultProps"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 2987,
                  "end": 2995,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 2987,
                    "end": 2990,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 2991,
                    "end": 2995,
                    "value": "no",
                    "raw": "\"no\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3022,
      "end": 3061,
      "id": {
        "type": "Identifier",
        "start": 3032,
        "end": 3040,
        "decorators": [],
        "name": "FooProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3041,
        "end": 3061,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3047,
            "end": 3059,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3047,
              "end": 3050,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3050,
              "end": 3058,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3052,
                "end": 3058
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
      "start": 3063,
      "end": 3318,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3069,
        "end": 3093,
        "decorators": [],
        "name": "BothWithSpecifiedGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 3102,
        "end": 3116,
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3116,
        "end": 3126,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3117,
            "end": 3125,
            "typeName": {
              "type": "Identifier",
              "start": 3117,
              "end": 3125,
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3127,
        "end": 3318,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3133,
            "end": 3262,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3140,
              "end": 3149,
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 3152,
              "end": 3261,
              "properties": [
                {
                  "type": "Property",
                  "start": 3162,
                  "end": 3183,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3162,
                    "end": 3165,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 3167,
                    "end": 3183,
                    "object": {
                      "type": "Identifier",
                      "start": 3167,
                      "end": 3176,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3177,
                      "end": 3183,
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
                  "start": 3193,
                  "end": 3212,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3193,
                    "end": 3196,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 3198,
                    "end": 3212,
                    "object": {
                      "type": "Identifier",
                      "start": 3198,
                      "end": 3207,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3208,
                      "end": 3212,
                      "decorators": [],
                      "name": "node",
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
                  "start": 3222,
                  "end": 3254,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3222,
                    "end": 3225,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 3227,
                    "end": 3254,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3227,
                      "end": 3243,
                      "object": {
                        "type": "Identifier",
                        "start": 3227,
                        "end": 3236,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3237,
                        "end": 3243,
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
                      "start": 3244,
                      "end": 3254,
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
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3267,
            "end": 3316,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3274,
              "end": 3286,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 3289,
              "end": 3315,
              "properties": [
                {
                  "type": "Property",
                  "start": 3299,
                  "end": 3308,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3299,
                    "end": 3302,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3304,
                    "end": 3308,
                    "value": "yo",
                    "raw": "\"yo\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3319,
      "end": 3388,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3325,
          "end": 3387,
          "id": {
            "type": "Identifier",
            "start": 3325,
            "end": 3326,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 3329,
            "end": 3387,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 3329,
              "end": 3387,
              "name": {
                "type": "JSXIdentifier",
                "start": 3330,
                "end": 3354,
                "name": "BothWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 3355,
                  "end": 3365,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3355,
                    "end": 3358,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3359,
                    "end": 3365,
                    "value": "fine",
                    "raw": "\"fine\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3366,
                  "end": 3375,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3366,
                    "end": 3369,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3370,
                    "end": 3375,
                    "value": "yes",
                    "raw": "\"yes\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3376,
                  "end": 3384,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3376,
                    "end": 3379,
                    "name": "baz"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 3380,
                    "end": 3384,
                    "expression": {
                      "type": "Literal",
                      "start": 3381,
                      "end": 3383,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3389,
      "end": 3437,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3395,
          "end": 3436,
          "id": {
            "type": "Identifier",
            "start": 3395,
            "end": 3396,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 3399,
            "end": 3436,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 3399,
              "end": 3436,
              "name": {
                "type": "JSXIdentifier",
                "start": 3400,
                "end": 3424,
                "name": "BothWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 3425,
                  "end": 3433,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3425,
                    "end": 3428,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3429,
                    "end": 3433,
                    "value": "no",
                    "raw": "\"no\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3474,
      "end": 3532,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3480,
          "end": 3531,
          "id": {
            "type": "Identifier",
            "start": 3480,
            "end": 3481,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 3484,
            "end": 3531,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 3484,
              "end": 3531,
              "name": {
                "type": "JSXIdentifier",
                "start": 3485,
                "end": 3509,
                "name": "BothWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 3510,
                  "end": 3519,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3510,
                    "end": 3513,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3514,
                    "end": 3519,
                    "value": "yes",
                    "raw": "\"yes\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3520,
                  "end": 3528,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3520,
                    "end": 3523,
                    "name": "baz"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 3524,
                    "end": 3528,
                    "expression": {
                      "type": "Literal",
                      "start": 3525,
                      "end": 3527,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3533,
      "end": 3602,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3539,
          "end": 3601,
          "id": {
            "type": "Identifier",
            "start": 3539,
            "end": 3540,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 3543,
            "end": 3601,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 3543,
              "end": 3601,
              "name": {
                "type": "JSXIdentifier",
                "start": 3544,
                "end": 3568,
                "name": "BothWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 3569,
                  "end": 3578,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3569,
                    "end": 3572,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3573,
                    "end": 3578,
                    "value": "yes",
                    "raw": "\"yes\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3579,
                  "end": 3587,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3579,
                    "end": 3582,
                    "name": "baz"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 3583,
                    "end": 3587,
                    "expression": {
                      "type": "Literal",
                      "start": 3584,
                      "end": 3586,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3588,
                  "end": 3598,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3588,
                    "end": 3591,
                    "name": "bat"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3592,
                    "end": 3598,
                    "value": "ohno",
                    "raw": "\"ohno\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3634,
      "end": 3701,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3640,
          "end": 3700,
          "id": {
            "type": "Identifier",
            "start": 3640,
            "end": 3641,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 3644,
            "end": 3700,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 3644,
              "end": 3700,
              "name": {
                "type": "JSXIdentifier",
                "start": 3645,
                "end": 3669,
                "name": "BothWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 3670,
                  "end": 3678,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3670,
                    "end": 3673,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3674,
                    "end": 3678,
                    "value": "no",
                    "raw": "\"no\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3679,
                  "end": 3689,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3679,
                    "end": 3682,
                    "name": "bar"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 3683,
                    "end": 3689,
                    "expression": {
                      "type": "Literal",
                      "start": 3684,
                      "end": 3688,
                      "value": null,
                      "raw": "null"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3690,
                  "end": 3697,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3690,
                    "end": 3693,
                    "name": "baz"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 3694,
                    "end": 3697,
                    "expression": {
                      "type": "Literal",
                      "start": 3695,
                      "end": 3696,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3768,
      "end": 3838,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3774,
          "end": 3837,
          "id": {
            "type": "Identifier",
            "start": 3774,
            "end": 3775,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 3778,
            "end": 3837,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 3778,
              "end": 3837,
              "name": {
                "type": "JSXIdentifier",
                "start": 3779,
                "end": 3803,
                "name": "BothWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 3804,
                  "end": 3812,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3804,
                    "end": 3807,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3808,
                    "end": 3812,
                    "value": "eh",
                    "raw": "\"eh\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3813,
                  "end": 3823,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3813,
                    "end": 3816,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3817,
                    "end": 3823,
                    "value": "yeah",
                    "raw": "\"yeah\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 3824,
                  "end": 3834,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 3824,
                    "end": 3827,
                    "name": "baz"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 3828,
                    "end": 3834,
                    "expression": {
                      "type": "Literal",
                      "start": 3829,
                      "end": 3833,
                      "value": null,
                      "raw": "null"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 3915,
      "end": 4094,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3921,
        "end": 3954,
        "decorators": [],
        "name": "JustPropTypesWithSpecifiedGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 3963,
        "end": 3977,
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3977,
        "end": 3987,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3978,
            "end": 3986,
            "typeName": {
              "type": "Identifier",
              "start": 3978,
              "end": 3986,
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3988,
        "end": 4094,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3994,
            "end": 4092,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4001,
              "end": 4010,
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 4013,
              "end": 4091,
              "properties": [
                {
                  "type": "Property",
                  "start": 4023,
                  "end": 4044,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4023,
                    "end": 4026,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 4028,
                    "end": 4044,
                    "object": {
                      "type": "Identifier",
                      "start": 4028,
                      "end": 4037,
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4038,
                      "end": 4044,
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
                  "start": 4054,
                  "end": 4084,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4054,
                    "end": 4057,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 4059,
                    "end": 4084,
                    "object": {
                      "type": "MemberExpression",
                      "start": 4059,
                      "end": 4073,
                      "object": {
                        "type": "Identifier",
                        "start": 4059,
                        "end": 4068,
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4069,
                        "end": 4073,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4074,
                      "end": 4084,
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
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4095,
      "end": 4163,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4101,
          "end": 4162,
          "id": {
            "type": "Identifier",
            "start": 4101,
            "end": 4102,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4105,
            "end": 4162,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4105,
              "end": 4162,
              "name": {
                "type": "JSXIdentifier",
                "start": 4106,
                "end": 4139,
                "name": "JustPropTypesWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 4140,
                  "end": 4150,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4140,
                    "end": 4143,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4144,
                    "end": 4150,
                    "value": "nice",
                    "raw": "\"nice\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 4151,
                  "end": 4159,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4151,
                    "end": 4154,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4155,
                    "end": 4159,
                    "value": "ok",
                    "raw": "\"ok\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4164,
      "end": 4221,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4170,
          "end": 4220,
          "id": {
            "type": "Identifier",
            "start": 4170,
            "end": 4171,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4174,
            "end": 4220,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4174,
              "end": 4220,
              "name": {
                "type": "JSXIdentifier",
                "start": 4175,
                "end": 4208,
                "name": "JustPropTypesWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 4209,
                  "end": 4217,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4209,
                    "end": 4212,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 4213,
                    "end": 4217,
                    "expression": {
                      "type": "Literal",
                      "start": 4214,
                      "end": 4216,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4243,
      "end": 4311,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4249,
          "end": 4310,
          "id": {
            "type": "Identifier",
            "start": 4249,
            "end": 4250,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4253,
            "end": 4310,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4253,
              "end": 4310,
              "name": {
                "type": "JSXIdentifier",
                "start": 4254,
                "end": 4287,
                "name": "JustPropTypesWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 4288,
                  "end": 4298,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4288,
                    "end": 4291,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 4292,
                    "end": 4298,
                    "expression": {
                      "type": "Literal",
                      "start": 4293,
                      "end": 4297,
                      "value": null,
                      "raw": "null"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 4299,
                  "end": 4307,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4299,
                    "end": 4302,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4303,
                    "end": 4307,
                    "value": "ok",
                    "raw": "\"ok\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4375,
      "end": 4445,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4381,
          "end": 4444,
          "id": {
            "type": "Identifier",
            "start": 4381,
            "end": 4382,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4385,
            "end": 4444,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4385,
              "end": 4444,
              "name": {
                "type": "JSXIdentifier",
                "start": 4386,
                "end": 4419,
                "name": "JustPropTypesWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 4420,
                  "end": 4430,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4420,
                    "end": 4423,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4424,
                    "end": 4430,
                    "value": "cool",
                    "raw": "\"cool\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 4431,
                  "end": 4441,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4431,
                    "end": 4434,
                    "name": "bar"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 4435,
                    "end": 4441,
                    "expression": {
                      "type": "Literal",
                      "start": 4436,
                      "end": 4440,
                      "value": null,
                      "raw": "null"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 4473,
      "end": 4606,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4479,
        "end": 4515,
        "decorators": [],
        "name": "JustDefaultPropsWithSpecifiedGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 4524,
        "end": 4538,
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 4538,
        "end": 4548,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 4539,
            "end": 4547,
            "typeName": {
              "type": "Identifier",
              "start": 4539,
              "end": 4547,
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4549,
        "end": 4606,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4555,
            "end": 4604,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4562,
              "end": 4574,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 4577,
              "end": 4603,
              "properties": [
                {
                  "type": "Property",
                  "start": 4587,
                  "end": 4596,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4587,
                    "end": 4590,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4592,
                    "end": 4596,
                    "value": "no",
                    "raw": "\"no\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4608,
      "end": 4668,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4614,
          "end": 4667,
          "id": {
            "type": "Identifier",
            "start": 4614,
            "end": 4615,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4618,
            "end": 4667,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4618,
              "end": 4667,
              "name": {
                "type": "JSXIdentifier",
                "start": 4619,
                "end": 4655,
                "name": "JustDefaultPropsWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 4656,
                  "end": 4664,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4656,
                    "end": 4659,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4660,
                    "end": 4664,
                    "value": "eh",
                    "raw": "\"eh\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4669,
      "end": 4738,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4675,
          "end": 4737,
          "id": {
            "type": "Identifier",
            "start": 4675,
            "end": 4676,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4679,
            "end": 4737,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4679,
              "end": 4737,
              "name": {
                "type": "JSXIdentifier",
                "start": 4680,
                "end": 4716,
                "name": "JustDefaultPropsWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 4717,
                  "end": 4725,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4717,
                    "end": 4720,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4721,
                    "end": 4725,
                    "value": "no",
                    "raw": "\"no\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 4726,
                  "end": 4734,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4726,
                    "end": 4729,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4730,
                    "end": 4734,
                    "value": "ok",
                    "raw": "\"ok\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4767,
      "end": 4827,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4773,
          "end": 4826,
          "id": {
            "type": "Identifier",
            "start": 4773,
            "end": 4774,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4777,
            "end": 4826,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4777,
              "end": 4826,
              "name": {
                "type": "JSXIdentifier",
                "start": 4778,
                "end": 4814,
                "name": "JustDefaultPropsWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 4815,
                  "end": 4823,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 4815,
                    "end": 4818,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 4819,
                    "end": 4823,
                    "expression": {
                      "type": "Literal",
                      "start": 4820,
                      "end": 4822,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4849,
      "end": 4901,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4855,
          "end": 4900,
          "id": {
            "type": "Identifier",
            "start": 4855,
            "end": 4857,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 4860,
            "end": 4900,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 4860,
              "end": 4900,
              "name": {
                "type": "JSXIdentifier",
                "start": 4861,
                "end": 4897,
                "name": "JustDefaultPropsWithSpecifiedGeneric"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
