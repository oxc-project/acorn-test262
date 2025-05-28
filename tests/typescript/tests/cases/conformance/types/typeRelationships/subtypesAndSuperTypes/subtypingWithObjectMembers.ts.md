__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1128,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
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
        "start": 11,
        "end": 27,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
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
      "start": 28,
      "end": 71,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 41,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 50,
        "end": 54,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 57,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
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
      "start": 72,
      "end": 119,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 86,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 95,
        "end": 102,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 108,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 116,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 110,
                "end": 116
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
      "start": 305,
      "end": 346,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
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
        "start": 313,
        "end": 346,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 319,
            "end": 329,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 324,
                "end": 328,
                "typeName": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 328,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 334,
            "end": 344,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 334,
              "end": 337,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 343,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 343,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 343,
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 419,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 355,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 364,
        "end": 365,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 366,
        "end": 419,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 372,
            "end": 385,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 375,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 384,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 377,
                "end": 384,
                "typeName": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 384,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 396,
            "end": 408,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 396,
              "end": 399,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 407,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 401,
                "end": 407
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
      "start": 421,
      "end": 462,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 429,
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
        "start": 430,
        "end": 462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 436,
            "end": 444,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 436,
              "end": 437,
              "value": 1,
              "raw": "1"
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 450,
            "end": 460,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 450,
              "end": 453,
              "value": 2,
              "raw": "2.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 453,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 455,
                "end": 459,
                "typeName": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 459,
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 464,
      "end": 533,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 472,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 481,
        "end": 483,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 484,
        "end": 533,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 490,
            "end": 501,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 490,
              "end": 491,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 500,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 500,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 500,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 512,
            "end": 522,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 512,
              "end": 513,
              "value": 2,
              "raw": "2"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 521,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 515,
                "end": 521
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
      "start": 535,
      "end": 579,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 541,
        "end": 543,
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
        "start": 544,
        "end": 579,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 550,
            "end": 560,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 550,
              "end": 553,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 553,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 555,
                "end": 559,
                "typeName": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 559,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 565,
            "end": 577,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 565,
              "end": 570,
              "value": "2.0",
              "raw": "'2.0'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 576,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 576,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 576,
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 581,
      "end": 656,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 587,
        "end": 589,
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 598,
        "end": 600,
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 601,
        "end": 656,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 607,
            "end": 620,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 607,
              "end": 610,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 619,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 612,
                "end": 619,
                "typeName": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 619,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 631,
            "end": 645,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 631,
              "end": 636,
              "value": "2.0",
              "raw": "'2.0'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 644,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 638,
                "end": 644
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
      "start": 658,
      "end": 1128,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 674,
        "decorators": [],
        "name": "TwoLevels",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 675,
        "end": 1128,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 681,
            "end": 734,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 687,
              "end": 688,
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
              "start": 689,
              "end": 734,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 699,
                  "end": 709,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 702,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 702,
                    "end": 708,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 704,
                      "end": 708,
                      "typeName": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 708,
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
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 718,
                  "end": 728,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 718,
                    "end": 721,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 721,
                    "end": 727,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 723,
                      "end": 727,
                      "typeName": {
                        "type": "Identifier",
                        "start": 723,
                        "end": 727,
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
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 740,
            "end": 824,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 746,
              "end": 747,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 756,
              "end": 757,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 758,
              "end": 824,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 768,
                  "end": 782,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 771,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 771,
                    "end": 781,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 773,
                      "end": 781,
                      "typeName": {
                        "type": "Identifier",
                        "start": 773,
                        "end": 781,
                        "decorators": [],
                        "name": "Derived2",
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
                },
                {
                  "type": "PropertyDefinition",
                  "start": 797,
                  "end": 809,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 797,
                    "end": 800,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 800,
                    "end": 808,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 802,
                      "end": 808
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
            "start": 830,
            "end": 882,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 836,
              "end": 838,
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
              "start": 839,
              "end": 882,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 849,
                  "end": 857,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 849,
                    "end": 850,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 850,
                    "end": 856,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 852,
                      "end": 856,
                      "typeName": {
                        "type": "Identifier",
                        "start": 852,
                        "end": 856,
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
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 866,
                  "end": 876,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 866,
                    "end": 869,
                    "value": 2,
                    "raw": "2.0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 869,
                    "end": 875,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 871,
                      "end": 875,
                      "typeName": {
                        "type": "Identifier",
                        "start": 871,
                        "end": 875,
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
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 888,
            "end": 970,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 894,
              "end": 896,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 905,
              "end": 907,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 908,
              "end": 970,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 918,
                  "end": 930,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 918,
                    "end": 919,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 919,
                    "end": 929,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 921,
                      "end": 929,
                      "typeName": {
                        "type": "Identifier",
                        "start": 921,
                        "end": 929,
                        "decorators": [],
                        "name": "Derived2",
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
                },
                {
                  "type": "PropertyDefinition",
                  "start": 945,
                  "end": 955,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 945,
                    "end": 946,
                    "value": 2,
                    "raw": "2"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 946,
                    "end": 954,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 948,
                      "end": 954
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
            "start": 976,
            "end": 1032,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 982,
              "end": 984,
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
              "start": 985,
              "end": 1032,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 995,
                  "end": 1005,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 995,
                    "end": 998,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 998,
                    "end": 1004,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1000,
                      "end": 1004,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1000,
                        "end": 1004,
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
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1014,
                  "end": 1026,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 1014,
                    "end": 1019,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1019,
                    "end": 1025,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1021,
                      "end": 1025,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1021,
                        "end": 1025,
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
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1038,
            "end": 1126,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1044,
              "end": 1046,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1055,
              "end": 1057,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1058,
              "end": 1126,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1068,
                  "end": 1082,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 1068,
                    "end": 1071,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1071,
                    "end": 1081,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1073,
                      "end": 1081,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1073,
                        "end": 1081,
                        "decorators": [],
                        "name": "Derived2",
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
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1097,
                  "end": 1111,
                  "decorators": [],
                  "key": {
                    "type": "Literal",
                    "start": 1097,
                    "end": 1102,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1102,
                    "end": 1110,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1104,
                      "end": 1110
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
