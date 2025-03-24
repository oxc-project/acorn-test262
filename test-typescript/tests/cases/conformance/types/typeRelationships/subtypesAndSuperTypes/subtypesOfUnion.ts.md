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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 9,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "e1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 15,
            "name": "e2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 17,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 11,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 11,
              "name": "e1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "name": "e2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 30,
        "name": "I8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 57,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 33,
            "end": 55,
            "parameters": [
              {
                "type": "Identifier",
                "start": 34,
                "end": 43,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 37,
                    "end": 43
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 80,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
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
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
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
      "start": 83,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 91,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 106,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
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
              "start": 100,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "name": "T",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 123,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 124,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 133,
        "end": 156,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 135,
            "end": 154,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 142,
              "end": 154,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 146,
                  "end": 153,
                  "id": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 149,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 152,
                    "end": 153,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 178,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "name": "baz",
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
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
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
      "start": 181,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 190,
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 211,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 199,
              "end": 211,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 203,
                  "end": 210,
                  "id": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 206,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 209,
                    "end": 210,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 294,
      "end": 855,
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 306,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 306,
        "end": 309,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 307,
            "end": 308,
            "name": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 310,
        "end": 855,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 316,
            "end": 345,
            "parameters": [
              {
                "type": "Identifier",
                "start": 317,
                "end": 326,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 318,
                  "end": 326,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 320,
                    "end": 326
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 350,
            "end": 359,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 353,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 358,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 355,
                "end": 358
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 370,
            "end": 383,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 370,
              "end": 374,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 382,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 376,
                "end": 382
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 394,
            "end": 407,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 398,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 406,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 400,
                "end": 406
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 418,
            "end": 432,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 418,
              "end": 422,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 431,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 424,
                "end": 431
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 447,
            "end": 455,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 447,
              "end": 451,
              "name": "foo5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 454,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 454,
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 498,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 491,
              "name": "foo6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 497,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 497,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 497,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 512,
            "end": 525,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 516,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 518,
                "end": 524,
                "typeName": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 524,
                  "name": "RegExp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 539,
            "end": 561,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 539,
              "end": 543,
              "name": "foo8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 550,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 550,
                      "end": 558,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 552,
                        "end": 558
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 575,
            "end": 584,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 579,
              "name": "foo9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 583,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 581,
                "end": 583,
                "typeName": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 583,
                  "name": "I8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 598,
            "end": 607,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 598,
              "end": 603,
              "name": "foo10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 603,
              "end": 606,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 605,
                "end": 606,
                "typeName": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 606,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 621,
            "end": 639,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 626,
              "name": "foo11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 626,
              "end": 638,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 628,
                "end": 638,
                "typeName": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 630,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 653,
            "end": 674,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 658,
              "name": "foo12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 673,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 660,
                "end": 673,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 661,
                    "end": 662,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 687,
            "end": 709,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 687,
              "end": 692,
              "name": "foo13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 692,
              "end": 708,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 694,
                "end": 708,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 694,
                  "end": 697,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 695,
                      "end": 696,
                      "name": {
                        "type": "Identifier",
                        "start": 695,
                        "end": 696,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 698,
                    "end": 702,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 699,
                      "end": 702,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 701,
                        "end": 702,
                        "typeName": {
                          "type": "Identifier",
                          "start": 701,
                          "end": 702,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 708,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 723,
            "end": 739,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 723,
              "end": 728,
              "name": "foo14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 753,
            "end": 769,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 753,
              "end": 758,
              "name": "foo15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 783,
            "end": 792,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 783,
              "end": 788,
              "name": "foo16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 788,
              "end": 791,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 790,
                "end": 791,
                "typeName": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 791,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 806,
            "end": 820,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 806,
              "end": 811,
              "name": "foo17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 811,
              "end": 819,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 813,
                "end": 819,
                "typeName": {
                  "type": "Identifier",
                  "start": 813,
                  "end": 819,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 834,
            "end": 844,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 834,
              "end": 839,
              "name": "foo18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 856,
      "end": 1394,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 868,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 868,
        "end": 871,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 869,
            "end": 870,
            "name": {
              "type": "Identifier",
              "start": 869,
              "end": 870,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 872,
        "end": 1394,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 878,
            "end": 902,
            "parameters": [
              {
                "type": "Identifier",
                "start": 879,
                "end": 888,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 880,
                  "end": 888,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 882,
                    "end": 888
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 891,
                      "end": 892,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 895,
                    "end": 901
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 907,
            "end": 916,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 907,
              "end": 910,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 910,
              "end": 915,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 912,
                "end": 915
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 927,
            "end": 940,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 927,
              "end": 931,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 931,
              "end": 939,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 933,
                "end": 939
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 954,
            "end": 967,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 954,
              "end": 958,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 958,
              "end": 966,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 960,
                "end": 966
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 978,
            "end": 992,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 978,
              "end": 982,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 982,
              "end": 991,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 984,
                "end": 991
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1007,
            "end": 1015,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1007,
              "end": 1011,
              "name": "foo5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1011,
              "end": 1014,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1013,
                "end": 1014,
                "typeName": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1014,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1026,
            "end": 1037,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1026,
              "end": 1030,
              "name": "foo6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1030,
              "end": 1036,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1032,
                "end": 1036,
                "typeName": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1036,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1051,
            "end": 1064,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1051,
              "end": 1055,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1055,
              "end": 1063,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1057,
                "end": 1063,
                "typeName": {
                  "type": "Identifier",
                  "start": 1057,
                  "end": 1063,
                  "name": "RegExp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1078,
            "end": 1100,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1078,
              "end": 1082,
              "name": "foo8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1086,
                      "end": 1089,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1089,
                      "end": 1097,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1091,
                        "end": 1097
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1114,
            "end": 1123,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1114,
              "end": 1118,
              "name": "foo9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1118,
              "end": 1122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1120,
                "end": 1122,
                "typeName": {
                  "type": "Identifier",
                  "start": 1120,
                  "end": 1122,
                  "name": "I8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1137,
            "end": 1146,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1137,
              "end": 1142,
              "name": "foo10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1142,
              "end": 1145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1144,
                "end": 1145,
                "typeName": {
                  "type": "Identifier",
                  "start": 1144,
                  "end": 1145,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1160,
            "end": 1178,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1160,
              "end": 1165,
              "name": "foo11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1165,
              "end": 1177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1167,
                "end": 1177,
                "typeName": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1169,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1192,
            "end": 1213,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1192,
              "end": 1197,
              "name": "foo12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1197,
              "end": 1212,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1199,
                "end": 1212,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1200,
                    "end": 1201,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1226,
            "end": 1248,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1226,
              "end": 1231,
              "name": "foo13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1231,
              "end": 1247,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1233,
                "end": 1247,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1233,
                  "end": 1236,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1234,
                      "end": 1235,
                      "name": {
                        "type": "Identifier",
                        "start": 1234,
                        "end": 1235,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1241,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1238,
                      "end": 1241,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1240,
                        "end": 1241,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1240,
                          "end": 1241,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1246,
                      "end": 1247,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1262,
            "end": 1278,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1262,
              "end": 1267,
              "name": "foo14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1292,
            "end": 1308,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1292,
              "end": 1297,
              "name": "foo15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1322,
            "end": 1331,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1327,
              "name": "foo16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1327,
              "end": 1330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1329,
                "end": 1330,
                "typeName": {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1330,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1345,
            "end": 1359,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1345,
              "end": 1350,
              "name": "foo17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1350,
              "end": 1358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1352,
                "end": 1358,
                "typeName": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1358,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1373,
            "end": 1383,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1373,
              "end": 1378,
              "name": "foo18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
