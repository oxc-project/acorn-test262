__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 1603,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 194,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 92,
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 98,
        "end": 193,
        "checkType": {
          "type": "TSConditionalType",
          "start": 102,
          "end": 143,
          "checkType": {
            "type": "TSTypeReference",
            "start": 102,
            "end": 103,
            "typeName": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 112,
            "end": 115
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 138,
            "end": 143
          },
          "trueType": {
            "type": "TSFunctionType",
            "start": 118,
            "end": 135,
            "params": [
              {
                "type": "Identifier",
                "start": 119,
                "end": 123,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 120,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 135,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 128,
                "end": 135
              }
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 154,
          "end": 177,
          "params": [
            {
              "type": "Identifier",
              "start": 155,
              "end": 165,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 156,
                "end": 165,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 158,
                  "end": 165,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 164,
                    "end": 165,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 177,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 170,
              "end": 177
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 188,
          "end": 193
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 182,
          "end": 183,
          "typeName": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 92,
        "end": 95,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 94,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 196,
      "end": 349,
      "body": {
        "type": "TSInterfaceBody",
        "start": 216,
        "end": 349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 220,
            "end": 236,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 226,
              "decorators": [],
              "name": "public",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 229,
                "end": 235
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 239,
            "end": 256,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 246,
              "decorators": [],
              "name": "private",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 255,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 249,
                "end": 255
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 259,
            "end": 301,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 272,
              "decorators": [],
              "name": "publicExtends",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 300,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 281,
                  "end": 300,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 282,
                      "end": 288
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 299,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 299,
                        "decorators": [],
                        "name": "ClassSpec",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 281,
                  "decorators": [],
                  "name": "Record",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 304,
            "end": 347,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 318,
              "decorators": [],
              "name": "privateExtends",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 346,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 327,
                  "end": 346,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 328,
                      "end": 334
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 336,
                      "end": 345,
                      "typeName": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 345,
                        "decorators": [],
                        "name": "ClassSpec",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 327,
                  "decorators": [],
                  "name": "Record",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 215,
        "decorators": [],
        "name": "ClassSpec",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 351,
      "end": 460,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 382,
        "decorators": [],
        "name": "MaybeMergePrivateSuperSpec",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 388,
        "end": 459,
        "checkType": {
          "type": "TSTypeReference",
          "start": 388,
          "end": 389,
          "typeName": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 398,
          "end": 423,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 404,
            "end": 423,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              },
              {
                "type": "TSTypeReference",
                "start": 413,
                "end": 422,
                "typeName": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 422,
                  "decorators": [],
                  "name": "ClassSpec",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 398,
            "end": 404,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 457,
          "end": 459,
          "members": []
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 428,
          "end": 452,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 449,
            "end": 452,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 450,
                "end": 451,
                "typeName": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 451,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 428,
            "end": 449,
            "decorators": [],
            "name": "MergePrivateSuperSpec",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 382,
        "end": 385,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 383,
            "end": 384,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 462,
      "end": 570,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 489,
        "decorators": [],
        "name": "MaybeMergePrivateSpecs",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 516,
        "end": 569,
        "checkType": {
          "type": "TSTypeReference",
          "start": 516,
          "end": 517,
          "typeName": {
            "type": "Identifier",
            "start": 516,
            "end": 517,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 526,
          "end": 535,
          "typeName": {
            "type": "Identifier",
            "start": 526,
            "end": 535,
            "decorators": [],
            "name": "ClassSpec",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 568,
          "end": 569,
          "typeName": {
            "type": "Identifier",
            "start": 568,
            "end": 569,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 540,
          "end": 563,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 557,
            "end": 563,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 558,
                "end": 559,
                "typeName": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 559,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 561,
                "end": 562,
                "typeName": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 562,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 540,
            "end": 557,
            "decorators": [],
            "name": "MergePrivateSpecs",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 489,
        "end": 513,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 490,
            "end": 509,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 500,
              "end": 509,
              "typeName": {
                "type": "Identifier",
                "start": 500,
                "end": 509,
                "decorators": [],
                "name": "ClassSpec",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 511,
            "end": 512,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 511,
              "end": 512,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 572,
      "end": 720,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 594,
        "decorators": [],
        "name": "MergePrivateSpecs",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 639,
        "end": 719,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 643,
            "end": 677,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 643,
              "end": 649,
              "decorators": [],
              "name": "public",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 649,
              "end": 676,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 651,
                "end": 676,
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 651,
                    "end": 662,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 653,
                      "end": 661,
                      "literal": {
                        "type": "Literal",
                        "start": 653,
                        "end": 661,
                        "raw": "\"public\"",
                        "value": "public"
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 651,
                      "end": 652,
                      "typeName": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "start": 665,
                    "end": 676,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 667,
                      "end": 675,
                      "literal": {
                        "type": "Literal",
                        "start": 667,
                        "end": 675,
                        "raw": "\"public\"",
                        "value": "public"
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 665,
                      "end": 666,
                      "typeName": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 666,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 680,
            "end": 717,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 680,
              "end": 687,
              "decorators": [],
              "name": "private",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 687,
              "end": 716,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 689,
                "end": 716,
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 689,
                    "end": 701,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 691,
                      "end": 700,
                      "literal": {
                        "type": "Literal",
                        "start": 691,
                        "end": 700,
                        "raw": "\"private\"",
                        "value": "private"
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 689,
                      "end": 690,
                      "typeName": {
                        "type": "Identifier",
                        "start": 689,
                        "end": 690,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "start": 704,
                    "end": 716,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 706,
                      "end": 715,
                      "literal": {
                        "type": "Literal",
                        "start": 706,
                        "end": 715,
                        "raw": "\"private\"",
                        "value": "private"
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 704,
                      "end": 705,
                      "typeName": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 705,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 594,
        "end": 636,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 595,
            "end": 614,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 605,
              "end": 614,
              "typeName": {
                "type": "Identifier",
                "start": 605,
                "end": 614,
                "decorators": [],
                "name": "ClassSpec",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 616,
            "end": 635,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 626,
              "end": 635,
              "typeName": {
                "type": "Identifier",
                "start": 626,
                "end": 635,
                "decorators": [],
                "name": "ClassSpec",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 722,
      "end": 885,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 748,
        "decorators": [],
        "name": "MergePrivateSuperSpec",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 790,
        "end": 884,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 809,
          "end": 884,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 815,
              "end": 880,
              "indexType": {
                "type": "TSTypeOperator",
                "start": 872,
                "end": 879,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 878,
                  "end": 879,
                  "typeName": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 879,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "start": 815,
                "end": 871,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 829,
                  "end": 836,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 835,
                    "end": 836,
                    "typeName": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 836,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 825,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 839,
                  "end": 864,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 858,
                    "end": 864,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 859,
                        "end": 863,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 861,
                          "end": 862,
                          "typeName": {
                            "type": "Identifier",
                            "start": 861,
                            "end": 862,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 859,
                          "end": 860,
                          "typeName": {
                            "type": "Identifier",
                            "start": 859,
                            "end": 860,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 839,
                    "end": 858,
                    "decorators": [],
                    "name": "SimplifyPrivateSpec",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 790,
          "end": 809,
          "decorators": [],
          "name": "UnionToIntersection",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 748,
        "end": 785,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 749,
            "end": 784,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 759,
              "end": 784,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 765,
                "end": 784,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 766,
                    "end": 772
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 774,
                    "end": 783,
                    "typeName": {
                      "type": "Identifier",
                      "start": 774,
                      "end": 783,
                      "decorators": [],
                      "name": "ClassSpec",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 759,
                "end": 765,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 749,
              "end": 750,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 887,
      "end": 1095,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 894,
        "end": 1095,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 899,
          "end": 918,
          "decorators": [],
          "name": "SimplifyPrivateSpec",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 942,
          "end": 1094,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 964,
            "end": 1094,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 968,
                "end": 1041,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 990,
                  "end": 1041,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 991,
                      "end": 992,
                      "typeName": {
                        "type": "Identifier",
                        "start": 991,
                        "end": 992,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 994,
                      "end": 1040,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1020,
                        "end": 1040,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 1021,
                            "end": 1039,
                            "indexType": {
                              "type": "TSLiteralType",
                              "start": 1023,
                              "end": 1038,
                              "literal": {
                                "type": "Literal",
                                "start": 1023,
                                "end": 1038,
                                "raw": "\"publicExtends\"",
                                "value": "publicExtends"
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 1021,
                              "end": 1022,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1021,
                                "end": 1022,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 994,
                        "end": 1020,
                        "decorators": [],
                        "name": "MaybeMergePrivateSuperSpec",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 990,
                  "decorators": [],
                  "name": "MaybeMergePrivateSpecs",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1045,
                "end": 1092,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1071,
                  "end": 1092,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 1072,
                      "end": 1091,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 1074,
                        "end": 1090,
                        "literal": {
                          "type": "Literal",
                          "start": 1074,
                          "end": 1090,
                          "raw": "\"privateExtends\"",
                          "value": "privateExtends"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1072,
                        "end": 1073,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1072,
                          "end": 1073,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1045,
                  "end": 1071,
                  "decorators": [],
                  "name": "MaybeMergePrivateSuperSpec",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 942,
            "end": 964,
            "decorators": [],
            "name": "MaybeMergePrivateSpecs",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 918,
          "end": 939,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 919,
              "end": 938,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 929,
                "end": 938,
                "typeName": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 938,
                  "decorators": [],
                  "name": "ClassSpec",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 919,
                "end": 920,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1188,
      "end": 1263,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1193,
        "end": 1202,
        "decorators": [],
        "name": "Converted",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1208,
        "end": 1262,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1218,
          "end": 1225,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1224,
            "end": 1225,
            "typeName": {
              "type": "Identifier",
              "start": 1224,
              "end": 1225,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1213,
          "end": 1214,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1228,
          "end": 1259,
          "checkType": {
            "type": "TSNullKeyword",
            "start": 1228,
            "end": 1232
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 1241,
            "end": 1245,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1244,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1244,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1241,
              "end": 1242,
              "typeName": {
                "type": "Identifier",
                "start": 1241,
                "end": 1242,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1255,
            "end": 1259,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1257,
              "end": 1258,
              "typeName": {
                "type": "Identifier",
                "start": 1257,
                "end": 1258,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1255,
              "end": 1256,
              "typeName": {
                "type": "Identifier",
                "start": 1255,
                "end": 1256,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1248,
            "end": 1252,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1250,
              "end": 1251,
              "typeName": {
                "type": "Identifier",
                "start": 1250,
                "end": 1251,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1248,
              "end": 1249,
              "typeName": {
                "type": "Identifier",
                "start": 1248,
                "end": 1249,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1202,
        "end": 1205,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1203,
            "end": 1204,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1203,
              "end": 1204,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1265,
      "end": 1449,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1270,
        "end": 1282,
        "decorators": [],
        "name": "DefaultsDeep",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1301,
        "end": 1448,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1311,
          "end": 1318,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1317,
            "end": 1318,
            "typeName": {
              "type": "Identifier",
              "start": 1317,
              "end": 1318,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1306,
          "end": 1307,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "optional": "-",
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1323,
          "end": 1445,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 1323,
            "end": 1327,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1325,
              "end": 1326,
              "typeName": {
                "type": "Identifier",
                "start": 1325,
                "end": 1326,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1323,
              "end": 1324,
              "typeName": {
                "type": "Identifier",
                "start": 1323,
                "end": 1324,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 1336,
            "end": 1340,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1338,
              "end": 1339,
              "typeName": {
                "type": "Identifier",
                "start": 1338,
                "end": 1339,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1336,
              "end": 1337,
              "typeName": {
                "type": "Identifier",
                "start": 1336,
                "end": 1337,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1441,
            "end": 1445,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1443,
              "end": 1444,
              "typeName": {
                "type": "Identifier",
                "start": 1443,
                "end": 1444,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1441,
              "end": 1442,
              "typeName": {
                "type": "Identifier",
                "start": 1441,
                "end": 1442,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 1347,
            "end": 1434,
            "checkType": {
              "type": "TSNullKeyword",
              "start": 1347,
              "end": 1351
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 1360,
              "end": 1364,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1362,
                "end": 1363,
                "typeName": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1363,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1360,
                "end": 1361,
                "typeName": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1361,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "start": 1430,
              "end": 1434,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1432,
                "end": 1433,
                "typeName": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1433,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1430,
                "end": 1431,
                "typeName": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1431,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 1373,
              "end": 1421,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1382,
                "end": 1421,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1383,
                    "end": 1420,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1395,
                      "end": 1420,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 1396,
                          "end": 1400,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 1398,
                            "end": 1399,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1398,
                              "end": 1399,
                              "decorators": [],
                              "name": "P",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 1396,
                            "end": 1397,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1396,
                              "end": 1397,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1402,
                          "end": 1419,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1413,
                            "end": 1419,
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "start": 1414,
                                "end": 1418,
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 1416,
                                  "end": 1417,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1416,
                                    "end": 1417,
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 1414,
                                  "end": 1415,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1414,
                                    "end": 1415,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1402,
                            "end": 1413,
                            "decorators": [],
                            "name": "NonNullable",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1383,
                      "end": 1395,
                      "decorators": [],
                      "name": "DefaultsDeep",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1373,
                "end": 1382,
                "decorators": [],
                "name": "Converted",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1282,
        "end": 1298,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1283,
            "end": 1284,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1283,
              "end": 1284,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1286,
            "end": 1297,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1296,
              "end": 1297,
              "typeName": {
                "type": "Identifier",
                "start": 1296,
                "end": 1297,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1451,
      "end": 1535,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1471,
        "end": 1535,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1475,
            "end": 1533,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1475,
              "end": 1479,
              "decorators": [],
              "name": "find",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1493,
                "end": 1525,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1502,
                  "end": 1525,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1504,
                    "end": 1525,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1505,
                        "end": 1513,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1510,
                          "end": 1513,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1512,
                            "end": 1513,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1512,
                              "end": 1513,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1515,
                      "end": 1525,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1518,
                        "end": 1525
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1526,
              "end": 1532,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1528,
                "end": 1532
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1479,
              "end": 1492,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1480,
                  "end": 1491,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1490,
                    "end": 1491,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1490,
                      "end": 1491,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1480,
                    "end": 1481,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1461,
        "end": 1467,
        "decorators": [],
        "name": "_Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1467,
        "end": 1470,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1468,
            "end": 1469,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1468,
              "end": 1469,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1537,
      "end": 1580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1543,
          "end": 1579,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1543,
            "end": 1574,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1544,
              "end": 1574,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1546,
                "end": 1574,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1552,
                  "end": 1574,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1553,
                      "end": 1573,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1565,
                        "end": 1573,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 1566,
                            "end": 1568,
                            "members": []
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 1570,
                            "end": 1572,
                            "members": []
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1553,
                        "end": 1565,
                        "decorators": [],
                        "name": "DefaultsDeep",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1546,
                  "end": 1552,
                  "decorators": [],
                  "name": "_Array",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1577,
            "end": 1579,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1582,
      "end": 1602,
      "expression": {
        "type": "CallExpression",
        "start": 1582,
        "end": 1601,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1589,
            "end": 1600,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 1596,
              "end": 1600,
              "raw": "true",
              "value": true
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1590,
                "end": 1591,
                "decorators": [],
                "name": "_",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1582,
          "end": 1588,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1582,
            "end": 1583,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1584,
            "end": 1588,
            "decorators": [],
            "name": "find",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
