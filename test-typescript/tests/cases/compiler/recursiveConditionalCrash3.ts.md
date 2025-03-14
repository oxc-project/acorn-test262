recursiveConditionalCrash3.ts
```json
{
  "type": "Program",
  "start": 11,
  "end": 4441,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 20,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 172,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 81,
        "end": 172,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 99,
          "decorators": [],
          "name": "CanBeExpanded",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 141,
          "end": 172,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 147,
              "end": 155,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 147,
                "end": 152,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 152,
                "end": 155,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 155,
                  "typeName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 160,
              "end": 170,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 160,
                "end": 167,
                "decorators": [],
                "name": "default",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 167,
                "end": 170,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 99,
          "end": 138,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 100,
              "end": 125,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 110,
                "end": 116
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 119,
                "end": 125
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 127,
              "end": 137,
              "const": false,
              "default": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "D",
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
      "type": "TSInterfaceDeclaration",
      "start": 174,
      "end": 193,
      "body": {
        "type": "TSInterfaceBody",
        "start": 189,
        "end": 193,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 195,
      "end": 291,
      "body": {
        "type": "TSInterfaceBody",
        "start": 223,
        "end": 291,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 229,
            "end": 240,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 231,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 239,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 245,
            "end": 271,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 249,
              "decorators": [],
              "name": "role",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 251,
                "end": 270,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 264,
                  "end": 270,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 269,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 269,
                        "decorators": [],
                        "name": "Role",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 264,
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 276,
            "end": 289,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 280,
              "decorators": [],
              "name": "note",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 288,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 282,
                "end": 288
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 218,
          "end": 222,
          "expression": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 209,
        "decorators": [],
        "name": "User",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 293,
      "end": 385,
      "body": {
        "type": "TSInterfaceBody",
        "start": 321,
        "end": 385,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 327,
            "end": 338,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 329,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 337,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 331,
                "end": 337
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 369,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 347,
              "decorators": [],
              "name": "user",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 368,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 368,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 362,
                  "end": 368,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 367,
                      "typeName": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 367,
                        "decorators": [],
                        "name": "User",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 362,
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 374,
            "end": 383,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 383,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 377,
                "end": 383
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 316,
          "end": 320,
          "expression": {
            "type": "Identifier",
            "start": 316,
            "end": 320,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 307,
        "decorators": [],
        "name": "Role",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 439,
      "end": 595,
      "body": {
        "type": "TSInterfaceBody",
        "start": 464,
        "end": 595,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 470,
            "end": 481,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 472,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 480,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 474,
                "end": 480
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 486,
            "end": 499,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 486,
              "end": 490,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 498,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 492,
                "end": 498
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 504,
            "end": 530,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 508,
              "decorators": [],
              "name": "user",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 508,
              "end": 529,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 510,
                "end": 529,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 523,
                  "end": 529,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 524,
                      "end": 528,
                      "typeName": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 528,
                        "decorators": [],
                        "name": "User",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 523,
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 535,
            "end": 560,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 535,
              "end": 539,
              "decorators": [],
              "name": "role",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 560,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 541,
                "end": 560,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 554,
                  "end": 560,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 555,
                      "end": 559,
                      "typeName": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 559,
                        "decorators": [],
                        "name": "Role",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 554,
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 565,
            "end": 593,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 570,
              "decorators": [],
              "name": "roles",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 593,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 593,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 585,
                  "end": 593,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 586,
                      "end": 592,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 586,
                        "end": 590,
                        "typeName": {
                          "type": "Identifier",
                          "start": 586,
                          "end": 590,
                          "decorators": [],
                          "name": "Role",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 585,
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 459,
          "end": 463,
          "expression": {
            "type": "Identifier",
            "start": 459,
            "end": 463,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 450,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 597,
      "end": 744,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 602,
        "end": 606,
        "decorators": [],
        "name": "Join",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 615,
        "end": 743,
        "checkType": {
          "type": "TSTypeReference",
          "start": 615,
          "end": 616,
          "typeName": {
            "type": "Identifier",
            "start": 615,
            "end": 616,
            "decorators": [],
            "name": "K",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSUnionType",
          "start": 625,
          "end": 640,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 625,
              "end": 631
            },
            {
              "type": "TSNumberKeyword",
              "start": 634,
              "end": 640
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 738,
          "end": 743
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 647,
          "end": 735,
          "checkType": {
            "type": "TSTypeReference",
            "start": 647,
            "end": 648,
            "typeName": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSUnionType",
            "start": 657,
            "end": 672,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              },
              {
                "type": "TSNumberKeyword",
                "start": 666,
                "end": 672
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 730,
            "end": 735
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "start": 683,
            "end": 719,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 683,
                "end": 686,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 687,
                "end": 690,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 713,
                "end": 716,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 717,
                "end": 719,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 686,
                "end": 687,
                "typeName": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 687,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              {
                "type": "TSConditionalType",
                "start": 690,
                "end": 713,
                "checkType": {
                  "type": "TSLiteralType",
                  "start": 690,
                  "end": 692,
                  "literal": {
                    "type": "Literal",
                    "start": 690,
                    "end": 692,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 701,
                  "end": 702,
                  "typeName": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 702,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 710,
                  "end": 713,
                  "literal": {
                    "type": "Literal",
                    "start": 710,
                    "end": 713,
                    "raw": "\".\"",
                    "value": "."
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 705,
                  "end": 707,
                  "literal": {
                    "type": "Literal",
                    "start": 705,
                    "end": 707,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "start": 716,
                "end": 717,
                "typeName": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 717,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              }
            ]
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 606,
        "end": 612,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 607,
            "end": 608,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 610,
            "end": 611,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 610,
              "end": 611,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 746,
      "end": 853,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 751,
        "end": 761,
        "decorators": [],
        "name": "PrefixWith",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 779,
        "end": 853,
        "checkType": {
          "type": "TSTypeReference",
          "start": 779,
          "end": 780,
          "typeName": {
            "type": "Identifier",
            "start": 779,
            "end": 780,
            "decorators": [],
            "name": "P",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 789,
          "end": 791,
          "literal": {
            "type": "Literal",
            "start": 789,
            "end": 791,
            "raw": "''",
            "value": ""
          }
        },
        "falseType": {
          "type": "TSTemplateLiteralType",
          "start": 812,
          "end": 853,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 812,
              "end": 815,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 825,
              "end": 828,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 838,
              "end": 841,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 851,
              "end": 853,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSIntersectionType",
              "start": 815,
              "end": 825,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 815,
                  "end": 821
                },
                {
                  "type": "TSTypeReference",
                  "start": 824,
                  "end": 825,
                  "typeName": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 825,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              ]
            },
            {
              "type": "TSIntersectionType",
              "start": 828,
              "end": 838,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 828,
                  "end": 834
                },
                {
                  "type": "TSTypeReference",
                  "start": 837,
                  "end": 838,
                  "typeName": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 838,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              ]
            },
            {
              "type": "TSIntersectionType",
              "start": 841,
              "end": 851,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 841,
                  "end": 847
                },
                {
                  "type": "TSTypeReference",
                  "start": 850,
                  "end": 851,
                  "typeName": {
                    "type": "Identifier",
                    "start": 850,
                    "end": 851,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "start": 794,
          "end": 809,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 794,
              "end": 797,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 807,
              "end": 809,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSIntersectionType",
              "start": 797,
              "end": 807,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 797,
                  "end": 803
                },
                {
                  "type": "TSTypeReference",
                  "start": 806,
                  "end": 807,
                  "typeName": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 807,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  }
                }
              ]
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 761,
        "end": 776,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 762,
            "end": 763,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 762,
              "end": 763,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 765,
            "end": 766,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 765,
              "end": 766,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 768,
            "end": 775,
            "const": false,
            "default": {
              "type": "TSLiteralType",
              "start": 772,
              "end": 775,
              "literal": {
                "type": "Literal",
                "start": 772,
                "end": 775,
                "raw": "'.'",
                "value": "."
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 768,
              "end": 769,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 855,
      "end": 1130,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 860,
        "end": 892,
        "decorators": [],
        "name": "SplitWithAllPossibleCombinations",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 935,
        "end": 1129,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 935,
          "end": 941
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 950,
          "end": 951,
          "typeName": {
            "type": "Identifier",
            "start": 950,
            "end": 951,
            "decorators": [],
            "name": "S",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 971,
          "end": 1129,
          "checkType": {
            "type": "TSTypeReference",
            "start": 971,
            "end": 972,
            "typeName": {
              "type": "Identifier",
              "start": 971,
              "end": 972,
              "decorators": [],
              "name": "S",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 981,
            "end": 983,
            "literal": {
              "type": "Literal",
              "start": 981,
              "end": 983,
              "raw": "''",
              "value": ""
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 1003,
            "end": 1129,
            "checkType": {
              "type": "TSTypeReference",
              "start": 1003,
              "end": 1004,
              "typeName": {
                "type": "Identifier",
                "start": 1003,
                "end": 1004,
                "decorators": [],
                "name": "S",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "start": 1013,
              "end": 1039,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1013,
                  "end": 1016,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1023,
                  "end": 1026,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1027,
                  "end": 1030,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1037,
                  "end": 1039,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "start": 1016,
                  "end": 1023,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1022,
                    "end": 1023,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1022,
                      "end": 1023,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1026,
                  "end": 1027,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1026,
                    "end": 1027,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                },
                {
                  "type": "TSInferType",
                  "start": 1030,
                  "end": 1037,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1036,
                    "end": 1037,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1036,
                      "end": 1037,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 1128,
              "end": 1129,
              "typeName": {
                "type": "Identifier",
                "start": 1128,
                "end": 1129,
                "decorators": [],
                "name": "S",
                "optional": false
              }
            },
            "trueType": {
              "type": "TSUnionType",
              "start": 1058,
              "end": 1109,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1058,
                  "end": 1059,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1058,
                    "end": 1059,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1062,
                  "end": 1109,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1066,
                    "end": 1109,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1067,
                        "end": 1068,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1067,
                          "end": 1068,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1070,
                        "end": 1108,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1102,
                          "end": 1108,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1103,
                              "end": 1104,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1103,
                                "end": 1104,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1106,
                              "end": 1107,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1106,
                                "end": 1107,
                                "decorators": [],
                                "name": "D",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1070,
                          "end": 1102,
                          "decorators": [],
                          "name": "SplitWithAllPossibleCombinations",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1062,
                    "end": 1066,
                    "decorators": [],
                    "name": "Join",
                    "optional": false
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 986,
            "end": 988,
            "literal": {
              "type": "Literal",
              "start": 986,
              "end": 988,
              "raw": "''",
              "value": ""
            }
          }
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 954,
          "end": 960
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 892,
        "end": 928,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 893,
            "end": 909,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 903,
              "end": 909
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 893,
              "end": 894,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 911,
            "end": 927,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 921,
              "end": 927
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 911,
              "end": 912,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1241,
      "end": 1909,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1246,
        "end": 1264,
        "decorators": [],
        "name": "KeysCanBeExpanded_",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1312,
        "end": 1909,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1312,
          "end": 1313,
          "typeName": {
            "type": "Identifier",
            "start": 1312,
            "end": 1313,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "start": 1322,
          "end": 1337,
          "indexType": {
            "type": "TSLiteralType",
            "start": 1328,
            "end": 1336,
            "literal": {
              "type": "Literal",
              "start": 1328,
              "end": 1336,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1322,
            "end": 1327,
            "typeName": {
              "type": "Identifier",
              "start": 1322,
              "end": 1327,
              "decorators": [],
              "name": "Depth",
              "optional": false
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1352,
          "end": 1909,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1352,
            "end": 1353,
            "typeName": {
              "type": "Identifier",
              "start": 1352,
              "end": 1353,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1362,
            "end": 1375,
            "typeName": {
              "type": "Identifier",
              "start": 1362,
              "end": 1375,
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 1437,
            "end": 1909,
            "checkType": {
              "type": "TSTypeReference",
              "start": 1437,
              "end": 1438,
              "typeName": {
                "type": "Identifier",
                "start": 1437,
                "end": 1438,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 1447,
              "end": 1461,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1452,
                "end": 1461,
                "params": [
                  {
                    "type": "TSInferType",
                    "start": 1453,
                    "end": 1460,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 1459,
                      "end": 1460,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1459,
                        "end": 1460,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1447,
                "end": 1452,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 1511,
              "end": 1909,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1511,
                "end": 1512,
                "typeName": {
                  "type": "Identifier",
                  "start": 1511,
                  "end": 1512,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 1521,
                "end": 1527
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1904,
                "end": 1909
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 1546,
                "end": 1869,
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 1861,
                  "end": 1868,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1867,
                    "end": 1868,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1867,
                      "end": 1868,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "objectType": {
                  "type": "TSMappedType",
                  "start": 1546,
                  "end": 1860,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1574,
                    "end": 1581,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1580,
                      "end": 1581,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1580,
                        "end": 1581,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 1569,
                    "end": 1570,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 1606,
                    "end": 1841,
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "start": 1606,
                      "end": 1610,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1608,
                        "end": 1609,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1608,
                          "end": 1609,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1606,
                        "end": 1607,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1606,
                          "end": 1607,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "extendsType": {
                      "type": "TSObjectKeyword",
                      "start": 1619,
                      "end": 1625
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1836,
                      "end": 1841
                    },
                    "trueType": {
                      "type": "TSConditionalType",
                      "start": 1652,
                      "end": 1809,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 1652,
                        "end": 1653,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1652,
                          "end": 1653,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "extendsType": {
                        "type": "TSUnionType",
                        "start": 1662,
                        "end": 1677,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1662,
                            "end": 1668
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1671,
                            "end": 1677
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 1804,
                        "end": 1809
                      },
                      "trueType": {
                        "type": "TSUnionType",
                        "start": 1708,
                        "end": 1773,
                        "types": [
                          {
                            "type": "TSTemplateLiteralType",
                            "start": 1708,
                            "end": 1714,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 1708,
                                "end": 1711,
                                "tail": false,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 1712,
                                "end": 1714,
                                "tail": true,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                }
                              }
                            ],
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1711,
                                "end": 1712,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1711,
                                  "end": 1712,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1717,
                            "end": 1773,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1721,
                              "end": 1773,
                              "params": [
                                {
                                  "type": "TSTemplateLiteralType",
                                  "start": 1722,
                                  "end": 1728,
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "start": 1722,
                                      "end": 1725,
                                      "tail": false,
                                      "value": {
                                        "cooked": "",
                                        "raw": ""
                                      }
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "start": 1726,
                                      "end": 1728,
                                      "tail": true,
                                      "value": {
                                        "cooked": "",
                                        "raw": ""
                                      }
                                    }
                                  ],
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1725,
                                      "end": 1726,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1725,
                                        "end": 1726,
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1730,
                                  "end": 1772,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 1748,
                                    "end": 1772,
                                    "params": [
                                      {
                                        "type": "TSIndexedAccessType",
                                        "start": 1749,
                                        "end": 1753,
                                        "indexType": {
                                          "type": "TSTypeReference",
                                          "start": 1751,
                                          "end": 1752,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 1751,
                                            "end": 1752,
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false
                                          }
                                        },
                                        "objectType": {
                                          "type": "TSTypeReference",
                                          "start": 1749,
                                          "end": 1750,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 1749,
                                            "end": 1750,
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1755,
                                        "end": 1756,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1755,
                                          "end": 1756,
                                          "decorators": [],
                                          "name": "N",
                                          "optional": false
                                        }
                                      },
                                      {
                                        "type": "TSTupleType",
                                        "start": 1758,
                                        "end": 1771,
                                        "elementTypes": [
                                          {
                                            "type": "TSLiteralType",
                                            "start": 1759,
                                            "end": 1760,
                                            "literal": {
                                              "type": "Literal",
                                              "start": 1759,
                                              "end": 1760,
                                              "raw": "1",
                                              "value": 1
                                            }
                                          },
                                          {
                                            "type": "TSRestType",
                                            "start": 1762,
                                            "end": 1770,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1765,
                                              "end": 1770,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1765,
                                                "end": 1770,
                                                "decorators": [],
                                                "name": "Depth",
                                                "optional": false
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1730,
                                    "end": 1748,
                                    "decorators": [],
                                    "name": "KeysCanBeExpanded_",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 1717,
                              "end": 1721,
                              "decorators": [],
                              "name": "Join",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 1464,
              "end": 1495,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1482,
                "end": 1495,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1483,
                    "end": 1484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1483,
                      "end": 1484,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1486,
                    "end": 1487,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1486,
                      "end": 1487,
                      "decorators": [],
                      "name": "N",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1489,
                    "end": 1494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1489,
                      "end": 1494,
                      "decorators": [],
                      "name": "Depth",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1464,
                "end": 1482,
                "decorators": [],
                "name": "KeysCanBeExpanded_",
                "optional": false
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1386,
            "end": 1426,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1404,
              "end": 1426,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1405,
                  "end": 1415,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1407,
                    "end": 1414,
                    "literal": {
                      "type": "Literal",
                      "start": 1407,
                      "end": 1414,
                      "raw": "'value'",
                      "value": "value"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1405,
                    "end": 1406,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1405,
                      "end": 1406,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1417,
                  "end": 1418,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1417,
                    "end": 1418,
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1420,
                  "end": 1425,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1420,
                    "end": 1425,
                    "decorators": [],
                    "name": "Depth",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1386,
              "end": 1404,
              "decorators": [],
              "name": "KeysCanBeExpanded_",
              "optional": false
            }
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 1340,
          "end": 1345
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1264,
        "end": 1309,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1265,
            "end": 1266,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1265,
              "end": 1266,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1268,
            "end": 1284,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1278,
              "end": 1284
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1268,
              "end": 1269,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1286,
            "end": 1308,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1300,
              "end": 1308,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1300,
                "end": 1306
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1286,
              "end": 1291,
              "decorators": [],
              "name": "Depth",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1911,
      "end": 1996,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1918,
        "end": 1996,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1923,
          "end": 1940,
          "decorators": [],
          "name": "KeysCanBeExpanded",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1968,
          "end": 1996,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1986,
            "end": 1996,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1987,
                "end": 1988,
                "typeName": {
                  "type": "Identifier",
                  "start": 1987,
                  "end": 1988,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1990,
                "end": 1991,
                "typeName": {
                  "type": "Identifier",
                  "start": 1990,
                  "end": 1991,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              },
              {
                "type": "TSTupleType",
                "start": 1993,
                "end": 1995,
                "elementTypes": []
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1968,
            "end": 1986,
            "decorators": [],
            "name": "KeysCanBeExpanded_",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1940,
          "end": 1965,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1941,
              "end": 1942,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1941,
                "end": 1942,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1944,
              "end": 1964,
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1954,
                "end": 1960
              },
              "default": {
                "type": "TSLiteralType",
                "start": 1963,
                "end": 1964,
                "literal": {
                  "type": "Literal",
                  "start": 1963,
                  "end": 1964,
                  "raw": "4",
                  "value": 4
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1944,
                "end": 1945,
                "decorators": [],
                "name": "N",
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
      "start": 2055,
      "end": 2644,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2060,
        "end": 2068,
        "decorators": [],
        "name": "Expand__",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2147,
        "end": 2644,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2147,
          "end": 2148,
          "typeName": {
            "type": "Identifier",
            "start": 2147,
            "end": 2148,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "start": 2157,
          "end": 2172,
          "indexType": {
            "type": "TSLiteralType",
            "start": 2163,
            "end": 2171,
            "literal": {
              "type": "Literal",
              "start": 2163,
              "end": 2171,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 2157,
            "end": 2162,
            "typeName": {
              "type": "Identifier",
              "start": 2157,
              "end": 2162,
              "decorators": [],
              "name": "Depth",
              "optional": false
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2260,
          "end": 2644,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2260,
            "end": 2261,
            "typeName": {
              "type": "Identifier",
              "start": 2260,
              "end": 2261,
              "decorators": [],
              "name": "O",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 2270,
            "end": 2283,
            "typeName": {
              "type": "Identifier",
              "start": 2270,
              "end": 2283,
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 2381,
            "end": 2644,
            "checkType": {
              "type": "TSTypeReference",
              "start": 2381,
              "end": 2382,
              "typeName": {
                "type": "Identifier",
                "start": 2381,
                "end": 2382,
                "decorators": [],
                "name": "O",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 2391,
              "end": 2405,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2396,
                "end": 2405,
                "params": [
                  {
                    "type": "TSInferType",
                    "start": 2397,
                    "end": 2404,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 2403,
                      "end": 2404,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2403,
                        "end": 2404,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2391,
                "end": 2396,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 2475,
              "end": 2644,
              "checkType": {
                "type": "TSTypeReference",
                "start": 2475,
                "end": 2476,
                "typeName": {
                  "type": "Identifier",
                  "start": 2475,
                  "end": 2476,
                  "decorators": [],
                  "name": "O",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 2485,
                "end": 2491
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 2643,
                "end": 2644,
                "typeName": {
                  "type": "Identifier",
                  "start": 2643,
                  "end": 2644,
                  "decorators": [],
                  "name": "O",
                  "optional": false
                }
              },
              "trueType": {
                "type": "TSMappedType",
                "start": 2510,
                "end": 2624,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 2538,
                  "end": 2545,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2544,
                    "end": 2545,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2544,
                      "end": 2545,
                      "decorators": [],
                      "name": "O",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 2533,
                  "end": 2534,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "optional": "-",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2550,
                  "end": 2606,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2558,
                    "end": 2606,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 2559,
                        "end": 2563,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 2561,
                          "end": 2562,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2561,
                            "end": 2562,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 2559,
                          "end": 2560,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2559,
                            "end": 2560,
                            "decorators": [],
                            "name": "O",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2565,
                        "end": 2569,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2565,
                          "end": 2569,
                          "decorators": [],
                          "name": "Keys",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2571,
                        "end": 2587,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2581,
                          "end": 2587,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2582,
                              "end": 2583,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2582,
                                "end": 2583,
                                "decorators": [],
                                "name": "P",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 2585,
                              "end": 2586,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2585,
                                "end": 2586,
                                "decorators": [],
                                "name": "K",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2571,
                          "end": 2581,
                          "decorators": [],
                          "name": "PrefixWith",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2589,
                        "end": 2590,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2589,
                          "end": 2590,
                          "decorators": [],
                          "name": "N",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTupleType",
                        "start": 2592,
                        "end": 2605,
                        "elementTypes": [
                          {
                            "type": "TSLiteralType",
                            "start": 2593,
                            "end": 2594,
                            "literal": {
                              "type": "Literal",
                              "start": 2593,
                              "end": 2594,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          {
                            "type": "TSRestType",
                            "start": 2596,
                            "end": 2604,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2599,
                              "end": 2604,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2599,
                                "end": 2604,
                                "decorators": [],
                                "name": "Depth",
                                "optional": false
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2550,
                    "end": 2558,
                    "decorators": [],
                    "name": "Expand__",
                    "optional": false
                  }
                }
              }
            },
            "trueType": {
              "type": "TSArrayType",
              "start": 2424,
              "end": 2456,
              "elementType": {
                "type": "TSTypeReference",
                "start": 2424,
                "end": 2454,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2432,
                  "end": 2454,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2433,
                      "end": 2434,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2433,
                        "end": 2434,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2436,
                      "end": 2440,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2436,
                        "end": 2440,
                        "decorators": [],
                        "name": "Keys",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2442,
                      "end": 2443,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2442,
                        "end": 2443,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2445,
                      "end": 2446,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2445,
                        "end": 2446,
                        "decorators": [],
                        "name": "N",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2448,
                      "end": 2453,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2448,
                        "end": 2453,
                        "decorators": [],
                        "name": "Depth",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2424,
                  "end": 2432,
                  "decorators": [],
                  "name": "Expand__",
                  "optional": false
                }
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 2298,
            "end": 2366,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2306,
              "end": 2366,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 2307,
                  "end": 2346,
                  "indexType": {
                    "type": "TSConditionalType",
                    "start": 2309,
                    "end": 2345,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 2309,
                      "end": 2310,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2309,
                        "end": 2310,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "start": 2319,
                      "end": 2323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2319,
                        "end": 2323,
                        "decorators": [],
                        "name": "Keys",
                        "optional": false
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 2336,
                      "end": 2345,
                      "literal": {
                        "type": "Literal",
                        "start": 2336,
                        "end": 2345,
                        "raw": "'default'",
                        "value": "default"
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 2326,
                      "end": 2333,
                      "literal": {
                        "type": "Literal",
                        "start": 2326,
                        "end": 2333,
                        "raw": "'value'",
                        "value": "value"
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 2307,
                    "end": 2308,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2307,
                      "end": 2308,
                      "decorators": [],
                      "name": "O",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2348,
                  "end": 2352,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2348,
                    "end": 2352,
                    "decorators": [],
                    "name": "Keys",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2354,
                  "end": 2355,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2354,
                    "end": 2355,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2357,
                  "end": 2358,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2357,
                    "end": 2358,
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2360,
                  "end": 2365,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2360,
                    "end": 2365,
                    "decorators": [],
                    "name": "Depth",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2298,
              "end": 2306,
              "decorators": [],
              "name": "Expand__",
              "optional": false
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 2183,
          "end": 2249,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2183,
            "end": 2184,
            "typeName": {
              "type": "Identifier",
              "start": 2183,
              "end": 2184,
              "decorators": [],
              "name": "O",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 2193,
            "end": 2206,
            "typeName": {
              "type": "Identifier",
              "start": 2193,
              "end": 2206,
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 2248,
            "end": 2249,
            "typeName": {
              "type": "Identifier",
              "start": 2248,
              "end": 2249,
              "decorators": [],
              "name": "O",
              "optional": false
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 2221,
            "end": 2233,
            "indexType": {
              "type": "TSLiteralType",
              "start": 2223,
              "end": 2232,
              "literal": {
                "type": "Literal",
                "start": 2223,
                "end": 2232,
                "raw": "'default'",
                "value": "default"
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 2221,
              "end": 2222,
              "typeName": {
                "type": "Identifier",
                "start": 2221,
                "end": 2222,
                "decorators": [],
                "name": "O",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2068,
        "end": 2140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2069,
            "end": 2070,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2069,
              "end": 2070,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2072,
            "end": 2076,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2072,
              "end": 2076,
              "decorators": [],
              "name": "Keys",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2078,
            "end": 2094,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2088,
              "end": 2094
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2078,
              "end": 2079,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2096,
            "end": 2112,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2106,
              "end": 2112
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2096,
              "end": 2097,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2115,
            "end": 2138,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 2129,
              "end": 2138,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2129,
                "end": 2136
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2115,
              "end": 2120,
              "decorators": [],
              "name": "Depth",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2648,
      "end": 2757,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2653,
        "end": 2660,
        "decorators": [],
        "name": "SplitAC",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2666,
        "end": 2757,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2666,
          "end": 2730,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2698,
            "end": 2730,
            "params": [
              {
                "type": "TSConditionalType",
                "start": 2699,
                "end": 2724,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 2699,
                  "end": 2700,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2699,
                    "end": 2700,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 2709,
                  "end": 2715
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 2722,
                  "end": 2724,
                  "literal": {
                    "type": "Literal",
                    "start": 2722,
                    "end": 2724,
                    "raw": "''",
                    "value": ""
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 2718,
                  "end": 2719,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2718,
                    "end": 2719,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "start": 2726,
                "end": 2729,
                "literal": {
                  "type": "Literal",
                  "start": 2726,
                  "end": 2729,
                  "raw": "'.'",
                  "value": "."
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2666,
            "end": 2698,
            "decorators": [],
            "name": "SplitWithAllPossibleCombinations",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 2739,
          "end": 2747,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 2745,
            "end": 2747,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2745,
              "end": 2747,
              "decorators": [],
              "name": "Ko",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 2755,
          "end": 2757,
          "literal": {
            "type": "Literal",
            "start": 2755,
            "end": 2757,
            "raw": "''",
            "value": ""
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2750,
          "end": 2752,
          "typeName": {
            "type": "Identifier",
            "start": 2750,
            "end": 2752,
            "decorators": [],
            "name": "Ko",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2660,
        "end": 2663,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2661,
            "end": 2662,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2661,
              "end": 2662,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2758,
      "end": 2835,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2763,
        "end": 2770,
        "decorators": [],
        "name": "Expand_",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2801,
        "end": 2835,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2809,
          "end": 2835,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2810,
              "end": 2811,
              "typeName": {
                "type": "Identifier",
                "start": 2810,
                "end": 2811,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2813,
              "end": 2823,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2820,
                "end": 2823,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2821,
                    "end": 2822,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2821,
                      "end": 2822,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2813,
                "end": 2820,
                "decorators": [],
                "name": "SplitAC",
                "optional": false
              }
            },
            {
              "type": "TSLiteralType",
              "start": 2825,
              "end": 2827,
              "literal": {
                "type": "Literal",
                "start": 2825,
                "end": 2827,
                "raw": "''",
                "value": ""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2829,
              "end": 2830,
              "typeName": {
                "type": "Identifier",
                "start": 2829,
                "end": 2830,
                "decorators": [],
                "name": "N",
                "optional": false
              }
            },
            {
              "type": "TSTupleType",
              "start": 2832,
              "end": 2834,
              "elementTypes": []
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2801,
          "end": 2809,
          "decorators": [],
          "name": "Expand__",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2770,
        "end": 2798,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2771,
            "end": 2772,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2771,
              "end": 2772,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2774,
            "end": 2775,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2774,
              "end": 2775,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2777,
            "end": 2797,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2787,
              "end": 2793
            },
            "default": {
              "type": "TSLiteralType",
              "start": 2796,
              "end": 2797,
              "literal": {
                "type": "Literal",
                "start": 2796,
                "end": 2797,
                "raw": "4",
                "value": 4
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2777,
              "end": 2778,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2836,
      "end": 2927,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2841,
        "end": 2848,
        "decorators": [],
        "name": "AllKeys",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2876,
        "end": 2927,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2876,
          "end": 2899,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2893,
            "end": 2899,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2894,
                "end": 2895,
                "typeName": {
                  "type": "Identifier",
                  "start": 2894,
                  "end": 2895,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 2897,
                "end": 2898,
                "typeName": {
                  "type": "Identifier",
                  "start": 2897,
                  "end": 2898,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2876,
            "end": 2893,
            "decorators": [],
            "name": "KeysCanBeExpanded",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 2908,
          "end": 2915,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 2914,
            "end": 2915,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2914,
              "end": 2915,
              "decorators": [],
              "name": "R",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2922,
          "end": 2927
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2918,
          "end": 2919,
          "typeName": {
            "type": "Identifier",
            "start": 2918,
            "end": 2919,
            "decorators": [],
            "name": "R",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2848,
        "end": 2873,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2849,
            "end": 2850,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2849,
              "end": 2850,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2852,
            "end": 2872,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2862,
              "end": 2868
            },
            "default": {
              "type": "TSLiteralType",
              "start": 2871,
              "end": 2872,
              "literal": {
                "type": "Literal",
                "start": 2871,
                "end": 2872,
                "raw": "4",
                "value": 4
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2852,
              "end": 2853,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3118,
      "end": 3228,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3125,
        "end": 3228,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3130,
          "end": 3136,
          "decorators": [],
          "name": "Expand",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3212,
          "end": 3228,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3219,
            "end": 3228,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3220,
                "end": 3221,
                "typeName": {
                  "type": "Identifier",
                  "start": 3220,
                  "end": 3221,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3223,
                "end": 3224,
                "typeName": {
                  "type": "Identifier",
                  "start": 3223,
                  "end": 3224,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3226,
                "end": 3227,
                "typeName": {
                  "type": "Identifier",
                  "start": 3226,
                  "end": 3227,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3212,
            "end": 3219,
            "decorators": [],
            "name": "Expand_",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3136,
          "end": 3209,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3137,
              "end": 3153,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3147,
                "end": 3153
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3137,
                "end": 3138,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 3155,
              "end": 3186,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 3165,
                "end": 3178,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3172,
                  "end": 3178,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3173,
                      "end": 3174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3173,
                        "end": 3174,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3176,
                      "end": 3177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3176,
                        "end": 3177,
                        "decorators": [],
                        "name": "N",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3165,
                  "end": 3172,
                  "decorators": [],
                  "name": "AllKeys",
                  "optional": false
                }
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 3181,
                "end": 3186
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3155,
                "end": 3156,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 3188,
              "end": 3208,
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 3198,
                "end": 3204
              },
              "default": {
                "type": "TSLiteralType",
                "start": 3207,
                "end": 3208,
                "literal": {
                  "type": "Literal",
                  "start": 3207,
                  "end": 3208,
                  "raw": "4",
                  "value": 4
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3188,
                "end": 3189,
                "decorators": [],
                "name": "N",
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
      "type": "VariableDeclaration",
      "start": 3349,
      "end": 3366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3353,
          "end": 3366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3353,
            "end": 3366,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3355,
              "end": 3366,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3357,
                "end": 3366,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3363,
                  "end": 3366,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3364,
                      "end": 3365,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3364,
                        "end": 3365,
                        "decorators": [],
                        "name": "X",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3357,
                  "end": 3363,
                  "decorators": [],
                  "name": "Expand",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3367,
      "end": 3407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3371,
          "end": 3407,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3371,
            "end": 3407,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3373,
              "end": 3407,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3375,
                "end": 3407,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3381,
                  "end": 3407,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3382,
                      "end": 3383,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3382,
                        "end": 3383,
                        "decorators": [],
                        "name": "X",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 3385,
                      "end": 3406,
                      "literal": {
                        "type": "Literal",
                        "start": 3385,
                        "end": 3406,
                        "raw": "'user.role.user.role'",
                        "value": "user.role.user.role"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3375,
                  "end": 3381,
                  "decorators": [],
                  "name": "Expand",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3914,
      "end": 3991,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3919,
        "end": 3934,
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3979,
        "end": 3991,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3985,
          "end": 3991,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3986,
              "end": 3987,
              "typeName": {
                "type": "Identifier",
                "start": 3986,
                "end": 3987,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3989,
              "end": 3990,
              "typeName": {
                "type": "Identifier",
                "start": 3989,
                "end": 3990,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3979,
          "end": 3985,
          "decorators": [],
          "name": "Expand",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3934,
        "end": 3976,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3935,
            "end": 3949,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3945,
              "end": 3949,
              "typeName": {
                "type": "Identifier",
                "start": 3945,
                "end": 3949,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3935,
              "end": 3936,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3951,
            "end": 3974,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3961,
              "end": 3974,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3968,
                "end": 3974,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3969,
                    "end": 3970,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3969,
                      "end": 3970,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3972,
                    "end": 3973,
                    "literal": {
                      "type": "Literal",
                      "start": 3972,
                      "end": 3973,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3961,
                "end": 3968,
                "decorators": [],
                "name": "AllKeys",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3951,
              "end": 3952,
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
      "type": "TSTypeAliasDeclaration",
      "start": 3993,
      "end": 4039,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3998,
        "end": 4014,
        "decorators": [],
        "name": "UseQueryOptions2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4026,
        "end": 4039,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4033,
          "end": 4039,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 4034,
              "end": 4035,
              "typeName": {
                "type": "Identifier",
                "start": 4034,
                "end": 4035,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4037,
              "end": 4038,
              "typeName": {
                "type": "Identifier",
                "start": 4037,
                "end": 4038,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4026,
          "end": 4033,
          "decorators": [],
          "name": "Expand_",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4014,
        "end": 4023,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4015,
            "end": 4016,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4015,
              "end": 4016,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4019,
            "end": 4020,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4019,
              "end": 4020,
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
      "type": "TSTypeAliasDeclaration",
      "start": 4040,
      "end": 4114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4045,
        "end": 4061,
        "decorators": [],
        "name": "UseQueryOptions3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4073,
        "end": 4114,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4073,
          "end": 4086,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4080,
            "end": 4086,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4081,
                "end": 4082,
                "typeName": {
                  "type": "Identifier",
                  "start": 4081,
                  "end": 4082,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 4084,
                "end": 4085,
                "typeName": {
                  "type": "Identifier",
                  "start": 4084,
                  "end": 4085,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4073,
            "end": 4080,
            "decorators": [],
            "name": "Expand_",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 4095,
          "end": 4102,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 4101,
            "end": 4102,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4101,
              "end": 4102,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4109,
          "end": 4114
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4105,
          "end": 4106,
          "typeName": {
            "type": "Identifier",
            "start": 4105,
            "end": 4106,
            "decorators": [],
            "name": "O",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4061,
        "end": 4070,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4062,
            "end": 4063,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4062,
              "end": 4063,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4066,
            "end": 4067,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4066,
              "end": 4067,
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
      "type": "TSTypeAliasDeclaration",
      "start": 4116,
      "end": 4182,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4121,
        "end": 4133,
        "decorators": [],
        "name": "ExpandResult",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4141,
        "end": 4182,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4141,
          "end": 4154,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4148,
            "end": 4154,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4149,
                "end": 4150,
                "typeName": {
                  "type": "Identifier",
                  "start": 4149,
                  "end": 4150,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 4152,
                "end": 4153,
                "typeName": {
                  "type": "Identifier",
                  "start": 4152,
                  "end": 4153,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4141,
            "end": 4148,
            "decorators": [],
            "name": "Expand_",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 4163,
          "end": 4170,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 4169,
            "end": 4170,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4169,
              "end": 4170,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4177,
          "end": 4182
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4173,
          "end": 4174,
          "typeName": {
            "type": "Identifier",
            "start": 4173,
            "end": 4174,
            "decorators": [],
            "name": "O",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4133,
        "end": 4138,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4134,
            "end": 4135,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4134,
              "end": 4135,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4136,
            "end": 4137,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4136,
              "end": 4137,
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
      "type": "TSTypeAliasDeclaration",
      "start": 4183,
      "end": 4233,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4188,
        "end": 4204,
        "decorators": [],
        "name": "UseQueryOptions4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4216,
        "end": 4233,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4228,
          "end": 4233,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 4229,
              "end": 4230,
              "typeName": {
                "type": "Identifier",
                "start": 4229,
                "end": 4230,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4231,
              "end": 4232,
              "typeName": {
                "type": "Identifier",
                "start": 4231,
                "end": 4232,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4216,
          "end": 4228,
          "decorators": [],
          "name": "ExpandResult",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4204,
        "end": 4213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4205,
            "end": 4206,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4205,
              "end": 4206,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4209,
            "end": 4210,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4209,
              "end": 4210,
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
      "type": "VariableDeclaration",
      "start": 4397,
      "end": 4440,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4401,
          "end": 4440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4401,
            "end": 4440,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4402,
              "end": 4440,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4404,
                "end": 4440,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4419,
                  "end": 4440,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4420,
                      "end": 4421,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4420,
                        "end": 4421,
                        "decorators": [],
                        "name": "X",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 4423,
                      "end": 4439,
                      "literal": {
                        "type": "Literal",
                        "start": 4423,
                        "end": 4439,
                        "raw": "'role.user.role'",
                        "value": "role.user.role"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4404,
                  "end": 4419,
                  "decorators": [],
                  "name": "UseQueryOptions",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
