__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1394,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 17,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 17,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 11,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 11,
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 57,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 33,
            "end": 55,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 34,
                "end": 43,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 37,
                    "end": 43
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 54,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 46,
                "end": 54,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 46,
                  "end": 52
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
        "start": 28,
        "end": 30,
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
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
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 106,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 106,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "T",
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
        "start": 89,
        "end": 91,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 123,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 123,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 124,
      "end": 156,
      "body": {
        "type": "TSModuleBlock",
        "start": 133,
        "end": 156,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 135,
            "end": 154,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 142,
              "end": 154,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 146,
                  "end": 153,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 149,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 152,
                    "end": 153,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
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
        "start": 163,
        "end": 164,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 181,
      "end": 213,
      "body": {
        "type": "TSModuleBlock",
        "start": 190,
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 211,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 199,
              "end": 211,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 203,
                  "end": 210,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 206,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 209,
                    "end": 210,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 294,
      "end": 855,
      "body": {
        "type": "TSInterfaceBody",
        "start": 310,
        "end": 855,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 316,
            "end": 345,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 317,
                "end": 326,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 318,
                  "end": 326,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 320,
                    "end": 326
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 344,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 329,
                "end": 344,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 329,
                    "end": 335
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 338,
                    "end": 344
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 350,
            "end": 359,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 353,
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
              "start": 353,
              "end": 358,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 355,
                "end": 358
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 370,
            "end": 383,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 370,
              "end": 374,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 382,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 376,
                "end": 382
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 394,
            "end": 407,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 398,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 406,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 400,
                "end": 406
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 418,
            "end": 432,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 418,
              "end": 422,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 431,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 424,
                "end": 431
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 447,
            "end": 455,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 447,
              "end": 451,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 454,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 454,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 498,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 491,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 497,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 497,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 497,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 512,
            "end": 525,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 516,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 518,
                "end": 524,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 524,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 539,
            "end": 561,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 539,
              "end": 543,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 543,
              "end": 560,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 545,
                "end": 560,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 547,
                    "end": 558,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 550,
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
                      "start": 550,
                      "end": 558,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 552,
                        "end": 558
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 575,
            "end": 584,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 579,
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 583,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 581,
                "end": 583,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 583,
                  "decorators": [],
                  "name": "I8",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 598,
            "end": 607,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 598,
              "end": 603,
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 603,
              "end": 606,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 605,
                "end": 606,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 606,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 621,
            "end": 639,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 626,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 626,
              "end": 638,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 628,
                "end": 638,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 630,
                  "end": 638,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 631,
                      "end": 637
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 630,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 653,
            "end": 674,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 658,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 673,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 660,
                "end": 673,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 661,
                    "end": 662,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 664,
                  "end": 673,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 667,
                    "end": 673
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 687,
            "end": 709,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 687,
              "end": 692,
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 692,
              "end": 708,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 694,
                "end": 708,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 698,
                    "end": 702,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 699,
                      "end": 702,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 701,
                        "end": 702,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 701,
                          "end": 702,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 704,
                  "end": 708,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 707,
                    "end": 708,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 708,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 694,
                  "end": 697,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 695,
                      "end": 696,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 695,
                        "end": 696,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 723,
            "end": 739,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 723,
              "end": 728,
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 728,
              "end": 738,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 730,
                "end": 738,
                "exprName": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 753,
            "end": 769,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 753,
              "end": 758,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 758,
              "end": 768,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 760,
                "end": 768,
                "exprName": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 783,
            "end": 792,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 783,
              "end": 788,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 788,
              "end": 791,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 790,
                "end": 791,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 791,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 806,
            "end": 820,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 806,
              "end": 811,
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 811,
              "end": 819,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 813,
                "end": 819,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 813,
                  "end": 819,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 834,
            "end": 844,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 834,
              "end": 839,
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 839,
              "end": 843,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 841,
                "end": 843,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 306,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 306,
        "end": 309,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 307,
            "end": 308,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 856,
      "end": 1394,
      "body": {
        "type": "TSInterfaceBody",
        "start": 872,
        "end": 1394,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 878,
            "end": 902,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 879,
                "end": 888,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 880,
                  "end": 888,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 882,
                    "end": 888
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 889,
              "end": 901,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 891,
                "end": 901,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 891,
                    "end": 892,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 891,
                      "end": 892,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 895,
                    "end": 901
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 907,
            "end": 916,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 907,
              "end": 910,
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
              "start": 910,
              "end": 915,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 912,
                "end": 915
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 927,
            "end": 940,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 927,
              "end": 931,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 931,
              "end": 939,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 933,
                "end": 939
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 954,
            "end": 967,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 954,
              "end": 958,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 958,
              "end": 966,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 960,
                "end": 966
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 978,
            "end": 992,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 978,
              "end": 982,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 982,
              "end": 991,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 984,
                "end": 991
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1007,
            "end": 1015,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1007,
              "end": 1011,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1011,
              "end": 1014,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1013,
                "end": 1014,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1014,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1026,
            "end": 1037,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1026,
              "end": 1030,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1030,
              "end": 1036,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1032,
                "end": 1036,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1036,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1051,
            "end": 1064,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1051,
              "end": 1055,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1055,
              "end": 1063,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1057,
                "end": 1063,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1057,
                  "end": 1063,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1078,
            "end": 1100,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1078,
              "end": 1082,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1082,
              "end": 1099,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1084,
                "end": 1099,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1086,
                    "end": 1097,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1086,
                      "end": 1089,
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
                      "start": 1089,
                      "end": 1097,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1091,
                        "end": 1097
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1114,
            "end": 1123,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1114,
              "end": 1118,
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1118,
              "end": 1122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1120,
                "end": 1122,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1120,
                  "end": 1122,
                  "decorators": [],
                  "name": "I8",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1137,
            "end": 1146,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1137,
              "end": 1142,
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1142,
              "end": 1145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1144,
                "end": 1145,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1144,
                  "end": 1145,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1160,
            "end": 1178,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1160,
              "end": 1165,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1165,
              "end": 1177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1167,
                "end": 1177,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1169,
                  "end": 1177,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1170,
                      "end": 1176
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1169,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1192,
            "end": 1213,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1192,
              "end": 1197,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1197,
              "end": 1212,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1199,
                "end": 1212,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1200,
                    "end": 1201,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1203,
                  "end": 1212,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1206,
                    "end": 1212
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1226,
            "end": 1248,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1226,
              "end": 1231,
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1231,
              "end": 1247,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1233,
                "end": 1247,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1241,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1238,
                      "end": 1241,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1240,
                        "end": 1241,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1240,
                          "end": 1241,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1243,
                  "end": 1247,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1246,
                    "end": 1247,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1246,
                      "end": 1247,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1233,
                  "end": 1236,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1234,
                      "end": 1235,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1234,
                        "end": 1235,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1262,
            "end": 1278,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1262,
              "end": 1267,
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1267,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1269,
                "end": 1277,
                "exprName": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1277,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1292,
            "end": 1308,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1292,
              "end": 1297,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1297,
              "end": 1307,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1299,
                "end": 1307,
                "exprName": {
                  "type": "Identifier",
                  "start": 1306,
                  "end": 1307,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1322,
            "end": 1331,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1327,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1327,
              "end": 1330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1329,
                "end": 1330,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1330,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1345,
            "end": 1359,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1345,
              "end": 1350,
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1350,
              "end": 1358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1352,
                "end": 1358,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1358,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1373,
            "end": 1383,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1373,
              "end": 1378,
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1378,
              "end": 1382,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1380,
                "end": 1382,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 868,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 868,
        "end": 871,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 869,
            "end": 870,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 869,
              "end": 870,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
