__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 881,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 95,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 95,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 93,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 97,
      "end": 144,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 110,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 123,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 141,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 135,
                "end": 141
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 146,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "decorators": [],
        "name": "ExplicitPublic",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 168,
        "end": 523,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 174,
            "end": 216,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 182,
              "end": 216,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 192,
                  "end": 210,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 203,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 209,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 222,
            "end": 285,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 240,
              "end": 285,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 250,
                  "end": 270,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 260,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 260,
                    "end": 269,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 262,
                      "end": 269,
                      "typeName": {
                        "type": "Identifier",
                        "start": 262,
                        "end": 269,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 291,
            "end": 332,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 300,
              "end": 332,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 310,
                  "end": 326,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 318,
                    "end": 319,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 319,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 321,
                      "end": 325,
                      "typeName": {
                        "type": "Identifier",
                        "start": 321,
                        "end": 325,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 338,
            "end": 401,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 344,
              "end": 346,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 355,
              "end": 357,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 358,
              "end": 401,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 368,
                  "end": 386,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 375,
                    "end": 376,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 376,
                    "end": 385,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 378,
                      "end": 385,
                      "typeName": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 385,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 407,
            "end": 450,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 416,
              "end": 450,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 426,
                  "end": 444,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 434,
                    "end": 437,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 439,
                      "end": 443,
                      "typeName": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 443,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 456,
            "end": 521,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 462,
              "end": 464,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 473,
              "end": 475,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 476,
              "end": 521,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 486,
                  "end": 506,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 493,
                    "end": 496,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 496,
                    "end": 505,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 498,
                      "end": 505,
                      "typeName": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 505,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "type": "TSModuleDeclaration",
      "start": 525,
      "end": 881,
      "id": {
        "type": "Identifier",
        "start": 532,
        "end": 546,
        "decorators": [],
        "name": "ImplicitPublic",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 547,
        "end": 881,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 553,
            "end": 595,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 561,
              "end": 595,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 571,
                  "end": 589,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 582,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 582,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 584,
                      "end": 588,
                      "typeName": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 588,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 601,
            "end": 657,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 619,
              "end": 657,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 629,
                  "end": 642,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 632,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 632,
                    "end": 641,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 634,
                      "end": 641,
                      "typeName": {
                        "type": "Identifier",
                        "start": 634,
                        "end": 641,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 663,
            "end": 704,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 669,
              "end": 671,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 672,
              "end": 704,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 682,
                  "end": 698,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 690,
                    "end": 691,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 691,
                    "end": 697,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 693,
                      "end": 697,
                      "typeName": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 697,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 710,
            "end": 766,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 716,
              "end": 718,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 727,
              "end": 729,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 730,
              "end": 766,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 740,
                  "end": 751,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 740,
                    "end": 741,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 750,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 743,
                      "end": 750,
                      "typeName": {
                        "type": "Identifier",
                        "start": 743,
                        "end": 750,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 772,
            "end": 815,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 778,
              "end": 780,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 781,
              "end": 815,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 791,
                  "end": 809,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 799,
                    "end": 802,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 802,
                    "end": 808,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 804,
                      "end": 808,
                      "typeName": {
                        "type": "Identifier",
                        "start": 804,
                        "end": 808,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 821,
            "end": 879,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 827,
              "end": 829,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 838,
              "end": 840,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 841,
              "end": 879,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 851,
                  "end": 864,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 851,
                    "end": 854,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 854,
                    "end": 863,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 856,
                      "end": 863,
                      "typeName": {
                        "type": "Identifier",
                        "start": 856,
                        "end": 863,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
