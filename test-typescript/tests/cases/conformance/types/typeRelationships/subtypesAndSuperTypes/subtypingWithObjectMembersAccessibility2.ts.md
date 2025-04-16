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
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 95,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 97,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 110,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 123,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 146,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "name": "ExplicitPublic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 182,
              "end": 216,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 192,
                  "end": 210,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 203,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 222,
            "end": 285,
            "id": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 240,
              "end": 285,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 250,
                  "end": 270,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 260,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 291,
            "end": 332,
            "id": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "name": "A2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 300,
              "end": 332,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 310,
                  "end": 326,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 318,
                    "end": 319,
                    "value": 1,
                    "raw": "1"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 338,
            "end": 401,
            "id": {
              "type": "Identifier",
              "start": 344,
              "end": 346,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 355,
              "end": 357,
              "name": "A2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 358,
              "end": 401,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 368,
                  "end": 386,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 375,
                    "end": 376,
                    "value": 1,
                    "raw": "1"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 407,
            "end": 450,
            "id": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
              "name": "A3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 416,
              "end": 450,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 426,
                  "end": 444,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 434,
                    "end": 437,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 456,
            "end": 521,
            "id": {
              "type": "Identifier",
              "start": 462,
              "end": 464,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 473,
              "end": 475,
              "name": "A3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 476,
              "end": 521,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 486,
                  "end": 506,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 493,
                    "end": 496,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
        "name": "ImplicitPublic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 561,
              "end": 595,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 571,
                  "end": 589,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 582,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 601,
            "end": 657,
            "id": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 619,
              "end": 657,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 629,
                  "end": 642,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 632,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 663,
            "end": 704,
            "id": {
              "type": "Identifier",
              "start": 669,
              "end": 671,
              "name": "A2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 672,
              "end": 704,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 682,
                  "end": 698,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 690,
                    "end": 691,
                    "value": 1,
                    "raw": "1"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 710,
            "end": 766,
            "id": {
              "type": "Identifier",
              "start": 716,
              "end": 718,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 727,
              "end": 729,
              "name": "A2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 730,
              "end": 766,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 740,
                  "end": 751,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 740,
                    "end": 741,
                    "value": 1,
                    "raw": "1"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 772,
            "end": 815,
            "id": {
              "type": "Identifier",
              "start": 778,
              "end": 780,
              "name": "A3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 781,
              "end": 815,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 791,
                  "end": 809,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 799,
                    "end": 802,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 821,
            "end": 879,
            "id": {
              "type": "Identifier",
              "start": 827,
              "end": 829,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 838,
              "end": 840,
              "name": "A3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 841,
              "end": 879,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 851,
                  "end": 864,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 851,
                    "end": 854,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
