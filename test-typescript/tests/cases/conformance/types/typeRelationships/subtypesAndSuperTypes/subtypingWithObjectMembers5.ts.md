__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1053,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 35,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 37,
      "end": 88,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 88,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 63,
          "end": 67,
          "expression": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 274,
      "end": 627,
      "body": {
        "type": "TSModuleBlock",
        "start": 293,
        "end": 627,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 299,
            "end": 337,
            "body": {
              "type": "TSInterfaceBody",
              "start": 311,
              "end": 337,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 321,
                  "end": 331,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 324,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 324,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 330,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 330,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 343,
            "end": 403,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 364,
              "end": 403,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 374,
                  "end": 388,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 378,
                    "decorators": [],
                    "name": "fooo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 378,
                    "end": 387,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 380,
                      "end": 387,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 387,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 362,
                "end": 363,
                "expression": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 409,
            "end": 446,
            "body": {
              "type": "TSInterfaceBody",
              "start": 422,
              "end": 446,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 432,
                  "end": 440,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 432,
                    "end": 433,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 433,
                    "end": 439,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 435,
                      "end": 439,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 439,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 419,
              "end": 421,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 452,
            "end": 511,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 475,
              "end": 511,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 485,
                  "end": 496,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 495,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 488,
                      "end": 495,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 495,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 458,
              "end": 460,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 472,
                "end": 474,
                "expression": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 474,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 517,
            "end": 556,
            "body": {
              "type": "TSInterfaceBody",
              "start": 530,
              "end": 556,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 540,
                  "end": 550,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 540,
                    "end": 543,
                    "raw": "'1'",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 543,
                    "end": 549,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 545,
                      "end": 549,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 545,
                        "end": 549,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 527,
              "end": 529,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 562,
            "end": 625,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 585,
              "end": 625,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 595,
                  "end": 610,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "start": 595,
                    "end": 600,
                    "raw": "'1.0'",
                    "value": "1.0",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 600,
                    "end": 609,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 602,
                      "end": 609,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 602,
                        "end": 609,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 568,
              "end": 570,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 582,
                "end": 584,
                "expression": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 584,
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 292,
        "decorators": [],
        "name": "NotOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 670,
      "end": 1053,
      "body": {
        "type": "TSModuleBlock",
        "start": 686,
        "end": 1053,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 692,
            "end": 731,
            "body": {
              "type": "TSInterfaceBody",
              "start": 704,
              "end": 731,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 714,
                  "end": 725,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 714,
                    "end": 717,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 718,
                    "end": 724,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 720,
                      "end": 724,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 724,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 702,
              "end": 703,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 737,
            "end": 807,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 758,
              "end": 807,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 768,
                  "end": 782,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 772,
                    "decorators": [],
                    "name": "fooo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 772,
                    "end": 781,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 774,
                      "end": 781,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 781,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 743,
              "end": 744,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 756,
                "end": 757,
                "expression": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 813,
            "end": 851,
            "body": {
              "type": "TSInterfaceBody",
              "start": 826,
              "end": 851,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 836,
                  "end": 845,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 836,
                    "end": 837,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 838,
                    "end": 844,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 840,
                      "end": 844,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 840,
                        "end": 844,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 823,
              "end": 825,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 857,
            "end": 926,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 880,
              "end": 926,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 890,
                  "end": 901,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "start": 890,
                    "end": 891,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 891,
                    "end": 900,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 893,
                      "end": 900,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 893,
                        "end": 900,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 863,
              "end": 865,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 877,
                "end": 879,
                "expression": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 879,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 932,
            "end": 972,
            "body": {
              "type": "TSInterfaceBody",
              "start": 945,
              "end": 972,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 955,
                  "end": 966,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 955,
                    "end": 958,
                    "raw": "'1'",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 959,
                    "end": 965,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 961,
                      "end": 965,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 965,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 942,
              "end": 944,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 978,
            "end": 1051,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1001,
              "end": 1051,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1011,
                  "end": 1026,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "start": 1011,
                    "end": 1016,
                    "raw": "'1.0'",
                    "value": "1.0",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1016,
                    "end": 1025,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1018,
                      "end": 1025,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1018,
                        "end": 1025,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 984,
              "end": 986,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 998,
                "end": 1000,
                "expression": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1000,
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 677,
        "end": 685,
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
