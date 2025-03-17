__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1067,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 87,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 78,
        "decorators": [],
        "name": "PositiveInfinity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 81,
        "end": 86,
        "literal": {
          "type": "Literal",
          "start": 81,
          "end": 86,
          "raw": "1e999",
          "value": 1e+400
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 88,
      "end": 119,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 109,
        "decorators": [],
        "name": "NegativeInfinity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 112,
        "end": 118,
        "literal": {
          "type": "UnaryExpression",
          "start": 112,
          "end": 118,
          "argument": {
            "type": "Literal",
            "start": 113,
            "end": 118,
            "raw": "1e999",
            "value": 1e+400
          },
          "operator": "-",
          "prefix": true
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 241,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 128,
        "end": 241,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 140,
          "decorators": [],
          "name": "IsEqual",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 149,
          "end": 240,
          "checkType": {
            "type": "TSFunctionType",
            "start": 150,
            "end": 178,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 178,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 159,
                "end": 178,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 160,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 177,
                  "end": 178,
                  "literal": {
                    "type": "Literal",
                    "start": 177,
                    "end": 178,
                    "raw": "2",
                    "value": 2
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 173,
                  "end": 174,
                  "literal": {
                    "type": "Literal",
                    "start": 173,
                    "end": 174,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 150,
              "end": 153,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 151,
                  "end": 152,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 188,
            "end": 221,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 221,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 202,
                "end": 221,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 203,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 213,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 220,
                  "end": 221,
                  "literal": {
                    "type": "Literal",
                    "start": 220,
                    "end": 221,
                    "raw": "2",
                    "value": 2
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 216,
                  "end": 217,
                  "literal": {
                    "type": "Literal",
                    "start": 216,
                    "end": 217,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 188,
              "end": 196,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 192,
                  "end": 193,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 235,
            "end": 240,
            "literal": {
              "type": "Literal",
              "start": 235,
              "end": 240,
              "raw": "false",
              "value": false
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 226,
            "end": 230,
            "literal": {
              "type": "Literal",
              "start": 226,
              "end": 230,
              "raw": "true",
              "value": true
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 140,
          "end": 146,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 141,
              "end": 142,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 144,
              "end": 145,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 579,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 250,
        "end": 579,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 255,
          "end": 258,
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 297,
          "end": 578,
          "checkType": {
            "type": "TSTupleType",
            "start": 297,
            "end": 428,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 301,
                "end": 329,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 308,
                  "end": 329,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 309,
                      "end": 310,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 310,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 312,
                      "end": 328,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 328,
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 308,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 333,
                "end": 361,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 340,
                  "end": 361,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 341,
                      "end": 342,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 342,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 360,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 360,
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 340,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 365,
                "end": 393,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 372,
                  "end": 393,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 374,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 376,
                      "end": 392,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 392,
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 372,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 397,
                "end": 425,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 404,
                  "end": 425,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 405,
                      "end": 406,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 406,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 408,
                      "end": 424,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 408,
                        "end": 424,
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 404,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "extendsType": {
            "type": "TSInferType",
            "start": 437,
            "end": 489,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 443,
              "end": 489,
              "const": false,
              "constraint": {
                "type": "TSTupleType",
                "start": 453,
                "end": 489,
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 454,
                    "end": 461
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 463,
                    "end": 470
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 472,
                    "end": 479
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 481,
                    "end": 488
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 443,
                "end": 444,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 573,
            "end": 578
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 494,
            "end": 568,
            "checkType": {
              "type": "TSTupleType",
              "start": 494,
              "end": 507,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 495,
                  "end": 499,
                  "literal": {
                    "type": "Literal",
                    "start": 495,
                    "end": 499,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 501,
                  "end": 506,
                  "literal": {
                    "type": "Literal",
                    "start": 501,
                    "end": 506,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            },
            "extendsType": {
              "type": "TSTupleType",
              "start": 517,
              "end": 529,
              "elementTypes": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 518,
                  "end": 522,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 520,
                    "end": 521,
                    "literal": {
                      "type": "Literal",
                      "start": 520,
                      "end": 521,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 518,
                    "end": 519,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 519,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "TSIndexedAccessType",
                  "start": 524,
                  "end": 528,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 526,
                    "end": 527,
                    "literal": {
                      "type": "Literal",
                      "start": 526,
                      "end": 527,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 524,
                    "end": 525,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 525,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSLiteralType",
              "start": 560,
              "end": 568,
              "literal": {
                "type": "Literal",
                "start": 560,
                "end": 568,
                "raw": "\"failed\"",
                "value": "failed"
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 537,
              "end": 553,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 537,
                "end": 553,
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 258,
          "end": 294,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 259,
              "end": 275,
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 269,
                "end": 275
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 277,
              "end": 293,
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
      "type": "ExportNamedDeclaration",
      "start": 581,
      "end": 933,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 588,
        "end": 933,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 593,
          "end": 614,
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 653,
          "end": 932,
          "checkType": {
            "type": "TSTupleType",
            "start": 653,
            "end": 784,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 657,
                "end": 685,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 664,
                  "end": 685,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 665,
                      "end": 666,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 666,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 668,
                      "end": 684,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 668,
                        "end": 684,
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 664,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 689,
                "end": 717,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 696,
                  "end": 717,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 697,
                      "end": 698,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 698,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 700,
                      "end": 716,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 700,
                        "end": 716,
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 696,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 721,
                "end": 749,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 728,
                  "end": 749,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 729,
                      "end": 730,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 730,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 732,
                      "end": 748,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 748,
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 721,
                  "end": 728,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 753,
                "end": 781,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 760,
                  "end": 781,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 761,
                      "end": 762,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 761,
                        "end": 762,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 764,
                      "end": 780,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 764,
                        "end": 780,
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 760,
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "extendsType": {
            "type": "TSInferType",
            "start": 793,
            "end": 845,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 799,
              "end": 845,
              "const": false,
              "constraint": {
                "type": "TSTupleType",
                "start": 809,
                "end": 845,
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 810,
                    "end": 817
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 819,
                    "end": 826
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 828,
                    "end": 835
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 837,
                    "end": 844
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 927,
            "end": 932
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 850,
            "end": 922,
            "checkType": {
              "type": "TSTupleType",
              "start": 850,
              "end": 863,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 851,
                  "end": 855,
                  "literal": {
                    "type": "Literal",
                    "start": 851,
                    "end": 855,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 857,
                  "end": 862,
                  "literal": {
                    "type": "Literal",
                    "start": 857,
                    "end": 862,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            },
            "extendsType": {
              "type": "TSTupleType",
              "start": 872,
              "end": 884,
              "elementTypes": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 873,
                  "end": 877,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 875,
                    "end": 876,
                    "literal": {
                      "type": "Literal",
                      "start": 875,
                      "end": 876,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 873,
                    "end": 874,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 874,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "TSIndexedAccessType",
                  "start": 879,
                  "end": 883,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 881,
                    "end": 882,
                    "literal": {
                      "type": "Literal",
                      "start": 881,
                      "end": 882,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 879,
                    "end": 880,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 879,
                      "end": 880,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSLiteralType",
              "start": 914,
              "end": 922,
              "literal": {
                "type": "Literal",
                "start": 914,
                "end": 922,
                "raw": "\"failed\"",
                "value": "failed"
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 891,
              "end": 907,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 891,
                "end": 907,
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 614,
          "end": 650,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 615,
              "end": 631,
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 625,
                "end": 631
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 615,
                "end": 616,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 633,
              "end": 649,
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 643,
                "end": 649
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
      "start": 935,
      "end": 991,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 940,
        "end": 948,
        "decorators": [],
        "name": "AddTest0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 951,
        "end": 990,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 954,
          "end": 990,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 955,
              "end": 971,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 955,
                "end": 971,
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 973,
              "end": 989,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 973,
                "end": 989,
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 951,
          "end": 954,
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 992,
      "end": 1066,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 997,
        "end": 1005,
        "decorators": [],
        "name": "AddTest1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1008,
        "end": 1065,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1029,
          "end": 1065,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1030,
              "end": 1046,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1030,
                "end": 1046,
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1048,
              "end": 1064,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1048,
                "end": 1064,
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1008,
          "end": 1029,
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
