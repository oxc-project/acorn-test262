__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4018,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 18,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 50,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "width",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 70,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "height",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 92,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 82,
              "decorators": [],
              "name": "visible",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 91,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 84,
                "end": 91
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Shape",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 136,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 111,
        "decorators": [],
        "name": "Dictionary",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 117,
        "end": 135,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 119,
            "end": 133,
            "parameters": [
              {
                "type": "Identifier",
                "start": 120,
                "end": 129,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 121,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 123,
                    "end": 129
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
      "start": 138,
      "end": 158,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "decorators": [],
        "name": "T00",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 149,
        "end": 157,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 155,
          "end": 157,
          "typeName": {
            "type": "Identifier",
            "start": 155,
            "end": 157,
            "decorators": [],
            "name": "K0",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 170,
      "end": 194,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "decorators": [],
        "name": "T01",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 181,
        "end": 193,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 187,
          "end": 193,
          "typeName": {
            "type": "Identifier",
            "start": 187,
            "end": 193,
            "decorators": [],
            "name": "Object",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 195,
      "end": 225,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 203,
        "decorators": [],
        "name": "T02",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 206,
        "end": 224,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 212,
          "end": 224,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 218,
            "end": 224,
            "typeName": {
              "type": "Identifier",
              "start": 218,
              "end": 224,
              "decorators": [],
              "name": "Object",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 226,
      "end": 262,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 234,
        "decorators": [],
        "name": "T03",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 237,
        "end": 261,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 243,
          "end": 261,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "start": 249,
            "end": 261,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 255,
              "end": 261,
              "typeName": {
                "type": "Identifier",
                "start": 255,
                "end": 261,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 305,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 271,
        "decorators": [],
        "name": "T04",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 274,
        "end": 304,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 280,
          "end": 304,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "start": 286,
            "end": 304,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 292,
              "end": 304,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 304,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 304,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 306,
      "end": 354,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 314,
        "decorators": [],
        "name": "T05",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 317,
        "end": 353,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 323,
          "end": 353,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "start": 329,
            "end": 353,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 335,
              "end": 353,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 341,
                "end": 353,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 347,
                  "end": 353,
                  "typeName": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 353,
                    "decorators": [],
                    "name": "Object",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 355,
      "end": 409,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 363,
        "decorators": [],
        "name": "T06",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 366,
        "end": 408,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 372,
          "end": 408,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "start": 378,
            "end": 408,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 384,
              "end": 408,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 390,
                "end": 408,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 396,
                  "end": 408,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 402,
                    "end": 408,
                    "typeName": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 408,
                      "decorators": [],
                      "name": "Object",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 411,
      "end": 436,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 419,
        "decorators": [],
        "name": "T10",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 422,
        "end": 435,
        "indexType": {
          "type": "TSLiteralType",
          "start": 428,
          "end": 434,
          "literal": {
            "type": "Literal",
            "start": 428,
            "end": 434,
            "raw": "\"name\"",
            "value": "name"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 422,
          "end": 427,
          "typeName": {
            "type": "Identifier",
            "start": 422,
            "end": 427,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 437,
      "end": 461,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 445,
        "decorators": [],
        "name": "T11",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 448,
        "end": 460,
        "indexType": {
          "type": "TSLiteralType",
          "start": 454,
          "end": 459,
          "literal": {
            "type": "Literal",
            "start": 454,
            "end": 459,
            "raw": "\"foo\"",
            "value": "foo"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 448,
          "end": 453,
          "typeName": {
            "type": "Identifier",
            "start": 448,
            "end": 453,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 472,
      "end": 505,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 480,
        "decorators": [],
        "name": "T12",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 483,
        "end": 504,
        "indexType": {
          "type": "TSUnionType",
          "start": 489,
          "end": 503,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 489,
              "end": 495,
              "literal": {
                "type": "Literal",
                "start": 489,
                "end": 495,
                "raw": "\"name\"",
                "value": "name"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 498,
              "end": 503,
              "literal": {
                "type": "Literal",
                "start": 498,
                "end": 503,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 483,
          "end": 488,
          "typeName": {
            "type": "Identifier",
            "start": 483,
            "end": 488,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 516,
      "end": 538,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 524,
        "decorators": [],
        "name": "T13",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 527,
        "end": 537,
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 533,
          "end": 536
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 527,
          "end": 532,
          "typeName": {
            "type": "Identifier",
            "start": 527,
            "end": 532,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 549,
      "end": 574,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 557,
        "decorators": [],
        "name": "T14",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 560,
        "end": 573,
        "indexType": {
          "type": "TSStringKeyword",
          "start": 566,
          "end": 572
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 560,
          "end": 565,
          "typeName": {
            "type": "Identifier",
            "start": 560,
            "end": 565,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 585,
      "end": 610,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 590,
        "end": 593,
        "decorators": [],
        "name": "T15",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 596,
        "end": 609,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 602,
          "end": 608
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 596,
          "end": 601,
          "typeName": {
            "type": "Identifier",
            "start": 596,
            "end": 601,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 621,
      "end": 647,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 626,
        "end": 629,
        "decorators": [],
        "name": "T16",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 632,
        "end": 646,
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 638,
          "end": 645
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 632,
          "end": 637,
          "typeName": {
            "type": "Identifier",
            "start": 632,
            "end": 637,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 658,
      "end": 681,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 663,
        "end": 666,
        "decorators": [],
        "name": "T17",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 669,
        "end": 680,
        "indexType": {
          "type": "TSVoidKeyword",
          "start": 675,
          "end": 679
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 669,
          "end": 674,
          "typeName": {
            "type": "Identifier",
            "start": 669,
            "end": 674,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 692,
      "end": 720,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 700,
        "decorators": [],
        "name": "T18",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 703,
        "end": 719,
        "indexType": {
          "type": "TSUndefinedKeyword",
          "start": 709,
          "end": 718
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 703,
          "end": 708,
          "typeName": {
            "type": "Identifier",
            "start": 703,
            "end": 708,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 731,
      "end": 763,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 736,
        "end": 739,
        "decorators": [],
        "name": "T19",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 742,
        "end": 762,
        "indexType": {
          "type": "TSTypeLiteral",
          "start": 748,
          "end": 761,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 750,
              "end": 759,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 750,
                "end": 751,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 751,
                "end": 759,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 753,
                  "end": 759
                }
              }
            }
          ]
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 742,
          "end": 747,
          "typeName": {
            "type": "Identifier",
            "start": 742,
            "end": 747,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 774,
      "end": 808,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 782,
        "decorators": [],
        "name": "T20",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 785,
        "end": 807,
        "indexType": {
          "type": "TSUnionType",
          "start": 791,
          "end": 806,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 791,
              "end": 797
            },
            {
              "type": "TSNumberKeyword",
              "start": 800,
              "end": 806
            }
          ]
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 785,
          "end": 790,
          "typeName": {
            "type": "Identifier",
            "start": 785,
            "end": 790,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 819,
      "end": 853,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 824,
        "end": 827,
        "decorators": [],
        "name": "T21",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 830,
        "end": 852,
        "indexType": {
          "type": "TSIntersectionType",
          "start": 836,
          "end": 851,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 836,
              "end": 842
            },
            {
              "type": "TSNumberKeyword",
              "start": 845,
              "end": 851
            }
          ]
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 830,
          "end": 835,
          "typeName": {
            "type": "Identifier",
            "start": 830,
            "end": 835,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 854,
      "end": 889,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 859,
        "end": 862,
        "decorators": [],
        "name": "T22",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 865,
        "end": 888,
        "indexType": {
          "type": "TSUnionType",
          "start": 871,
          "end": 887,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 871,
              "end": 877
            },
            {
              "type": "TSBooleanKeyword",
              "start": 880,
              "end": 887
            }
          ]
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 865,
          "end": 870,
          "typeName": {
            "type": "Identifier",
            "start": 865,
            "end": 870,
            "decorators": [],
            "name": "Shape",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 901,
      "end": 931,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 906,
        "end": 909,
        "decorators": [],
        "name": "T30",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 912,
        "end": 930,
        "indexType": {
          "type": "TSLiteralType",
          "start": 921,
          "end": 929,
          "literal": {
            "type": "Literal",
            "start": 921,
            "end": 929,
            "raw": "\"length\"",
            "value": "length"
          }
        },
        "objectType": {
          "type": "TSArrayType",
          "start": 912,
          "end": 920,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 912,
            "end": 918
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 932,
      "end": 960,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 937,
        "end": 940,
        "decorators": [],
        "name": "T31",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 943,
        "end": 959,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 952,
          "end": 958
        },
        "objectType": {
          "type": "TSArrayType",
          "start": 943,
          "end": 951,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 943,
            "end": 949
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 961,
      "end": 989,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 966,
        "end": 969,
        "decorators": [],
        "name": "T32",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 972,
        "end": 988,
        "indexType": {
          "type": "TSStringKeyword",
          "start": 981,
          "end": 987
        },
        "objectType": {
          "type": "TSArrayType",
          "start": 972,
          "end": 980,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 972,
            "end": 978
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1000,
      "end": 1029,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1005,
        "end": 1008,
        "decorators": [],
        "name": "T33",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1011,
        "end": 1028,
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1020,
          "end": 1027
        },
        "objectType": {
          "type": "TSArrayType",
          "start": 1011,
          "end": 1019,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 1011,
            "end": 1017
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1041,
      "end": 1076,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1049,
        "decorators": [],
        "name": "T40",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1052,
        "end": 1075,
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 1071,
          "end": 1074
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 1052,
          "end": 1070,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1062,
            "end": 1070,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1063,
                "end": 1069
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1052,
            "end": 1062,
            "decorators": [],
            "name": "Dictionary",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1077,
      "end": 1115,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1082,
        "end": 1085,
        "decorators": [],
        "name": "T41",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1088,
        "end": 1114,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 1107,
          "end": 1113
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 1088,
          "end": 1106,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1098,
            "end": 1106,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1099,
                "end": 1105
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1088,
            "end": 1098,
            "decorators": [],
            "name": "Dictionary",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1116,
      "end": 1154,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1121,
        "end": 1124,
        "decorators": [],
        "name": "T42",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1127,
        "end": 1153,
        "indexType": {
          "type": "TSStringKeyword",
          "start": 1146,
          "end": 1152
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 1127,
          "end": 1145,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1137,
            "end": 1145,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1138,
                "end": 1144
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1127,
            "end": 1137,
            "decorators": [],
            "name": "Dictionary",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1155,
      "end": 1194,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1160,
        "end": 1163,
        "decorators": [],
        "name": "T43",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1166,
        "end": 1193,
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1185,
          "end": 1192
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 1166,
          "end": 1184,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1176,
            "end": 1184,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1177,
                "end": 1183
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1166,
            "end": 1176,
            "decorators": [],
            "name": "Dictionary",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1206,
      "end": 1226,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1211,
        "end": 1214,
        "decorators": [],
        "name": "T50",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1217,
        "end": 1225,
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 1221,
          "end": 1224
        },
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1217,
          "end": 1220
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1227,
      "end": 1250,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1232,
        "end": 1235,
        "decorators": [],
        "name": "T51",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1238,
        "end": 1249,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 1242,
          "end": 1248
        },
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1238,
          "end": 1241
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1251,
      "end": 1274,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1259,
        "decorators": [],
        "name": "T52",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1262,
        "end": 1273,
        "indexType": {
          "type": "TSStringKeyword",
          "start": 1266,
          "end": 1272
        },
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1262,
          "end": 1265
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1275,
      "end": 1299,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1280,
        "end": 1283,
        "decorators": [],
        "name": "T53",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1286,
        "end": 1298,
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1290,
          "end": 1297
        },
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1286,
          "end": 1289
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1311,
      "end": 1337,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1316,
        "end": 1319,
        "decorators": [],
        "name": "T60",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1322,
        "end": 1336,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1325,
          "end": 1335,
          "literal": {
            "type": "Literal",
            "start": 1325,
            "end": 1335,
            "raw": "\"toString\"",
            "value": "toString"
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 1322,
          "end": 1324,
          "members": []
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1338,
      "end": 1364,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1343,
        "end": 1346,
        "decorators": [],
        "name": "T61",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1349,
        "end": 1363,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1352,
          "end": 1362,
          "literal": {
            "type": "Literal",
            "start": 1352,
            "end": 1362,
            "raw": "\"toString\"",
            "value": "toString"
          }
        },
        "objectType": {
          "type": "TSTupleType",
          "start": 1349,
          "end": 1351,
          "elementTypes": []
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1366,
      "end": 1392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1378,
          "end": 1391,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1378,
            "end": 1391,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1382,
              "end": 1391,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1384,
                "end": 1391
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1394,
      "end": 1477,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1453,
        "end": 1477,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1459,
            "end": 1475,
            "argument": {
              "type": "MemberExpression",
              "start": 1466,
              "end": 1474,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 1466,
                "end": 1469,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1470,
                "end": 1473,
                "decorators": [],
                "name": "key",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1403,
        "end": 1414,
        "decorators": [],
        "name": "getProperty",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1437,
          "end": 1443,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1440,
            "end": 1443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1442,
              "end": 1443,
              "typeName": {
                "type": "Identifier",
                "start": 1442,
                "end": 1443,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1445,
          "end": 1451,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1448,
            "end": 1451,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1450,
              "end": 1451,
              "typeName": {
                "type": "Identifier",
                "start": 1450,
                "end": 1451,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1414,
        "end": 1436,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1415,
            "end": 1416,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1415,
              "end": 1416,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1418,
            "end": 1435,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1428,
              "end": 1435,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1434,
                "end": 1435,
                "typeName": {
                  "type": "Identifier",
                  "start": 1434,
                  "end": 1435,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1418,
              "end": 1419,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1479,
      "end": 1576,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1551,
        "end": 1576,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1557,
            "end": 1574,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1557,
              "end": 1573,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1557,
                "end": 1565,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1560,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1561,
                  "end": 1564,
                  "decorators": [],
                  "name": "key",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 1568,
                "end": 1573,
                "decorators": [],
                "name": "value",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1488,
        "end": 1499,
        "decorators": [],
        "name": "setProperty",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1522,
          "end": 1528,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1525,
            "end": 1528,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1527,
              "end": 1528,
              "typeName": {
                "type": "Identifier",
                "start": 1527,
                "end": 1528,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1530,
          "end": 1536,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1533,
            "end": 1536,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1535,
              "end": 1536,
              "typeName": {
                "type": "Identifier",
                "start": 1535,
                "end": 1536,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1538,
          "end": 1549,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1543,
            "end": 1549,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 1545,
              "end": 1549,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1547,
                "end": 1548,
                "typeName": {
                  "type": "Identifier",
                  "start": 1547,
                  "end": 1548,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1545,
                "end": 1546,
                "typeName": {
                  "type": "Identifier",
                  "start": 1545,
                  "end": 1546,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1499,
        "end": 1521,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1500,
            "end": 1501,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1500,
              "end": 1501,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1503,
            "end": 1520,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1513,
              "end": 1520,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1519,
                "end": 1520,
                "typeName": {
                  "type": "Identifier",
                  "start": 1519,
                  "end": 1520,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1503,
              "end": 1504,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1578,
      "end": 1920,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1605,
        "end": 1920,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1611,
            "end": 1647,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1615,
                "end": 1646,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1615,
                  "end": 1617,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1620,
                  "end": 1646,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1632,
                      "end": 1637,
                      "decorators": [],
                      "name": "shape",
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 1639,
                      "end": 1645,
                      "raw": "\"name\"",
                      "value": "name"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1620,
                    "end": 1631,
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1652,
            "end": 1688,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1656,
                "end": 1687,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1656,
                  "end": 1658,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1661,
                  "end": 1687,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1673,
                      "end": 1678,
                      "decorators": [],
                      "name": "shape",
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 1680,
                      "end": 1686,
                      "raw": "\"size\"",
                      "value": "size"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1661,
                    "end": 1672,
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1703,
            "end": 1755,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1707,
                "end": 1754,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1707,
                  "end": 1709,
                  "decorators": [],
                  "name": "x3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1712,
                  "end": 1754,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1724,
                      "end": 1729,
                      "decorators": [],
                      "name": "shape",
                      "optional": false
                    },
                    {
                      "type": "ConditionalExpression",
                      "start": 1731,
                      "end": 1753,
                      "alternate": {
                        "type": "Literal",
                        "start": 1747,
                        "end": 1753,
                        "raw": "\"size\"",
                        "value": "size"
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 1738,
                        "end": 1744,
                        "raw": "\"name\"",
                        "value": "name"
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 1731,
                        "end": 1735,
                        "decorators": [],
                        "name": "cond",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1712,
                    "end": 1723,
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1770,
            "end": 1810,
            "expression": {
              "type": "CallExpression",
              "start": 1770,
              "end": 1809,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1782,
                  "end": 1787,
                  "decorators": [],
                  "name": "shape",
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 1789,
                  "end": 1795,
                  "raw": "\"name\"",
                  "value": "name"
                },
                {
                  "type": "Literal",
                  "start": 1797,
                  "end": 1808,
                  "raw": "\"rectangle\"",
                  "value": "rectangle"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1770,
                "end": 1781,
                "decorators": [],
                "name": "setProperty",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1815,
            "end": 1846,
            "expression": {
              "type": "CallExpression",
              "start": 1815,
              "end": 1845,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1827,
                  "end": 1832,
                  "decorators": [],
                  "name": "shape",
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 1834,
                  "end": 1840,
                  "raw": "\"size\"",
                  "value": "size"
                },
                {
                  "type": "Literal",
                  "start": 1842,
                  "end": 1844,
                  "raw": "10",
                  "value": 10
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1815,
                "end": 1826,
                "decorators": [],
                "name": "setProperty",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1861,
            "end": 1908,
            "expression": {
              "type": "CallExpression",
              "start": 1861,
              "end": 1907,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1873,
                  "end": 1878,
                  "decorators": [],
                  "name": "shape",
                  "optional": false
                },
                {
                  "type": "ConditionalExpression",
                  "start": 1880,
                  "end": 1902,
                  "alternate": {
                    "type": "Literal",
                    "start": 1896,
                    "end": 1902,
                    "raw": "\"size\"",
                    "value": "size"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1887,
                    "end": 1893,
                    "raw": "\"name\"",
                    "value": "name"
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1880,
                    "end": 1884,
                    "decorators": [],
                    "name": "cond",
                    "optional": false
                  }
                },
                {
                  "type": "Literal",
                  "start": 1904,
                  "end": 1906,
                  "raw": "10",
                  "value": 10
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1861,
                "end": 1872,
                "decorators": [],
                "name": "setProperty",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1587,
        "end": 1590,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1591,
          "end": 1603,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1596,
            "end": 1603,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1598,
              "end": 1603,
              "typeName": {
                "type": "Identifier",
                "start": 1598,
                "end": 1603,
                "decorators": [],
                "name": "Shape",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1922,
      "end": 2357,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2045,
        "end": 2357,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2051,
            "end": 2057,
            "expression": {
              "type": "MemberExpression",
              "start": 2051,
              "end": 2056,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2051,
                "end": 2052,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2053,
                "end": 2055,
                "decorators": [],
                "name": "k1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2062,
            "end": 2068,
            "expression": {
              "type": "MemberExpression",
              "start": 2062,
              "end": 2067,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2062,
                "end": 2063,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2064,
                "end": 2066,
                "decorators": [],
                "name": "k2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2073,
            "end": 2079,
            "expression": {
              "type": "MemberExpression",
              "start": 2073,
              "end": 2078,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2073,
                "end": 2074,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2075,
                "end": 2077,
                "decorators": [],
                "name": "k3",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2094,
            "end": 2100,
            "expression": {
              "type": "MemberExpression",
              "start": 2094,
              "end": 2099,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2094,
                "end": 2095,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2096,
                "end": 2098,
                "decorators": [],
                "name": "k4",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2116,
            "end": 2122,
            "expression": {
              "type": "MemberExpression",
              "start": 2116,
              "end": 2121,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2116,
                "end": 2117,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2118,
                "end": 2120,
                "decorators": [],
                "name": "k1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2127,
            "end": 2133,
            "expression": {
              "type": "MemberExpression",
              "start": 2127,
              "end": 2132,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2127,
                "end": 2128,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2129,
                "end": 2131,
                "decorators": [],
                "name": "k2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2138,
            "end": 2144,
            "expression": {
              "type": "MemberExpression",
              "start": 2138,
              "end": 2143,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2138,
                "end": 2139,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2140,
                "end": 2142,
                "decorators": [],
                "name": "k3",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2149,
            "end": 2155,
            "expression": {
              "type": "MemberExpression",
              "start": 2149,
              "end": 2154,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 2149,
                "end": 2150,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2151,
                "end": 2153,
                "decorators": [],
                "name": "k4",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2161,
            "end": 2169,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2161,
              "end": 2168,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2161,
                "end": 2163,
                "decorators": [],
                "name": "k1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2166,
                "end": 2168,
                "decorators": [],
                "name": "k2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2174,
            "end": 2182,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2174,
              "end": 2181,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2174,
                "end": 2176,
                "decorators": [],
                "name": "k1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2179,
                "end": 2181,
                "decorators": [],
                "name": "k3",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2197,
            "end": 2205,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2197,
              "end": 2204,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2197,
                "end": 2199,
                "decorators": [],
                "name": "k1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2202,
                "end": 2204,
                "decorators": [],
                "name": "k4",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2221,
            "end": 2229,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2221,
              "end": 2228,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2221,
                "end": 2223,
                "decorators": [],
                "name": "k2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2226,
                "end": 2228,
                "decorators": [],
                "name": "k1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2234,
            "end": 2242,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2234,
              "end": 2241,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2234,
                "end": 2236,
                "decorators": [],
                "name": "k2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2239,
                "end": 2241,
                "decorators": [],
                "name": "k3",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2257,
            "end": 2265,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2257,
              "end": 2264,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2257,
                "end": 2259,
                "decorators": [],
                "name": "k2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2262,
                "end": 2264,
                "decorators": [],
                "name": "k4",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2281,
            "end": 2289,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2281,
              "end": 2288,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2281,
                "end": 2283,
                "decorators": [],
                "name": "k3",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2286,
                "end": 2288,
                "decorators": [],
                "name": "k1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2294,
            "end": 2302,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2294,
              "end": 2301,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2294,
                "end": 2296,
                "decorators": [],
                "name": "k3",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2299,
                "end": 2301,
                "decorators": [],
                "name": "k2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2307,
            "end": 2315,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2307,
              "end": 2314,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2307,
                "end": 2309,
                "decorators": [],
                "name": "k3",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2312,
                "end": 2314,
                "decorators": [],
                "name": "k4",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2321,
            "end": 2329,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2321,
              "end": 2328,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2321,
                "end": 2323,
                "decorators": [],
                "name": "k4",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2326,
                "end": 2328,
                "decorators": [],
                "name": "k1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2334,
            "end": 2342,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2334,
              "end": 2341,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2334,
                "end": 2336,
                "decorators": [],
                "name": "k4",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2339,
                "end": 2341,
                "decorators": [],
                "name": "k2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2347,
            "end": 2355,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2347,
              "end": 2354,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2347,
                "end": 2349,
                "decorators": [],
                "name": "k4",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2352,
                "end": 2354,
                "decorators": [],
                "name": "k3",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1931,
        "end": 1934,
        "decorators": [],
        "name": "f20",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1941,
          "end": 1949,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1942,
            "end": 1949,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1944,
              "end": 1949,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1944,
                  "end": 1945,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1944,
                    "end": 1945,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1948,
                  "end": 1949,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1948,
                    "end": 1949,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1951,
          "end": 1959,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1952,
            "end": 1959,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1954,
              "end": 1959,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1954,
                  "end": 1955,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1954,
                    "end": 1955,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1958,
                  "end": 1959,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1958,
                    "end": 1959,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1961,
          "end": 1978,
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1963,
            "end": 1978,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1965,
              "end": 1978,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1972,
                "end": 1977,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1972,
                    "end": 1973,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1972,
                      "end": 1973,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1976,
                    "end": 1977,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1976,
                      "end": 1977,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1980,
          "end": 2001,
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1982,
            "end": 2001,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1984,
              "end": 2001,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 1984,
                  "end": 1991,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1990,
                    "end": 1991,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1990,
                      "end": 1991,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 1994,
                  "end": 2001,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2000,
                    "end": 2001,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2000,
                      "end": 2001,
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
          "type": "Identifier",
          "start": 2003,
          "end": 2020,
          "decorators": [],
          "name": "k3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2005,
            "end": 2020,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 2007,
              "end": 2020,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 2014,
                "end": 2019,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2014,
                    "end": 2015,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2014,
                      "end": 2015,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2018,
                    "end": 2019,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2018,
                      "end": 2019,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2022,
          "end": 2043,
          "decorators": [],
          "name": "k4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2024,
            "end": 2043,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2026,
              "end": 2043,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 2026,
                  "end": 2033,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2032,
                    "end": 2033,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2032,
                      "end": 2033,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 2036,
                  "end": 2043,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2042,
                    "end": 2043,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2042,
                      "end": 2043,
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
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1934,
        "end": 1940,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1935,
            "end": 1936,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1935,
              "end": 1936,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1938,
            "end": 1939,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1938,
              "end": 1939,
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
      "type": "FunctionDeclaration",
      "start": 2380,
      "end": 2887,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2532,
        "end": 2887,
        "body": [
          {
            "type": "ForInStatement",
            "start": 2538,
            "end": 2742,
            "body": {
              "type": "BlockStatement",
              "start": 2557,
              "end": 2742,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2567,
                  "end": 2574,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2567,
                    "end": 2574,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2567,
                      "end": 2570,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2573,
                      "end": 2574,
                      "decorators": [],
                      "name": "k",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2604,
                  "end": 2611,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2604,
                    "end": 2611,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2604,
                      "end": 2605,
                      "decorators": [],
                      "name": "k",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2608,
                      "end": 2611,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2645,
                  "end": 2657,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2645,
                    "end": 2656,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 2645,
                      "end": 2651,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 2645,
                        "end": 2646,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2647,
                        "end": 2650,
                        "decorators": [],
                        "name": "key",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2654,
                      "end": 2656,
                      "decorators": [],
                      "name": "tk",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2693,
                  "end": 2705,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2693,
                    "end": 2704,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2693,
                      "end": 2695,
                      "decorators": [],
                      "name": "tk",
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2698,
                      "end": 2704,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 2698,
                        "end": 2699,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2700,
                        "end": 2703,
                        "decorators": [],
                        "name": "key",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 2543,
              "end": 2550,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2547,
                  "end": 2550,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2547,
                    "end": 2550,
                    "decorators": [],
                    "name": "key",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "start": 2554,
              "end": 2555,
              "decorators": [],
              "name": "t",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2747,
            "end": 2755,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2747,
              "end": 2754,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2747,
                "end": 2749,
                "decorators": [],
                "name": "tk",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2752,
                "end": 2754,
                "decorators": [],
                "name": "uk",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2760,
            "end": 2768,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2760,
              "end": 2767,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2760,
                "end": 2762,
                "decorators": [],
                "name": "uk",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2765,
                "end": 2767,
                "decorators": [],
                "name": "tk",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2783,
            "end": 2791,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2783,
              "end": 2790,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2783,
                "end": 2785,
                "decorators": [],
                "name": "tj",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2788,
                "end": 2790,
                "decorators": [],
                "name": "uj",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2796,
            "end": 2804,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2796,
              "end": 2803,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2796,
                "end": 2798,
                "decorators": [],
                "name": "uj",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2801,
                "end": 2803,
                "decorators": [],
                "name": "tj",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2819,
            "end": 2827,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2819,
              "end": 2826,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2819,
                "end": 2821,
                "decorators": [],
                "name": "tk",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2824,
                "end": 2826,
                "decorators": [],
                "name": "tj",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2832,
            "end": 2840,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2832,
              "end": 2839,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2832,
                "end": 2834,
                "decorators": [],
                "name": "tj",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2837,
                "end": 2839,
                "decorators": [],
                "name": "tk",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2855,
            "end": 2863,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2855,
              "end": 2862,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2855,
                "end": 2857,
                "decorators": [],
                "name": "tk",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2860,
                "end": 2862,
                "decorators": [],
                "name": "uj",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2868,
            "end": 2876,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2868,
              "end": 2875,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2868,
                "end": 2870,
                "decorators": [],
                "name": "uj",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2873,
                "end": 2875,
                "decorators": [],
                "name": "tk",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2389,
        "end": 2391,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2462,
          "end": 2466,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2463,
            "end": 2466,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2465,
              "end": 2466,
              "typeName": {
                "type": "Identifier",
                "start": 2465,
                "end": 2466,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2468,
          "end": 2472,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2469,
            "end": 2472,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2471,
              "end": 2472,
              "typeName": {
                "type": "Identifier",
                "start": 2471,
                "end": 2472,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2474,
          "end": 2482,
          "decorators": [],
          "name": "tk",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2476,
            "end": 2482,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 2478,
              "end": 2482,
              "indexType": {
                "type": "TSTypeReference",
                "start": 2480,
                "end": 2481,
                "typeName": {
                  "type": "Identifier",
                  "start": 2480,
                  "end": 2481,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 2478,
                "end": 2479,
                "typeName": {
                  "type": "Identifier",
                  "start": 2478,
                  "end": 2479,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2484,
          "end": 2488,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2485,
            "end": 2488,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2487,
              "end": 2488,
              "typeName": {
                "type": "Identifier",
                "start": 2487,
                "end": 2488,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2490,
          "end": 2494,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2491,
            "end": 2494,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2493,
              "end": 2494,
              "typeName": {
                "type": "Identifier",
                "start": 2493,
                "end": 2494,
                "decorators": [],
                "name": "J",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2496,
          "end": 2504,
          "decorators": [],
          "name": "uk",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2498,
            "end": 2504,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 2500,
              "end": 2504,
              "indexType": {
                "type": "TSTypeReference",
                "start": 2502,
                "end": 2503,
                "typeName": {
                  "type": "Identifier",
                  "start": 2502,
                  "end": 2503,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 2500,
                "end": 2501,
                "typeName": {
                  "type": "Identifier",
                  "start": 2500,
                  "end": 2501,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2506,
          "end": 2514,
          "decorators": [],
          "name": "tj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2508,
            "end": 2514,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 2510,
              "end": 2514,
              "indexType": {
                "type": "TSTypeReference",
                "start": 2512,
                "end": 2513,
                "typeName": {
                  "type": "Identifier",
                  "start": 2512,
                  "end": 2513,
                  "decorators": [],
                  "name": "J",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 2510,
                "end": 2511,
                "typeName": {
                  "type": "Identifier",
                  "start": 2510,
                  "end": 2511,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2516,
          "end": 2524,
          "decorators": [],
          "name": "uj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2518,
            "end": 2524,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 2520,
              "end": 2524,
              "indexType": {
                "type": "TSTypeReference",
                "start": 2522,
                "end": 2523,
                "typeName": {
                  "type": "Identifier",
                  "start": 2522,
                  "end": 2523,
                  "decorators": [],
                  "name": "J",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 2520,
                "end": 2521,
                "typeName": {
                  "type": "Identifier",
                  "start": 2520,
                  "end": 2521,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2525,
        "end": 2531,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2527,
          "end": 2531
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2391,
        "end": 2456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2392,
            "end": 2393,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2392,
              "end": 2393,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2395,
            "end": 2429,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2405,
              "end": 2429,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2412,
                "end": 2429,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 2413,
                    "end": 2420,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2419,
                      "end": 2420,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2419,
                        "end": 2420,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2422,
                    "end": 2428
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2405,
                "end": 2412,
                "decorators": [],
                "name": "Extract",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2395,
              "end": 2396,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2431,
            "end": 2442,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2441,
              "end": 2442,
              "typeName": {
                "type": "Identifier",
                "start": 2441,
                "end": 2442,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2431,
              "end": 2432,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2444,
            "end": 2455,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2454,
              "end": 2455,
              "typeName": {
                "type": "Identifier",
                "start": 2454,
                "end": 2455,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2444,
              "end": 2445,
              "decorators": [],
              "name": "J",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2933,
      "end": 3045,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2995,
        "end": 3045,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3001,
            "end": 3008,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3001,
              "end": 3007,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3001,
                "end": 3002,
                "decorators": [],
                "name": "k",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 3005,
                "end": 3007,
                "raw": "42",
                "value": 42
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3022,
            "end": 3034,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3022,
              "end": 3033,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3022,
                "end": 3023,
                "decorators": [],
                "name": "k",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 3026,
                "end": 3033,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2942,
        "end": 2944,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2983,
          "end": 2993,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2984,
            "end": 2993,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 2986,
              "end": 2993,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2992,
                "end": 2993,
                "typeName": {
                  "type": "Identifier",
                  "start": 2992,
                  "end": 2993,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2944,
        "end": 2982,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2945,
            "end": 2981,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 2955,
              "end": 2981,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2963,
                "end": 2970,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2969,
                  "end": 2970,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2969,
                    "end": 2970,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 2958,
                "end": 2959,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2973,
                "end": 2979
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2945,
              "end": 2946,
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
      "start": 3069,
      "end": 3178,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3074,
        "end": 3087,
        "decorators": [],
        "name": "UndefinedKeys",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 3121,
        "end": 3177,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 3131,
          "end": 3138,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3137,
            "end": 3138,
            "typeName": {
              "type": "Identifier",
              "start": 3137,
              "end": 3138,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 3126,
          "end": 3127,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 3141,
          "end": 3175,
          "checkType": {
            "type": "TSUndefinedKeyword",
            "start": 3141,
            "end": 3150
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 3159,
            "end": 3163,
            "indexType": {
              "type": "TSTypeReference",
              "start": 3161,
              "end": 3162,
              "typeName": {
                "type": "Identifier",
                "start": 3161,
                "end": 3162,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 3159,
              "end": 3160,
              "typeName": {
                "type": "Identifier",
                "start": 3159,
                "end": 3160,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3170,
            "end": 3175
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 3166,
            "end": 3167,
            "typeName": {
              "type": "Identifier",
              "start": 3166,
              "end": 3167,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3087,
        "end": 3118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3088,
            "end": 3117,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3098,
              "end": 3117,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3104,
                "end": 3117,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3105,
                    "end": 3111
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3113,
                    "end": 3116
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3098,
                "end": 3104,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3088,
              "end": 3089,
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
      "start": 3180,
      "end": 3228,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3185,
        "end": 3191,
        "decorators": [],
        "name": "MyType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3194,
        "end": 3228,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3195,
            "end": 3205,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3195,
              "end": 3196,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3196,
              "end": 3204,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3198,
                "end": 3204
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3206,
            "end": 3227,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3206,
              "end": 3207,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3207,
              "end": 3227,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3209,
                "end": 3227,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3209,
                    "end": 3215
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 3218,
                    "end": 3227
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3230,
      "end": 3267,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3235,
        "end": 3242,
        "decorators": [],
        "name": "Result1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3245,
        "end": 3266,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3258,
          "end": 3266,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3259,
              "end": 3265,
              "typeName": {
                "type": "Identifier",
                "start": 3259,
                "end": 3265,
                "decorators": [],
                "name": "MyType",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3245,
          "end": 3258,
          "decorators": [],
          "name": "UndefinedKeys",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3269,
      "end": 3298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3275,
          "end": 3297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3275,
            "end": 3291,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3277,
              "end": 3291,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3279,
                "end": 3291,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3287,
                  "end": 3290,
                  "literal": {
                    "type": "Literal",
                    "start": 3287,
                    "end": 3290,
                    "raw": "'a'",
                    "value": "a"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3279,
                  "end": 3286,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3279,
                    "end": 3286,
                    "decorators": [],
                    "name": "Result1",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 3294,
            "end": 3297,
            "raw": "'a'",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3309,
      "end": 3338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3315,
          "end": 3337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3315,
            "end": 3331,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3317,
              "end": 3331,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3319,
                "end": 3331,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3327,
                  "end": 3330,
                  "literal": {
                    "type": "Literal",
                    "start": 3327,
                    "end": 3330,
                    "raw": "'b'",
                    "value": "b"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3319,
                  "end": 3326,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3319,
                    "end": 3326,
                    "decorators": [],
                    "name": "Result1",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 3334,
            "end": 3337,
            "raw": "'b'",
            "value": "b"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3340,
      "end": 3506,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3417,
        "end": 3506,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3423,
            "end": 3433,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3423,
              "end": 3432,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 3423,
                "end": 3427,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 3423,
                  "end": 3424,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3425,
                  "end": 3426,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 3430,
                "end": 3432,
                "raw": "42",
                "value": 42
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3448,
            "end": 3463,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3448,
              "end": 3462,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 3448,
                "end": 3452,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 3448,
                  "end": 3449,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3450,
                  "end": 3451,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 3455,
                "end": 3462,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3478,
            "end": 3494,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3478,
              "end": 3493,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 3478,
                "end": 3482,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 3478,
                  "end": 3479,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3480,
                  "end": 3481,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                }
              },
              "right": {
                "type": "ArrayExpression",
                "start": 3485,
                "end": 3493,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 3486,
                    "end": 3488,
                    "raw": "10",
                    "value": 10
                  },
                  {
                    "type": "Literal",
                    "start": 3490,
                    "end": 3492,
                    "raw": "20",
                    "value": 20
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3349,
        "end": 3354,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3405,
          "end": 3409,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3406,
            "end": 3409,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3408,
              "end": 3409,
              "typeName": {
                "type": "Identifier",
                "start": 3408,
                "end": 3409,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3411,
          "end": 3415,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3412,
            "end": 3415,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3414,
              "end": 3415,
              "typeName": {
                "type": "Identifier",
                "start": 3414,
                "end": 3415,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3354,
        "end": 3404,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3355,
            "end": 3384,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3365,
              "end": 3384,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3371,
                "end": 3384,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3372,
                    "end": 3378
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3380,
                    "end": 3383
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3365,
                "end": 3371,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3355,
              "end": 3356,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3386,
            "end": 3403,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3396,
              "end": 3403,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3402,
                "end": 3403,
                "typeName": {
                  "type": "Identifier",
                  "start": 3402,
                  "end": 3403,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3386,
              "end": 3387,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3530,
      "end": 3628,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3567,
        "end": 3628,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3573,
            "end": 3626,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3577,
                "end": 3625,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3577,
                  "end": 3615,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3578,
                    "end": 3615,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 3580,
                      "end": 3615,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 3613,
                        "end": 3614,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3613,
                          "end": 3614,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 3580,
                        "end": 3612,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3587,
                          "end": 3612,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3588,
                              "end": 3611,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3594,
                                "end": 3611,
                                "params": [
                                  {
                                    "type": "TSTypeOperator",
                                    "start": 3595,
                                    "end": 3602,
                                    "operator": "keyof",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 3601,
                                      "end": 3602,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3601,
                                        "end": 3602,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 3604,
                                    "end": 3610
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 3588,
                                "end": 3594,
                                "decorators": [],
                                "name": "Record",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3580,
                          "end": 3587,
                          "decorators": [],
                          "name": "Partial",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 3618,
                  "end": 3625,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3539,
        "end": 3542,
        "decorators": [],
        "name": "f30",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3542,
        "end": 3564,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3543,
            "end": 3544,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3543,
              "end": 3544,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3546,
            "end": 3563,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3556,
              "end": 3563,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3562,
                "end": 3563,
                "typeName": {
                  "type": "Identifier",
                  "start": 3562,
                  "end": 3563,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3546,
              "end": 3547,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3630,
      "end": 3782,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3667,
        "end": 3782,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3673,
            "end": 3780,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3677,
                "end": 3779,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3677,
                  "end": 3769,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3678,
                    "end": 3769,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 3680,
                      "end": 3769,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 3767,
                        "end": 3768,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3767,
                          "end": 3768,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 3680,
                        "end": 3766,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3687,
                          "end": 3766,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3688,
                              "end": 3765,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3695,
                                "end": 3765,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3696,
                                    "end": 3764,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 3703,
                                      "end": 3764,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 3704,
                                          "end": 3763,
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 3711,
                                            "end": 3763,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 3712,
                                                "end": 3762,
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "start": 3719,
                                                  "end": 3762,
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 3720,
                                                      "end": 3761,
                                                      "typeArguments": {
                                                        "type": "TSTypeParameterInstantiation",
                                                        "start": 3727,
                                                        "end": 3761,
                                                        "params": [
                                                          {
                                                            "type": "TSTypeReference",
                                                            "start": 3728,
                                                            "end": 3760,
                                                            "typeArguments": {
                                                              "type": "TSTypeParameterInstantiation",
                                                              "start": 3735,
                                                              "end": 3760,
                                                              "params": [
                                                                {
                                                                  "type": "TSTypeReference",
                                                                  "start": 3736,
                                                                  "end": 3759,
                                                                  "typeArguments": {
                                                                    "type": "TSTypeParameterInstantiation",
                                                                    "start": 3742,
                                                                    "end": 3759,
                                                                    "params": [
                                                                      {
                                                                        "type": "TSTypeOperator",
                                                                        "start": 3743,
                                                                        "end": 3750,
                                                                        "operator": "keyof",
                                                                        "typeAnnotation": {
                                                                          "type": "TSTypeReference",
                                                                          "start": 3749,
                                                                          "end": 3750,
                                                                          "typeName": {
                                                                            "type": "Identifier",
                                                                            "start": 3749,
                                                                            "end": 3750,
                                                                            "decorators": [],
                                                                            "name": "T",
                                                                            "optional": false
                                                                          }
                                                                        }
                                                                      },
                                                                      {
                                                                        "type": "TSStringKeyword",
                                                                        "start": 3752,
                                                                        "end": 3758
                                                                      }
                                                                    ]
                                                                  },
                                                                  "typeName": {
                                                                    "type": "Identifier",
                                                                    "start": 3736,
                                                                    "end": 3742,
                                                                    "decorators": [],
                                                                    "name": "Record",
                                                                    "optional": false
                                                                  }
                                                                }
                                                              ]
                                                            },
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "start": 3728,
                                                              "end": 3735,
                                                              "decorators": [],
                                                              "name": "Partial",
                                                              "optional": false
                                                            }
                                                          }
                                                        ]
                                                      },
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 3720,
                                                        "end": 3727,
                                                        "decorators": [],
                                                        "name": "Partial",
                                                        "optional": false
                                                      }
                                                    }
                                                  ]
                                                },
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 3712,
                                                  "end": 3719,
                                                  "decorators": [],
                                                  "name": "Partial",
                                                  "optional": false
                                                }
                                              }
                                            ]
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 3704,
                                            "end": 3711,
                                            "decorators": [],
                                            "name": "Partial",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3696,
                                      "end": 3703,
                                      "decorators": [],
                                      "name": "Partial",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 3688,
                                "end": 3695,
                                "decorators": [],
                                "name": "Partial",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3680,
                          "end": 3687,
                          "decorators": [],
                          "name": "Partial",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 3772,
                  "end": 3779,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3639,
        "end": 3642,
        "decorators": [],
        "name": "f31",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3642,
        "end": 3664,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3643,
            "end": 3644,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3643,
              "end": 3644,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3646,
            "end": 3663,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3656,
              "end": 3663,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3662,
                "end": 3663,
                "typeName": {
                  "type": "Identifier",
                  "start": 3662,
                  "end": 3663,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3646,
              "end": 3647,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 3806,
      "end": 4017,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3851,
        "end": 4017,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3855,
            "end": 3864,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3855,
              "end": 3860,
              "decorators": [],
              "name": "testy",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3860,
              "end": 3863,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3862,
                "end": 3863,
                "typeName": {
                  "type": "Identifier",
                  "start": 3862,
                  "end": 3863,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 3868,
            "end": 3911,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3868,
              "end": 3879,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3879,
              "end": 3911,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3886,
                "end": 3911,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3892,
                    "end": 3907,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3892,
                      "end": 3906,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3892,
                        "end": 3902,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3892,
                          "end": 3896
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3897,
                          "end": 3902,
                          "decorators": [],
                          "name": "testy",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3905,
                        "end": 3906,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3880,
                  "end": 3884,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3881,
                    "end": 3884,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3883,
                      "end": 3884,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3883,
                        "end": 3884,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3915,
            "end": 4015,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3922,
              "end": 3923,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3923,
              "end": 4015,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3946,
                "end": 4015,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3952,
                    "end": 3973,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3952,
                      "end": 3972,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3952,
                        "end": 3967,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 3952,
                          "end": 3962,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3952,
                            "end": 3956
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3957,
                            "end": 3962,
                            "decorators": [],
                            "name": "testy",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3963,
                          "end": 3966,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3971,
                        "end": 3972,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3988,
                    "end": 4011,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 3995,
                      "end": 4010,
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "start": 3995,
                        "end": 4005,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3995,
                          "end": 3999
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4000,
                          "end": 4005,
                          "decorators": [],
                          "name": "testy",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4006,
                        "end": 4009,
                        "decorators": [],
                        "name": "key",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3924,
                  "end": 3936,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3927,
                    "end": 3936,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 3929,
                      "end": 3936,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3935,
                        "end": 3936,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3935,
                          "end": 3936,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3937,
                "end": 3945,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3939,
                  "end": 3945
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3812,
        "end": 3816,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3816,
        "end": 3850,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3817,
            "end": 3849,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3827,
              "end": 3849,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3833,
                "end": 3849,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3834,
                    "end": 3840
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3842,
                    "end": 3848
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3827,
                "end": 3833,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3817,
              "end": 3818,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
